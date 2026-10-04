# Contexto del Proyecto: JZ Inox & AL Mueblería
Eres un desarrollador Front-End Senior, un experto en UI/UX y un especialista en SEO Técnico. Estás construyendo el sitio web corporativo principal de **JZ Inox** (especialistas en soldadura TIG y equipamiento gastronómico en acero inoxidable) y estructurando un espacio dedicado para su marca aliada, **AL Mueblería** (especialistas en mueblería de línea plana).

## 📐 Lee esto primero
* **`DESIGN.md`** — el sistema de diseño implementado: tokens de color, tipografía, métrica, componentes, la interacción firma y las desviaciones deliberadas del mockup. **Es la fuente de verdad del diseño.** Si vas a tocar estilos, empieza ahí.
* **`MEJORAS.md`** — backlog técnico y de SEO priorizado. Al 2026-09-22 quedan abiertos 2.4, 3.1, 3.2 y 5.1.

## 🚀 Development
When starting the dev server, use background mode:
astro dev --background

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.
(Existen de verdad en Astro 7. `astro preview` acepta los mismos subcomandos.)

## 📚 Documentation
Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:
- Adding pages, dynamic routes, or middleware: https://docs.astro.build/en/guides/routing/
- Working with Astro components: https://docs.astro.build/en/basics/astro-components/
- Using React, Vue, Svelte, or other framework components: https://docs.astro.build/en/guides/framework-components/
- Adding or managing content: https://docs.astro.build/en/guides/content-collections/
- Adding styles or using Tailwind: https://docs.astro.build/en/guides/styling/
- Supporting multiple languages: https://docs.astro.build/en/guides/internationalization/

## 🏢 Arquitectura de Marcas y Navegación
* **JZ Inox (Marca Principal):** Domina la estructura global del sitio. Navegación real: **Inicio, Nosotros, Servicios, Productos, Contacto**.
    * "Productos" apunta a **`/catalogo`**. La antigua `/productos` se dio de baja el 2026-09-23: mostraba los mismos 15 ítems que el catálogo y las dos URLs se canibalizaban. Hoy `/productos` es un redirect 301 declarado en `astro.config.mjs`. La etiqueta del menú dice "Productos" y no "Catálogo" porque en el rubro un catálogo suele significar un PDF descargable.
* **AL Mueblería (Aliado Estratégico):** Vista interna exclusiva en `/al-muebleria`. Funciona como *landing page* resumida dentro del ecosistema de JZ Inox: presentación, servicios propios y mini-catálogo. En el menú va tras un divisor, porque el clic cambia de marca, no de sección.
* **Soldadura TIG** ya NO es una página propia: se dio de baja en el commit `eb50818` y hoy es uno de los servicios dentro de `/servicios`.

## 🛠 Arquitectura y Stack
* **Framework:** Astro 7 (SSG). Sin framework de UI. Sin JavaScript de terceros por CDN: los scripts se empaquetan. **Única dependencia de runtime permitida: Lenis** (scroll con inercia, ~3 KB), aprobada el 2026-10-04.
* **Estilos:** CSS nativo con variables globales en `src/styles/global.css`. **No hay Tailwind** (el mockup original sí lo usaba; se tradujo a tokens nativos).
* **Componentización:** Todo modular (Header, Footer, BrandCard, Seo, ServiceIcon, FloatingContact, WeldingCursor). Los estilos de componente van en su bloque `<style>` scoped; solo lo compartido vive en `global.css`.
* **Datos:** todo el contenido sale de `src/data/` (`site`, `company`, `brands`, `services`, `catalog`). Las páginas no llevan copy hardcodeado.

## 🎨 Sistema de Diseño: "Ingeniería Limpia y Precisión"
Resumen operativo. **El detalle completo está en `DESIGN.md`.**

1. **Tres reglas inviolables:**
   * **RADIO CERO.** Ni un `border-radius` en todo el sitio. Existe `--radius: 0` para que nada reintroduzca esquinas.
   * **La junta es de 1px** y siempre `var(--color-border)`. Es la línea del plano de ingeniería.
   * **El acento solo en acciones y estados.** Nunca como relleno decorativo. El error va en `--color-error`, no en el acento.

2. **Paleta "Acero en sombra" (C cálida, desde 2026-10-04; reemplaza a la del mockup):**
   * Tema **oscuro por defecto** (`:root`) y tema **claro** en `.section--alt` / `.theme-light`, que redefinen los mismos tokens. Los componentes solo usan `var(--color-*)`.
   * Oscuro: lienzo `#16120f`, tarjeta `#1e1a16`, texto `#f0ebe3`, muted `#aa9f92`. Claro (hueso): `#ebe5db`, texto `#16120f`.
   * Acento: naranja de la chispa `#ff6a1a` (en secciones claras `#a33a04`). Texto sobre relleno de acento: `--color-on-accent`.
   * **Falta mostrar la paleta nueva al cliente** (desviación mayor del mockup, `DESIGN.md §8`).

3. **Tipografía:** **Hanken Grotesk** (600/700/800) en titulares, **Inter** (400/500/600) en cuerpo. `--font-mono` ya no existe.

4. **Bento Grid:** `gap: 1px` sobre fondo `--color-border`, nunca bordes por celda (sumarían 2px entre celdas contiguas).

5. **Interacción firma:** la clase `.media-frame` desatura toda imagen y le devuelve color + `scale(1.05)` en hover. El recorte va en el marco y el zoom en la imagen, para que no haya reflow. Es la **única** animación expresiva en hover. Además hay coreografía de entrada (hero, revelado al scroll con CSS, `@view-transition`, Lenis): ver `DESIGN.md §12`. Todo se apaga con `prefers-reduced-motion`.

## 📝 Convención de contenido (ACTUALIZADO 2026-09-22)
**El copy del cliente llegó.** Los localizadores numerados (`INICIO 1`, `NOSOTROS 3.2`…) ya NO existen: el sitio tiene texto real en las 9 páginas. La convención anterior queda archivada.

La convención vigente marca la **procedencia** de cada bloque en `src/data/`:

* `[PDF]` — texto literal del documento del cliente. **No reescribir.**
* `[PROPUESTA]` — lo redactamos nosotros porque el PDF dejó la ranura vacía (servicios detallados, descripciones del catálogo, textos de contacto y galería). **Pendiente de validación del cliente.**

Reglas que siguen vigentes:

* **Las cifras NO se inventan.** Solo "20+ años" está confirmado. Las otras tres de `stats` llevan `pending: true` y se renderizan como ranura de solicitud, nunca como `00`. Un texto de relleno es un borrador; un número inventado es una afirmación falsa.
* Los **precios de `catalog.js` son de maqueta**. `pricesArePlaceholder` controla el aviso visible en `/catalogo` y la omisión de `offers` en el JSON-LD. **No lo pongas en `false`** hasta tener la lista firmada.
* Las **imágenes** son fotos reales del cliente en `public/img/` (WebP; originales en `fotos-originales/`, fuera de git) con `src`, `alt` y `position`. Donde falta foto queda un placeholder rotulado (`pending: true` + `slot` + `ratio`) que `MediaPlaceholder.astro` rotula.

## 🔍 SEO Técnico y Rendimiento (Regla de Oro)
1. **Etiquetas Semánticas:** Usa siempre `<header>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>`. Cero tolerancia al "Div Soup".
2. **Jerarquía de Encabezados:** Respeta el orden (`<h1>`, `<h2>`, `<h3>`) sin saltos. Un solo `<h1>` por página.
3. **Metadatos:** El componente `<Seo/>` ya está integrado en `Layout.astro` de forma central. No lo dupliques en las páginas: pasa `title` y `description` al Layout.
4. **Optimización de Medios:** `alt` descriptivo obligatorio. `loading="lazy"` bajo el primer scroll; `fetchpriority="high"` solo en el candidato a LCP.
5. **Presupuesto:** sin JS de terceros salvo Lenis. Si una función necesita una librería o una fuente de iconos, busca primero la solución en CSS o SVG inline.

## ♿ Accesibilidad (no negociable)
* **44px** mínimo en todo control interactivo (`var(--tap)`).
* **4.5:1** de contraste en texto pequeño. **Calcúlalo, no lo asumas** — el mockup incumple AA en tres puntos y por eso hay desviaciones documentadas en `DESIGN.md §8`.
* `prefers-reduced-motion` respetado en toda transición de movimiento.
* Los toggles son checkbox + `<label>` (funcionan sin JS); `Layout.astro` añade teclado, `aria-expanded` y cierre con Escape.

## 🤖 Uso de Skills
Tienes permitido y recomendado usar tus skills internos (dependen de que gstack esté instalado):
* `design-review` para auto-auditar estética y SEO semántico.
* `design-consultation` ante dudas de jerarquía visual.
* `design-html` para estructuras semánticas complejas.
* `design-shotgun` para proponer variaciones de un componente.

---

## 🗓 Registro de trabajo

### 2026-09-02 — Implementación del mockup y rediseño del sistema
* **Auditoría inicial** del estado del sitio → `MEJORAS.md` (12 puntos priorizados).
* **Sistema de diseño reescrito** desde el mockup aprobado: paleta, Hanken Grotesk, escala tipográfica, métrica 1440px y radio cero. Los nombres de variable antiguos quedaron como **alias**, así que las 7 páginas no reescritas adoptaron el rediseño sin editarlas.
* **Inicio reconstruido:** hero a sangre bajo header translúcido, placas de marca 3/6/3 con galería enmarcada, cierre centrado con doble CTA.
* **Header, Footer y FAB reescritos:** barra única fija de 80px con el logo a la izquierda; footer de 4 columnas con enlaces legales; el FAB pasa a ser un cuadrado verde de WhatsApp sin desplegable.
* **Interacción firma añadida** (`.media-frame`): revelado gris → color + zoom en hover.
* **Todo el contenido pasó a localizadores numerados**, incluidos nombres de servicio, producto y categoría, que antes eran los reales.
* **Corrección a este documento:** se afirmaba que `astro dev --background` no existía. Sí existe. El error estaba en la auditoría, no en las instrucciones.

**Pendiente y conocido:** QA visual en navegador sin hacer (la extensión de Chrome no tenía permiso para `localhost`). Ver `DESIGN.md §11` para los puntos abiertos de diseño.

### 2026-09-23 — Crítica de diseño (`/impeccable critique`) y sus arreglos
Informe completo en `.impeccable/critique/2026-09-23T21-14-44Z__src-pages-index-astro.md` (24/40 en las heurísticas de Nielsen). Resumen de lo aplicado en `MEJORAS.md`.

* **El catálogo ganó su hueco de imagen.** Los 15 productos de `catalog.js` llevan `image` con `slot` y `ratio`; la tarjeta pasó a celda a sangre con la foto arriba. En la única página donde se elige qué comprar, antes había que distinguir quince piezas de acero leyendo.
* **`/productos` se fusionó en `/catalogo`** (cierra `MEJORAS.md §1.4`). Redirect 301 en `astro.config.mjs`, fuera del sitemap, una sola entrada en el menú.
* **`/contacto`:** el `<select>` nace vacío y es `required` (antes toda consulta sin tocar el campo llegaba etiquetada como "Soldadura TIG"), se agregó campo de adjunto con `enctype="multipart/form-data"` porque el titular pide "el plano que tengas", y el hero se comprimió con `.page-hero--tight` para que el formulario entre en el primer pliegue.
* **El SVG del hero quedó sin una sola letra.** Traía un cartucho central que se transparentaba por detrás del `<h1>`. El rótulo del hueco pasó a `.hero__slot`, un elemento del documento anclado al canto inferior.
* **`.btn--whatsapp` pasó a relleno verde** con texto blanco: era texto `#128c3d` a 3,54:1, bajo AA.
* **El logotipo cedió ante el sistema:** el PNG de cromo 3D se reemplazó por un lockup tipográfico plano en Hanken Grotesk. Decisión del usuario, documentada en `DESIGN.md §6`. El PNG sigue en `public/` por si el cliente lo exige.
* **El foco del formulario dejó de ser rojo**, para que el rojo signifique solo "error".

**Pendiente y conocido:** la QA visual en navegador sigue sin hacerse — la extensión de Chrome continúa sin permiso para `localhost` (`ERR_CONNECTION_REFUSED` con el servidor respondiendo 200 a `curl`). La verificación de esta ronda fue por build, inspección del HTML/CSS generado y cálculo de contraste, no por medición en pantalla.

### 2026-10-04 — Paleta C cálida, movimiento, fotos reales y limpieza
* **Paleta nueva** (`DESIGN.md §2`): oscuro por defecto con secciones claras de hueso; acento naranja de la chispa; el rojo pasa a significar solo error. Tokens en un solo bloque; auditoría de contraste automática en 8 páginas con 0 incumplimientos de AA.
* **Movimiento** (`DESIGN.md §12`): entrada del hero, revelado al scroll y transición de página en CSS puro; Lenis para el scroll con inercia. Todo respeta `prefers-reduced-motion`.
* **Fotos reales** del cliente: hero, servicios (solo Corte y plegado), placas de marca, 18 productos del catálogo (+3 nuevos salidos de las fotos: soporte KDS, protector de jabón, mesa de pizza, sin precio) y galería de AL Mueblería ampliada a 8 piezas. Optimizadas a WebP (1,6 MB en total).
* **Cerrados de `MEJORAS.md`:** 2.4 (SVG placeholder eliminados), 3.1 (código muerto), 3.2 (README) y 5.1 (WeldingCursor sin `box-shadow`). `--font-mono` eliminada.
* **Catálogo:** celdas de relleno para que la última fila no deje un bloque liso.

**Pendiente y conocido:** mostrar la paleta nueva al cliente; fotos de Soldadura TIG, Diseño, Nosotros y Servicios (esas carpetas llegaron vacías); el favicon ya está alineado con la paleta nueva. La QA visual se hizo con Playwright + Edge headless sobre `dist/` (la extensión de Chrome sigue sin permiso para `localhost`).
* **Favicon y og-image** en la paleta nueva (el monograma `JZ` aprobado no se redibujó). **La costura**: línea de soldadura animada en hero y encabezados, única excepción a «acento solo en acciones» (`DESIGN.md §12`). Auditoría Playwright en 5 anchos (360–1920): sin desbordes; áreas táctiles OK.
* **Logotipo nuevo del cliente** (JZINOX origami metálico, `public/img/logo-jzinox.webp`) en header, footer y `og-image.png`; reemplaza al lockup tipográfico. Es la excepción visual del sistema (tiene volumen): ver `DESIGN.md §6`. El original está en `fotos-originales/`.
