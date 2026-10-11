import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const DIST = "dist";

const [, , destinoArg, ...resto] = process.argv;
if (!destinoArg) {
  console.error("Falta el destino.\n  node scripts/empaquetar-maqueta.mjs <carpeta-destino> [--etiqueta \"...\"]");
  process.exit(1);
}
const destino = path.resolve(destinoArg);
const etiquetaIdx = resto.indexOf("--etiqueta");
const etiqueta = etiquetaIdx !== -1 ? resto[etiquetaIdx + 1] : "Maqueta";

if (!existsSync(DIST)) {
  console.error(`No existe ${DIST}/. Corre primero: npx astro build`);
  process.exit(1);
}

async function listarArchivos(dir) {
  const salida = [];
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const completo = path.join(dir, entrada.name);
    if (entrada.isDirectory()) salida.push(...(await listarArchivos(completo)));
    else salida.push(completo);
  }
  return salida;
}

function aRelativa(ruta, prefijo, paginas) {
  const [limpia, sufijo = ""] = ruta.split(/(?=[#?])/);
  const sinBarra = limpia.replace(/\/+$/, "");

  if (sinBarra === "") return `${prefijo}index.html${sufijo}`;

  const destinoRuta = sinBarra.slice(1);

  if (paginas.has(sinBarra)) return `${prefijo}${destinoRuta}/index.html${sufijo}`;

  return `${prefijo}${destinoRuta}${sufijo}`;
}

const archivos = await listarArchivos(DIST);

const paginas = new Set(
  archivos
    .filter((f) => path.basename(f) === "index.html")
    .map((f) => "/" + path.relative(DIST, path.dirname(f)).split(path.sep).join("/"))
    .map((p) => (p === "/." ? "" : p))
    .filter((p) => p !== ""),
);

let htmlTocados = 0;
let rutasReescritas = 0;

for (const archivo of archivos) {
  const ext = path.extname(archivo);
  if (ext !== ".html" && ext !== ".css") continue;

  const rel = path.relative(DIST, archivo);
  const profundidad = rel.split(path.sep).length - 1;
  const prefijo = profundidad === 0 ? "./" : "../".repeat(profundidad);

  let contenido = await readFile(archivo, "utf8");
  const antes = contenido;

  if (ext === ".html") {
    const protegidas = [];
    contenido = contenido.replace(
      /<(?:link[^>]*rel="canonical"|meta[^>]*(?:property="og:url"|name="twitter:[^"]*"|property="og:image"))[^>]*>/g,
      (m) => {
        protegidas.push(m);
        return `\u0000PROTEGIDA${protegidas.length - 1}\u0000`;
      },
    );

    const scripts = [];
    contenido = contenido.replace(/<script type="application\/ld\+json"[\s\S]*?<\/script>/g, (m) => {
      scripts.push(m);
      return `\u0000LD${scripts.length - 1}\u0000`;
    });

    contenido = contenido.replace(/(href|src)="(\/[^"]*)"/g, (_m, attr, ruta) => {
      rutasReescritas += 1;
      return `${attr}="${aRelativa(ruta, prefijo, paginas)}"`;
    });

    contenido = contenido
      .replace(/\u0000LD(\d+)\u0000/g, (_m, i) => scripts[Number(i)])
      .replace(/\u0000PROTEGIDA(\d+)\u0000/g, (_m, i) => protegidas[Number(i)]);
  } else {
    contenido = contenido.replace(/url\((["']?)(\/[^"')]+)\1\)/g, (_m, q, ruta) => {
      rutasReescritas += 1;
      return `url(${q}${aRelativa(ruta, prefijo, paginas)}${q})`;
    });
  }

  if (contenido !== antes) {
    await writeFile(archivo, contenido, "utf8");
    htmlTocados += 1;
  }
}

await rm(destino, { recursive: true, force: true });
await mkdir(destino, { recursive: true });
await cp(DIST, destino, { recursive: true });

for (const sobra of ["sitemap-index.xml", "sitemap-0.xml", "robots.txt"]) {
  await rm(path.join(destino, sobra), { force: true });
}

const total = (await listarArchivos(destino)).length;
const bytes = (
  await Promise.all((await listarArchivos(destino)).map(async (f) => (await stat(f)).size))
).reduce((a, b) => a + b, 0);

console.log(`${etiqueta}`);
console.log(`  destino:   ${destino}`);
console.log(`  páginas:   ${paginas.size + 1}`);
console.log(`  archivos:  ${total} (${(bytes / 1024 / 1024).toFixed(2)} MB)`);
console.log(`  reescrito: ${rutasReescritas} rutas en ${htmlTocados} archivos`);
