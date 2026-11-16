import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(raiz, "dist");
const salida = path.join(raiz, "propuestas", "selector-paletas.html");

if (!existsSync(path.join(dist, "index.html"))) {
  console.error("Falta dist/index.html. Corre primero: npm run build");
  process.exit(1);
}

const tipos = { ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".woff2": "font/woff2" };

const comoDato = (ruta) => {
  const limpia = ruta.split("?")[0];
  let archivo = path.join(dist, limpia);
  const reducida = archivo.replace(/\.webp$/, "-w800.webp");
  if (/\/img\//.test(limpia) && !/-w\d+\.webp$/.test(limpia) && existsSync(reducida)) archivo = reducida;
  if (!existsSync(archivo)) return ruta;
  return `data:${tipos[path.extname(archivo)] ?? "application/octet-stream"};base64,${readFileSync(archivo).toString("base64")}`;
};

const paletas = [
  {
    id: "actual",
    nombre: "Acero en sombra",
    nota: "La que tiene el sitio hoy: café oscuro cálido y naranja.",
    oscuro: { page: "#16120f", bg: "#2a231d", surface: "#332b24", border: "#5e5245", "steel-medium": "#8a7f72", footer: "#0f0c0a", text: "#f0ebe3", "text-muted": "#aa9f92", accent: "#ff6a1a", "accent-dark": "#ff8a45", "on-accent": "#16120f", error: "#ff8a7a", warn: "#e2b04a", ok: "#7bd89a" },
    claro: { page: "#ebe5db", bg: "#ffffff", surface: "#f5f1ea", border: "#b5aa9a", "steel-dark": "#4a4137", text: "#16120f", "text-muted": "#554b40", accent: "#a33a04", "accent-dark": "#7f2c02", "on-accent": "#ffffff", error: "#b3261e", warn: "#8a5a00", ok: "#1f6b34" },
  },
  {
    id: "naranja-unico",
    nombre: "Acero en sombra, un solo naranja",
    nota: "Igual a la actual, pero el botón sigue siendo naranja en las secciones claras en vez de ladrillo.",
    oscuro: { page: "#16120f", bg: "#2a231d", surface: "#332b24", border: "#5e5245", "steel-medium": "#8a7f72", footer: "#0f0c0a", text: "#f0ebe3", "text-muted": "#aa9f92", accent: "#ff6a1a", "accent-dark": "#ff8a45", "on-accent": "#16120f", error: "#ff8a7a", warn: "#e2b04a", ok: "#7bd89a" },
    claro: { page: "#ebe5db", bg: "#ffffff", surface: "#f5f1ea", border: "#b5aa9a", "steel-dark": "#4a4137", text: "#16120f", "text-muted": "#554b40", accent: "#de5300", "accent-dark": "#e96a1e", "on-accent": "#16120f", error: "#b3261e", warn: "#8a5a00", ok: "#1f6b34" },
  },
  {
    id: "acero-frio",
    nombre: "Acero frío y chispa",
    nota: "Grises azulados de acero con el mismo naranja: es donde el botón más se separa de la base.",
    oscuro: { page: "#0f1215", bg: "#20262c", surface: "#283037", border: "#56616b", "steel-medium": "#7d8892", footer: "#0a0c0e", text: "#e9edf0", "text-muted": "#9aa5ad", accent: "#ff6a1a", "accent-dark": "#ff8a45", "on-accent": "#0f1215", error: "#ff8a7a", warn: "#e2b04a", ok: "#7bd89a" },
    claro: { page: "#e4e8eb", bg: "#ffffff", surface: "#f1f4f6", border: "#a3adb5", "steel-dark": "#3d474e", text: "#0f1215", "text-muted": "#4a555c", accent: "#a33a04", "accent-dark": "#7f2c02", "on-accent": "#ffffff", error: "#b3261e", warn: "#8a5a00", ok: "#1f6b34" },
  },
  {
    id: "calor-tig",
    nombre: "Calor TIG",
    nota: "Café oscuro con dorado de soldadura. Elegante de noche; el dorado se apaga en las secciones claras.",
    oscuro: { page: "#14120f", bg: "#28241e", surface: "#312c25", border: "#5c5448", "steel-medium": "#8c8273", footer: "#0d0b09", text: "#f1ece4", "text-muted": "#b3a898", accent: "#e2b04a", "accent-dark": "#edc574", "on-accent": "#14120f", error: "#ff7a6a", warn: "#f1ece4", ok: "#7bd89a" },
    claro: { page: "#efe9df", bg: "#ffffff", surface: "#f7f3ec", border: "#b8ad9c", "steel-dark": "#4d443a", text: "#14120f", "text-muted": "#5c5246", accent: "#8a5a00", "accent-dark": "#6b4500", "on-accent": "#ffffff", error: "#b3261e", warn: "#14120f", ok: "#1f6b34" },
  },
  {
    id: "cobalto",
    nombre: "Cobalto de soldadura",
    nota: "Azul noche con azul de arco. Es la que mejor separa botón, error y WhatsApp, pero pierde la chispa del oficio.",
    oscuro: { page: "#12141c", bg: "#242836", surface: "#2d3243", border: "#5a6078", "steel-medium": "#8589a0", footer: "#0c0d13", text: "#f3f0ea", "text-muted": "#b9b7b2", accent: "#aab2ff", "accent-dark": "#c6cbff", "on-accent": "#12141c", error: "#ff8a7a", warn: "#e2b04a", ok: "#7bd89a" },
    claro: { page: "#f3f0ea", bg: "#ffffff", surface: "#ebe7df", border: "#b6b0a4", "steel-dark": "#454857", text: "#12141c", "text-muted": "#4d5160", accent: "#3946b8", "accent-dark": "#2b3594", "on-accent": "#ffffff", error: "#b3261e", warn: "#8a5a00", ok: "#1f6b34" },
  },
];

const variables = (t) =>
  Object.entries(t)
    .map(([k, v]) => `--color-${k}:${v}`)
    .join(";");

const fondo = (o) => ({ ...o, steel: o.page, graphite: o.text, "steel-dark": o["steel-dark"] ?? o.border, "steel-medium": o["steel-medium"] ?? o["text-muted"], footer: o.footer ?? o.surface });
const seccion = ({ page, footer, "steel-medium": _medio, ...resto }) => resto;

const cssPaletas = paletas
  .flatMap((p) => {
    const base = `html[data-paleta="${p.id}"]`;
    return [
      `${base}[data-luz="oscuro"]{color-scheme:dark;${variables({ ...fondo(p.oscuro), "bg-alt": p.claro.page })}}`,
      `${base}[data-luz="oscuro"] :is(.section--alt,.theme-light){${variables(seccion(p.claro))}}`,
      `${base}[data-luz="claro"]{color-scheme:light;${variables({ ...fondo(p.claro), "bg-alt": p.oscuro.page })}}`,
      `${base}[data-luz="claro"] :is(.section--alt,.theme-light){${variables(seccion({ ...p.oscuro, "steel-dark": p.oscuro.border }))}}`,
      `${base}[data-luz="claro"] :is(.header,.footer){${variables(fondo(p.oscuro))}}`,
    ];
  })
  .join("\n");

let html = readFileSync(path.join(dist, "index.html"), "utf8");

html = html
  .replace(/<link rel="stylesheet" href="([^"]+)">/g, (_, href) => `<style>${readFileSync(path.join(dist, href), "utf8")}</style>`)
  .replace(/<link rel="(?:preload|canonical|icon|apple-touch-icon|sitemap|alternate)"[^>]*>/g, "")
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
  .replace(/\ssrcset="[^"]*"/g, "")
  .replace(/\ssizes="[^"]*"/g, "")
  .replace(/src="(\/[^"]+)"/g, (_, src) => `src="${comoDato(src)}"`)
  .replace(/url\((["']?)(\/[^)"']+)\1\)/g, (_, _q, ruta) => `url(${comoDato(ruta)})`)
  .replace(/url\(&quot;(\/[^)&]+)&quot;\)/g, (_, ruta) => `url(${comoDato(ruta)})`)
  .replace(/<meta name="robots"[^>]*>/g, "")
  .replace("<head>", '<head><meta name="robots" content="noindex">')
  .replace(/<title>[\s\S]*?<\/title>/, "<title>JZ INOX: elige la paleta del sitio</title>")
  .replace(/<html([^>]*)>/, '<html$1 data-paleta="actual" data-luz="oscuro">');

const panel = `
<style>
${cssPaletas}
[data-reveal],[data-reveal]>*{opacity:1!important;transform:none!important;clip-path:none!important}
.fab{display:none!important}
.sp{position:fixed;left:0;right:0;bottom:0;z-index:1000;display:grid;gap:10px;padding:12px 16px calc(12px + env(safe-area-inset-bottom));background:#101114;color:#f4f4f2;border-top:1px solid #4b4d55;font:500 15px/1.35 system-ui,-apple-system,"Segoe UI",sans-serif}
.sp *{box-sizing:border-box}
.sp__fila{display:flex;gap:8px;align-items:center;overflow-x:auto;scrollbar-width:none}
.sp__rotulo{flex:none;min-width:58px;color:#b4b6be;font-size:13px}
.sp button,.sp a{flex:none;min-height:44px;padding:0 14px;border:1px solid #4b4d55;background:transparent;color:inherit;font:inherit;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;white-space:nowrap}
.sp button[aria-pressed="true"]{background:#f4f4f2;color:#101114;border-color:#f4f4f2}
.sp__muestra{display:inline-grid;grid-template-columns:repeat(3,10px);height:18px;border:1px solid #777}
.sp__muestra i{display:block}
.sp__nota{margin:0;color:#b4b6be;font-size:13px}
.sp__enviar{background:#f4f4f2!important;color:#101114!important;border-color:#f4f4f2!important;font-weight:700!important}
.sp :focus-visible{outline:2px solid #f4f4f2;outline-offset:2px}
body{padding-bottom:190px}
@media (min-width:900px){.sp{grid-template-columns:1fr auto;align-items:center}.sp__nota{grid-column:1}.sp__acciones{grid-column:2;grid-row:1 / span 3;display:grid;gap:8px}body{padding-bottom:150px}}
</style>
<aside class="sp" aria-label="Elegir la paleta del sitio">
  <div class="sp__fila" role="group" aria-label="Paleta">
    <span class="sp__rotulo">Paleta</span>
    ${paletas
      .map(
        (p, i) =>
          `<button type="button" data-paleta="${p.id}" aria-pressed="${i === 0}"><span class="sp__muestra" aria-hidden="true"><i style="background:${p.oscuro.page}"></i><i style="background:${p.claro.page}"></i><i style="background:${p.oscuro.accent}"></i></span>${p.nombre}</button>`,
      )
      .join("")}
  </div>
  <div class="sp__fila" role="group" aria-label="Modo">
    <span class="sp__rotulo">Modo</span>
    <button type="button" data-luz="oscuro" aria-pressed="true">Oscuro (actual)</button>
    <button type="button" data-luz="claro" aria-pressed="false">Claro</button>
  </div>
  <p class="sp__nota" id="sp-nota">${paletas[0].nota}</p>
  <div class="sp__acciones">
    <a class="sp__enviar" id="sp-enviar" href="https://wa.me/?text=" target="_blank" rel="noopener">Enviar mi elección por WhatsApp</a>
  </div>
</aside>
<script>
(() => {
  const paletas = ${JSON.stringify(paletas.map(({ id, nombre, nota }) => ({ id, nombre, nota })))};
  const raiz = document.documentElement;
  const nota = document.getElementById("sp-nota");
  const enviar = document.getElementById("sp-enviar");
  const pintar = () => {
    const paleta = paletas.find((p) => p.id === raiz.dataset.paleta);
    document.querySelectorAll(".sp [data-paleta]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.paleta === paleta.id)));
    document.querySelectorAll(".sp [data-luz]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.luz === raiz.dataset.luz)));
    nota.textContent = paleta.nota;
    enviar.href = "https://wa.me/?text=" + encodeURIComponent("Paleta para el sitio de JZ INOX: " + paleta.nombre + ", modo " + raiz.dataset.luz + ".");
  };
  document.querySelector(".sp").addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton) return;
    if (boton.dataset.paleta) raiz.dataset.paleta = boton.dataset.paleta;
    if (boton.dataset.luz) raiz.dataset.luz = boton.dataset.luz;
    pintar();
  });
  document.addEventListener("click", (evento) => {
    const enlace = evento.target.closest("a");
    if (!enlace || enlace.closest(".sp")) return;
    const destino = enlace.getAttribute("href") || "";
    if (!destino.startsWith("#")) evento.preventDefault();
  });
  const pedido = new URLSearchParams(location.hash.slice(1));
  if (paletas.some((p) => p.id === pedido.get("paleta"))) raiz.dataset.paleta = pedido.get("paleta");
  if (["oscuro", "claro"].includes(pedido.get("luz"))) raiz.dataset.luz = pedido.get("luz");
  pintar();
})();
</script>`;

html = html.replace("</body>", `${panel}</body>`);

const externos = [...html.matchAll(/(?:src|href)="(\/[^"#][^"]*)"/g)].map((m) => m[1]).filter((u) => /\.(css|js|webp|png|jpg|svg|woff2)$/.test(u));
mkdirSync(path.dirname(salida), { recursive: true });
writeFileSync(salida, html);
console.log(`${path.relative(raiz, salida)}  ${Math.round(statSync(salida).size / 1024)} KB`);
if (externos.length) console.log(`Quedaron ${externos.length} recursos sin incrustar: ${[...new Set(externos)].slice(0, 8).join(", ")}`);
