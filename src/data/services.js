// CONTENIDO DEL CLIENTE — entregado en el PDF de textos.
//
//   [PDF]       texto o servicio nombrado en el documento del cliente.
//   [PROPUESTA] redactado por nosotros porque el PDF dejó la ranura vacía.
//               El cliente debe validarlo antes de publicar.
//
// El PDF nombra tres servicios principales para la portada (soldadura TIG/MIG/
// aluminio, corte y plegado, diseño) y menciona fabricación, reparación y
// mantención en el titular. Esos cinco son [PDF]; el sexto es propuesta nuestra.
//
// `slug` e `icon` son identificadores técnicos: el slug es el ancla de la URL.

export const services = [
  {
    slug: "soldadura-tig-mig",
    // [PDF] "Soldadura tig, mig y aluminio"
    title: "Soldadura TIG, MIG y aluminio",
    icon: "tig",
    summary:
      "Uniones limpias en acero inoxidable y aluminio: TIG donde el cordón queda a la vista, MIG en estructura y uso pesado.",
    details: [
      "Soldadura TIG para terminaciones a la vista",
      "Soldadura MIG para estructura y uso intensivo",
      "Aluminio para piezas donde el peso importa",
    ],
  },
  {
    slug: "corte-plegado",
    // [PDF] "corte y plegado"
    title: "Corte y plegado",
    icon: "shelf",
    summary:
      "Plancha cortada y plegada a la medida exacta, para que cada pieza llegue al montaje sin ajustes de última hora.",
    details: [
      "Corte de plancha en distintos espesores",
      "Plegado a medida según plano o levantamiento",
      "Piezas listas para armado e instalación",
    ],
  },
  {
    slug: "diseno-proyecto",
    // [PDF] "diseño"
    title: "Diseño de proyecto",
    icon: "counter",
    summary:
      "Tomamos las medidas reales de tu espacio y diseñamos la solución completa antes de cortar la primera plancha.",
    details: [
      "Levantamiento y medición en terreno",
      "Propuesta adaptada al flujo de trabajo del local",
      "Planos para aprobar antes de fabricar",
    ],
  },
  {
    slug: "mesones-equipamiento",
    // [PDF] "Fabricamos mesones, equipamiento y mobiliario de alta durabilidad"
    title: "Mesones y equipamiento",
    icon: "kitchen",
    summary:
      "Mesones de trabajo, lavado y despacho, y el mobiliario que tu cocina necesita, dimensionados a tu espacio.",
    details: [
      "Mobiliario de alta durabilidad para uso intensivo",
      "Estructuras dimensionadas al espacio real",
    ],
  },
  {
    slug: "campanas-extraccion",
    // [PROPUESTA] No está en el PDF, pero es parte del rubro y del catálogo
    title: "Campanas y extracción",
    icon: "hood",
    summary:
      "Campanas y ductos de extracción en acero inoxidable, a la medida de tu línea de cocción.",
    details: [
      "Campanas murales y centrales",
      "Ductos, codos y terminales de descarga",
      "Filtros desmontables para lavado",
    ],
  },
  {
    slug: "reparacion-mantencion",
    // [PDF] "Fabricación, reparación y mantención de estructuras"
    title: "Reparación y mantención",
    icon: "tools",
    summary:
      "Reparamos y reforzamos el equipamiento que todavía tiene vida útil, antes de pensar en reemplazarlo.",
    details: [
      "Reparación de estructuras y cubiertas",
      "Refuerzo y nivelación de piezas existentes",
      "Mantención programada del equipamiento instalado",
    ],
  },
];

/**
 * Los tres servicios que el PDF nombra como principales para la portada, con
 * las dos imágenes por servicio que el propio documento pide.
 *
 * [PDF] "Principales servicios: Soldadura tig, mig y aluminio (2 imagenes) /
 *        corte y plegado (2 imagenes) / diseño (2 imagenes)"
 *
 * Se componen en filas alternadas, no en tres columnas iguales: la grilla de
 * tres tarjetas simétricas con icono es el patrón que delata una plantilla, y
 * además aplasta las seis fotos a miniaturas donde no se distingue el trabajo.
 */
export const mainServices = [
  {
    slug: "soldadura-tig-mig",
    title: "Soldadura TIG, MIG y aluminio",
    blurb:
      "El proceso se elige según la pieza: TIG donde el cordón queda a la vista, MIG en estructura y uso pesado.",
    media: [
      { slot: "Cordón de soldadura TIG en detalle", ratio: "3:2" },
      { slot: "Soldador trabajando en el taller", ratio: "3:2" },
    ],
  },
  {
    slug: "corte-plegado",
    title: "Corte y plegado",
    blurb:
      "Plancha cortada y plegada a la medida exacta del proyecto, para que el montaje no dependa de ajustes a última hora.",
    media: [
      { src: "/img/piezas-cortadas.webp", alt: "Piezas de acero inoxidable cortadas y plegadas, listas para armado", position: "50% 50%", ratio: "3:2" },
    ],
  },
  {
    slug: "diseno-proyecto",
    title: "Diseño de proyecto",
    blurb:
      "Medimos el espacio real y diseñamos la solución completa antes de cortar la primera plancha.",
    media: [
      { slot: "Plano de proyecto sobre el mesón", ratio: "3:2" },
      { slot: "Medición en terreno", ratio: "3:2" },
    ],
  },
];

// [PROPUESTA] El PDF no describe el proceso de trabajo. Estas cuatro etapas
// salen de lo que el propio documento implica ("desde el diseño inicial hasta
// la fabricación, reparación y mantención"). Validar con el cliente.
export const processSteps = [
  {
    title: "Levantamiento",
    description: "Vamos a tu local, medimos el espacio real y entendemos cómo se trabaja ahí.",
  },
  {
    title: "Diseño y cotización",
    description: "Te mostramos la propuesta con medidas, materiales y plazos antes de fabricar.",
  },
  {
    title: "Fabricación",
    description: "Cortamos, plegamos y soldamos en nuestro taller de Santiago.",
  },
  {
    title: "Instalación",
    description: "Montamos en terreno, nivelamos y dejamos el equipamiento operativo.",
  },
];

/**
 * Preguntas frecuentes de /servicios.
 *
 * [PROPUESTA] Borrador nuestro del 2026-10-11. Cada respuesta usa SOLO datos
 * que ya están en el sitio (documento del cliente o textos ya publicados):
 * nada de plazos, garantías, cobertura ni costos, que el cliente no ha dado.
 * Preguntas que quedaron fuera por eso: cuánto demora, si instalan fuera de
 * Santiago, si la visita tiene costo, qué acero usan (304 o 430).
 */
export const faqs = [
  {
    question: "¿Qué necesito para pedir una cotización?",
    answer:
      "Las medidas de tu espacio o el plano que tengas. Si no tienes ninguno de los dos, una foto del lugar y una descripción de lo que necesitas bastan para empezar.",
  },
  {
    question: "¿Fabrican piezas que no aparecen en la lista de productos?",
    answer:
      "Sí. La lista muestra lo que hacemos habitualmente, pero fabricamos a medida: mándanos el plano o las medidas de lo que necesitas.",
  },
  {
    question: "¿Reparan equipamiento que ya tengo?",
    answer:
      "Sí. Además de fabricar, reparamos y reforzamos estructuras y cubiertas de acero inoxidable.",
  },
  {
    question: "¿Trabajan solo acero inoxidable?",
    answer: "Trabajamos acero inoxidable y también aluminio, con soldadura TIG y MIG.",
  },
];
