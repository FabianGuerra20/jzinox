// Arma propuestas/elegir-diseno.html: el sitio entero en un solo archivo, con un panel para
// elegir propuesta, colores, modo, letras (títulos y texto por separado), portada, listado, estilo y esquinas, y mandar la
// elección por WhatsApp. Es el mismo selector que usan los sitios de la plantilla de pymes.
// Uso: npm run build && node scripts/generar-selector.mjs
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { paletasExtra } from "./paletas.mjs";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(raiz, "dist");
const salida = path.join(raiz, "propuestas", "elegir-diseno.html");

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
const fuente = (archivo) => `data:font/woff2;base64,${readFileSync(path.join(raiz, "propuestas", "fuentes", archivo)).toString("base64")}`;

// ---------- Colores ----------
const estados = { error: "#ff8a7a", warn: "#e2b04a", ok: "#7bd89a" };
const estadosClaro = { error: "#b3261e", warn: "#8a5a00", ok: "#1f6b34" };

// La actual queda solo para comparar; lo que se busca es salir del negro con naranjo o rojo.
// El resto de las paletas (archivo del 12 nov, octubre y nuevas) está en scripts/paletas.mjs.
const paletas = [
  {
    id: "actual",
    etiqueta: "Actual",
    nota: "La que tiene el sitio hoy, solo para comparar.",
    oscuro: { page: "#16120f", bg: "#2a231d", surface: "#332b24", border: "#5e5245", "steel-medium": "#8a7f72", footer: "#0f0c0a", text: "#f0ebe3", "text-muted": "#aa9f92", accent: "#ff6a1a", "accent-dark": "#ff8a45", "on-accent": "#16120f", ...estados },
    claro: { page: "#ebe5db", bg: "#ffffff", surface: "#f5f1ea", border: "#b5aa9a", "steel-dark": "#4a4137", text: "#16120f", "text-muted": "#554b40", accent: "#a33a04", "accent-dark": "#7f2c02", "on-accent": "#ffffff", ...estadosClaro },
  },
  {
    id: "opcion-1",
    etiqueta: "Turquesa de acero",
    nota: "Base gris azulada de acero; el botón va en turquesa.",
    oscuro: { page: "#141a21", bg: "#1f2831", surface: "#27323d", border: "#4f5d6b", "steel-medium": "#7f8c99", footer: "#0e1318", text: "#e8edf1", "text-muted": "#9aa7b3", accent: "#2fd3c0", "accent-dark": "#63e2d3", "on-accent": "#0c1a1c", ...estados },
    claro: { page: "#e6eaee", bg: "#ffffff", surface: "#f2f5f7", border: "#a7b1ba", "steel-dark": "#3c4853", text: "#141a21", "text-muted": "#4a5661", accent: "#007468", "accent-dark": "#005a50", "on-accent": "#ffffff", ...estadosClaro },
  },
  {
    id: "opcion-2",
    etiqueta: "Azul arco",
    nota: "Base azul noche; el botón va en azul de arco de soldadura.",
    oscuro: { page: "#131722", bg: "#1e2433", surface: "#272e40", border: "#515a74", "steel-medium": "#8088a0", footer: "#0d1018", text: "#eef0f5", "text-muted": "#a9afc0", accent: "#6ea8ff", "accent-dark": "#96c0ff", "on-accent": "#0c1424", ...estados },
    claro: { page: "#eceef3", bg: "#ffffff", surface: "#f3f5f9", border: "#aab0c0", "steel-dark": "#414a60", text: "#131722", "text-muted": "#4c5468", accent: "#1f55c9", "accent-dark": "#173f99", "on-accent": "#ffffff", ...estadosClaro },
  },
  {
    id: "opcion-3",
    etiqueta: "Amarillo señal",
    nota: "Base grafito neutro; el botón va en amarillo de señal.",
    oscuro: { page: "#17191c", bg: "#23262a", surface: "#2c3035", border: "#555a61", "steel-medium": "#878c93", footer: "#101214", text: "#eef0f1", "text-muted": "#a4a9af", accent: "#ffd21f", "accent-dark": "#ffe066", "on-accent": "#17191c", ...estados },
    claro: { page: "#e9eaec", bg: "#ffffff", surface: "#f3f4f5", border: "#adb1b6", "steel-dark": "#43474d", text: "#17191c", "text-muted": "#50555b", accent: "#806200", "accent-dark": "#634c00", "on-accent": "#ffffff", ...estadosClaro },
  },
  {
    id: "opcion-4",
    etiqueta: "Lima petróleo",
    nota: "Base azul petróleo; el botón va en verde lima.",
    oscuro: { page: "#0f1c22", bg: "#182a32", surface: "#20353f", border: "#476470", "steel-medium": "#7b939d", footer: "#0a1418", text: "#e6eff2", "text-muted": "#9bb0b8", accent: "#b9e33b", "accent-dark": "#cdee6e", "on-accent": "#0f1c22", ...estados },
    claro: { page: "#e3ecef", bg: "#ffffff", surface: "#eff5f7", border: "#9fb4bc", "steel-dark": "#33505b", text: "#0f1c22", "text-muted": "#456069", accent: "#467300", "accent-dark": "#365a00", "on-accent": "#ffffff", ...estadosClaro },
  },
];
paletas.push(...paletasExtra);

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

// La misma regla que la plantilla de pymes: contraste AA y un color de acción que no combina con la base.
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
      // En modo claro las secciones alternas van blancas sobre el fondo gris, no oscuras:
      // si no, quien elige "Claro" ve Productos, Contacto y medio sitio en oscuro.
      `${base}[data-luz="claro"]{color-scheme:light;${variables({ ...fondo(p.claro), "bg-alt": p.claro.bg })}}`,
      `${base}[data-luz="claro"] :is(.section--alt,.theme-light){color-scheme:light;${variables(seccion({ ...p.claro, bg: p.claro.page, surface: p.claro.page }))}}`,
      `${base}[data-luz="claro"] :is(.header,.footer){${variables(fondo(p.oscuro))}}`,
    ];
  })
  .join("\n");

// ---------- Las demás perillas ----------
const luces = [
  { id: "oscuro", etiqueta: "Oscuro", nota: "Fondo oscuro, como el sitio de hoy." },
  { id: "claro", etiqueta: "Claro", nota: "Fondo claro; la cabecera y el pie siguen oscuros." },
];

// Las letras se eligen por separado: una para los títulos y otra para el texto, y se pueden combinar
// sin restricción. "ajuste" es el CSS propio de cada letra de títulos (peso, espaciado, tamaño de la portada).
const titulos = [
  { id: "hanken", etiqueta: "Hanken Grotesk", nota: "La de los títulos del sitio de hoy.", familia: "Hanken Grotesk" },
  { id: "overpass", etiqueta: "Overpass", nota: "Viene de la letra de los letreros de carretera: se lee de lejos.", familia: "Overpass", ajuste: "font-weight:800" },
  { id: "condensada", etiqueta: "Sofia Condensed", nota: "Angosta y gruesa, como rotulado de taller.", familia: "Sofia Sans Condensed", ajuste: "font-weight:800;letter-spacing:0", portada: "font-size:clamp(2.4rem,4.6vw,4.2rem)" },
  { id: "extra", etiqueta: "Sofia Extra Condensed", nota: "Todavía más angosta: titulares largos en poco ancho, estilo cartel.", familia: "Sofia Sans Extra Condensed", ajuste: "font-weight:800;letter-spacing:.01em", portada: "font-size:clamp(2.8rem,5.4vw,5rem);line-height:1" },
  { id: "hombros", etiqueta: "Big Shoulders", nota: "Mayúsculas industriales, como las de un letrero de fábrica.", familia: "Big Shoulders Display", ajuste: "font-weight:800;letter-spacing:.01em", portada: "font-size:clamp(2.8rem,5.4vw,5rem);line-height:1" },
  { id: "oswald", etiqueta: "Oswald", nota: "Angosta y de trazo firme; muy usada en rótulos y carteles.", familia: "Oswald", ajuste: "font-weight:700;letter-spacing:0", portada: "font-size:clamp(2.5rem,4.8vw,4.4rem);line-height:1.04" },
  { id: "archivo", etiqueta: "Archivo", nota: "Neutra y robusta, con carácter de grotesca de imprenta.", familia: "Archivo", ajuste: "font-weight:800;letter-spacing:-.01em" },
  { id: "space", etiqueta: "Space Grotesk", nota: "Técnica, con rarezas de ingeniería en las letras.", familia: "Space Grotesk", ajuste: "font-weight:700;letter-spacing:-.01em" },
  { id: "bricolage", etiqueta: "Bricolage", nota: "Grotesca con personalidad, algo artesanal.", familia: "Bricolage Grotesque", ajuste: "font-weight:800;letter-spacing:-.015em" },
  { id: "outfit", etiqueta: "Outfit", nota: "Geométrica y redonda, limpia y moderna.", familia: "Outfit", ajuste: "font-weight:700" },
  { id: "host", etiqueta: "Host Grotesk", nota: "Técnica y muy legible, pensada para leer en el celular.", familia: "Host Grotesk", ajuste: "font-weight:700" },
  { id: "fraunces", etiqueta: "Fraunces (serif)", nota: "Con remates, de aire editorial; el cambio más fuerte de todos.", familia: "Fraunces", serif: true, ajuste: "font-weight:700;letter-spacing:-.01em" },
];

const textos = [
  { id: "inter", etiqueta: "Inter", nota: "La del texto del sitio de hoy.", familia: "Inter" },
  { id: "overpass", etiqueta: "Overpass", nota: "Rasgos de señalética; cómoda en pantallas chicas.", familia: "Overpass" },
  { id: "public", etiqueta: "Public Sans", nota: "Neutra, hecha para sitios de gobierno: se lee sin esfuerzo.", familia: "Public Sans" },
  { id: "sofia", etiqueta: "Sofia Sans", nota: "Humanista y algo angosta; ahorra espacio.", familia: "Sofia Sans" },
  { id: "atkinson", etiqueta: "Atkinson Hyperlegible", nota: "Pensada para que ninguna letra se confunda con otra.", familia: "Atkinson Hyperlegible Next" },
  { id: "host", etiqueta: "Host Grotesk", nota: "Técnica y limpia.", familia: "Host Grotesk" },
  { id: "work", etiqueta: "Work Sans", nota: "Abierta y amable; muy buena en párrafos largos.", familia: "Work Sans" },
  { id: "figtree", etiqueta: "Figtree", nota: "Redonda y cálida, de aire cercano.", familia: "Figtree" },
  { id: "serif", etiqueta: "Source Serif (serif)", nota: "Texto con remates, como un catálogo impreso.", familia: "Source Serif 4", serif: true },
];

const portadas = [
  { id: "dividida", etiqueta: "Texto y foto", nota: "El título a un lado y la foto al otro, como hoy." },
  { id: "invertida", etiqueta: "Foto y texto", nota: "Lo mismo, pero con la foto a la izquierda y el texto a la derecha." },
  { id: "foto", etiqueta: "Foto de fondo", nota: "La foto ocupa toda la portada y el texto va encima." },
  { id: "palabras", etiqueta: "Título grande", nota: "El título manda; la foto va abajo, a lo ancho." },
];

const listados = [
  { id: "tarjetas", etiqueta: "Tarjetas", nota: "El catálogo en cuadrícula, como hoy." },
  { id: "grandes", etiqueta: "Tarjetas grandes", nota: "Dos por fila en escritorio, con más aire y fotos más grandes." },
  { id: "renglones", etiqueta: "Renglones", nota: "Un producto por fila, con la foto al lado." },
];

// Orden de las cuatro secciones que van bajo la portada del Inicio.
// jz = bloque JZ INOX, clientes = logos, al = AL Mueblería, servicios = lo que se hace en el taller.
const inicios = [
  { id: "marcas", etiqueta: "Como hoy", nota: "JZ INOX, los clientes, AL Mueblería y al final los servicios.", orden: ["jz", "clientes", "al", "servicios"] },
  { id: "clientes", etiqueta: "Clientes primero", nota: "Bajo la portada van los logos de KFC, Burger King y los demás; después las marcas y los servicios.", orden: ["clientes", "jz", "al", "servicios"] },
  { id: "servicios", etiqueta: "Servicios primero", nota: "Bajo la portada va lo que se hace en el taller; después los clientes y las marcas.", orden: ["servicios", "clientes", "jz", "al"] },
  { id: "marcas-juntas", etiqueta: "Marcas juntas", nota: "JZ INOX y AL Mueblería seguidas, luego los clientes y al final los servicios.", orden: ["jz", "al", "clientes", "servicios"] },
  { id: "marcas-servicios", etiqueta: "Marcas y servicios", nota: "Las dos marcas, después los servicios y los clientes al final, como cierre de confianza.", orden: ["jz", "al", "servicios", "clientes"] },
  { id: "servicios-marcas", etiqueta: "Servicios y marcas", nota: "Los servicios, las dos marcas y los clientes al final.", orden: ["servicios", "jz", "al", "clientes"] },
  { id: "clientes-servicios", etiqueta: "Clientes y servicios", nota: "Los logos, luego los servicios y las marcas al final.", orden: ["clientes", "servicios", "jz", "al"] },
  { id: "mueble-primero", etiqueta: "AL Mueblería primero", nota: "Los muebles a medida van antes que todo lo demás; después JZ INOX, los clientes y los servicios.", orden: ["al", "jz", "clientes", "servicios"] },
];

const estilos = [
  { id: "plano", etiqueta: "Plano", nota: "Líneas finas y sin sombras, como hoy." },
  { id: "blando", etiqueta: "Blando", nota: "Sin bordes; las tarjetas flotan con una sombra suave." },
  { id: "recorte", etiqueta: "Recorte", nota: "Bordes gruesos y una sombra dura, como una pieza cortada." },
  { id: "editorial", etiqueta: "Editorial", nota: "Sin cajas: una raya arriba y más aire, como una revista." },
];

const esquinas = [
  { id: "rectas", etiqueta: "Rectas", nota: "Cantos vivos, como hoy." },
  { id: "suaves", etiqueta: "Suaves", nota: "Cantos apenas redondeados." },
  { id: "redondas", etiqueta: "Redondas", nota: "Tarjetas redondeadas y botones de píldora." },
];

const propuestas = [
  { id: "p1", etiqueta: "Propuesta 1", nota: "La más cercana a hoy: misma forma, otro color.", diseno: { paleta: "opcion-1", luz: "oscuro", titulos: "hanken", texto: "inter", portada: "dividida", listado: "tarjetas", inicio: "marcas", estilo: "plano", esquinas: "rectas" } },
  { id: "p2", etiqueta: "Propuesta 2", nota: "Clara y limpia, con la foto de fondo en la portada.", diseno: { paleta: "opcion-2", luz: "claro", titulos: "overpass", texto: "overpass", portada: "foto", listado: "tarjetas", inicio: "clientes", estilo: "blando", esquinas: "suaves" } },
  { id: "p3", etiqueta: "Propuesta 3", nota: "Industrial y fuerte: rotulado, amarillo de señal y bordes duros.", diseno: { paleta: "opcion-3", luz: "oscuro", titulos: "condensada", texto: "sofia", portada: "palabras", listado: "renglones", inicio: "servicios", estilo: "recorte", esquinas: "rectas" } },
  { id: "p4", etiqueta: "Propuesta 4", nota: "Clara y moderna, sin cajas y con cantos redondeados.", diseno: { paleta: "opcion-4", luz: "claro", titulos: "host", texto: "atkinson", portada: "dividida", listado: "tarjetas", inicio: "clientes", estilo: "editorial", esquinas: "redondas" } },
];

const grupos = [
  { id: "propuesta", etiqueta: "Propuestas", intro: "Cuatro diseños completos para partir. Después puedes cambiar cada parte por separado." },
  { id: "paleta", etiqueta: "Colores", intro: "Cada paleta trae una base que combina y un color aparte, el del círculo, solo para los botones. Cada una funciona en modo oscuro y claro." },
  { id: "luz", etiqueta: "Modo", intro: "La misma paleta con fondo oscuro o con fondo claro." },
  { id: "titulos", etiqueta: "Títulos", intro: "La letra de los títulos. Se combina con la del texto: elige cada una por separado." },
  { id: "texto", etiqueta: "Texto", intro: "La letra de los párrafos, los menús y los botones." },
  { id: "portada", etiqueta: "Portada", intro: "Cómo se ve lo primero del Inicio." },
  { id: "inicio", etiqueta: "Organización", intro: "En qué orden van las secciones del Inicio, debajo de la portada." },
  { id: "listado", etiqueta: "Listado", intro: "Cómo se muestran los productos en Productos." },
  { id: "estilo", etiqueta: "Estilo", intro: "El trato de las tarjetas y los botones." },
  { id: "esquinas", etiqueta: "Esquinas", intro: "Qué tan redondos son los cantos." },
  { id: "ficha", etiqueta: "Ficha", intro: "La ficha técnica del diseño que armaste: para qué se usa cada color, con qué contraste, y las letras elegidas. Se actualiza sola al cambiar cualquier opción." },
  { id: "resumen", etiqueta: "Enviar", intro: "Esto es lo que elegiste. Mándalo por WhatsApp y lo dejo así en el sitio." },
];

const opcionesDe = { paleta: paletas, luz: luces, titulos, texto: textos, portada: portadas, listado: listados, inicio: inicios, estilo: estilos, esquinas, propuesta: propuestas };
const paginaDe = { portada: "/", listado: "/catalogo", inicio: "/" };

const archivosDeFuente = {
  "Overpass": "overpass",
  "Sofia Sans Condensed": "sofia-sans-condensed",
  "Sofia Sans Extra Condensed": "sofia-sans-extra-condensed",
  "Sofia Sans": "sofia-sans",
  "Host Grotesk": "host-grotesk",
  "Atkinson Hyperlegible Next": "atkinson-hyperlegible-next",
  "Archivo": "archivo",
  "Big Shoulders Display": "big-shoulders-display",
  "Oswald": "oswald",
  "Space Grotesk": "space-grotesk",
  "Bricolage Grotesque": "bricolage-grotesque",
  "Outfit": "outfit",
  "Fraunces": "fraunces",
  "Public Sans": "public-sans",
  "Work Sans": "work-sans",
  "Figtree": "figtree",
  "Source Serif 4": "source-serif-4",
};
// Hanken Grotesk e Inter ya vienen con el sitio; las demás se incrustan para que el archivo funcione sin conexión.
const familiasUsadas = [...new Set([...titulos, ...textos].map((l) => l.familia))].filter((f) => f !== "Hanken Grotesk" && f !== "Inter");
const cssFuentes = familiasUsadas
  .map((familia) => {
    if (!archivosDeFuente[familia]) throw new Error("Falta el archivo de la fuente " + familia);
    return `@font-face{font-family:"${familia}";src:url(${fuente(archivosDeFuente[familia] + "-latin-wght-normal.woff2")}) format("woff2");font-weight:100 900;font-style:normal;font-display:swap}`;
  })
  .join("\n");

const pila = (l) => `"${l.familia}",${l.serif ? 'Georgia,"Times New Roman",serif' : '"Segoe UI",system-ui,sans-serif'}`;
const cssLetras = [
  ...titulos.filter((l) => l.id !== "hanken").map((l) => `html[data-titulos="${l.id}"]{--font-heading:${pila(l)}}`),
  ...titulos.filter((l) => l.ajuste).map((l) => `html[data-titulos="${l.id}"] :is(h1,h2){${l.ajuste}}`),
  ...titulos.filter((l) => l.portada).map((l) => `html[data-titulos="${l.id}"] .hero__title{${l.portada}}`),
  ...textos.filter((l) => l.id !== "inter").map((l) => `html[data-texto="${l.id}"]{--font-body:${pila(l)}}`),
].join("\n");

const bloqueInicio = { jz: "main>.brand-section:not(.section--alt)", clientes: "main>.clients-band", al: "main>.brand-section.section--alt", servicios: "main>.services" };
const cssInicio = inicios
  .filter((i) => i.id !== "marcas")
  .map((i) => {
    const base = `html[data-inicio="${i.id}"]`;
    return [
      `${base} main:has(>.clients-band){display:flex;flex-direction:column}`,
      ...i.orden.map((b, n) => `${base} ${bloqueInicio[b]}{order:${n + 1}}`),
      `${base} main>.closing{order:9;border-top:1px solid var(--color-border)}`,
    ].join("\n");
  })
  .join("\n");

const cajas = ":is(.pcard,.bento__cell)";
const cssDiseno = `
${cssFuentes}
${cssLetras}

html[data-portada="foto"] .hero__main{position:relative;grid-template-columns:minmax(0,1fr)!important;min-height:min(88svh,860px)}
html[data-portada="foto"] .hero__figure{position:absolute;inset:0;min-height:0;border:0!important}
html[data-portada="foto"] .hero__figure::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--color-page) 95%,transparent) 0%,color-mix(in srgb,var(--color-page) 82%,transparent) 46%,transparent 92%)}
html[data-portada="foto"] .hero__copy{position:relative;z-index:1}
@media (max-width:959.98px){html[data-portada="foto"] .hero__figure::after{background:color-mix(in srgb,var(--color-page) 90%,transparent)}}

html[data-portada="invertida"] .hero__figure{order:-1;margin-top:var(--header-height);border-top:0;border-bottom:1px solid var(--color-border)}
html[data-portada="invertida"] .hero__copy{padding-top:clamp(2rem,6vw,3.5rem)}
@media (min-width:960px){
html[data-portada="invertida"] .hero__main{grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)}
html[data-portada="invertida"] .hero__figure{margin-top:0;border-bottom:0;border-right:1px solid var(--color-border)}
html[data-portada="invertida"] .hero__copy{padding-top:calc(var(--header-height) + clamp(2rem,6vw,3.5rem));padding-left:clamp(2rem,4vw,4.5rem);padding-right:max(var(--margin-desktop),calc((100vw - var(--container-width))/2 + var(--margin-desktop)))}
}
html[data-portada="palabras"] .hero__main{grid-template-columns:minmax(0,1fr)!important}
html[data-portada="palabras"] .hero__title{max-width:22ch;font-size:clamp(2.4rem,5.4vw,4.75rem);line-height:1.02}
html[data-portada="palabras"] .hero__figure img{object-position:60% 62%}
html[data-portada="palabras"] .hero__figure{min-height:0;aspect-ratio:3/2;border-left:0!important;border-top:1px solid var(--color-border)}
@media (min-width:960px){html[data-portada="palabras"] .hero__figure{aspect-ratio:16/6}html[data-portada="palabras"] .hero__copy{padding-right:var(--margin-desktop);padding-bottom:3.5rem}}

html[data-listado="grandes"] .pgrid{grid-template-columns:repeat(auto-fill,minmax(min(100%,520px),1fr))}
html[data-listado="grandes"] .pcard__body{padding:clamp(1.4rem,3.4vw,2rem)}
html[data-listado="grandes"] .pcard__body h3{font-size:1.375rem}
html[data-listado="renglones"] .pgrid{grid-template-columns:minmax(0,1fr)}
html[data-listado="renglones"] .pcard{display:grid;grid-template-columns:minmax(0,46%) minmax(0,1fr);align-items:stretch}
html[data-listado="renglones"] .pcard__gallery{min-width:0;align-self:start}
html[data-listado="renglones"] .pcard__body{justify-content:center;padding:clamp(.9rem,2.4vw,1.6rem)}
html[data-listado="renglones"] .pcard .btn{margin-top:.5rem}
@media (min-width:768px){html[data-listado="renglones"] .pcard{grid-template-columns:minmax(0,360px) minmax(0,1fr)}html[data-listado="renglones"] .pcard__body{padding-inline:2rem}}
@media (max-width:767.98px){html[data-listado="renglones"] .pcard{grid-template-columns:minmax(0,42%) minmax(0,1fr);grid-template-areas:"foto titulo" "foto texto" "boton boton";grid-template-rows:auto 1fr auto;column-gap:14px;padding:12px}html[data-listado="renglones"] .pcard__gallery{grid-area:foto}html[data-listado="renglones"] .pcard__body{display:contents}html[data-listado="renglones"] .pcard__body h3{grid-area:titulo;font-size:1.0625rem}html[data-listado="renglones"] .pcard__body p{grid-area:texto;margin:.35rem 0 0}html[data-listado="renglones"] .pcard .btn{grid-area:boton;justify-self:stretch;margin-top:12px}html[data-estilo="editorial"][data-listado="renglones"] .pcard{padding-inline:0}}

html[data-estilo="blando"] ${cajas}{border-color:transparent;box-shadow:0 1px 2px rgb(0 0 0/.08),0 12px 30px -10px rgb(0 0 0/.28)}
html[data-estilo="blando"][data-luz="oscuro"] ${cajas}{box-shadow:inset 0 1px 0 rgb(255 255 255/.05),0 14px 34px -12px rgb(0 0 0/.75)}
html[data-estilo="blando"] .btn{box-shadow:0 1px 2px rgb(0 0 0/.2)}
html[data-estilo="recorte"] ${cajas}{border:2px solid var(--color-text);box-shadow:6px 6px 0 var(--color-text)}
html[data-estilo="recorte"] .btn{border-width:2px}
html[data-estilo="recorte"] .btn--primary{box-shadow:3px 3px 0 var(--color-text)}
html[data-estilo="recorte"] .pgrid{gap:clamp(1.25rem,2.8vw,2.25rem)}
html[data-estilo="editorial"] ${cajas}{background:transparent;border:0;border-top:2px solid var(--color-text);box-shadow:none}
html[data-estilo="editorial"] .pcard__gallery{margin-top:1rem}
html[data-estilo="editorial"] .pcard__body{padding-inline:0}
html[data-estilo="editorial"] .pgrid{gap:clamp(1.75rem,3.6vw,3rem)}
html[data-estilo="editorial"][data-listado="renglones"] .pcard__body{padding-inline:1.5rem}

${cssInicio}

html[data-esquinas="suaves"]{--radius:6px;--r-caja:10px;--r-boton:6px}
html[data-esquinas="redondas"]{--radius:12px;--r-caja:20px;--r-boton:999px}
html:is([data-esquinas="suaves"],[data-esquinas="redondas"]) :is(.pcard,.bento__cell,.hero__figure,.lightbox img){border-radius:var(--r-caja);overflow:hidden}
html:is([data-esquinas="suaves"],[data-esquinas="redondas"]) :is(.btn,.pcard__step,.pcard__nav){border-radius:var(--r-boton)}
html[data-esquinas="redondas"] .pcard__nav{overflow:hidden}
html:is([data-esquinas="suaves"],[data-esquinas="redondas"])[data-estilo="editorial"] ${cajas}{border-radius:0;overflow:visible}
html:is([data-esquinas="suaves"],[data-esquinas="redondas"])[data-estilo="editorial"] .pcard__gallery{border-radius:var(--r-caja);overflow:hidden}
html[data-portada="foto"] .hero__figure{border-radius:0!important}
@media (max-width:959.98px){html:is([data-esquinas="suaves"],[data-esquinas="redondas"]) .hero__figure{border-radius:0}}
`;

// ---------- Páginas ----------
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

// Página de la ficha técnica: el selector la rellena con la paleta y las letras elegidas.
const plantillaFicha = `<template data-pagina="/ficha"><main class="ficha" id="contenido">
<h1>Ficha técnica del diseño</h1>
<p>Qué es cada color y con qué letras está armado el sitio, según lo que elegiste en el panel. Cambia sola al tocar cualquier opción. En modo claro, la cabecera y el pie siguen con los colores del modo oscuro.</p>
<h2>Colores de la paleta <span id="fc-nombre"></span></h2>
<p id="fc-nota"></p>
<div class="ficha__scroll"><table><thead><tr><th scope="col">Color</th><th scope="col">Para qué se usa</th><th scope="col">Modo oscuro</th><th scope="col">Modo claro</th><th scope="col">Contraste</th></tr></thead><tbody id="fc-colores"></tbody></table></div>
<p>El contraste es la legibilidad de ese color contra el fondo (oscuro · claro). Desde 4,5 a 1 se considera legible para texto; todas las paletas lo cumplen.</p>
<h2>Letras</h2>
<div class="ficha__scroll"><table><thead><tr><th scope="col">Rol</th><th scope="col">Muestra</th><th scope="col">Familia</th><th scope="col">Dónde se usa</th></tr></thead><tbody id="fc-letras"></tbody></table></div>
<h2>Lo que no cambia con las opciones</h2>
<ul class="ficha__reglas">
<li>Los botones y controles táctiles miden al menos 44 px de alto.</li>
<li>El botón de WhatsApp es siempre verde <code>#0f7a35</code>, con su ícono, en todas las paletas.</li>
<li>El color de acción se usa solo en botones, enlaces y estados; nunca como relleno decorativo.</li>
<li>Las animaciones se apagan si el equipo pide reducir el movimiento.</li>
<li>El ancho máximo del sitio es de 1440 px.</li>
</ul>
</main></template>`;

// ---------- Panel ----------
const fuenteDe = Object.fromEntries(titulos.map((l) => [l.id, `"${l.familia}"`]));
const paletaPorId = Object.fromEntries(paletas.map((p) => [p.id, p]));
const croquisInicio = (orden) => {
  const bloque = {
    jz: (y) => `<rect x="6" y="${y}" width="12" height="4.5" class="c-foto"/><path d="M22 ${y + 2.2}h22"/>`,
    al: (y) => `<path d="M6 ${y + 2.2}h22"/><rect x="46" y="${y}" width="12" height="4.5" class="c-foto"/>`,
    clientes: (y) => `<path d="M6 ${y + 2.2}h8M18 ${y + 2.2}h8M30 ${y + 2.2}h8M42 ${y + 2.2}h8" class="c-grueso"/>`,
    servicios: (y) => `<path d="M6 ${y + 1}h40M6 ${y + 4}h28"/>`,
  };
  return `<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="6" y="4" width="52" height="3.5" class="c-foto"/>${orden.map((b, n) => bloque[b](10.5 + n * 6.4)).join("")}`;
};
const croquis = {
  portada: {
    dividida: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><path d="M6 11h22M6 17h16" class="c-grueso"/><rect x="6" y="24" width="14" height="5" class="c-boton"/><rect x="36" y="1" width="27" height="34" class="c-foto"/>',
    foto: '<rect x="1" y="1" width="62" height="34" class="c-foto"/><rect x="1" y="1" width="36" height="34" class="c-velo"/><path d="M6 11h22M6 17h16" class="c-grueso"/><rect x="6" y="24" width="14" height="5" class="c-boton"/>',
    invertida: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="1" y="1" width="27" height="34" class="c-foto"/><path d="M34 11h22M34 17h16" class="c-grueso"/><rect x="34" y="24" width="14" height="5" class="c-boton"/>',
    palabras: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><path d="M6 9h44M6 17h32" class="c-enorme"/><rect x="1" y="23" width="62" height="12" class="c-foto"/>',
  },
  listado: {
    tarjetas: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="6" y="6" width="15" height="24" class="c-caja"/><rect x="24.5" y="6" width="15" height="24" class="c-caja"/><rect x="43" y="6" width="15" height="24" class="c-caja"/>',
    grandes: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="6" y="6" width="24" height="24" class="c-caja"/><rect x="34" y="6" width="24" height="24" class="c-caja"/>',
    renglones: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="6" y="5" width="16" height="11" class="c-foto"/><path d="M26 9h24M26 13h14"/><rect x="6" y="20" width="16" height="11" class="c-foto"/><path d="M26 24h24M26 28h14"/>',
  },
  estilo: {
    plano: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="14" y="7" width="36" height="22" class="c-caja"/>',
    blando: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="15" y="10" width="36" height="22" rx="1" class="c-sombra-suave"/><rect x="14" y="7" width="36" height="22" class="c-caja c-sin-borde"/>',
    recorte: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="17" y="10" width="36" height="22" class="c-sombra-dura"/><rect x="14" y="7" width="36" height="22" class="c-caja c-borde-grueso"/>',
    editorial: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><path d="M14 8h36" class="c-raya"/><path d="M14 15h28M14 21h20M14 27h24"/>',
  },
  esquinas: {
    rectas: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="12" y="7" width="40" height="13" class="c-caja"/><rect x="12" y="24" width="20" height="7" class="c-boton"/>',
    suaves: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="12" y="7" width="40" height="13" rx="3" class="c-caja"/><rect x="12" y="24" width="20" height="7" rx="2" class="c-boton"/>',
    redondas: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><rect x="12" y="7" width="40" height="13" rx="6" class="c-caja"/><rect x="12" y="24" width="20" height="7" rx="3.5" class="c-boton"/>',
  },
  inicio: Object.fromEntries(inicios.map((i) => [i.id, croquisInicio(i.orden)])),
  luz: {
    oscuro: '<rect x="1" y="1" width="62" height="34" class="c-noche"/><path d="M8 12h26M8 18h18" class="c-grueso c-claro"/><rect x="8" y="24" width="16" height="6" class="c-boton"/>',
    claro: '<rect x="1" y="1" width="62" height="34" class="c-hoja"/><path d="M8 12h26M8 18h18" class="c-grueso"/><rect x="8" y="24" width="16" height="6" class="c-boton"/>',
  },
};
const dibujo = (svg) => `<svg class="sp__croquis" viewBox="0 0 64 36" aria-hidden="true">${svg}</svg>`;

const contenidoOpcion = (grupo, o) => {
  if (grupo === "propuesta") {
    const p = paletaPorId[o.diseno.paleta][o.diseno.luz];
    return `<span class="sp__muestra-prop" aria-hidden="true" style="background:${p.page};color:${p.text};font-family:${fuenteDe[o.diseno.titulos].replace(/"/g, "&quot;")}"><b>JZ</b><i style="background:${p.accent}"></i></span><span class="sp__nombre">${o.etiqueta}</span>`;
  }
  if (grupo === "paleta")
    return `<span class="sp__tira" aria-hidden="true"><i style="background:${o.oscuro.page}"></i><i style="background:${o.oscuro.surface}"></i><i style="background:${o.claro.page}"></i></span><span class="sp__punto" aria-hidden="true" style="background:${o.oscuro.accent}"></span><span class="sp__nombre">${o.etiqueta}</span>`;
  if (grupo === "titulos" || grupo === "texto") return `<span class="sp__aa" aria-hidden="true" style="font-family:&quot;${o.familia}&quot;${o.serif ? ",Georgia,serif" : ""};font-weight:${grupo === "titulos" ? 800 : 500}">Aa</span><span class="sp__nombre">${o.etiqueta}</span>`;
  return `${dibujo(croquis[grupo][o.id])}<span class="sp__nombre">${o.etiqueta}</span>`;
};

const panelGrupos = grupos
  .map((g) => {
    if (g.id === "ficha")
      return `<div class="sp__grupo" data-grupo="ficha" hidden><p class="sp__nota" data-nota="ficha">${g.intro}</p></div>`;
    if (g.id === "resumen")
      return `<div class="sp__grupo" data-grupo="resumen" hidden><p class="sp__nota">${g.intro}</p><div class="sp__resumen"><dl id="sp-tabla"></dl><a class="sp__enviar" id="sp-enviar" href="https://wa.me/?text=" target="_blank" rel="noopener">Enviar mi elección por WhatsApp</a></div></div>`;
    const opciones = opcionesDe[g.id].map((o) => `<button type="button" class="sp__opcion" data-grupo="${g.id}" data-valor="${o.id}" aria-pressed="false">${contenidoOpcion(g.id, o)}</button>`).join("");
    return `<div class="sp__grupo" data-grupo="${g.id}"${g.id === "propuesta" ? "" : " hidden"}><p class="sp__nota" data-nota="${g.id}">${g.intro}</p><div class="sp__fila${opcionesDe[g.id].length > 8 ? " sp__fila--ancha" : ""}" role="group" aria-label="${g.etiqueta}">${opciones}</div></div>`;
  })
  .join("");

const datosPanel = {
  grupos: grupos.map(({ id, etiqueta, intro }) => ({ id, etiqueta, intro })),
  opciones: Object.fromEntries(Object.entries(opcionesDe).map(([g, lista]) => [g, lista.map(({ id, etiqueta, nota, diseno }) => ({ id, etiqueta, nota, diseno }))])),
  paginaDe,
  colores: Object.fromEntries(paletas.map((p) => [p.id, { nombre: p.etiqueta, nota: p.nota, oscuro: p.oscuro, claro: p.claro }])),
  familias: { titulos: Object.fromEntries(titulos.map((l) => [l.id, l.familia])), texto: Object.fromEntries(textos.map((l) => [l.id, l.familia])) },
  inicial: { propuesta: "p1", ...propuestas[0].diseno },
};

const panel = `
<style>
${cssPaletas}
${cssDiseno}
[data-reveal],[data-reveal]>*{opacity:1!important;transform:none!important;clip-path:none!important}
.fab{display:none!important}
.sp{position:fixed;left:0;right:0;bottom:0;z-index:1000;background:#f4f5f7;color:#16181c;border-top:1px solid #9aa0a8;box-shadow:0 -8px 24px rgb(0 0 0/.18);font:500 15px/1.35 system-ui,-apple-system,"Segoe UI",sans-serif;padding-bottom:env(safe-area-inset-bottom)}
.sp *{box-sizing:border-box}
.sp__cabeza{display:flex;align-items:stretch;border-bottom:1px solid #c9cdd3}
.sp__pestanas{display:flex;flex:1;min-width:0;overflow-x:auto;scrollbar-width:none}
.sp__pestanas::-webkit-scrollbar,.sp__fila::-webkit-scrollbar{display:none}
.sp button,.sp a{font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}
.sp__pestana{flex:none;min-height:44px;padding:0 14px;border:0;border-bottom:3px solid transparent;background:none;white-space:nowrap}
.sp__pestana[aria-pressed="true"]{border-bottom-color:#16181c;font-weight:700}
.sp__pestana--enviar{font-weight:700}
.sp__plegar{flex:none;min-height:44px;padding:0 14px;border:0;border-left:1px solid #c9cdd3;background:#e9ebee;white-space:nowrap}
.sp__cuerpo{padding:10px 16px 12px}
.sp[data-abierto="false"] .sp__cuerpo{display:none}
.sp__nota{margin:0 0 8px;color:#454b54;font-size:13.5px;max-width:110ch}
.sp__fila{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}
.sp__fila--ancha{flex-wrap:wrap;max-height:min(30svh,136px);overflow-y:auto;overflow-x:hidden;align-content:flex-start}
.sp__opcion{flex:none;display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:6px 14px 6px 8px;border:1px solid #9aa0a8;background:#fff;text-align:left;transition:border-color .15s ease,background-color .15s ease}
.sp__opcion[aria-pressed="true"]{border:2px solid #16181c;padding:5px 13px 5px 7px;background:#fff;box-shadow:inset 0 0 0 1px #16181c}
.sp__opcion[aria-pressed="true"] .sp__nombre::after{content:"";display:inline-block;width:14px;height:14px;margin-left:6px;vertical-align:-2px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%2316181c' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m3 8.5 3.2 3.2L13 5'/%3E%3C/svg%3E") center/contain no-repeat}
@media (hover:hover) and (pointer:fine){.sp__opcion:hover{border-color:#16181c}.sp__pestana:hover{background:#e9ebee}}
.sp__opcion:active{transform:scale(.98)}
@media (prefers-reduced-motion:reduce){.sp__opcion:active{transform:none}}
.sp__nombre{white-space:nowrap}
.sp__croquis{width:56px;height:32px;flex:none}
.sp__croquis *{fill:none;stroke:#5b616a;stroke-width:1.4}
.sp__croquis .c-hoja{fill:#fff;stroke:#9aa0a8}
.sp__croquis .c-noche{fill:#1d2126;stroke:#1d2126}
.sp__croquis .c-foto{fill:#b7bec6;stroke:none}
.sp__croquis .c-velo{fill:rgb(255 255 255/.82);stroke:none}
.sp__croquis .c-caja{fill:#fff;stroke:#5b616a}
.sp__croquis .c-sin-borde{stroke:none}
.sp__croquis .c-borde-grueso{stroke:#16181c;stroke-width:2.2}
.sp__croquis .c-sombra-suave{fill:#c6cbd1;stroke:none;filter:blur(1.5px)}
.sp__croquis .c-sombra-dura{fill:#16181c;stroke:none}
.sp__croquis .c-raya{stroke:#16181c;stroke-width:2.4}
.sp__croquis .c-boton{fill:#16181c;stroke:none}
.sp__croquis .c-grueso{stroke-width:3.2;stroke:#16181c}
.sp__croquis .c-claro{stroke:#e8eaed}
.sp__croquis .c-enorme{stroke-width:5;stroke:#16181c}
.sp__tira{display:inline-flex;height:28px;border:1px solid #777}
.sp__tira i{width:12px}
.sp__punto{width:16px;height:16px;border-radius:50%;border:1px solid #555;flex:none}
.sp__aa{font-size:24px;font-weight:700;line-height:1;width:36px;text-align:center}
.sp__muestra-prop{position:relative;display:inline-flex;align-items:center;justify-content:center;width:52px;height:36px;border:1px solid #777;font-size:17px}
.sp__muestra-prop i{position:absolute;right:4px;bottom:4px;width:10px;height:10px;border-radius:50%}
.sp__resumen{display:flex;flex-wrap:wrap;gap:10px 24px;align-items:center}
.sp__resumen dl{display:flex;flex-wrap:wrap;gap:4px 18px;margin:0;font-size:14px}
.sp__resumen dl div{display:flex;gap:6px}
.sp__resumen dt{color:#454b54}
.sp__resumen dd{margin:0;font-weight:700}
.ficha{max-width:var(--container-width,1440px);margin-inline:auto;padding:calc(var(--header-height,80px) + 2rem) var(--margin-mobile,20px) 4rem;color:var(--color-text)}
@media (min-width:960px){.ficha{padding-inline:var(--margin-desktop,64px)}}
.ficha h1{font-size:clamp(2rem,4vw,3rem);margin:0 0 .75rem}
.ficha h2{font-size:1.5rem;margin:2.5rem 0 .5rem}
.ficha p{max-width:68ch;color:var(--color-text-muted)}
.ficha__scroll{overflow-x:auto;margin:1rem 0;border:1px solid var(--color-border)}
.ficha table{width:100%;min-width:660px;border-collapse:collapse;font-size:.9375rem}
.ficha th,.ficha td{padding:.7rem .9rem;text-align:left;border-bottom:1px solid var(--color-border);vertical-align:middle}
.ficha tbody tr:last-child>*{border-bottom:0}
.ficha thead th{font-size:.75rem;letter-spacing:.08em;text-transform:uppercase;color:var(--color-text-muted)}
.ficha tbody th{font-weight:600}
.ficha td.on{background:var(--color-surface)}
.ficha__chip{display:inline-flex;align-items:center;gap:.6rem}
.ficha__chip i{width:28px;height:28px;border:1px solid var(--color-steel-medium);flex:none}
.ficha code{font:500 .8125rem ui-monospace,Consolas,monospace}
.ficha .ok{color:var(--color-ok)}.ficha .warn{color:var(--color-warn)}
.ficha__reglas{margin:.5rem 0 0;padding-left:1.2rem;display:grid;gap:.4rem;max-width:68ch}
.sp__enviar{display:inline-flex;align-items:center;min-height:48px;padding:0 18px;background:#16181c;color:#fff!important;font-weight:700;text-decoration:none;white-space:nowrap}
.sp :focus-visible{outline:2px solid #16181c;outline-offset:2px}
body{padding-bottom:var(--alto-panel,200px)}
</style>
${plantillas}
${plantillaFicha}
<aside class="sp" data-abierto="true" aria-label="Elegir el diseño del sitio">
  <div class="sp__cabeza">
    <div class="sp__pestanas" role="group" aria-label="Qué quieres cambiar">${grupos
      .map((g) => `<button type="button" class="sp__pestana${g.id === "resumen" ? " sp__pestana--enviar" : ""}" data-ir="${g.id}" aria-pressed="${g.id === "propuesta"}">${g.etiqueta}</button>`)
      .join("")}</div>
    <button type="button" class="sp__plegar" id="sp-plegar" aria-expanded="true">Ocultar</button>
  </div>
  <div class="sp__cuerpo">${panelGrupos}</div>
</aside>
<script>
(() => {
  const datos = ${JSON.stringify(datosPanel)};
  const raiz = document.documentElement;
  const panel = document.querySelector(".sp");
  const perillas = ["paleta", "luz", "titulos", "texto", "portada", "listado", "inicio", "estilo", "esquinas"];
  const limpia = (ruta) => (ruta.length > 1 && ruta.endsWith("/") ? ruta.slice(0, -1) : ruta);
  const nombre = (grupo, id) => ((datos.opciones[grupo] || []).find((o) => o.id === id) || {}).etiqueta || id;
  const opcion = (grupo, id) => (datos.opciones[grupo] || []).find((o) => o.id === id);
  let pagina = "/";
  let grupoActivo = "propuesta";

  const medir = () => document.body.style.setProperty("--alto-panel", panel.offsetHeight + 16 + "px");

  const lin = (v) => (v / 255 <= 0.04045 ? v / 255 / 12.92 : Math.pow((v / 255 + 0.055) / 1.055, 2.4));
  const lum = (h) => [1, 3, 5].map((i) => lin(parseInt(h.slice(i, i + 2), 16))).reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
  const ratio = (a, b) => { const x = lum(a); const y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  const coma = (n) => n.toFixed(1).replace(".", ",") + ":1";
  const chip = (h) => '<span class="ficha__chip"><i style="background:' + h + '"></i><code>' + h + "</code></span>";

  const renderFicha = () => {
    if (pagina !== "/ficha") return;
    const pal = datos.colores[raiz.dataset.paleta];
    if (!pal) return;
    const o = pal.oscuro;
    const c = pal.claro;
    document.getElementById("fc-nombre").textContent = pal.nombre;
    document.getElementById("fc-nota").textContent = pal.nota;
    const filas = [
      ["Lienzo", "Fondo de la página, la cabecera y el pie.", o.page, c.page, null],
      ["Elevado", "Tarjetas y bandas; en modo claro, las secciones alternas.", o.bg, c.bg, null],
      ["Superficie", "Campos de formulario y fondos suaves.", o.surface, c.surface, null],
      ["Borde", "Líneas de 1 px entre bloques, tarjetas y fotos.", o.border, c.border, null],
      ["Texto", "Títulos y párrafos principales.", o.text, c.text, [ratio(o.text, o.page), ratio(c.text, c.page)]],
      ["Texto apagado", "Descripciones, datos y apoyos.", o["text-muted"], c["text-muted"], [ratio(o["text-muted"], o.page), ratio(c["text-muted"], c.page)]],
      ["Acción", "Relleno de los botones y color de enlaces y subrayados.", o.accent, c.accent, [ratio(o.accent, o.page), ratio(c.accent, c.page)]],
      ["Texto del botón", "Letra sobre el botón principal.", o["on-accent"], c["on-accent"], [ratio(o["on-accent"], o.accent), ratio(c["on-accent"], c.accent)]],
      ["Error", "Mensajes de error del formulario.", o.error, c.error, [ratio(o.error, o.page), ratio(c.error, c.page)]],
    ];
    const claro = raiz.dataset.luz === "claro";
    document.getElementById("fc-colores").innerHTML = filas
      .map((f) => {
        const r = f[4];
        const celda = r ? '<span class="' + (Math.min(r[0], r[1]) >= 4.5 ? "ok" : "warn") + '">' + coma(r[0]) + " · " + coma(r[1]) + "</span>" : "—";
        return '<tr><th scope="row">' + f[0] + "</th><td>" + f[1] + "</td><td" + (claro ? "" : ' class="on"') + ">" + chip(f[2]) + "</td><td" + (claro ? ' class="on"' : "") + ">" + chip(f[3]) + "</td><td>" + celda + "</td></tr>";
      })
      .join("");
    const tit = datos.familias.titulos[raiz.dataset.titulos];
    const tex = datos.familias.texto[raiz.dataset.texto];
    document.getElementById("fc-letras").innerHTML =
      '<tr><th scope="row">Títulos</th><td style="font-family:var(--font-heading);font-weight:800;font-size:1.5rem;line-height:1.1">Mesones a medida</td><td>' + tit + "</td><td>Portada, títulos de sección, nombres de producto.</td></tr>" +
      '<tr><th scope="row">Texto</th><td style="font-family:var(--font-body)">Plancha cortada y plegada a la medida</td><td>' + tex + "</td><td>Párrafos, menús, formularios y botones.</td></tr>";
  };

  const guardar = () => {
    const estado = new URLSearchParams();
    for (const p of ["propuesta", ...perillas]) if (raiz.dataset[p]) estado.set(p, raiz.dataset[p]);
    if (pagina !== "/") estado.set("pagina", pagina);
    history.replaceState(null, "", "#" + estado.toString());
  };

  const pintar = () => {
    panel.querySelectorAll(".sp__opcion").forEach((b) => b.setAttribute("aria-pressed", String(raiz.dataset[b.dataset.grupo] === b.dataset.valor)));
    panel.querySelectorAll("[data-nota]").forEach((p) => {
      const g = p.dataset.nota;
      const intro = datos.grupos.find((x) => x.id === g).intro;
      const elegida = opcion(g, raiz.dataset[g]);
      p.textContent = elegida ? intro + " Elegida: " + elegida.etiqueta + ". " + elegida.nota : intro;
    });
    const propuesta = raiz.dataset.propuesta;
    const filas = [["Propuesta", propuesta ? nombre("propuesta", propuesta) : "Combinación propia"], ...perillas.map((p) => [datos.grupos.find((g) => g.id === p).etiqueta, nombre(p, raiz.dataset[p])])];
    document.getElementById("sp-tabla").innerHTML = filas.map(([k, v]) => "<div><dt>" + k + ":</dt><dd>" + v + "</dd></div>").join("");
    const texto = "Hola, elegí este diseño para el sitio de JZ INOX:\\n" + filas.map(([k, v]) => "- " + k + ": " + v).join("\\n");
    document.getElementById("sp-enviar").href = "https://wa.me/?text=" + encodeURIComponent(texto);
    renderFicha();
    guardar();
  };

  const abrir = (ruta, ancla) => {
    const plantilla = document.querySelector('template[data-pagina="' + ruta + '"]');
    if (!plantilla) return false;
    document.querySelector("main").replaceWith(plantilla.content.cloneNode(true));
    pagina = ruta;
    document.querySelectorAll(".header__link").forEach((enlace) => {
      const activo = limpia(new URL(enlace.getAttribute("href"), "http://x").pathname) === ruta;
      enlace.classList.toggle("header__link--active", activo);
      activo ? enlace.setAttribute("aria-current", "page") : enlace.removeAttribute("aria-current");
    });
    const menu = document.getElementById("nav-toggle");
    if (menu) menu.checked = false;
    const destino = ancla && document.getElementById(ancla);
    destino ? destino.scrollIntoView() : window.scrollTo(0, 0);
    renderFicha();
    guardar();
    return true;
  };

  const mostrarGrupo = (id) => {
    grupoActivo = id;
    if (id === "ficha" && pagina !== "/ficha") abrir("/ficha");
    panel.querySelectorAll(".sp__pestana").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.ir === id)));
    panel.querySelectorAll(".sp__grupo").forEach((g) => (g.hidden = g.dataset.grupo !== id));
    panel.dataset.abierto = "true";
    document.getElementById("sp-plegar").setAttribute("aria-expanded", "true");
    document.getElementById("sp-plegar").textContent = "Ocultar";
    medir();
  };

  const elegir = (grupo, valor) => {
    if (grupo === "propuesta") {
      Object.assign(raiz.dataset, opcion("propuesta", valor).diseno);
      raiz.dataset.propuesta = valor;
      if (pagina !== "/") abrir("/");
      window.scrollTo(0, 0);
    } else {
      raiz.dataset[grupo] = valor;
      const base = opcion("propuesta", raiz.dataset.propuesta);
      if (base && perillas.some((p) => base.diseno[p] !== raiz.dataset[p])) delete raiz.dataset.propuesta;
      const destino = datos.paginaDe[grupo];
      if (destino && pagina !== destino) abrir(destino);
      else if (grupo === "portada") window.scrollTo(0, 0);
      if (grupo === "inicio") {
        const portada = document.querySelector("main > .hero");
        window.scrollTo(0, portada ? Math.max(0, portada.offsetHeight - 140) : 0);
      }
    }
    pintar();
  };

  panel.addEventListener("click", (evento) => {
    const pestana = evento.target.closest(".sp__pestana");
    if (pestana) return mostrarGrupo(pestana.dataset.ir);
    const boton = evento.target.closest(".sp__opcion");
    if (boton) return elegir(boton.dataset.grupo, boton.dataset.valor);
    if (evento.target.closest("#sp-plegar")) {
      const abierto = panel.dataset.abierto !== "true";
      panel.dataset.abierto = String(abierto);
      evento.target.setAttribute("aria-expanded", String(abierto));
      evento.target.textContent = abierto ? "Ocultar" : "Ver opciones";
      medir();
    }
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
  Object.assign(raiz.dataset, datos.inicial);
  if (opcion("propuesta", pedido.get("propuesta"))) Object.assign(raiz.dataset, opcion("propuesta", pedido.get("propuesta")).diseno, { propuesta: pedido.get("propuesta") });
  for (const p of perillas) if (opcion(p, pedido.get(p))) raiz.dataset[p] = pedido.get(p);
  const base = opcion("propuesta", raiz.dataset.propuesta);
  if (base && perillas.some((p) => base.diseno[p] !== raiz.dataset[p])) delete raiz.dataset.propuesta;
  if (pedido.get("pagina")) abrir(pedido.get("pagina"));
  pintar();
  medir();
  window.addEventListener("resize", medir);
})();
</script>`;

let html = leer("/");
html = html
  .replace(/<link rel="stylesheet" href="[^"]+">/g, "")
  .replace("</head>", `${[...hojas].map((href) => `<style>${readFileSync(path.join(dist, href), "utf8")}</style>`).join("")}${[...estilosDePagina].map((css) => `<style>${css}</style>`).join("")}</head>`)
  .replace("</body>", `${panel}</body>`)
  .replace(/<link rel="(?:preload|canonical|icon|apple-touch-icon|sitemap|alternate)"[^>]*>/g, "")
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "")
  .replace(/<script\b(?![^>]*>\s*\(\(\) => \{\s*const datos)[^>]*>[\s\S]*?<\/script>/g, "")
  .replace(/\ssrcset="[^"]*"/g, "")
  .replace(/\ssizes="[^"]*"/g, "")
  .replace(/src="(\/[^"]+)"/g, (_, src) => `src="${comoDato(src)}"`)
  .replace(/url\((["']?)(\/[^)"']+)\1\)/g, (_, _q, ruta) => `url(${comoDato(ruta)})`)
  .replace(/url\(&quot;(\/[^)&]+)&quot;\)/g, (_, ruta) => `url(${comoDato(ruta)})`)
  .replace(/<meta name="robots"[^>]*>/g, "")
  .replace("<head>", '<head><meta name="robots" content="noindex">')
  .replace(/<title>[\s\S]*?<\/title>/, "<title>JZ INOX: elige el diseño del sitio</title>")
  .replace(/<html([^>]*)>/, '<html$1 data-paleta="opcion-1" data-luz="oscuro">');

const externos = [...html.matchAll(/(?:src)="(\/[^"#][^"]*)"/g)].map((m) => m[1]);
mkdirSync(path.dirname(salida), { recursive: true });
writeFileSync(salida, html);
console.log(`${path.relative(raiz, salida)}  ${Math.round(statSync(salida).size / 1024)} KB, ${rutas.length} páginas, ${propuestas.length} propuestas, ${paletas.length} paletas, ${titulos.length} letras de títulos, ${textos.length} de texto, ${inicios.length} órdenes del Inicio`);
if (externos.length) console.log(`Quedaron ${externos.length} recursos sin incrustar: ${[...new Set(externos)].slice(0, 8).join(", ")}`);
console.log(avisos.length ? `Avisos de color:\n${avisos.join("\n")}` : `Las ${paletas.length - 1} paletas cumplen contraste AA y tienen un color de acción aparte de la base, en oscuro y en claro`);
