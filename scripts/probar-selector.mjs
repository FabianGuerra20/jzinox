// Prueba propuestas/elegir-diseno.html con clics reales, en escritorio y celular: cada opción
// de cada pestaña tiene que cambiar el sitio, el menú tiene que navegar, la galería avanzar
// y el botón de enviar llevar la elección completa.
// Uso: node scripts/probar-selector.mjs  (necesita playwright-core y Edge; usa el de la plantilla de pymes)
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const { chromium } = await import(process.env.PLAYWRIGHT ?? "file:///C:/dev/proyectos/plantilla-pymes/node_modules/playwright-core/index.mjs");
const archivo = pathToFileURL(path.join(raiz, "propuestas", "elegir-diseno.html")).href;
const capturas = path.join(raiz, ".impeccable", "review");
mkdirSync(capturas, { recursive: true });

const navegador = await chromium.launch({ channel: "msedge" });
const problemas = [];
let clics = 0;

// Lo que cada perilla debería mover en el sitio.
const huella = () => {
  const css = (sel, prop) => {
    const el = document.querySelector(sel);
    return el ? getComputedStyle(el)[prop] : "";
  };
  return {
    paleta: css("body", "backgroundColor") + css(".btn--primary", "backgroundColor"),
    luz: css("body", "backgroundColor"),
    titulos: css("main h1", "fontFamily"),
    texto: css("main p", "fontFamily"),
    portada: css(".hero__main", "gridTemplateColumns") + css(".hero__figure", "position") + css(".hero__figure", "aspectRatio") + css(".hero__figure", "order"),
    listado: css(".pcard", "display") + css(".pgrid", "gridTemplateColumns").split(" ").length + css(".pcard__body", "paddingTop"),
    inicio: ["main > .brand-section:not(.section--alt)", "main > .clients-band", "main > .brand-section.section--alt", "main > .services"].map((q) => css(q, "order")).join("-"),
    estilo: css(".pcard", "boxShadow") + css(".pcard", "borderTopWidth") + css(".pcard", "backgroundColor"),
    esquinas: css("main .btn", "borderTopLeftRadius") + css(".pcard", "borderTopLeftRadius"),
  };
};

for (const [dispositivo, ancho, alto] of [["escritorio", 1440, 900], ["celular", 390, 844]]) {
  const pagina = await navegador.newPage({ viewport: { width: ancho, height: alto }, hasTouch: dispositivo === "celular" });
  pagina.on("pageerror", (e) => problemas.push(`${dispositivo}: error de script: ${e.message}`));
  pagina.on("console", (m) => m.type() === "error" && problemas.push(`${dispositivo}: consola: ${m.text().slice(0, 140)}`));
  await pagina.goto(archivo);
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.waitForTimeout(800);

  const grupos = await pagina.evaluate(() => [...document.querySelectorAll(".sp__pestana")].map((b) => b.dataset.ir));
  for (const grupo of grupos) {
    await pagina.locator(`.sp__pestana[data-ir="${grupo}"]`).click({ timeout: 8000 });
    const visible = await pagina.evaluate((g) => {
      const el = document.querySelector(`.sp__grupo[data-grupo="${g}"]`);
      return !el.hidden && el.getBoundingClientRect().height > 20;
    }, grupo);
    if (!visible) problemas.push(`${dispositivo}: la pestaña ${grupo} no muestra sus opciones`);
    if (grupo === "resumen") continue;

    const valores = await pagina.evaluate((g) => [...document.querySelectorAll(`.sp__opcion[data-grupo="${g}"]`)].map((b) => b.dataset.valor), grupo);
    const vistas = new Set();
    for (const valor of valores) {
      clics += 1;
      const boton = pagina.locator(`.sp__opcion[data-grupo="${grupo}"][data-valor="${valor}"]`);
      await boton.scrollIntoViewIfNeeded();
      await boton.click({ timeout: 8000 });
      await pagina.waitForTimeout(120);
      const estado = await pagina.evaluate((g) => ({ dato: document.documentElement.dataset[g], marcado: document.querySelector(`.sp__opcion[data-grupo="${g}"][aria-pressed="true"]`)?.dataset.valor }), grupo);
      if (estado.dato !== valor || estado.marcado !== valor) problemas.push(`${dispositivo}: ${grupo}=${valor} no quedó elegido (quedó ${estado.dato}, marcado ${estado.marcado})`);
      if (grupo !== "propuesta") vistas.add((await pagina.evaluate(huella))[grupo]);
      else {
        vistas.add(JSON.stringify(await pagina.evaluate(huella)));
        await pagina.screenshot({ path: path.join(capturas, `jz-${dispositivo}-${valor}.png`) });
      }
    }
    if (vistas.size !== valores.length) problemas.push(`${dispositivo}: en ${grupo} hay opciones que no cambian el sitio (${vistas.size} vistas distintas para ${valores.length} opciones)`);
  }

  // Volver a la propuesta 1 y recorrer el menú
  await pagina.locator('.sp__pestana[data-ir="propuesta"]').click();
  await pagina.locator('.sp__opcion[data-valor="p1"]').click();
  for (const [ruta, texto] of [["/catalogo", "Productos"], ["/servicios", "Servicios"], ["/nosotros", "Nosotros"], ["/contacto", "Contacto"], ["/", "Inicio"]]) {
    if (ancho < 1280) await pagina.locator('label[for="nav-toggle"]').first().click();
    await pagina.locator(".header__link", { hasText: texto }).first().click({ timeout: 8000 });
    await pagina.waitForTimeout(250);
    const h1 = await pagina.evaluate(() => (document.querySelector("main h1")?.textContent || "").trim());
    if (!h1 || !pagina.url().startsWith("file:")) problemas.push(`${dispositivo}: el menú no abrió ${ruta}`);
    if (ruta === "/catalogo") {
      await pagina.evaluate(() => document.getElementById("carros").scrollIntoView());
      await pagina.waitForTimeout(300);
      const antes = await pagina.locator("#carros [data-count]").first().textContent();
      await pagina.locator('#carros [data-step="1"]').first().click();
      await pagina.waitForTimeout(600);
      const despues = await pagina.locator("#carros [data-count]").first().textContent();
      if (antes === despues) problemas.push(`${dispositivo}: la galería no avanza (${antes})`);
    }
  }

  // Combinaciones que más pueden romperse, con captura
  for (const [nombre, hash, ruta] of [
    ["renglones-recorte", "propuesta=p3", "/catalogo"],
    ["renglones-editorial-redondas", "paleta=opcion-4&luz=claro&listado=renglones&estilo=editorial&esquinas=redondas", "/catalogo"],
    ["foto-claro", "paleta=opcion-2&luz=claro&portada=foto", "/"],
    ["contacto-redondas", "paleta=opcion-1&luz=claro&esquinas=redondas&estilo=blando", "/contacto"],
  ]) {
    await pagina.goto(`${archivo}#${hash}&pagina=${encodeURIComponent(ruta)}`);
    await pagina.reload();
    await pagina.addStyleTag({ content: "html{scroll-behavior:auto!important}" });
    await pagina.evaluate(() => document.fonts.ready);
    await pagina.waitForTimeout(500);
    if (ruta === "/catalogo") await pagina.evaluate(() => document.getElementById("carros").scrollIntoView());
    await pagina.waitForTimeout(300);
    await pagina.screenshot({ path: path.join(capturas, `jz-${dispositivo}-${nombre}.png`) });
    const desborde = await pagina.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (desborde > 0) problemas.push(`${dispositivo}: ${nombre} se desborda ${desborde}px`);
  }

  await pagina.evaluate(() => document.querySelectorAll('img[loading="lazy"]').forEach((i) => i.setAttribute("loading", "eager")));
  await pagina.waitForTimeout(1200);
  const rotas = await pagina.evaluate(() => [...document.images].filter((i) => i.getAttribute("src") && i.naturalWidth === 0).length);
  if (rotas) problemas.push(`${dispositivo}: ${rotas} imágenes sin cargar`);

  await pagina.locator('.sp__pestana[data-ir="resumen"]').click();
  const enviar = decodeURIComponent((await pagina.locator("#sp-enviar").getAttribute("href")).split("text=")[1] ?? "");
  for (const g of ["Colores", "Modo", "Títulos", "Texto", "Portada", "Organización", "Listado", "Estilo", "Esquinas"]) if (!enviar.includes(`- ${g}:`)) problemas.push(`${dispositivo}: el mensaje de WhatsApp no trae ${g}`);
  await pagina.screenshot({ path: path.join(capturas, `jz-${dispositivo}-enviar.png`) });

  await pagina.locator("#sp-plegar").click();
  const plegado = await pagina.evaluate(() => document.querySelector(".sp").offsetHeight);
  if (plegado > 70) problemas.push(`${dispositivo}: al ocultar, el panel sigue midiendo ${plegado}px`);
  await pagina.close();
}

await navegador.close();
console.log(`${clics} opciones probadas con clic, en escritorio y celular`);
console.log(problemas.length ? [...new Set(problemas)].join("\n") : "Todo responde: cada opción cambia el sitio, el menú navega, la galería avanza y el envío lleva la elección completa");
process.exit(problemas.length ? 1 : 0);
