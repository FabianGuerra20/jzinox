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
      "Uniones limpias en acero inoxidable y aluminio, con el proceso elegido según la pieza: TIG donde el cordón queda a la vista, MIG donde manda el rendimiento.",
    details: [
      "Soldadura TIG para terminación sanitaria a la vista",
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
      "Corte y plegado de plancha a la medida exacta de tu proyecto, para que cada pieza llegue al montaje sin ajustes de última hora.",
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
      "Mesones, mobiliario y equipamiento en acero inoxidable fabricados a medida para restaurantes, comida rápida e industria alimentaria.",
    details: [
      "Mesones de trabajo, lavado y despacho",
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
      "Campanas y ductos de extracción en acero inoxidable, dimensionados al caudal que realmente necesita tu cocina.",
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
      "Reparamos y reforzamos equipamiento que todavía tiene vida útil, porque reemplazar la línea completa rara vez es la primera respuesta correcta.",
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
      "El proceso se elige según la pieza: TIG donde el cordón queda a la vista, MIG donde manda el rendimiento.",
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
      { slot: "Plegadora en operación", ratio: "3:2" },
      { slot: "Piezas cortadas listas para armado", ratio: "3:2" },
    ],
  },
  {
    slug: "diseno-proyecto",
    title: "Diseño",
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
    description: "Cortamos, plegamos y soldamos en taller propio, con manufactura nacional.",
  },
  {
    title: "Instalación",
    description: "Montamos en terreno, nivelamos y dejamos el equipamiento operativo.",
  },
];
