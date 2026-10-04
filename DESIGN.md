# Sistema de diseño — JZ INOX & AL Mueblería

> **"Ingeniería limpia y precisión"**
> Origen: mockup aprobado por el cliente (`Mockup Inicio`, HTML + Tailwind).
> Implementado el 2026-09-02. Fuente de verdad del código: `src/styles/global.css`.

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
3. **El acento vive solo en acciones y estados.** Nunca como relleno decorativo.

---

## 2. Color

Paleta extraída literalmente del mockup. La columna "origen" da el nombre del token en
la configuración de Tailwind del mockup, para poder rastrear cualquier valor.

### Superficies

| Token | Valor | Origen | Uso |
|---|---|---|---|
| `--color-page` | `#f9f9f9` | `background` | Lienzo del documento (`body`) |
| `--color-bg` | `#ffffff` | `surface-container-lowest` | Superficie de tarjeta, celdas del bento |
| `--color-bg-alt` | `#eeeeee` | `surface-container` | Sección alterna, footer |
| `--color-surface` | `#f3f3f3` | `surface-container-low` | Superficie hundida, hover de celda |
| `--color-surface-hover` | `#e8e8e8` | `surface-container-high` | — |
| `--color-surface-high` | `#e8e8e8` | `surface-container-high` | Sección de cierre (INICIO 4) |
| `--color-surface-highest` | `#e2e2e2` | `surface-container-highest` | — |
| `--color-surface-dim` | `#dadada` | `surface-dim` | Puntos inactivos del carrusel |

El ritmo de fondo del sitio es de tres niveles: `#ffffff` → `#f9f9f9` → `#eeeeee`.
Una `.section` sin modificador se pinta sobre `#f9f9f9`, **no sobre blanco**.

### Estructura

| Token | Valor | Uso |
|---|---|---|
| `--color-border` | `#e5e7eb` | **Toda** junta de 1px |
| `--color-steel` | `#5f5e5e` | Barra del header, velo del hero |
| `--color-steel-medium` | `#9ca3af` | Divisor de marca aliada |
| `--color-steel-dark` | `#4b5563` | Borde inferior del header (2px) |
| `--color-steel-light` | `#dadada` | — |
| `--color-ink` | `#2f3131` | Etiquetas sólidas (`.tag`), banda de acero |

### Texto

| Token | Valor | Contraste |
|---|---|---|
| `--color-text` / `--color-graphite` | `#1a1c1c` | 16.9:1 sobre blanco |
| `--color-text-muted` | `#59413d` | 9.34:1 sobre blanco · 8.05:1 sobre `#eeeeee` |

`--color-text-muted` es un gris **cálido** (marrón desaturado), no azulado. Es
deliberado: acompaña al rojo ladrillo del acento.

### Acento

| Token | Valor | Uso |
|---|---|---|
| `--color-accent` | `#c13d2f` | Acciones, estados, eyebrows |
| `--color-accent-dark` | `#ae3023` | Hover de acción |
| `--color-accent-light` | `#ffb4a9` | Acento **sobre fondo oscuro** (hero, banda de acero) |
| `--color-whatsapp` | `#25d366` | Solo el canal de WhatsApp |

Ratios verificados: blanco sobre `--color-accent` = **5.28:1**. `--color-accent` sobre
blanco = **5.28:1**, sobre `#f9f9f9` = **5.02:1**, sobre `#eeeeee` = **4.55:1**.

> El verde `#25d366` puro **no** llega a 4.5:1 sobre fondo claro. Por eso
> `.btn--whatsapp` usa `#128c3d` para el texto y reserva el verde de marca para el
> borde y el fondo del botón flotante.

---

## 3. Tipografía

| Rol | Familia | Pesos |
|---|---|---|
| Titulares | **Hanken Grotesk** | 600, 700, 800 |
| Cuerpo e interfaz | **Inter** | 400, 500, 600 |

Hanken Grotesk es una grotesca geométrica de asta cerrada: en 800 tiene el peso de
rotulación industrial que pide el hero.

> `--font-mono` existe pero **no se carga desde Google Fonts**: aterriza en Consolas,
> una cara de editor de código ajena al sistema. `servicios.astro` ya la abandonó.
> Ver "Puntos abiertos".

### Escala

| Rol | Tamaño | Interlínea | Tracking | Peso |
|---|---|---|---|---|
| `h1` (headline-xl) | 40px → **64px** | 1.1 | −0.02em | 800 |
| headline-lg | 48px | 1.2 | −0.01em | 700 |
| `h2` (headline-md) | 28px → **32px** | 1.2 | — | 700 |
| `h3` (headline-sm) | 24px | 1.3 | — | 600 |
| body-lg | 18px | 1.6 | — | 400 |
| body-md | 16px | 1.6 | — | 400 |
| body-sm | 14px | 1.5 | — | 400 |
| label-lg | 14px | 1 | 0.05em | 600 |
| label-sm | 12px | 1 | — | 500 |

Los `clamp()` aterrizan exactamente en los valores del mockup en cada extremo.
El `h1` va siempre en `text-transform: uppercase`.

---

## 4. Métrica y espaciado

| Token | Valor |
|---|---|
| `--container-width` | `1440px` |
| `--gutter` | `32px` |
| `--section-gap` | `64px` |
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
| **1024px** | Layout de contenido completo (placas 3/6/3, bento de 3 y 4 columnas) |
| **1280px** | La navegación pasa a horizontal |

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

### Botones
`.btn` + `--primary` (relleno rojo) · `--outline` (rojo sin relleno) · `--ghost`
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
Proporción **3/6/3** en escritorio, apilada en móvil:
`[ Identidad + CTAs ] | [ Galería enmarcada ] | [ Productos destacados ]`

El bloque central no es una imagen a sangre: es una imagen **enmarcada** sobre una mesa
de trabajo con retícula de puntos (`radial-gradient` cada 20px). Ese aire alrededor es
lo que la hace leer como pieza sobre un plano y no como banner. Las flechas se apoyan
justo en el canto del marco, medio dentro y medio fuera.

El carrusel funciona **sin JavaScript** (scroll-snap + gesto). Flechas y puntos nacen
`hidden` y solo se revelan cuando el script confirma que funcionan.

### Header
Barra **única y fija** de 80px.

**El logotipo es un lockup tipográfico, no un archivo.** Hanken Grotesk en dos pesos y
una sola tinta: `JZ` en 800 con tracking negativo, `INOX` en 600 con `letter-spacing:
.22em` (compensado con un `margin-right` negativo para que el bloque quede centrado por
el glifo y no por la caja). Da entre **5,1:1 y 6,4:1** sobre la barra translúcida.

Antes era un PNG de cromo biselado con extrusión 3D. Era el único elemento con brillo y
volumen de un sistema cuya **regla 1 es radio cero** y cuya **regla 3 prohíbe el relleno
decorativo**: el sistema y la marca estaban peleados, y la marca ganaba en el lugar más
visible del sitio. Encima, sus facetas oscuras hacían que la Z y la N se perdieran contra
el acero. Como texto también se mantiene nítido a cualquier densidad, es seleccionable,
ahorra 18,9 KB y libera el `fetchpriority="high"` que le competía al hero por el LCP.

El PNG se conserva en `public/logo-jzinox.png`. Si el cliente exige su logotipo tal cual,
se revierte solo el bloque `.header__brand` de `Header.astro`. Acero al 90% (`color-mix`) + `backdrop-filter: blur(12px)`,
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

## 7. La firma: revelado de medios

La única animación con carga expresiva del sistema. El resto de transiciones son
funcionales (color, borde, fondo).

```css
.media-frame { overflow: hidden; }
.media-frame img { filter: grayscale(1) contrast(1.04); transform: scale(1); }
.media-frame:hover img,
.media-frame:focus-within img { filter: grayscale(0); transform: scale(1.05); }
```

Toda imagen entra desaturada, como una plancha sin pulir, y recupera color y escala
cuando el cursor la toca. **El zoom vive en la imagen y el recorte en el marco**, así
que la escala nunca desborda ni provoca reflow: solo repinta.

Bajo `prefers-reduced-motion` el **color sigue apareciendo** —es información, no
adorno— y desaparece el desplazamiento.

Aplicado en: carrusel de las placas de marca, piezas de `/al-muebleria`.
Un borde que rodee una imagen con esta clase debe ir en el **marco**, nunca en la
imagen: si no, el zoom se lo lleva fuera del recorte.

---

## 8. Desviaciones deliberadas del mockup

Las tres son por contraste. En las tres, el mockup incumple WCAG AA.

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

Todo el texto visible es **placeholder localizable** hasta que llegue el copy del
cliente. Cada ranura tiene un identificador numerado para que el cliente pueda decir
exactamente qué va en cada una.

| Patrón | Alcance |
|---|---|
| `INICIO n` | Secciones de la portada (1–4) |
| `NOSOTROS n` | Secciones de /nosotros (1–5, con 3.1 y 3.2) |
| `SERVICIOS n` · `PASO n` | Secciones y etapas de /servicios |
| `PRODUCTOS n` · `CATÁLOGO n` · `CONTACTO n` | Secciones de esas páginas |
| `VALOR n` · `DATO n` | Valores y cifras de /nosotros |
| `SERVICIO n` | Servicios de JZ INOX (1–6) |
| `PRODUCTO n` | Piezas del catálogo de JZ INOX (1–15) |
| `CATEGORÍA n` | Categorías del catálogo (1–5) |
| `AL n` · `SERVICIO AL n` · `PRODUCTO AL n` · `CATEGORÍA AL n` | Todo lo de AL Mueblería |

**Un producto tiene UN número en todo el sitio.** Los destacados del Inicio son
`PRODUCTO 1, 4, 5, 10` —no 1–4— porque son esas mismas piezas del catálogo.

**El nombre real de cada ranura vive en un comentario** junto a cada entrada de los
archivos de `src/data/` (`// ranura prevista: campana extractora mural`). Los `slug` e
`id` técnicos también lo conservan. Sin eso se perdería qué iba en cada slot.

**Queda con texto real** (es interfaz, no contenido a redactar): menú, botones, "Productos
destacados", "Navegación", "Horario de Atención", "Datos de contacto", etiquetas del
formulario, los datos de contacto, las `meta description` y la página `/gracias`.

---

## 10. Rendimiento y accesibilidad

- **Cero archivos JavaScript externos.** Los tres scripts del sitio se inlinean (~4 KB
  en total). Solo se sirven 2 hojas de CSS.
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

1. **`--color-border` (`#e5e7eb`) es casi invisible.** Da **1.24:1** sobre celda blanca
   y **1.07:1** sobre `#eeeeee`. Es el valor literal del mockup (`steel-light`), pero
   choca con la regla 2 de este mismo documento: si la junta *es* la línea del plano,
   tiene que verse. Además tiene matiz azulado (~220°) contra una paleta de neutros y un
   texto cálido. *Propuesta:* un gris neutro algo más oscuro (~`#dcdcdc`). **Requiere
   aprobación del cliente por ser una desviación del mockup.**
2. **`.eyebrow` sobre `.section--alt`** da **4.55:1**: pasa AA, pero con 0.05 puntos de
   margen. Cualquier retoque de la paleta lo rompe. *Propuesta:* un token
   `--color-accent-on-light` dedicado (`#ae3023` da 5.57:1).
3. **`--font-mono` sin cargar.** `catalogo.astro`, `al-muebleria.astro` y `nosotros.astro`
   todavía la usan y aterrizan en Consolas. Decidir: cargarla de verdad o eliminarla del
   sistema.
4. **Imágenes reales.** Todo lo visual son huecos rotulados. El hero se sustituye
   cambiando `heroImage` en `index.astro` (y poniendo `pending: false`); los 15 productos
   del catálogo, su `image` en `catalog.js`.
5. **El favicon sigue siendo la versión cromada.** Coherencia con el logotipo plano
   pediría aplanarlo también, pero el cliente aprobó ese archivo aparte ("más grande y
   con más contraste"), así que no se toca sin preguntar.
6. **Cinco etiquetas para la misma acción:** "Cotizar Proyecto", "Cotizar este ítem",
   "Cotizar por WhatsApp", "Hablar con un Asesor", "Enviar consulta". Se unificaron las
   del catálogo; el resto sigue abierto.
7. Ver `MEJORAS.md` para el resto del backlog técnico y de SEO.
