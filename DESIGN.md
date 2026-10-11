# Sistema de diseño — JZ INOX & AL Mueblería

> **"Ingeniería limpia y precisión"** · paleta **"Acero en sombra"** (2026-10-04)
> Origen: mockup aprobado por el cliente (`Mockup Inicio`, HTML + Tailwind).
> Implementado el 2026-09-02; **paleta reemplazada el 2026-10-04** por la C cálida
> (ver §2 y §8). Fuente de verdad del código: `src/styles/global.css`.

Este documento describe el sistema tal como está construido. Si cambias un token,
cámbialo en `global.css` y actualiza aquí.

---

## 1. Las tres reglas que gobiernan todo

1. **RADIO CERO.** Ni un solo borde redondeado en el sitio. Las placas de acero se
   cortan a escuadra; un radio de 4px delataría un componente de plantilla. Existe la
   variable `--radius: 0` para que ningún componente heredado reintroduzca esquinas.
   *Única excepción:* la partícula del cursor de soldadura usa `border-radius: 40%`,
   pero eso es una **forma** (el filamento de la chispa), no una esquina de caja.
2. **La junta es de 1px y siempre del mismo gris** (`--color-border`). Es la línea del
   plano de ingeniería, no un separador decorativo.
3. **El acento vive solo en acciones y estados.** Nunca como relleno decorativo. El
   acento es ahora el naranja de la chispa; el **error** ya no es el rojo-acento sino
   `--color-error`.

---

## 2. Color — paleta "Acero en sombra" (C cálida)

Elegida el 2026-10-04 sobre tres propuestas (`propuestas/paletas.html`). La idea: el color
del oficio. Un negro con base marrón, como el acero con luz de fragua, y el naranja de
la chispa de soldadura. **El sitio es oscuro por defecto y alterna secciones claras.**

### Dos temas, un solo juego de tokens

`:root` define el tema **oscuro**. `.section--alt` y `.theme-light` **redefinen los
mismos tokens** dentro de su alcance (hueso cálido). Ningún componente sabe en qué tema
está: solo usa `var(--color-*)`. Por eso un botón cambia de naranja a naranja quemado
al entrar en una sección clara sin una sola línea extra.

| Token | Oscuro (base) | Claro (`.section--alt`) | Uso |
|---|---|---|---|
| `--color-page` | `#16120f` | — | Lienzo del documento |
| `--color-bg` | `#1e1a16` | `#ffffff` | Tarjeta, celda del bento |
| `--color-bg-alt` | `#ebe5db` | — | Fondo de la sección clara |
| `--color-surface` | `#261f1a` | `#f5f1ea` | Superficie hundida, hover, relleno de huecos |
| `--color-surface-high` | `#201b17` | `#e6dfd3` | Sección de cierre |
| `--color-border` | `#4a4137` | `#cdc4b6` | **Toda** junta de 1px |
| `--color-steel` | `#16120f` | — | Barra del header |
| `--color-ink` | `#3b342d` | `#16120f` | Etiquetas sólidas (`.tag`) |
| `--color-footer` | `#0f0c0a` | — | Pie de página |
| `--color-text` / `--color-graphite` | `#f0ebe3` | `#16120f` | Texto |
| `--color-text-muted` | `#aa9f92` | `#554b40` | Texto secundario |
| `--color-accent` | `#ff6a1a` | `#a33a04` | Acciones y estados |
| `--color-accent-dark` | `#ff8a45` | `#7f2c02` | Hover (**sube** en oscuro, baja en claro) |
| `--color-on-accent` | `#16120f` | `#ffffff` | Texto sobre relleno de acento |
| `--color-error` | `#ff8a7a` | `#b3261e` | Errores. **El rojo ya no es acento** |
| `--color-warn` | `#e2b04a` | `#8a5a00` | Aviso de maqueta |
| `--color-ok` | `#7bd89a` | `#1f6b34` | Confirmación |

### Contrastes calculados (no asumidos)

| Par | Ratio |
|---|---|
| Texto `#f0ebe3` sobre lienzo `#16120f` | 15,7:1 |
| Muted `#aa9f92` sobre lienzo / sobre tarjeta | 7,2:1 / 6,6:1 |
| Acento `#ff6a1a` sobre lienzo / sobre tarjeta | 6,5:1 / 6,0:1 |
| `#16120f` sobre relleno `#ff6a1a` (botón primario) | 6,5:1 |
| Texto `#16120f` sobre hueso `#ebe5db` | 14,9:1 |
| Muted `#554b40` sobre hueso | 6,8:1 |
| Acento quemado `#a33a04` sobre hueso / sobre blanco | 5,3:1 / 6,6:1 |
| Blanco sobre `#a33a04` (botón en sección clara) | 6,6:1 |
| Error `#ff8a7a` sobre lienzo | 8,1:1 |

> **El naranja puro `#ff6a1a` NO sirve como texto sobre fondo claro** (≈2,4:1). Por eso el
> tema claro cambia a la variante quemada. Y al revés: el naranja quemado no sirve sobre
> oscuro. Los dos temas no son intercambiables; el token correcto sale solo del alcance.

Auditoría automática (Playwright + Edge, 8 páginas, texto contra su fondo real): **0
incumplimientos de AA**. Lo único que reporta son etiquetas `.visually-hidden`, que no
se ven.

> El verde `#25d366` puro **no** llega a 4.5:1 sobre fondo claro. Por eso
> `.btn--whatsapp` es **relleno** `#0f7a35` con texto blanco (5,45:1) y el verde de marca
> solo sobrevive en el FAB, donde el glifo es una silueta y no texto.

---

## 3. Tipografía

| Rol | Familia | Pesos |
|---|---|---|
| Titulares | **Hanken Grotesk** | 600, 700, 800 |
| Cuerpo e interfaz | **Inter** | 400, 500, 600 |

Hanken Grotesk es una grotesca geométrica de asta cerrada: en 800 tiene el peso de
rotulación industrial que pide el hero.

### Escala

| Rol | Tamaño | Interlínea | Tracking | Peso |
|---|---|---|---|---|
| `h1` (headline-xl) | 40px → **64px** | 1.1 | −0.02em | 800 |
| `h1` del hero del Inicio | 30px → **56px** | 1.06 | −0.02em | 800 |
| `h1` de página interior (`.page-hero`) | 32px → **48px** | 1.1 | −0.02em | 800 |
| `h2` de sección | 28px → **44px** | 1.12 | −0.015em | 700 |
| `h2` de placa (`.cta-plate`, `.cta-band`, grupo del catálogo) | 24px → **32px** | 1.12 | — | 700 |
| `h3` | 18px → **22px** | 1.25 | — | 600 |
| body-lg | 18px | 1.6 | — | 400 |
| body-md | 16px | 1.6 | — | 400 |
| body-sm | 14px | 1.5 | — | 400 |
| label-lg | 14px | 1 | 0.05em | 600 |
| label-sm | 12px | 1 | — | 500 |

El `h1` va siempre en `text-transform: uppercase`. **La escala se abrió el 2026-10-11**
(el mockup dejaba el `h2` en 32px y el `h3` en 17px): contra un `h1` de 64px los títulos
de sección no marcaban el cambio de bloque, y el `h3` medía casi lo mismo que su párrafo.
El texto descriptivo de tarjeta va a **16px**; 14px queda para etiquetas y metadatos.

---

## 4. Métrica y espaciado

| Token | Valor |
|---|---|
| `--container-width` | `1440px` |
| `--gutter` | `32px` |
| `--section-gap` | `112px` (tope de escritorio; 56px en móvil). `.section--tight` baja a 72px para cierres y bandas CTA |
| `--margin-mobile` | `20px` |
| `--margin-desktop` | `64px` |
| `--header-height` | `80px` |
| `--tap` | `44px` (mínimo táctil, obligatorio en todo control) |
| `--radius` | `0` |
| `--ease-out` | `cubic-bezier(0.22, 0.7, 0.3, 1)` |

## 5. Breakpoints

| Ancho | Qué cambia |
|---|---|
| **640px** | Las grillas pasan a 2 columnas |
| **1024px** | Layout de contenido completo (bento de 3 y 4 columnas, pie de 4 columnas) |
| **1280px** | La navegación pasa a horizontal y las placas de marca a 3/6/3 |

**Por qué el nav rompe 256px más arriba que el contenido:** entre el logotipo (209px),
los siete enlaces, el divisor de marca y el CTA, la barra necesita ~1220px de ancho
útil. A 1024px desbordaba. Por debajo de 1280px va hamburguesa.

---

## 6. Componentes

### Bento Grid
La línea divisoria es el propio `gap` del grid asomando sobre un fondo gris:

```css
.bento { display: grid; gap: 1px; background: var(--color-border); border: 1px solid var(--color-border); }
.bento > * { background: var(--color-bg); }
```

Con bordes por celda, dos celdas contiguas sumarían 2px y las esquinas se
desalinearían al colapsar el layout. Con la junta, siempre miden 1px exacto.

Modificadores: `--2` `--3` `--4` (columnas) · `__cell` `__cell--flush` (sin padding)
`__cell--hover` (tinte + barra de acento) `__cell--accent` `__index` `__icon`.

`__cell--hover` es **solo para celdas con un enlace dentro**: en una tarjeta que no lleva a
ningún lado promete un clic que no existe.

**El catálogo no es un bento.** Sus tarjetas van sueltas, con borde propio de 1px y aire
entre ellas (`.catalog-grid`, `auto-fill` desde 340px): las categorías tienen 2, 3 o 6
piezas y en un bento la fila incompleta dejaba celdas lisas que se leían como productos
que faltan. Todo el listado vive en una sola sección clara.

### Encabezado de sección
`.section-head` va **alineado a la izquierda**, como el rótulo de un plano. El eje centrado
sobre una grilla a todo el ancho es el gesto que delata una plantilla. El `.eyebrow` solo se
usa cuando aporta un dato que el título no dice; nunca para repetirlo.

### Botones
`.btn` + `--primary` (relleno de acento, naranja) · `--outline` (acento sin relleno) · `--ghost`
(borde acero) · `--whatsapp` (**relleno verde**, texto blanco).

**Sin `transform` en el hover.** En un sistema de radio cero, un botón que levita rompe
la lectura de placa apoyada. El cambio es de color.

`--whatsapp` era un botón fantasma con texto `#128c3d` y borde `#25d366`. Daba **3,54:1**
sobre la sección de cierre (`#e8e8e8`) y **4,34:1** incluso sobre blanco puro: bajo AA en
los dos casos, en un botón de conversión de 14 px. Ahora el verde va como relleno
(`--color-whatsapp-ink: #0f7a35`) con texto blanco, que da **5,45:1**; el borde contra el
fondo claro da 4,45:1, sobre el 3:1 que pide WCAG 1.4.11 para el límite de un control. El
`#25d366` de marca del canal solo sobrevive en el FAB, donde el glifo es una silueta y no
texto. **No revertir a texto verde sobre fondo claro: no existe un verde de WhatsApp que
cumpla AA a 14 px sobre nuestras superficies.**

### Placa de marca (`BrandCard.astro`)
Proporción **3/6/3** desde 1280px; entre 1024 y 1279px dos columnas (identidad + galería)
con los destacados debajo; apilada en móvil. Sin etiqueta de «marca principal / aliada»
sobre el nombre (pedido del cliente, 2026-10-11):
`[ Identidad + CTAs ] | [ Galería enmarcada ] | [ Productos destacados ]`

El bloque central no es una imagen a sangre: es una imagen **enmarcada** sobre una mesa
de trabajo con retícula de puntos (`radial-gradient` cada 20px). Ese aire alrededor es
lo que la hace leer como pieza sobre un plano y no como banner. Las flechas se apoyan
justo en el canto del marco, medio dentro y medio fuera.

El carrusel funciona **sin JavaScript** (scroll-snap + gesto). Flechas y puntos nacen
`hidden` y solo se revelan cuando el script confirma que funcionan.

### Header
Barra **única y fija** de 80px.

**El logotipo es el del cliente (2026-10-04): JZINOX en acero plegado, estilo origami**,
exportado como WebP con transparencia (`public/img/logo-jzinox.webp`, 36 KB, recortado al
borde de las letras). Sustituye al lockup tipográfico plano de la ronda del 2026-09-23 por
decisión del equipo. Tiene volumen y reflejos, así que es **la excepción visual del
sistema** (radio cero, sin relleno decorativo): se tolera porque es la marca del cliente y
porque el metal gris da más de 7:1 sobre la barra `#16120f`. Va con `alt=""` dentro de un
enlace con `aria-label`; header a 32 px (móvil) y 40 px (escritorio) de alto, footer a
34 px, y también en `propuestas/og-image.html`. El monograma `JZ` plano sigue siendo el
favicon. Si hiciera falta volver al lockup tipográfico, está en el historial de git
(commit `09ad873`). Acero al 90% (`color-mix`) + `backdrop-filter: blur(12px)`,
con respaldo opaco vía `@supports not`. Logotipo a la izquierda, nav al centro-derecha,
CTA a la derecha. El foco visible va en **blanco**: el rojo global es ilegible sobre el acero.

`Layout.astro` compensa la altura con `padding-top` en `<main>` una sola vez para todo
el sitio. El Inicio pasa `flush` para que el hero cruce por debajo de la barra.

---

### Hero y variantes de encabezado

`.page-hero` es el encabezado estándar de página interior. `.page-hero--tight` reduce el
aire vertical a la mitad y baja el `<h1>`: es para **páginas transaccionales**, donde el
titular no debe competir con el control que el visitante vino a usar. Hoy solo la usa
`/contacto`, para que el formulario entre en el primer pliegue.

**El texto nunca se dibuja dentro de una imagen del hero.** El velo
(`.hero__veil`) es semitransparente, así que cualquier rotulación del archivo se
transparenta por detrás del `<h1>` y se lee como página rota, no como hueco honesto.
`public/hero-inicio.svg` es por eso pura textura de plano, sin una sola letra, y el
rótulo del hueco vive en el documento (`.hero__slot`): franja sólida anclada al canto
inferior, fuera de la banda del texto e independiente de cómo `object-fit: cover`
recorte la imagen. El hero reserva esa banda con su `padding-bottom`; cuando llegue la
foto, `heroImage.pending` pasa a `false` y ambas cosas vuelven a su valor normal.

### Campos de formulario

**El rojo significa error, y solo error.** El borde de foco era `--color-accent` y el de
error `--color-accent-dark`: dos rojos separados por un 5% de luminosidad, así que el
campo donde estabas escribiendo se veía igual que el campo que estaba mal. El foco se
marca con `--color-graphite` a 2px más el aro global de `:focus-visible`; el rojo queda
reservado para `[aria-invalid="true"]`, que además lo mantiene mientras está enfocado
—perder la señal al entrar a corregir obligaría a recordar cuál era el problema—.

Todo `<select>` que represente una elección real **nace vacío y es `required`**. Un
`<select>` que arranca en la primera opción no tiene valor por defecto: tiene un valor
falso, y llena la bandeja de entrada del cliente con datos que nadie eligió.

El control `type="file"` lleva su `::file-selector-button` estilado: el nativo trae
esquinas redondeadas y su propia tipografía, y sería el único radio del sitio.

---

## 7. La firma: medios enmarcados

```css
.media-frame { overflow: hidden; }
.media-frame img { transform: scale(1); }
.media-frame:hover img,
.media-frame:focus-within img { transform: scale(1.05); }
```

**Las fotos entran a color (desde 2026-10-11).** Antes entraban desaturadas y recuperaban
el color en hover. Las dos revisiones de diseño de esa fecha coincidieron en que era la
causa principal de que el sitio se viera barato: acero inoxidable fotografiado con celular
y pasado a gris se lee como fotocopia, y nadie pasa el cursor por cada tarjeta. Queda el
zoom del 5 %. **El zoom vive en la imagen y el recorte en el marco**, así que la escala
nunca desborda ni provoca reflow. Bajo `prefers-reduced-motion` no hay zoom.

Aplicado en: carrusel de las placas de marca y tarjetas de `/catalogo`. Un borde que
rodee una imagen con esta clase debe ir en el **marco**, nunca en la imagen.

---

## 8. Desviaciones deliberadas del mockup

**Desviación mayor (2026-10-04): la paleta completa.** El mockup aprobado era gris
sobre gris con acento rojo ladrillo `#c13d2f`. Se reemplazó por la C cálida (§2) a
pedido del equipo. Las tres reglas del sistema (radio cero, junta de 1px, acento solo en
acciones) se conservan. **Falta mostrarle la nueva paleta al cliente.** Para revertir:
los tokens viven en un solo bloque de `:root` y en `.section--alt, .theme-light`.

Las tres desviaciones siguientes son de la paleta anterior, por contraste; la tabla se
conserva como historia (en el mockup original incumplían WCAG AA).

| # | Mockup | Implementado | Razón |
|---|---|---|---|
| 1 | Enlace de nav activo en `#c13d2f` sobre `#5f5e5e` | Texto **blanco** + subrayado rojo | El original da **1.18:1**: ilegible. Se conserva el subrayado, que es el elemento reconocible |
| 2 | Enlaces de nav en blanco al **80%** | Blanco al **92%** | El 80% da **3.96:1**. El 92% da 4.63:1 en el peor caso (barra translúcida sobre página clara) |
| 3 | Nav horizontal desde **768px** | Desde **1280px** | La barra necesita ~1220px; a 768px desbordaba |

**No cambiar sin recalcular el contraste.**

Otras diferencias, sin impacto visual:
- El patrón de puntos de la galería usa `radial-gradient` en vez del data-URI base64
  del mockup. Mismo dibujo, sin base64 y usando el token de color.
- El hero usa `<img>` en vez de `background-image`: el preloader del navegador lo
  descubre en el HTML inicial y lo trata como candidato a LCP.
- Los iconos son SVG inline en vez de Material Symbols, para no añadir una petición
  de red y una fuente completa por cuatro glifos.

---

## 9. Convención de contenido

Los localizadores numerados (`INICIO 1`, `PRODUCTO 4`…) ya no existen: el sitio tiene texto
real. La convención vigente marca la procedencia en `src/data/` (`[PDF]`, `[CLIENTE]`,
`[PROPUESTA]`) y está descrita en `CLAUDE.md`.

**Sin precios.** Por pedido del cliente (2026-10-11) el catálogo no publica valores: cada
tarjeta es foto, nombre, descripción opcional y un botón «Cotizar».

**Cifras.** Solo se renderizan las confirmadas (`pending: false`). Las pendientes siguen
en `company.js` como recordatorio, pero no se muestran.

---

## 10. Rendimiento y accesibilidad

- **Cero JavaScript de terceros por CDN.** Los scripts del sitio se empaquetan con Astro;
  el único paquete externo es **Lenis** (~3 KB, §12). Solo se sirven 2 hojas de CSS.
- 8 páginas estáticas, build en ~750ms.
- Todo control interactivo mide **44px** como mínimo (`--tap`).
- `prefers-reduced-motion` respetado en toda transición de movimiento.
- Los inputs van en `font-size: 16px` **exacto** (no rem): por debajo de ese umbral,
  iOS hace zoom automático al enfocar y descuadra la página.
- `scroll-padding-top` en `<html>` para que los enlaces de ancla no queden bajo el
  header fijo.
- HTML semántico estricto: un solo `<h1>` por página, sin saltos de nivel, landmarks
  correctos, `alt` en toda imagen.

---

## 11. Puntos abiertos

1. **Mostrar la paleta nueva al cliente.** Es la desviación mayor del mockup (§8).
2. **Fotos que faltan.** Soldadura TIG y Diseño (servicios del Inicio, 4 huecos) y las
   páginas Nosotros y Servicios siguen sin fotos: las carpetas `Nosotros` y `Servicios`
   llegaron vacías. Los huecos rotulados dicen qué foto va.
3. **Etiquetas de acción:** quedan «Cotizar Proyecto» (formulario), «Escríbenos por
   WhatsApp» (canal), «Cotizar» (tarjeta de producto) y «Enviar consulta» (envío). «Cotizar
   por WhatsApp» en la galería de AL Mueblería sigue aparte.
3b. **Pendientes de las revisiones del 2026-10-11** (ver `MEJORAS.md §7`): foto del hero,
   `/servicios` y `/nosotros` sin imágenes, icono del menú móvil que no cambia a «X».
4. ~~Favicon~~ — **resuelto el 2026-10-04**: mismo monograma `JZ` aprobado por el cliente
   (no se redibujó), recoloreado a hueso `#f0ebe3` sobre `#16120f`, más grande (~82 % del
   cuadro) y con 15,7:1. `og-image.png` rehecha en la paleta nueva; su fuente editable es
   `propuestas/og-image.html`. Nunca fue cromado: era blanco plano sobre gris.
5. **Fotos de celular, casi todas verticales**, recortadas a 4:3 y 3:2 con
   `object-position` por imagen. Fotos horizontales mejorarían el hero y las filas.
6. Ver `MEJORAS.md` para el resto del backlog.

Cerrados el 2026-10-04: junta casi invisible (`--color-border` ahora ≈1,9:1 sobre el
lienzo), `.eyebrow` al borde de AA (ya 6,5:1 / 5,3:1) y `--font-mono` (eliminada del
sistema; el cuerpo usa Inter).

---

## 12. Movimiento

Tres capas, de menor a mayor costo. **Todas se desactivan con `prefers-reduced-motion`.**

| Capa | Técnica | JS |
|---|---|---|
| Entrada del hero y de los encabezados | `@keyframes rise-in` en cascada + `settle` (la foto se asienta de `scale(1.08)` a 1) | 0 |
| Revelado al scroll | CSS scroll-driven animations: `animation-timeline: view()`, `animation-range: entry 0% entry 38%`. Detrás de `@supports`: en Firefox el contenido simplemente está visible | 0 |
| Transición entre páginas | `@view-transition { navigation: auto }` nativa. El header y el FAB llevan `view-transition-name` para no parpadear | 0 |
| Scroll con inercia | **Lenis** (~3 KB, npm, se empaqueta; no hay CDN). Solo con movimiento no reducido; con puntero táctil no suaviza. `anchors` con el offset del header | sí |

Reglas: la **firma** `.media-frame` sigue siendo la única animación en *hover* con carga
expresiva; lo de arriba es coreografía de entrada. Los botones siguen sin `transform` en
hover. Un menú abierto detiene Lenis (`lenis.stop()`).

**WeldingCursor:** el halo de las chispas ya no usa `box-shadow` (se recalculaba por
frame en 90 nodos): es un degradado radial en `::after`, con color e intensidad por las
variables `--c` y `--a`. El ciclo térmico blanco → amarillo → naranja → óxido ya coincide
con la paleta.

### La costura (firma de entrada)

Al cargar, una línea de soldadura de 2px recorre el canto inferior del hero y de cada
encabezado de página (`.hero::after`, `.page-hero::after`), de izquierda a derecha y con
la punta al rojo blanco (`#ffe9c9`). Dura 1,6 s y no se repite. Es **la única excepción**
a la regla 3 (acento solo en acciones y estados): sin movimiento queda como un borde
inferior fijo de acento. Las fotos de `.media-frame` entran siempre a color (§7).

## 13. Fotos

Las fotos reales del cliente (WebP, máx. 1600 px) viven en `public/img/`; los originales,
fuera de git, en `fotos-originales/`. Cada imagen en `src/data/` lleva `src`, `alt` y
`position` (un `object-position`), porque las fotos son de celular y se recortan a 4:3 o
3:2. `pending: true` sigue mostrando el hueco rotulado. Todas las fotos van a
color (§7). Una foto no se repite en dos secciones: `taller-estanteria` es solo del hero.
