# JZ INOX & AL Mueblería

Sitio corporativo de **JZ INOX** (taller de acero inoxidable en San Miguel, Santiago: fabricación, reparación y mantención de equipamiento para restaurantes, comida rápida e industria alimentaria) con un espacio para su marca aliada **AL Mueblería** (muebles a medida en línea plana).

Trabajas como desarrollador front-end senior, con criterio de UI/UX y de SEO técnico.

## 1. Antes de tocar nada

* **`DESIGN.md`** es la fuente de verdad del diseño: tokens, tipografía, componentes, movimiento y las decisiones tomadas. Si vas a tocar estilos, empieza ahí.
* **`MEJORAS.md`** es el backlog. Lo abierto está en su §8.
* Documentación de Astro: https://docs.astro.build

## 2. Reglas de trabajo

### 2.1 Usa skills de diseño para casi todo

Todo cambio que se vea en pantalla (layout, tipografía, color, espaciado, botones, textos de interfaz, animación, responsive) se hace **con una skill de diseño cargada**, no de memoria. Solo quedan fuera los cambios puramente mecánicos: corregir un dato, un enlace o una errata.

| Tarea | Skill |
|---|---|
| Orden, espaciado, jerarquía de un bloque | `impeccable layout` |
| Tamaños y escala de letra | `impeccable typeset` |
| Color | `impeccable colorize` |
| Quitar ruido de una página | `impeccable distill` |
| Textos de botones, formularios y errores | `impeccable clarify` |
| Pasada final antes de mostrar | `impeccable polish` |
| Crítica con puntaje | `impeccable critique` |
| Auditoría midiendo en el navegador | `design-review` |
| Construir una animación | `animate` |
| Animación que traba | `animation-performance` |
| Dónde falta o sobra movimiento | `find-animation-opportunities` |
| Criterio general de pulido | `emil-design-eng` |
| Que se sienta bien en teléfono | `mobile-native` |
| Probar con textos extremos | `break-ui` |

* `/review-animations` solo la puede ejecutar el usuario: pídesela después de tocar movimiento.
* Las skills **detectan y ejecutan; no redefinen el sistema**. Si una propone esquinas redondeadas, sombras en vez de la junta, Tailwind o una librería, manda `DESIGN.md`.
* Para revisiones grandes, lanza varias en paralelo con subagentes y cruza los informes.

### 2.2 Código limpio, sin comentarios

* **El código no lleva comentarios.** Ni encabezados de archivo, ni explicaciones de por qué se hizo algo, ni notas de lo que había antes, ni separadores de sección. El porqué de una decisión va en `DESIGN.md`; el historial, en git.
* **Única excepción:** las marcas de procedencia en `src/data/` (`// [PDF]`, `// [PROPUESTA]`, `// [CLIENTE]`), reducidas a la etiqueta.
* Nombres claros en vez de comentarios: si algo necesita explicación, renómbralo o extráelo.
* Nada de código muerto, clases sin uso ni archivos huérfanos. Bórralos.
* Al terminar un cambio, revisa que no hayas dejado comentarios nuevos.

### 2.3 Verifica antes de decir que está listo

* Compila (`astro build`) y revisa en el navegador con Playwright + Edge sobre el preview. La extensión de Chrome no tiene permiso para `localhost`.
* Mide en 390, 768, 1100 y 1440: sin desbordes, sin controles bajo 44px, sin contraste bajo AA.
* Si no pudiste comprobar algo, dilo.

## 3. Estructura del sitio

* **Navegación:** Inicio, Nosotros, Servicios, Productos, Contacto y, tras un divisor, AL Mueblería.
* **Productos** vive en `/catalogo`. `/productos` redirige ahí. El menú dice "Productos" porque en el rubro "catálogo" suele significar un PDF.
* **AL Mueblería** es una landing interna en `/al-muebleria`.
* **Soldadura TIG** es un servicio dentro de `/servicios`, no una página.
* **Orden del Inicio** (pedido del cliente): hero, bloque de JZ INOX, bloque de AL Mueblería, servicios, cierre.

## 4. Stack

* **Astro 7** (SSG), sin framework de UI y **sin Tailwind**.
* **CSS nativo** con tokens en `src/styles/global.css`. Los estilos de componente van en su `<style>`; solo lo compartido va en `global.css`.
* **Sin JavaScript ni fuentes de terceros.** La única dependencia de runtime es **Lenis** (scroll con inercia), y solo se carga con puntero fino. Las fuentes están en `public/fonts`.
* **Datos:** todo el contenido sale de `src/data/` (`site`, `company`, `brands`, `services`, `catalog`). Las páginas no llevan textos escritos a mano.
* **Imágenes:** en `public/img/` (WebP), con variantes `-w800`. `src/utils/img.js` arma el `srcset` desde `src/data/img-manifest.json`. Los originales están en `fotos-originales/`, fuera de git.
* **Servidor de desarrollo:** `astro dev --background` (`stop`, `status`, `logs`). `astro preview` acepta lo mismo.

## 5. Diseño

Resumen. El detalle está en `DESIGN.md`.

### Tres reglas inviolables
1. **Radio cero.** Ni un `border-radius`.
2. **La junta es de 1px** y siempre `var(--color-border)`.
3. **El acento solo en acciones y estados.** El error va en `--color-error`.

### Paleta
* Oscuro por defecto, en tres tonos: lienzo `#16120f`, elevado `#2a231d`, pie `#0f0c0a`. Texto `#f0ebe3`, apagado `#aa9f92`, junta `#5e5245`.
* Secciones claras (`.section--alt`): hueso `#ebe5db`, texto `#16120f`, junta `#b5aa9a`.
* Acento: naranja `#ff6a1a` (en claro, `#a33a04`).
* Los componentes solo usan `var(--color-*)`; el tema lo decide la sección.

### Tipografía
* **Hanken Grotesk** (600/700/800) en titulares, **Inter** (400/500/600) en cuerpo.
* Texto descriptivo a 16px; 14px solo para etiquetas y metadatos.

### Composición
* Encabezados alineados a la izquierda.
* **Las listas van en renglones** separados por la junta, no en tarjetas.
* Una pieza sin foto es un renglón, no una caja vacía.
* Un solo tipo de cierre de página: la banda `.cta-band`.
* Bento (`gap: 1px` sobre fondo de junta) solo donde hay celdas contiguas de verdad.

### Botones y WhatsApp
* Dos tamaños: base (44px) y `.btn--lg` (48px).
* **Todo lo que abre WhatsApp lo dice, lleva el glifo y va en verde.**
* Vocabulario único: "Cotizar proyecto", "Cotizar por WhatsApp", "Escríbenos por WhatsApp", "Ver productos", "Volver al inicio", "Enviar consulta". Solo la primera palabra en mayúscula.
* La marca se escribe **JZ INOX**, separado.

### Movimiento
* Solo se animan `transform`, `opacity` y `clip-path`, con `--ease-out` y `--ease-in-out`. Nunca `ease-in` ni `transition: all`.
* Interfaz: 160–280 ms. Entradas: hasta 1 s.
* Todo hover va dentro de `@media (hover: hover) and (pointer: fine)`; el toque responde con `:active`.
* El revelado al entrar en pantalla usa `data-reveal` y se dispara una sola vez.
* Todo se reduce con `prefers-reduced-motion`.

### No reintroducir
La línea naranja que se trazaba bajo los encabezados, los antetítulos sobre cada título, las tarjetas numeradas 01–02–03, los iconos en cuadrito, el carrusel, las fotos en gris y el bloque de color en el hover del menú.

## 6. Contenido

Cada bloque de `src/data/` lleva su procedencia:

* `[PDF]` — texto literal del cliente. **No se reescribe.** Se puede recortar en pantalla sin cambiar palabras.
* `[CLIENTE]` — lista o instrucción directa del cliente (categorías, orden y nombres de productos). **No se reordena ni se renombra.**
* `[PROPUESTA]` — redactado por nosotros. Pendiente de validación del cliente.

Reglas:

* **Las cifras no se inventan.** Solo "20+ años" está confirmado. Las pendientes no se muestran.
* **No se publican precios.** Cada producto lleva solo el botón de cotizar.
* **No se inventan clientes, plazos, garantías, certificaciones ni datos técnicos.** Si un texto mejoraría con un dato, se le pregunta al cliente.

## 7. SEO

1. HTML semántico: `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
2. Un solo `<h1>` por página y encabezados sin saltos de nivel.
3. `<Seo/>` está en `Layout.astro`: las páginas solo pasan `title` y `description`. El título lleva palabra clave.
4. `alt` descriptivo siempre. `loading="lazy"` bajo el primer scroll; `fetchpriority="high"` solo en la imagen principal.

## 8. Accesibilidad

* **44px** mínimo en todo control (`var(--tap)`).
* **4,5:1** de contraste en texto pequeño. Se calcula, no se asume.
* `prefers-reduced-motion` respetado.
* El menú móvil es un checkbox con `<label>` y funciona sin JavaScript; `Layout.astro` añade teclado, estado accesible y cierre.

## 9. Pendiente conocido

* El dominio `jzinox.cl` todavía no resuelve; el sitio vive en `jzinox.vercel.app`.
* El formulario envía a FormSubmit: la primera consulta dispara un correo de activación a `ventas@jzinox.cl` que el cliente debe confirmar. No se ha probado un envío real.
* 13 de 18 productos sin foto; falta una foto horizontal de obra terminada para el hero.
* No se ha probado en un teléfono real ni en Safari.
* Falta mostrarle al cliente la paleta, que se aparta del mockup aprobado.
* El resto, en `MEJORAS.md §8`.

## 10. Registro

| Fecha | Qué |
|---|---|
| 2026-09-02 | Implementación del mockup aprobado y auditoría inicial (`MEJORAS.md`). |
| 2026-09-23 | Crítica de diseño: `/productos` se fusiona en `/catalogo`, arreglos de contacto y contraste. |
| 2026-10-04 | Paleta cálida, movimiento, fotos reales, favicon y logotipo nuevo del cliente. |
| 2026-10-11 | Pedidos del cliente (orden del Inicio, sin precios, 6 categorías y 18 productos). Rediseño de distribución y movimiento. Revisión con cinco estudios y sus arreglos. Marca "JZ INOX". Comuna San Miguel y enlace a Maps. Código sin comentarios. |

El detalle de cada fecha está en `MEJORAS.md` y en el historial de git.
