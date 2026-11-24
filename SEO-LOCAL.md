# SEO local — lo que se hace fuera del código

Todo lo de este archivo necesita una cuenta que no es el repositorio: la de Google del negocio, Cloudflare y Vercel. Los textos están listos para copiar. Los datos salen de `src/data/site.js`; si cambian ahí, cambian aquí.

Orden recomendado: 1 → 2 → 3 → 4 → 5.

---

## 1. Conectar `jzinox.cl`

Estado al 2026-11-14: el dominio está registrado, sus DNS están en **Cloudflare** y el correo en **Zoho**, pero no tiene registro `A` ni `www`. Por eso no abre.

1. En Vercel, proyecto `jzinox` → Settings → Domains → agregar `jzinox.cl` y `www.jzinox.cl`. Dejar `jzinox.cl` como principal y `www` redirigiendo a él.
2. En Cloudflare → DNS de `jzinox.cl`, crear los dos registros **con los valores que muestre Vercel** en esa pantalla. Normalmente son:

   | Tipo | Nombre | Valor | Proxy |
   |---|---|---|---|
   | A | `@` | la IP que indique Vercel (históricamente `76.76.21.21`) | **Solo DNS** (nube gris) |
   | CNAME | `www` | `cname.vercel-dns.com` | **Solo DNS** (nube gris) |

3. **No tocar** los registros `MX` ni los `TXT` de Zoho: son el correo `ventas@jzinox.cl`.
4. Cuando Vercel marque el dominio como válido, hacer un deploy nuevo. El sitio detecta solo que `jzinox.cl` ya resuelve y cambia canónico, sitemap, `robots.txt` y el retorno del formulario. Mientras no resuelva, sigue usando `jzinox.vercel.app`.
5. En Vercel, dejar `jzinox.vercel.app` redirigiendo a `jzinox.cl`.

---

## 2. Ficha de Google Business Profile

El negocio no tiene ficha en ninguna plataforma (confirmado el 2026-11-14), así que se crea desde cero en `business.google.com`. Debe hacerlo la cuenta de Google del negocio, no una personal de quien desarrolla. Google pide verificar la dirección, normalmente con un video del local o un código.

Cuando la ficha exista, cambiar `mapsHref` en `src/data/site.js` por el enlace de la ficha: hoy apunta a un punto del mapa, no a un negocio.

| Campo | Valor |
|---|---|
| Nombre | JZ INOX |
| Categoría principal | Soldador |
| Categorías secundarias | Fabricante de productos metálicos · Proveedor de acero inoxidable · Proveedor de equipos para restaurantes |
| Dirección | Av. Departamental 999, Galpón 11, San Miguel, Región Metropolitana |
| Área de servicio | Santiago, Región Metropolitana |
| Teléfono | +56 9 3188 9950 |
| Sitio web | `https://jzinox.cl/soldadura-santiago` (o la portada, ver nota) |
| Horario | Lunes a viernes 9:00–18:00 · Sábado 9:00–13:00 |
| Instagram | `https://www.instagram.com/jzinox_chile/` |

Notas:

* **Los nombres de las categorías pueden variar** en el selector de Google: elegir la más parecida. La principal es la que más pesa. «Soldador» apunta a «soldadura santiago»; si el cliente prefiere que lo encuentren primero por equipamiento de cocina, la principal sería la de acero inoxidable y «Soldador» pasa a secundaria.
* El nombre va sin palabras clave agregadas («JZ INOX Soldadura Santiago» incumple las normas de Google y arriesga la suspensión).
* La dirección debe ir **idéntica** a la del sitio y a la de Instagram.

**Descripción (hasta 750 caracteres):**

> Taller de acero inoxidable y soldadura en San Miguel, Santiago. Llevamos más de 20 años fabricando, reparando y manteniendo equipamiento a medida para restaurantes, locales de comida rápida e industria alimentaria: mesones, campanas, carros, revestimientos, soportes y protectores. Hacemos soldadura TIG en acero inoxidable, soldadura MIG en acero carbono y trabajos en aluminio, además de corte y plegado de plancha y diseño de proyecto. Cada pieza se fabrica a la medida de tu espacio y todos los trabajos son garantizados. Cotiza con las medidas, una foto o el plano que tengas.

**Servicios para cargar en la ficha:**

* Soldadura TIG en acero inoxidable
* Soldadura MIG en acero carbono
* Soldadura de aluminio
* Fabricación en acero inoxidable a medida
* Corte y plegado de plancha
* Campanas y extracción
* Mesones y equipamiento gastronómico
* Reparación y mantención de acero inoxidable

**Fotos:** logo, fachada o entrada del galpón, interior del taller, y las de obra que ya están en `public/img/` (campanas, piezas cortadas, columna). Las que más ayudan y todavía no existen: un cordón de soldadura de cerca y el soldador trabajando.

**Reseñas:** desde la ficha se copia el enlace «Pedir reseñas». Mandarlo por WhatsApp a clientes con trabajos ya entregados, de a pocos por semana, y responder cada una. No ofrecer nada a cambio: Google lo prohíbe.

---

## 3. Google Search Console

1. Entrar a `search.google.com/search-console` con la cuenta del negocio.
2. Agregar propiedad de tipo **Dominio** con `jzinox.cl`. Google entrega un registro `TXT`.
3. Pegar ese `TXT` en Cloudflare (se suma a los de Zoho, no los reemplaza) y verificar.
4. En Sitemaps, enviar `https://jzinox.cl/sitemap-index.xml`.
5. En Inspección de URL, pedir la indexación de `https://jzinox.cl/` y de `https://jzinox.cl/soldadura-santiago`.
6. A las dos o tres semanas, revisar en Rendimiento con qué búsquedas aparece la página de soldadura.

Si el dominio todavía no está conectado, se puede hacer lo mismo con una propiedad de prefijo de URL para `https://jzinox.vercel.app`, pero hay que repetirlo después con `jzinox.cl`.

**Verificación sin tocar el DNS:** Search Console también ofrece una etiqueta HTML. El sitio ya la soporta: en Vercel → Settings → Environment Variables, crear `GOOGLE_SITE_VERIFICATION` con el código que entrega Google (solo el valor de `content`) y volver a desplegar. Sin esa variable la etiqueta no se emite.

## 3b. Google Analytics 4 (cuando el sitio ya esté en `jzinox.cl`)

El código está listo y apagado (`src/components/Analytics.astro`). Se activa así:

1. En `analytics.google.com`, con la cuenta del negocio, crear una propiedad «JZ INOX», zona horaria Chile y moneda CLP, y un flujo web para `https://jzinox.cl`. Google entrega un ID `G-XXXXXXX`.
2. En Vercel → Settings → Environment Variables, crear `PUBLIC_GA_ID` con ese ID y volver a desplegar.
3. Desde ese despliegue aparece un aviso de cookies. Analytics solo mide a quien acepta (Consent Mode v2 con todo denegado por defecto), como pide la ley 21.719, vigente desde el 1 de diciembre de 2026. La página `/privacidad` explica qué se mide.
4. En Analytics → Administrar → Vinculaciones, vincular con Search Console para ver las búsquedas junto a las visitas.
5. Marcar como conversión el evento `page_view` de `/gracias` (consulta enviada por el formulario).

## 3c. Formulario de contacto (FormSubmit → Zoho)

El formulario envía a `ventas@jzinox.cl`, que es un buzón de Zoho, por medio de FormSubmit (gratis, sin claves). La primera vez que se envía, FormSubmit manda a ese correo un mensaje de **activación**: hay que abrirlo en Zoho y confirmar. Hasta entonces las consultas no llegan.

Después de activarlo, FormSubmit ofrece una dirección aleatoria (por ejemplo `https://formsubmit.co/abc123…`) que oculta el correo real en el código: cambiar `formsubmitEndpoint` en `src/data/site.js` por esa dirección.

---

## 4. Otras fichas y enlaces

Con el mismo nombre, dirección y teléfono que en Google:

* **Bing Places** y **Apple Business Connect** (Apple Maps): gratis, se pueden importar desde la ficha de Google.
* **Instagram** `@jzinox_chile`: poner el sitio en el enlace del perfil y la dirección del taller.
* **Directorios que hoy aparecen en Google para «taller de soldadura santiago»:** 2GIS, Guía Negocios e Infoisinfo. También Páginas Amarillas.
* **Clientes y proveedores** que tengan una página de proveedores o de casos: un enlace desde ahí vale más que diez directorios.

---

## 5. Mensaje para el cliente

Son las preguntas que más se buscan en Google sobre soldadura en Santiago. Con las respuestas la página de soldadura puede contestarlas; hoy no las contesta para no inventar.

> Hola. Para que la página de soldadura aparezca mejor en Google necesito confirmar algunos datos:
>
> 1. ¿Sueldan en terreno o a domicilio, o solo en el taller? Si salen, ¿a qué comunas?
> 2. ¿Hacen trabajos para particulares (rejas, portones, estructuras) o solo para empresas?
> 3. ¿Qué calidades de acero inoxidable trabajan (304, 316, 430) y hasta qué espesor?
> 4. ¿Qué tipo de piezas de aluminio sueldan?
> 5. ¿Cuánto dura la garantía y qué cubre? ¿Emiten factura?
> 6. ¿Atienden urgencias? ¿En cuánto tiempo responden una cotización?
> 7. ¿Hacen mantención del equipamiento ya instalado? ¿Atienden toda la Región Metropolitana?
> 8. ¿Me pueden mandar fotos de una soldadura de cerca y de alguien soldando en el taller?
> 9. La página de soldadura volvió a existir como página propia, fuera del menú. ¿La aprueban?
>
> Además necesito acceso, o que lo hagan ustedes con mi guía, a tres cosas: la cuenta de Google del negocio (para la ficha de Google Maps), Cloudflare (para conectar jzinox.cl) y que pidan reseñas a clientes con trabajos entregados.
