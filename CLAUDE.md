# Contexto del Proyecto: JZ Inox & AL Mueblería
Eres un desarrollador Front-End Senior, un experto en UI/UX y un especialista en SEO Técnico. Estás construyendo el sitio web corporativo principal de **JZ Inox** (especialistas en soldadura TIG y equipamiento gastronómico en acero inoxidable) y estructurando un espacio dedicado para su marca aliada, **AL Mueblería** (especialistas en mueblería de línea plana).

## 📐 Lee esto primero
* **`DESIGN.md`** — el sistema de diseño implementado: tokens de color, tipografía, métrica, componentes, la interacción firma y las desviaciones deliberadas del mockup. **Es la fuente de verdad del diseño.** Si vas a tocar estilos, empieza ahí.
* **`MEJORAS.md`** — backlog técnico y de SEO priorizado, con ubicación exacta y arreglo propuesto de cada punto.

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
* **JZ Inox (Marca Principal):** Domina la estructura global del sitio. Navegación real: **Inicio, Nosotros, Servicios, Productos, Catálogo, Contacto**.
* **AL Mueblería (Aliado Estratégico):** Vista interna exclusiva en `/al-muebleria`. Funciona como *landing page* resumida dentro del ecosistema de JZ Inox: presentación, servicios propios y mini-catálogo. En el menú va tras un divisor, porque el clic cambia de marca, no de sección.
* **Soldadura TIG** ya NO es una página propia: se dio de baja en el commit `eb50818` y hoy es uno de los servicios dentro de `/servicios`.

## 🛠 Arquitectura y Stack
* **Framework:** Astro 7 (SSG). Sin framework de UI: cero JavaScript externo, los scripts se inlinean.
* **Estilos:** CSS nativo con variables globales en `src/styles/global.css`. **No hay Tailwind** (el mockup original sí lo usaba; se tradujo a tokens nativos).
* **Componentización:** Todo modular (Header, Footer, BrandCard, Seo, ServiceIcon, FloatingContact, WeldingCursor). Los estilos de componente van en su bloque `<style>` scoped; solo lo compartido vive en `global.css`.
* **Datos:** todo el contenido sale de `src/data/` (`site`, `company`, `brands`, `services`, `catalog`). Las páginas no llevan copy hardcodeado.

## 🎨 Sistema de Diseño: "Ingeniería Limpia y Precisión"
Resumen operativo. **El detalle completo está en `DESIGN.md`.**

1. **Tres reglas inviolables:**
   * **RADIO CERO.** Ni un `border-radius` en todo el sitio. Existe `--radius: 0` para que nada reintroduzca esquinas.
   * **La junta es de 1px** y siempre `var(--color-border)`. Es la línea del plano de ingeniería.
   * **El acento solo en acciones y estados.** Nunca como relleno decorativo.

2. **Paleta (extraída del mockup aprobado):**
   * Superficies: `#f9f9f9` (lienzo) → `#ffffff` (tarjeta) → `#eeeeee` (sección alterna).
   * Estructura: acero `#5f5e5e` (header, velo del hero), tinta `#2f3131` (etiquetas sólidas).
   * Texto: `#1a1c1c` y `#59413d` (gris **cálido**, no azulado).
   * Acento: `#c13d2f`, hover `#ae3023`, sobre fondo oscuro `#ffb4a9`.

3. **Tipografía:** **Hanken Grotesk** (600/700/800) en titulares, **Inter** (400/500/600) en cuerpo. `--font-mono` NO se carga: evítala.

4. **Bento Grid:** `gap: 1px` sobre fondo `--color-border`, nunca bordes por celda (sumarían 2px entre celdas contiguas).

5. **Interacción firma:** la clase `.media-frame` desatura toda imagen y le devuelve color + `scale(1.05)` en hover. El recorte va en el marco y el zoom en la imagen, para que no haya reflow. Es la **única** animación expresiva: el resto son transiciones funcionales de color.

## 📝 Convención de contenido (IMPORTANTE)
Todo el texto visible es **placeholder localizable numerado** hasta que llegue el copy del cliente: `INICIO 1`, `NOSOTROS 3.2`, `SERVICIO 4`, `PRODUCTO 12`, `CATEGORÍA 2`, `PRODUCTO AL 1`… El cuerpo va en lorem ipsum.

* **NO "mejores" el copy.** Cambiar un localizador por texto real es un error, no una mejora.
* **Un producto tiene UN número en todo el sitio.** Los destacados del Inicio son `PRODUCTO 1, 4, 5, 10` porque son esas piezas del catálogo.
* **El nombre real de cada ranura vive en un comentario** junto a su entrada en `src/data/` (`// ranura prevista: campana extractora mural`). Consérvalo.
* Sí es texto real, y se queda: menú, botones, datos de contacto, `meta description`, etiquetas de formulario y `/gracias`.
* Los **precios de `catalog.js` son de maqueta**, no la lista real. No publicar.

## 🔍 SEO Técnico y Rendimiento (Regla de Oro)
1. **Etiquetas Semánticas:** Usa siempre `<header>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>`. Cero tolerancia al "Div Soup".
2. **Jerarquía de Encabezados:** Respeta el orden (`<h1>`, `<h2>`, `<h3>`) sin saltos. Un solo `<h1>` por página.
3. **Metadatos:** El componente `<Seo/>` ya está integrado en `Layout.astro` de forma central. No lo dupliques en las páginas: pasa `title` y `description` al Layout.
4. **Optimización de Medios:** `alt` descriptivo obligatorio. `loading="lazy"` bajo el primer scroll; `fetchpriority="high"` solo en el candidato a LCP.
5. **Presupuesto:** cero JS externo. Si una función necesita una librería o una fuente de iconos, busca primero la solución en CSS o SVG inline.

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
