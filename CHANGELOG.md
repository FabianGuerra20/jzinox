# Registro de cambios

Lo que se hizo en el sitio de JZ INOX, por fecha. El detalle técnico de cada cambio está en el
historial de git; las decisiones de diseño, en [`DESIGN.md`](DESIGN.md).

## 24 nov 2026 · Material final del cliente

- Se cargaron las fotos y videos que el cliente ordenó por sección: 8 fotos nuevas y 2 videos
  de la plegadora.
- Catálogo de 20 piezas: dos productos nuevos («Revestimientos de lava mopa» y «Aplastador de
  basura») y fotos para Porta Nova, Porta impresora y Carro de bidones de aceite.
- Inicio: los bloques de JZ INOX y AL Mueblería pasan a ser carruseles automáticos, con pausa,
  flechas y respeto a `prefers-reduced-motion`.
- Cada servicio principal lleva dos imágenes. «Corte y plegado» muestra los videos en bucle,
  que solo corren cuando están a la vista (175 KB y 690 KB tras comprimirlos).
- Textos del cliente: botón «Hablar con un asesor», historia literal en Nosotros y solo la
  misión (se retiró una visión que no había validado).
- Barra de categorías del catálogo rehecha: botones, cantidad de productos y categoría activa.

## 23 nov 2026 · Diseño elegido y auditoría completa

- El cliente eligió su diseño en el selector: paleta «Azul arco» en modo claro, estilo blando,
  esquinas suaves y catálogo en tarjetas grandes.
- Fotos siempre enteras: se mostraban recortadas porque casi todas son verticales. Ahora van
  completas sobre una versión desenfocada de sí mismas.
- Auditoría en paralelo de diseño, técnica, SEO y animaciones. Detectó que el estilo nuevo
  solo estaba en las tarjetas. Arreglos:
  - Estilo blando en todo el sitio: fotos, contacto, visor y galería.
  - Fondo desenfocado como miniatura en base64, para no descargar dos veces cada foto.
  - Menú móvil que bloquea el contenido de atrás, para la navegación con teclado.
  - Se quitaron el zoom y el efecto de «corte» de las fotos, que eran del estilo anterior.
  - Títulos y descripciones nuevos, datos estructurados válidos e imagen nueva para redes.
- Cursor de chispas recoloreado al azul de la paleta, con una gama para fondos claros y otra
  para la cabecera y el pie.

## 14–16 nov 2026 · SEO local, pedidos y selector de diseño

- Página `/soldadura-santiago` para la búsqueda local, dominio canónico configurable, datos
  estructurados y redirecciones.
- Pedidos del cliente por audio: fotos reubicadas, galería de varias fotos por producto y
  fotos nuevas.
- Selector de diseño completo para que el cliente eligiera el aspecto del sitio.

## Octubre 2026 · Contenido real y sistema de movimiento

- Logotipo nuevo del cliente, favicon e imagen para redes.
- Pedidos del cliente: orden del Inicio, catálogo sin precios, 6 categorías y 18 productos.
- Sistema de movimiento y revisiones de diseño con varios estudios.
- Clientes con logos, proyectos recientes y garantía, tomados del PDF del cliente.

## Agosto–septiembre 2026 · Primera versión

- Estructura completa en Astro, landing de AL Mueblería e implementación de la maqueta
  aprobada.
- Textos del cliente, formulario con validación accesible, página 404 y controles táctiles
  de 44 px como mínimo.
