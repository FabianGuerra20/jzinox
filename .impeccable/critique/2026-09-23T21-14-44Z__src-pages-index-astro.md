---
target: el sitio completo
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 3
target_identity: "file:C:\\Users\\fabyg\\OneDrive\\Escritorio\\JzInox\\strong-saturn\\src\\pages\\index.astro"
target_fingerprint: "sha256:c2f3bd4ad6c21f8478fafcd8d22a104ba1640c3d115c50934242b73f1d51d5fe"
target_path: "C:\\Users\\fabyg\\OneDrive\\Escritorio\\JzInox\\strong-saturn\\src\\pages\\index.astro"
timestamp: 2026-09-23T21-14-44Z
slug: src-pages-index-astro
---
**Método:** dual-agent (revisión de diseño y evidencia técnica, aislados hasta la síntesis).

## Salud de diseño — 24/40 · Aceptable

| # | Heurística | Puntaje | Hallazgo |
|---|---|---|---|
| 1 | Visibilidad del estado | 2 | Borde de foco (#c13d2f) y de error (#ae3023): dos rojos separados por 5% |
| 2 | Coincidencia con el mundo real | 3 | "Catálogo" en el rubro es un PDF descargable; aquí es una lista en pantalla |
| 3 | Control y libertad | 2 | Cada CTA salta a WhatsApp con mensaje escrito, sin previsualización ni vuelta |
| 4 | Consistencia y estándares | 1 | Productos/Catálogo duplicados; cinco etiquetas para la misma acción |
| 5 | Prevención de errores | 3 | Select sin opción neutra; se promete adjunto que no existe |
| 6 | Reconocer antes que recordar | 2 | 15 ítems de catálogo sin imagen; el precio no viaja al WhatsApp |
| 7 | Flexibilidad y eficiencia | 2 | No se puede pedir dos piezas a la vez |
| 8 | Estética y minimalismo | 3 | Texto fantasma del hero; celdas grises vacías del catálogo |
| 9 | Recuperación de errores | 3 | Casi excelente; lo frena el choque de rojos |
| 10 | Ayuda y documentación | 3 | Falta plazo de respuesta concreto |

## Veredicto de especificidad
El texto está diseñado para una maestranza; la interfaz que lo contiene, no. Carácter propio: lenguaje técnico, unidades por metro lineal, WhatsApp precargado por pieza. Intercambiable: retícula bento por defecto, hero genérico, iconos de set. Contradicción frontal: el logotipo es cromo biselado 3D dentro de un sistema de radio cero que prohíbe lo decorativo, y sus facetas se pierden contra la barra de acero.

## Escaneo determinista
4 hallazgos, regla `side-tab`. Tres falsos positivos medidos (opacity 0 en hover; dos son callouts, no tarjetas). Válido: `.form__result` en contacto.astro:303.
Medido en 7 rutas x 2 anchos: 0 desborde (14/14), 0 saltos de jerarquía, 0 errores de consola, 0 imágenes sin alt, 0 controles sin foco visible.

## Contradicción resuelta entre evaluadores
- Puntos del carrusel: 24x4px visuales pero `::before` con inset-block -20px extiende a 44px. NO es fallo.
- Botón WhatsApp portada: CONFIRMADO 3.54:1 (#128c3d sobre #e8e8e8, 14px/600). El comentario en global.css:424 es incorrecto: #128c3d no llega a 4.5:1 ni sobre blanco (4.34:1). Único fallo de contraste real del sitio.

## Lo que funciona
1. Formulario de contacto: novalidate deliberado, mensajes propios anclados al campo, foco al primer inválido, aria-live, y fallo que entrega WhatsApp y teléfono.
2. WhatsApp precargado por pieza: elimina la pantalla en blanco donde el cliente no sabe cómo se llama lo que necesita.
3. Presupuesto cumplido: 36KB HTML + 27KB CSS + 4.3KB JS inline propio. Cero JS de terceros.

## Problemas prioritarios
- [P0] El catálogo no tiene ni siquiera un hueco de imagen. No faltan fotos: falta la ranura. → /impeccable layout
- [P1] /productos y /catalogo son la misma página dos veces, ambas en el menú, mismo wa.me. → /impeccable distill
- [P1] /contacto: select sin opción neutra mal-etiqueta cada lead; se promete adjunto inexistente; formulario bajo el pliegue. → /impeccable harden
- [P1] Texto fantasma del SVG del hero atravesando el h1 en escritorio y móvil. → /impeccable polish
- [P2] Cinco etiquetas para la misma acción. → /impeccable clarify

## Banderas rojas por persona
- Jordan: nada le dice si atienden a un local chico; dos placas coequivalentes le obligan a elegir empresa antes que necesidad; tres "Dato por confirmar" en la página de confianza.
- Casey: CTAs a ~500px de scroll; hamburguesa no cambia a ✕; no puede adjuntar la foto del plano que el titular le pide.
- Riley: al volver a un campo corregido, el foco es el mismo rojo que el error; su consulta llega mal etiquetada por el select.

## Observaciones menores
Junta de 1px a 1.24:1 (la regla dura nº2 no se cumple). --font-mono aterriza en Consolas en /nosotros. Dos fetchpriority=high compitiendo en portada. 6 inversiones de orden de tabulación. Sin enlace a privacidad junto al envío ni "Cómo llegar". Velo del hero: 12.2-14.0:1 real; cota 4.58:1 con foto blanca en escritorio, bajo 4.5:1 a 390px.

## Preguntas
1. ¿El visitante sabe que JZ INOX y AL Mueblería son dos cosas, o la portada le enseña la estructura societaria?
2. Si el precio es de maqueta y lo dices, ¿por qué es lo más grande y rojo de cada tarjeta?
3. ¿Cuál es la pieza mínima que fabrican? Ni una línea lo responde.
4. El logo es cromo y el sistema es plano. ¿Cuál cede?
