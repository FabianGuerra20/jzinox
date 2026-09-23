/**
 * Genera el LEEME.txt de cada maqueta y el COMPARACION.html que las enmarca.
 *
 * Por qué existe el comparador: entregar dos carpetas y esperar que el cliente
 * elija no es pedirle una decisión, es pedirle que adivine. Casi todo lo que
 * cambia entre A y B es invisible hasta que se interactúa. El comparador dice
 * qué cambia, por qué, y qué necesitamos de vuelta.
 *
 * Uso:  node scripts/generar-entrega.mjs <carpeta-escritorio>
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";

const [, , baseArg] = process.argv;
if (!baseArg) {
  console.error("Falta la carpeta base.\n  node scripts/generar-entrega.mjs <carpeta>");
  process.exit(1);
}
const base = path.resolve(baseArg);

const CARPETA_A = "JZINOX-A-fiel-al-mockup";
const CARPETA_B = "JZINOX-B-propuesta-UX";

const PENDIENTES = [
  "Todas las fotografías. Cada hueco gris dice qué foto va ahí y en qué proporción.",
  "Tres de las cuatro cifras de la sección Nosotros. Solo está confirmado «más de 20 años».",
  "La lista de precios real. Los valores del catálogo son de demostración y están rotulados como tales.",
  "La comuna del taller. Av. Departamental cruza La Florida, Macul y San Joaquín.",
  "Los textos marcados como propuesta: servicios detallados, descripciones del catálogo, contacto y galería. El PDF dejó esas secciones vacías y las redactamos nosotros.",
];

const leeme = (titulo, descripcion) => `${titulo}
${"=".repeat(titulo.length)}

${descripcion}

CÓMO ABRIRLA
  Haz doble clic en index.html. Se abre en tu navegador y puedes navegar el
  sitio completo. No necesitas internet ni instalar nada.

  Está pensada para verla en un computador. En el teléfono funciona, pero
  abrir una carpeta descomprimida ahí es incómodo.

QUÉ ES Y QUÉ NO ES
  Es una maqueta navegable: el diseño, la estructura y los textos son los
  definitivos salvo lo que se indica abajo.

  El formulario de contacto NO envía nada. Valida los campos y te lo confirma,
  pero no hay correo detrás: eso se activa cuando el sitio se publique. Lo
  avisa en pantalla para que nadie crea que mandó una consulta.

LO QUE FALTA Y DEPENDE DE TI
${PENDIENTES.map((p, i) => `  ${i + 1}. ${p}`).join("\n\n")}

DUDA ABIERTA
  Tu documento describe «Servicios Detallados y Contacto» como una sola
  sección, pero el sitio las tiene separadas en dos páginas. ¿Las dejamos
  así o las unimos?
`;

const filasComparacion = [
  {
    zona: "Bajo el titular de la portada",
    a: "Se pasa directo a los servicios.",
    b: "Una franja con cuatro datos: 20+ años, fabricación 100% a medida, taller propio y servicio integral, con el teléfono al lado.",
    porque:
      "Quien entra por primera vez decide si confiarte una cocina completa antes de mirar un solo producto. Esa respuesta hoy está en Nosotros, a un clic que casi nadie da. Los cuatro datos salen de los «puntos clave» de tu propio documento.",
  },
  {
    zona: "Menú de navegación",
    a: "Siete entradas, con Productos y Catálogo separados.",
    b: "Seis entradas. Productos y Catálogo se funden en una sola, y la dirección antigua sigue funcionando.",
    porque:
      "Las dos páginas mostraban los mismos quince productos; Catálogo además traía los precios. Dos direcciones propias compitiendo por las mismas búsquedas de Google se quitan fuerza entre sí, y cada cambio de producto había que hacerlo dos veces.",
  },
  {
    zona: "Pie de cada página",
    a: "Solo los enlaces habituales.",
    b: "Un enlace «Siguiente» que propone a dónde ir.",
    porque:
      "El sitio dice en qué página estás, pero no hacia dónde sigue. Quien termina de leer se queda sin camino: vuelve al menú o se va.",
  },
];

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>JZINOX — Dos maquetas para comparar</title>
<link rel="icon" type="image/png" href="./${CARPETA_A}/favicon-32.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  :root {
    --bg: #f9f9f9; --card: #ffffff; --alt: #eeeeee;
    --line: #e5e7eb; --ink: #1a1c1c; --muted: #59413d;
    --accent: #c13d2f; --steel: #5f5e5e;
    --head: "Hanken Grotesk", "Segoe UI", sans-serif;
    --body: "Inter", "Segoe UI", sans-serif;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font-family: var(--body); line-height: 1.6; }
  .wrap { max-width: 1100px; margin: 0 auto; padding: 0 clamp(1rem, 4vw, 2rem); }
  h1, h2, h3 { font-family: var(--head); letter-spacing: -0.02em; line-height: 1.15; margin: 0 0 0.5em; }
  h1 { font-size: clamp(1.9rem, 4.5vw, 3rem); text-transform: uppercase; }
  h2 { font-size: clamp(1.4rem, 3vw, 2rem); }
  h3 { font-size: 1.05rem; }
  p { margin: 0 0 1em; }
  a { color: inherit; }

  header { background: var(--steel); color: #fff; padding: clamp(2.5rem, 7vw, 4.5rem) 0; }
  header p { color: rgba(255,255,255,.92); max-width: 62ch; font-size: 1.05rem; margin-bottom: 0; }
  .eyebrow { display: block; font-size: .78rem; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: #fff; opacity: .85; margin-bottom: 1rem; }

  section { padding: clamp(2.5rem, 6vw, 4rem) 0; }
  section.alt { background: var(--alt); }

  .pick { display: grid; gap: 1.5rem; }
  @media (min-width: 820px) { .pick { grid-template-columns: 1fr 1fr; } }
  .opt { background: var(--card); border: 1px solid var(--line); padding: clamp(1.25rem, 3vw, 2rem); display: flex; flex-direction: column; }
  .opt__tag { font-family: var(--head); font-weight: 800; font-size: .78rem; letter-spacing: .14em; text-transform: uppercase; color: var(--accent); margin-bottom: .6rem; }
  .opt p { color: var(--muted); font-size: .95rem; flex: 1; }
  .btn { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: .8rem 1.5rem; font-family: var(--head); font-weight: 700; font-size: .875rem; letter-spacing: .02em; text-transform: uppercase; text-decoration: none; border: 1px solid transparent; }
  .btn--primary { background: var(--accent); color: #fff; }
  .btn--primary:hover { background: #ae3023; }

  table { width: 100%; border-collapse: collapse; background: var(--card); border: 1px solid var(--line); }
  caption { text-align: left; font-family: var(--head); font-weight: 700; padding-bottom: .75rem; }
  th, td { text-align: left; vertical-align: top; padding: 1rem; border-bottom: 1px solid var(--line); font-size: .92rem; }
  thead th { font-family: var(--head); font-size: .75rem; letter-spacing: .1em; text-transform: uppercase; color: var(--steel); background: var(--alt); }
  tbody th { font-weight: 600; width: 22%; }
  td.why { color: var(--muted); }
  tr:last-child th, tr:last-child td { border-bottom: 0; }
  @media (max-width: 720px) {
    thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
    tbody th, td { display: block; width: auto; border-bottom: 0; padding: .35rem 1rem; }
    td::before { content: attr(data-label); display: block; font-family: var(--head); font-size: .7rem; letter-spacing: .1em; text-transform: uppercase; color: var(--steel); margin-bottom: .15rem; }
    tbody th { padding-top: 1rem; }
    tr { display: block; border-bottom: 1px solid var(--line); padding-bottom: .75rem; }
  }

  ol.todo { counter-reset: n; list-style: none; padding: 0; margin: 0; display: grid; gap: 1px; background: var(--line); border: 1px solid var(--line); }
  ol.todo li { counter-increment: n; background: var(--card); padding: 1rem 1.25rem 1rem 3.25rem; position: relative; font-size: .95rem; }
  ol.todo li::before { content: counter(n, decimal-leading-zero); position: absolute; left: 1.25rem; font-family: var(--head); font-weight: 800; font-size: .85rem; color: var(--accent); }

  .note { border: 1px solid #d9c47a; border-left-width: 4px; background: #fdf6e3; padding: 1rem 1.25rem; font-size: .95rem; }
  footer { background: var(--alt); border-top: 1px solid var(--line); padding: 2rem 0; font-size: .82rem; color: var(--steel); }
</style>
</head>
<body>

<header>
  <div class="wrap">
    <span class="eyebrow">JZINOX · Maqueta del sitio web</span>
    <h1>Dos versiones para que elijas</h1>
    <p>
      Las dos tienen el mismo diseño, los mismos textos y las mismas páginas.
      Se diferencian en tres detalles de uso que te explicamos más abajo.
      Ábrelas, compáralas y dinos con cuál seguimos.
    </p>
  </div>
</header>

<section>
  <div class="wrap">
    <div class="pick">
      <article class="opt">
        <span class="opt__tag">Versión A</span>
        <h2>Fiel al diseño aprobado</h2>
        <p>Exactamente lo que aprobaste, con los textos ya cargados. Sin cambios de estructura.</p>
        <p><a class="btn btn--primary" href="./${CARPETA_A}/index.html">Abrir versión A</a></p>
      </article>
      <article class="opt">
        <span class="opt__tag">Versión B</span>
        <h2>Con mejoras de uso</h2>
        <p>Lo mismo, más tres cambios pensados para que al visitante le cueste menos decidir y contactarte.</p>
        <p><a class="btn btn--primary" href="./${CARPETA_B}/index.html">Abrir versión B</a></p>
      </article>
    </div>
  </div>
</section>

<section class="alt">
  <div class="wrap">
    <h2>Qué cambia en la versión B</h2>
    <table>
      <caption class="visually-hidden-caption">Diferencias entre la versión A y la versión B</caption>
      <thead>
        <tr><th scope="col">Zona</th><th scope="col">Versión A</th><th scope="col">Versión B</th><th scope="col">Por qué</th></tr>
      </thead>
      <tbody>
${filasComparacion
  .map(
    (f) => `        <tr>
          <th scope="row">${f.zona}</th>
          <td data-label="Versión A">${f.a}</td>
          <td data-label="Versión B">${f.b}</td>
          <td class="why" data-label="Por qué">${f.porque}</td>
        </tr>`,
  )
  .join("\n")}
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="wrap">
    <h2>Qué necesitamos de ti</h2>
    <p>Sin esto no podemos publicar. Es todo lo que falta.</p>
    <ol class="todo">
      <li><strong>Elegir A o B.</strong> Basta con que nos digas la letra.</li>
${PENDIENTES.map((p) => `      <li>${p}</li>`).join("\n")}
    </ol>
  </div>
</section>

<section class="alt">
  <div class="wrap">
    <h2>Dos cosas que conviene aclarar</h2>
    <p class="note">
      <strong>El formulario no envía nada todavía.</strong> Valida los campos y te lo confirma
      en pantalla, pero no hay correo detrás: eso se conecta al publicar el sitio.
      La maqueta lo avisa para que nadie crea que mandó una consulta.
    </p>
    <p class="note" style="margin-top:1rem">
      <strong>Los precios del catálogo son de ejemplo.</strong> Están rotulados como tales
      dentro de la propia página. Se reemplazan por tu lista real antes de publicar.
    </p>
    <h3 style="margin-top:2rem">Una duda sobre tu documento</h3>
    <p>
      Describes «Servicios Detallados y Contacto» como una sola sección, pero el sitio
      las tiene separadas en dos páginas. ¿Las dejamos así o las unimos?
    </p>
  </div>
</section>

<footer>
  <div class="wrap">
    Maqueta de demostración · Contenido de referencia, pendiente de aprobación.
  </div>
</footer>

</body>
</html>
`;

await writeFile(path.join(base, "COMPARACION.html"), html, "utf8");
await writeFile(
  path.join(base, CARPETA_A, "LEEME.txt"),
  leeme(
    "JZINOX — Maqueta, versión A",
    "Esta es la versión fiel al diseño que aprobaste, con los textos ya cargados.",
  ),
  "utf8",
);
await writeFile(
  path.join(base, CARPETA_B, "LEEME.txt"),
  leeme(
    "JZINOX — Maqueta, versión B",
    "Esta es la versión con mejoras de uso. Mismo diseño y mismos textos que la A,\ncon tres cambios: una franja de datos bajo el titular, el menú reducido a seis\nentradas, y un enlace «Siguiente» al pie de cada página.",
  ),
  "utf8",
);

console.log("COMPARACION.html y los dos LEEME.txt generados en:");
console.log("  " + base);
