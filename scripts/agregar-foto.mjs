import { readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const [origen, nombre] = process.argv.slice(2);
if (!origen || !nombre) {
  console.error("Uso: node scripts/agregar-foto.mjs <foto original> <nombre-sin-extension>");
  process.exit(1);
}

const manifestPath = path.join(raiz, "src/data/img-manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const destino = (sufijo) => path.join(raiz, "public/img", `${nombre}${sufijo}.webp`);
const kb = (archivo) => Math.round((statSync(archivo).size / 1024) * 10) / 10;

const base = sharp(origen).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true });
const { width, height } = await base.clone().webp({ quality: 80 }).toFile(destino(""));
const variants = [];
for (const ancho of [800, 1200]) {
  if (width <= ancho) continue;
  await sharp(origen).rotate().resize({ width: ancho }).webp({ quality: 78 }).toFile(destino(`-w${ancho}`));
  variants.push({ src: `/img/${nombre}-w${ancho}.webp`, w: ancho, kb: kb(destino(`-w${ancho}`)) });
}
manifest[`/img/${nombre}.webp`] = { w: width, h: height, variants };
const ordenado = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(manifestPath, JSON.stringify(ordenado, null, 1) + "\n");
console.log(`/img/${nombre}.webp ${width}x${height} (${kb(destino(""))} KB) ${variants.map((v) => v.w).join(", ")}`);
