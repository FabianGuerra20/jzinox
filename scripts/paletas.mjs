// Paletas extra del selector (propuestas/elegir-diseno.html). Cada una se define con 7 colores por modo
// y el resto (superficie, pie, hover, gris medio) se deriva; así todas siguen la misma regla de contraste.
// Orden de los 7: [lienzo, elevado, borde, texto, texto apagado, acción, texto sobre la acción].
// Origen: las del archivo del 12 nov, las de octubre (paletas.html) y las nuevas de la sesión del 17 nov.

const aNum = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const aHex = (rgb) => "#" + rgb.map((v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, "0")).join("");
const mezcla = (a, b, t) => {
  const [x, y] = [aNum(a), aNum(b)];
  return aHex(x.map((v, i) => v + (y[i] - v) * t));
};

const estadosOscuro = { error: "#ff8a7a", warn: "#e2b04a", ok: "#7bd89a" };
const estadosClaro = { error: "#b3261e", warn: "#8a5a00", ok: "#1f6b34" };

const oscuro = ([page, bg, border, text, muted, accent, on]) => ({
  page,
  bg,
  surface: mezcla(bg, text, 0.07),
  border,
  "steel-medium": mezcla(border, text, 0.35),
  footer: mezcla(page, "#000000", 0.35),
  text,
  "text-muted": muted,
  accent,
  "accent-dark": mezcla(accent, "#ffffff", 0.25),
  "on-accent": on,
  ...estadosOscuro,
});

const claro = ([page, bg, border, text, muted, accent, on]) => ({
  page,
  bg,
  surface: mezcla(page, "#ffffff", 0.55),
  border,
  "steel-dark": mezcla(text, page, 0.2),
  text,
  "text-muted": muted,
  accent,
  "accent-dark": mezcla(accent, "#000000", 0.28),
  "on-accent": on,
  ...estadosClaro,
});

const paleta = (id, etiqueta, nota, o, c) => ({ id, etiqueta, nota, oscuro: oscuro(o), claro: claro(c) });

export const paletasExtra = [
  // --- Con color en la base (17 nov): el color manda en el fondo y no solo en el botón.
  // Ideas: verde y naranja de Miller Fabrication, verde de máquina de Faber Birren (color industrial),
  // y la secuencia del acero al calor (paja, dorado, azul, púrpura).
  paleta("marino", "Marino y naranja seguridad", "Azul marino de verdad en el fondo, con el naranja de señalética para los botones.",
    ["#0a2342", "#12325c", "#3d5f8f", "#eef3fa", "#a9bcd6", "#ff7a1a", "#1a0d00"],
    ["#e3ebf5", "#ffffff", "#a8b8cf", "#0a2342", "#3f5675", "#b34700", "#ffffff"]),
  paleta("pino", "Pino y naranja", "Verde pino profundo con naranja de fragua; el verde y naranja de los talleres de fabricación.",
    ["#0b2a21", "#123a2e", "#3c6a58", "#eaf5f0", "#a3c4b6", "#ff8a3d", "#1a0d00"],
    ["#e1eee7", "#ffffff", "#a5c4b4", "#0b2a21", "#3b5f50", "#b04600", "#ffffff"]),
  paleta("maquina", "Verde máquina y rojo alerta", "El verde pálido con que se pintaban las máquinas de taller y un rojo de aviso para actuar.",
    ["#12302a", "#1a4037", "#4d8070", "#e8f6f0", "#a6cdbf", "#ff6b57", "#1f0a06"],
    ["#d6ebe0", "#ffffff", "#98bfad", "#0f2f26", "#3a6050", "#b52e18", "#ffffff"]),
  paleta("templado", "Templado: púrpura y paja", "Los dos colores del acero soldado al calor: púrpura de fondo y dorado paja para actuar.",
    ["#1a1445", "#251d5e", "#5a50a0", "#f0eefb", "#b5afdc", "#f4c542", "#1a1400"],
    ["#e8e5f6", "#ffffff", "#b3acd6", "#1a1445", "#4a4478", "#7a5600", "#ffffff"]),
  paleta("grua", "Amarillo grúa y marino", "Amarillo de maquinaria pesada como color principal y azul marino para los botones.",
    ["#17130a", "#241e0f", "#6b5a1a", "#fbf3d4", "#cbbd85", "#ffd21f", "#17130a"],
    ["#f5c518", "#fff8dc", "#a88400", "#17130a", "#4a3d08", "#1a2f6b", "#ffffff"]),
  paleta("arco", "Arco eléctrico", "Azul real intenso, como el arco de la soldadura, con un amarillo de chispa.",
    ["#0a1650", "#12227a", "#4558c4", "#eef1ff", "#b3bdf0", "#ffe14d", "#141000"],
    ["#e3e8ff", "#ffffff", "#aab5ec", "#0a1650", "#3e4a8f", "#725500", "#ffffff"]),
  paleta("verdin", "Verdín y cobre", "Verde azulado de cobre oxidado con cobre nuevo para los botones; sale por completo de los grises.",
    ["#0c2e2d", "#13403e", "#3f7a77", "#e6f6f4", "#9fcdc8", "#f0955f", "#1f0e03"],
    ["#dcefec", "#ffffff", "#9bc3be", "#0c2e2d", "#3a6562", "#a0430f", "#ffffff"]),
  paleta("granate", "Granate y paja", "Rojo granate profundo, como hierro al rojo, con dorado paja para los botones.",
    ["#3a0f12", "#4d171b", "#8a4a50", "#fdf0ee", "#e0b4b4", "#ffc247", "#1f1200"],
    ["#f8e6e4", "#ffffff", "#d9aeab", "#3a0f12", "#70403f", "#7a5200", "#ffffff"]),
  // --- Rojos y cálidos ---
  paleta("ladrillo", "Ladrillo", "Rojo ladrillo, el del mockup de agosto, sobre grafito y gris acero.",
    ["#151718", "#23272a", "#4b5258", "#f1f2f3", "#a3a9ae", "#f0705f", "#151718"],
    ["#eceeef", "#ffffff", "#b1b7bc", "#151718", "#4b5258", "#c13d2f", "#ffffff"]),
  paleta("rojo", "Rojo taller", "Rojo vivo de máquina sobre negro cálido; el más directo.",
    ["#141111", "#211c1b", "#54474a", "#f4eeec", "#b0a4a0", "#ff5446", "#141111"],
    ["#efe9e6", "#ffffff", "#bcaeaa", "#141111", "#5a4d4a", "#b3261e", "#ffffff"]),
  paleta("burdeos", "Burdeos", "Vino oscuro sobre gris neutro; sobrio y más serio que el rojo.",
    ["#141516", "#202225", "#4a4e53", "#f1f1f2", "#a4a7ab", "#d46a76", "#141516"],
    ["#eeeeec", "#ffffff", "#b4b7ba", "#141516", "#4d5156", "#7d1d2c", "#ffffff"]),
  paleta("frambuesa", "Frambuesa", "Rosa frambuesa sobre grafito; llamativo y poco común en el rubro.",
    ["#151315", "#211d20", "#51484e", "#f2eef0", "#aaa1a7", "#ff5c93", "#1a0c12"],
    ["#efe9ec", "#ffffff", "#b9aab2", "#151315", "#56494f", "#b0124f", "#ffffff"]),
  paleta("cobre", "Medianoche y cobre", "Azul de medianoche con el cobre de la soldadura como único color.",
    ["#0e1522", "#17212f", "#44546b", "#eaeef5", "#9fabbd", "#f0955f", "#1f0e03"],
    ["#e6eaf1", "#ffffff", "#aab4c4", "#0e1522", "#465367", "#a0430f", "#ffffff"]),
  paleta("calor-tig", "Calor TIG", "Negro cálido y hueso, con el dorado paja del acero recién soldado.",
    ["#14120f", "#1e1b17", "#6b6256", "#f1ece4", "#b3a898", "#e2b04a", "#14120f"],
    ["#efe9df", "#ffffff", "#cfc6b6", "#14120f", "#5c5246", "#8a5a00", "#ffffff"]),
  paleta("chocolate", "Chocolate y turquesa", "Marrón oscuro de fragua con turquesa; el contraste más inesperado.",
    ["#1a1411", "#28201b", "#5f5148", "#f4ede8", "#b3a69d", "#3ddcc8", "#07201b"],
    ["#efe8e2", "#ffffff", "#bfb0a5", "#1a1411", "#5a4a40", "#006f60", "#ffffff"]),
  // --- Azules y fríos ---
  paleta("prusia", "Azul Prusia", "Azul de tinta sobre grafito frío; serio y corporativo.",
    ["#0f1419", "#1a2129", "#414c58", "#eef1f4", "#a0aab5", "#7db4f2", "#0f1419"],
    ["#eceef0", "#ffffff", "#b2b9c0", "#0f1419", "#4a535d", "#1d4a8f", "#ffffff"]),
  paleta("cobalto", "Cobalto de soldadura", "Hueso claro y tinta, con el azul del acero templado.",
    ["#12141c", "#1d202b", "#4d5160", "#f3f0ea", "#c7c4be", "#aab2ff", "#12141c"],
    ["#f3f0ea", "#ffffff", "#d4cfc5", "#12141c", "#4d5160", "#3946b8", "#ffffff"]),
  paleta("acero-frio", "Acero frío y chispa", "Gris azulado como acero en sombra y naranja de chispa.",
    ["#0f1215", "#181c20", "#5d6870", "#e9edf0", "#9aa5ad", "#ff6a1a", "#0f1215"],
    ["#e4e8eb", "#ffffff", "#c4cbd0", "#0f1215", "#4a555c", "#a33a04", "#ffffff"]),
  paleta("hielo", "Cian hielo", "Acero inoxidable frío con un cian de hielo; limpio, de cocina.",
    ["#0f161b", "#19232b", "#435663", "#e8f0f4", "#9db0bb", "#3fd0f4", "#07181f"],
    ["#e4ecf0", "#ffffff", "#a3b5bf", "#0f161b", "#43565f", "#006a8e", "#ffffff"]),
  paleta("pavon", "Pavón", "Violeta azulado del acero templado a fuego.",
    ["#121318", "#1d1f27", "#4a4c5a", "#f0f0f4", "#a5a7b3", "#9a8de8", "#121318"],
    ["#edeef0", "#ffffff", "#b4b6be", "#121318", "#4c4e5a", "#4a3a9a", "#ffffff"]),
  // --- Verdes ---
  paleta("verde", "Verde máquina", "Verde de panel de control sobre negro verdoso.",
    ["#0d1713", "#15241e", "#3a574a", "#e8f1ec", "#9bb0a5", "#35d38a", "#0d1713"],
    ["#e6ede8", "#ffffff", "#a6b8ad", "#0d1713", "#40574b", "#0e6b3f", "#ffffff"]),
  paleta("bosque", "Bosque y mostaza", "Verde bosque profundo con mostaza; terroso y distinto a todo lo demás.",
    ["#0f1a14", "#17261d", "#3f5a49", "#e9f1ec", "#9db3a5", "#e9b92b", "#1a1405"],
    ["#e7eee9", "#ffffff", "#a8bbae", "#0f1a14", "#435a4c", "#7a5a00", "#ffffff"]),
  paleta("vino", "Vino y aguamarina", "Vino oscuro con aguamarina; el contraste más fuerte de la lista.",
    ["#1a1015", "#281a21", "#5c4350", "#f5eef1", "#b3a1aa", "#52e0bf", "#07201a"],
    ["#efe8eb", "#ffffff", "#bba9b2", "#1a1015", "#5a4650", "#00695a", "#ffffff"]),
];
