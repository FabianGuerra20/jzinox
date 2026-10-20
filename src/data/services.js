export const services = [
  {
    slug: "soldadura-tig-mig",
    // [PDF]
    title: "Soldadura TIG, MIG y aluminio",
    icon: "tig",
    summary:
      "Dentro de nuestros servicios contamos con equipamiento para procedimientos de soldadura TIG para acero inoxidable y MIG para acero carbono.",
    details: [
      "Soldadura TIG para acero inoxidable",
      "Soldadura MIG para acero carbono",
      "Trabajos en aluminio",
    ],
  },
  {
    slug: "corte-plegado",
    // [PDF]
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
    // [PDF]
    title: "Diseño de proyecto",
    icon: "counter",
    summary:
      "Si necesitas una solución, podemos diseñar lo que tienes en mente, realizamos proyectos a medida de tus espacios y necesidades.",
    details: [
      "Levantamiento y medición en terreno",
      "Propuesta adaptada al flujo de trabajo del local",
      "Planos para aprobar antes de fabricar",
    ],
  },
  {
    slug: "mesones-equipamiento",
    // [PDF]
    title: "Mesones y equipamiento",
    icon: "kitchen",
    summary:
      "Fabricamos todo tipo de mesones de producción, de acuerdo a las necesidades de tu empresa, de diversas medidas y características.",
    details: [
      "Mobiliario de alta durabilidad para uso intensivo",
      "Estructuras dimensionadas al espacio real",
    ],
  },
  {
    slug: "campanas-extraccion",
    // [PROPUESTA]
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
    // [PDF]
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

// [PDF]
export const mainServices = [
  {
    slug: "soldadura-tig-mig",
    title: "Soldadura TIG, MIG y aluminio",
    blurb:
      "Contamos con equipamiento para soldadura TIG en acero inoxidable y MIG en acero carbono. También trabajamos aluminio.",
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

// [PROPUESTA]
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

// [PROPUESTA]
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
    answer: "No. Soldamos con TIG el acero inoxidable y con MIG el acero carbono, y también trabajamos aluminio.",
  },
];
