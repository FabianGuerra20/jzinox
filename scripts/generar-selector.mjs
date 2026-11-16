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

const rutas = ["/", "/nosotros", "/servicios", "/catalogo", "/contacto", "/al-muebleria", "/soldadura-santiago"];
const tipos = { ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".woff2": "font/woff2" };

const comoDato = (ruta) => {
  const limpia = ruta.split("?")[0];
  let archivo = path.join(dist, limpia);
  const reducida = archivo.replace(/\.webp$/, "-w800.webp");
  if (/\/img\//.test(limpia) && !/-w\d+\.webp$/.test(limpia) && existsSync(reducida)) archivo = reducida;
  if (!existsSync(archivo)) return ruta;
  return `data:${tipos[path.extname(archivo)] ?? "application/octet-stream"};base64,${readFileSync(archivo).toString("base64")}`;
};

const estados = { error: "#ff8a7a", warn: "#e2b04a", ok: "#7bd89a" };
const estadosClaro = { error: "#b3261e", warn: "#8a5a00", ok: "#1f6b34" };

const paletas = [
  {
    id: "actual",
    etiqueta: "Actual",
    nota: "La que tiene el sitio hoy, para comparar.",
    oscuro: { page: "#16120f", bg: "#2a231d", surface: "#332b24", border: "#5e5245", "steel-medium": "#8a7f72", footer: "#0f0c0a", text: "#f0ebe3", "text-muted": "#aa9f92", accent: "#ff6a1a", "accent-dark": "#ff8a45", "on-accent": "#16120f", ...estados },
    claro: { page: "#ebe5db", bg: "#ffffff", surface: "#f5f1ea", border: "#b5aa9a", "steel-dark": "#4a4137", text: "#16120f", "text-muted": "#554b40", accent: "#a33a04", "accent-dark": "#7f2c02", "on-accent": "#ffffff", ...estadosClaro },
  },
  {
    id: "opcion-1",
    etiqueta: "Opción 1",
    nota: "Base gris azulada de acero; el botón va en turquesa.",
    oscuro: { page: "#141a21", bg: "#1f2831", surface: "#27323d", border: "#4f5d6b", "steel-medium": "#7f8c99", footer: "#0e1318", text: "#e8edf1", "text-muted": "#9aa7b3", accent: "#2fd3c0", "accent-dark": "#63e2d3", "on-accent": "#0c1a1c", ...estados },
    claro: { page: "#e6eaee", bg: "#ffffff", surface: "#f2f5f7", border: "#a7b1ba", "steel-dark": "#3c4853", text: "#141a21", "text-muted": "#4a5661", accent: "#007468", "accent-dark": "#005a50", "on-accent": "#ffffff", ...estadosClaro },
  },
  {
    id: "opcion-2",
    etiqueta: "Opción 2",
    nota: "Base azul noche; el botón va en azul de arco de soldadura.",
    oscuro: { page: "#131722", bg: "#1e2433", surface: "#272e40", border: "#515a74", "steel-medium": "#8088a0", footer: "#0d1018", text: "#eef0f5", "text-muted": "#a9afc0", accent: "#6ea8ff", "accent-dark": "#96c0ff", "on-accent": "#0c1424", ...estados },
    claro: { page: "#eceef3", bg: "#ffffff", surface: "#f3f5f9", border: "#aab0c0", "steel-dark": "#414a60", text: "#131722", "text-muted": "#4c5468", accent: "#1f55c9", "accent-dark": "#173f99", "on-accent": "#ffffff", ...estadosClaro },
  },
  {
    id: "opcion-3",
    etiqueta: "Opción 3",
    nota: "Base grafito neutro; el botón va en amarillo de señal.",
    oscuro: { page: "#17191c", bg: "#23262a", surface: "#2c3035", border: "#555a61", "steel-medium": "#878c93", footer: "#101214", text: "#eef0f1", "text-muted": "#a4a9af", accent: "#ffd21f", "accent-dark": "#ffe066", "on-accent": "#17191c", ...estados },
    claro: { page: "#e9eaec", bg: "#ffffff", surface: "#f3f4f5", border: "#adb1b6", "steel-dark": "#43474d", text: "#17191c", "text-muted": "#50555b", accent: "#806200", "accent-dark": "#634c00", "on-accent": "#ffffff", ...estadosClaro },
  },
  {
    id: "opcion-4",
    etiqueta: "Opción 4",
    nota: "Base azul petróleo; el botón va en verde lima.",
    oscuro: { page: "#0f1c22", bg: "#182a32", surface: "#20353f", border: "#476470", "steel-medium": "#7b939d", footer: "#0a1418", text: "#e6eff2", "text-muted": "#9bb0b8", accent: "#b9e33b", "accent-dark": "#cdee6e", "on-accent": "#0f1c22", ...estados },
    claro: { page: "#e3ecef", bg: "#ffffff", surface: "#eff5f7", border: "#9fb4bc", "steel-dark": "#33505b", text: "#0f1c22", "text-muted": "#456069", accent: "#467300", "accent-dark": "#365a00", "on-accent": "#ffffff", ...estadosClaro },
  },
];

const lineal = (v) => (v / 255 <= 0.04045 ? v / 255 / 12.92 : ((v / 255 + 0.055) / 1.055) ** 2.4);
const rgb = (hex) => [1, 3, 5].map((i) => lineal(parseInt(hex.slice(i, i + 2), 16)));
const luminancia = (hex) => rgb(hex).reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
const contraste = (a, b) => {
  const [alto, bajo] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (alto + 0.05) / (bajo + 0.05);
};
const tono = (hex) => {
  const [r, g, b] = rgb(hex);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return { croma: Math.hypot(A, B), grados: ((Math.atan2(B, A) * 180) / Math.PI + 360) % 360 };
};
const distancia = (a, b) => {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
};

const avisos = [];
for (const p of paletas.filter((x) => x.id !== "actual")) {
  for (const [modo, t] of [["oscuro", p.oscuro], ["claro", p.claro]]) {
    const pruebas = [
      ["texto sobre lienzo", t.text, t.page, 7],
      ["texto sobre elevado", t.text, t.bg, 7],
      ["apagado sobre lienzo", t["text-muted"], t.page, 4.5],
      ["texto del botón", t["on-accent"], t.accent, 4.5],
      ["botón sobre lienzo", t.accent, t.page, 3],
      ["acento como texto", t.accent, t.page, 4.5],
    ];
    for (const [nombre, a, b, minimo] of pruebas) {
      const valor = contraste(a, b);
      if (valor < minimo) avisos.push(`${p.etiqueta} ${modo}: ${nombre} ${valor.toFixed(2)} (mínimo ${minimo})`);
    }
    const accion = tono(t.accent);
    if (accion.croma < 0.085) avisos.push(`${p.etiqueta} ${modo}: el color de acción no tiene color propio (croma ${accion.croma.toFixed(3)})`);
    for (const rol of ["page", "bg", "surface"]) {
      const base = tono(t[rol]);
      if (base.croma >= 0.045 && distancia(base.grados, accion.grados) < 45) avisos.push(`${p.etiqueta} ${modo}: la acción combina con ${rol}`);
    }
  }
}

const variables = (t) =>
  Object.entries(t)
    .map(([k, v]) => `--color-${k}:${v}`)
    .join(";");
const fondo = (o) => ({ ...o, steel: o.page, graphite: o.text, "steel-dark": o["steel-dark"] ?? o.border, "steel-medium": o["steel-medium"] ?? o["text-muted"], footer: o.footer ?? o.surface });
const seccion = ({ page, footer, "steel-medium": _medio, ...resto }) => ({ ...resto, graphite: resto.text, steel: resto.bg });

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

const leer = (ruta) => readFileSync(path.join(dist, ruta === "/" ? "index.html" : `${ruta.slice(1)}/index.html`), "utf8");
const principal = (html) => html.match(/<main\b[\s\S]*<\/main>/)[0];
const hojas = new Set();
const estilosDePagina = new Set();
for (const ruta of rutas) {
  const cabeza = leer(ruta).split("</head>")[0];
  for (const m of cabeza.matchAll(/<link rel="stylesheet" href="([^"]+)">/g)) hojas.add(m[1]);
  if (ruta !== "/") for (const m of cabeza.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) estilosDePagina.add(m[1]);
}

const plantillas = rutas.map((ruta) => `<template data-pagina="${ruta}">${principal(leer(ruta))}</template>`).join("\n");

const panel = `
<style>
${cssPaletas}
[data-reveal],[data-reveal]>*{opacity:1!important;transform:none!important;clip-path:none!important}
.fab{display:none!important}
.sp{position:fixed;left:0;right:0;bottom:0;z-index:1000;display:grid;gap:8px;padding:10px 16px calc(10px + env(safe-area-inset-bottom));background:#f4f5f7;color:#16181c;border-top:1px solid #9aa0a8;font:500 15px/1.35 system-ui,-apple-system,"Segoe UI",sans-serif}
.sp *{box-sizing:border-box}
.sp__fila{display:flex;gap:8px;align-items:center;overflow-x:auto;scrollbar-width:none}
.sp__rotulo{flex:none;min-width:52px;color:#4b515a;font-size:13px}
.sp button,.sp a{flex:none;min-height:44px;padding:0 14px;border:1px solid #9aa0a8;background:#fff;color:inherit;font:inherit;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:8px;white-space:nowrap}
.sp button[aria-pressed="true"]{background:#16181c;color:#fff;border-color:#16181c}
.sp__muestra{display:inline-grid;grid-template-columns:14px 14px;height:18px;border:1px solid #777}
.sp__punto{width:14px;height:14px;border-radius:50%;border:1px solid #777}
.sp__nota{margin:0;color:#4b515a;font-size:13px}
.sp__enviar{background:#16181c!important;color:#fff!important;border-color:#16181c!important;font-weight:700!important}
.sp :focus-visible{outline:2px solid #16181c;outline-offset:2px}
body{padding-bottom:200px}
@media (min-width:900px){.sp{grid-template-columns:1fr auto;align-items:center}.sp__nota{grid-column:1}.sp__acciones{grid-column:2;grid-row:1 / span 3}body{padding-bottom:160px}}
</style>
${plantillas}
<aside class="sp" aria-label="Elegir la paleta del sitio">
  <div class="sp__fila" role="group" aria-label="Paleta">
    <span class="sp__rotulo">Paleta</span>
    ${paletas
      .map(
        (p, i) =>
          `<button type="button" data-paleta="${p.id}" aria-pressed="${i === 0}"><span class="sp__muestra" aria-hidden="true"><i style="background:${p.oscuro.page}"></i><i style="background:${p.claro.page}"></i></span><span class="sp__punto" aria-hidden="true" style="background:${p.oscuro.accent}"></span>${p.etiqueta}</button>`,
      )
      .join("")}
  </div>
  <div class="sp__fila" role="group" aria-label="Modo">
    <span class="sp__rotulo">Modo</span>
    <button type="button" data-luz="oscuro" aria-pressed="true">Oscuro</button>
    <button type="button" data-luz="claro" aria-pressed="false">Claro</button>
  </div>
  <p class="sp__nota" id="sp-nota"></p>
  <div class="sp__acciones">
    <a class="sp__enviar" id="sp-enviar" href="https://wa.me/?text=" target="_blank" rel="noopener">Enviar mi elección por WhatsApp</a>
  </div>
</aside>
<script>
(() => {
  const paletas = ${JSON.stringify(paletas.map(({ id, etiqueta, nota }) => ({ id, etiqueta, nota })))};
  const raiz = document.documentElement;
  const nota = document.getElementById("sp-nota");
  const enviar = document.getElementById("sp-enviar");
  const limpia = (ruta) => (ruta.length > 1 && ruta.endsWith("/") ? ruta.slice(0, -1) : ruta);

  const pintar = () => {
    const paleta = paletas.find((p) => p.id === raiz.dataset.paleta);
    document.querySelectorAll(".sp [data-paleta]").forEach((b) => {
      const activa = b.dataset.paleta === paleta.id;
      b.setAttribute("aria-pressed", String(activa));
      if (activa) b.scrollIntoView({ inline: "center", block: "nearest" });
    });
    document.querySelectorAll(".sp [data-luz]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.luz === raiz.dataset.luz)));
    nota.textContent = paleta.nota + " Puedes recorrer las páginas del sitio con el menú; el formulario no envía en esta vista.";
    enviar.href = "https://wa.me/?text=" + encodeURIComponent("Paleta para el sitio de JZ INOX: " + paleta.etiqueta + ", modo " + raiz.dataset.luz + ".");
  };

  const abrir = (ruta, ancla) => {
    const plantilla = document.querySelector('template[data-pagina="' + ruta + '"]');
    if (!plantilla) return false;
    document.querySelector("main").replaceWith(plantilla.content.cloneNode(true));
    document.querySelectorAll(".header__link").forEach((enlace) => {
      const activo = limpia(new URL(enlace.getAttribute("href"), "http://x").pathname) === ruta;
      enlace.classList.toggle("header__link--active", activo);
      activo ? enlace.setAttribute("aria-current", "page") : enlace.removeAttribute("aria-current");
    });
    const menu = document.getElementById("nav-toggle");
    if (menu) menu.checked = false;
    const destino = ancla && document.getElementById(ancla);
    destino ? destino.scrollIntoView() : window.scrollTo(0, 0);
    return true;
  };

  document.querySelector(".sp").addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton) return;
    if (boton.dataset.paleta) raiz.dataset.paleta = boton.dataset.paleta;
    if (boton.dataset.luz) raiz.dataset.luz = boton.dataset.luz;
    pintar();
  });

  document.addEventListener("click", (evento) => {
    const paso = evento.target.closest("[data-step]");
    if (paso) {
      const pista = paso.closest("[data-gallery]").querySelector(".pcard__track");
      const total = pista.children.length;
      const actual = Math.round(pista.scrollLeft / pista.clientWidth);
      const siguiente = (actual + Number(paso.dataset.step) + total) % total;
      pista.scrollTo({ left: siguiente * pista.clientWidth, behavior: "smooth" });
      paso.closest("[data-gallery]").querySelector("[data-count]").textContent = siguiente + 1 + " / " + total;
      return;
    }
    const enlace = evento.target.closest("a");
    if (!enlace || enlace.closest(".sp")) return;
    const destino = enlace.getAttribute("href") || "";
    if (destino.startsWith("#") || /^(https?:|tel:|mailto:)/.test(destino)) {
      if (enlace.hasAttribute("data-zoom")) evento.preventDefault();
      return;
    }
    evento.preventDefault();
    if (enlace.hasAttribute("data-zoom")) return;
    const url = new URL(destino, "http://x");
    abrir(limpia(url.pathname), url.hash.slice(1));
  });

  document.addEventListener("submit", (evento) => evento.preventDefault());

  const pedido = new URLSearchParams(location.hash.slice(1));
  if (paletas.some((p) => p.id === pedido.get("paleta"))) raiz.dataset.paleta = pedido.get("paleta");
  if (["oscuro", "claro"].includes(pedido.get("luz"))) raiz.dataset.luz = pedido.get("luz");
  if (pedido.get("pagina")) abrir(pedido.get("pagina"));
  pintar();
})();
</script>`;

let html = leer("/");
html = html
  .replace(/<link rel="stylesheet" href="[^"]+">/g, "")
  .replace("</head>", `${[...hojas].map((href) => `<style>${readFileSync(path.join(dist, href), "utf8")}</style>`).join("")}${[...estilosDePagina].map((css) => `<style>${css}</style>`).join("")}</head>`)
  .replace("</body>", `${panel}</body>`)
  .replace(/<link rel="(?:preload|canonical|icon|apple-touch-icon|sitemap|alternate)"[^>]*>/g, "")
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "")
  .replace(/<script\b(?![^>]*>\s*\(\(\) => \{\s*const paletas)[^>]*>[\s\S]*?<\/script>/g, "")
  .replace(/\ssrcset="[^"]*"/g, "")
  .replace(/\ssizes="[^"]*"/g, "")
  .replace(/src="(\/[^"]+)"/g, (_, src) => `src="${comoDato(src)}"`)
  .replace(/url\((["']?)(\/[^)"']+)\1\)/g, (_, _q, ruta) => `url(${comoDato(ruta)})`)
  .replace(/url\(&quot;(\/[^)&]+)&quot;\)/g, (_, ruta) => `url(${comoDato(ruta)})`)
  .replace(/<meta name="robots"[^>]*>/g, "")
  .replace("<head>", '<head><meta name="robots" content="noindex">')
  .replace(/<title>[\s\S]*?<\/title>/, "<title>JZ INOX: elige la paleta del sitio</title>")
  .replace(/<html([^>]*)>/, '<html$1 data-paleta="actual" data-luz="oscuro">');

const externos = [...html.matchAll(/(?:src)="(\/[^"#][^"]*)"/g)].map((m) => m[1]);
mkdirSync(path.dirname(salida), { recursive: true });
writeFileSync(salida, html);
console.log(`${path.relative(raiz, salida)}  ${Math.round(statSync(salida).size / 1024)} KB, ${rutas.length} páginas, ${paletas.length} paletas`);
if (externos.length) console.log(`Quedaron ${externos.length} recursos sin incrustar: ${[...new Set(externos)].slice(0, 8).join(", ")}`);
console.log(avisos.length ? `Avisos de color:\n${avisos.join("\n")}` : "Las cuatro opciones nuevas cumplen contraste AA y tienen un color de acción aparte de la base, en oscuro y en claro");
