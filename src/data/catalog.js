export const catalogCategories = [
  "Revestimientos",
  "Extracción",
  "Soportes y presentadores",
  "Carros",
  "Mesones",
  "Protectores",
  // [PROPUESTA]
  "Otros",
];

export const catalog = [
  {
    id: "extension-campana",
    name: "Extensión de campana",
    category: "Revestimientos",
    description: "Prolonga la campana hasta el cielo o el muro.",
    image: { src: "/img/campana-central.webp", alt: "Extensión de acero inoxidable que prolonga la campana hasta el cielo de la cocina" },
  },
  {
    id: "lateral-separador",
    name: "Lateral separador de estaciones",
    category: "Revestimientos",
    description: "Panel que separa dos estaciones de trabajo contiguas.",
    image: { src: "/img/campana-filtros.webp", alt: "Lateral separador de estaciones en acero inoxidable, con ganchos, junto a la línea de cocción" },
  },
  {
    // [CLIENTE]
    id: "revestimiento-lava-mopa",
    name: "Revestimientos de lava mopa",
    category: "Revestimientos",
    image: { src: "/img/revestimiento-lava-mopa.webp", alt: "Revestimiento de acero inoxidable alrededor de un lava mopa, en el taller antes de instalarse" },
  },
  {
    id: "campana",
    name: "Campana",
    category: "Extracción",
    description: "De extracción, a la medida de tu línea de cocción.",
    image: { src: "/img/campana-asador.webp", alt: "Campana de acero inoxidable sobre una parrilla encendida" },
    gallery: [
      { src: "/img/campana-mural-freidoras.webp", alt: "Campana de acero inoxidable sobre una línea de freidoras en una cocina de comida rápida" },
    ],
  },
  {
    id: "filtros-campana",
    name: "Filtros de campana",
    category: "Extracción",
    description: "Desmontables, para lavarlos.",
    image: { pending: true, slot: "Filtros de campana" },
  },
  {
    id: "porta-extintor",
    name: "Porta extintor",
    category: "Soportes y presentadores",
    description: "Fija el extintor al muro.",
    image: { pending: true, slot: "Porta extintor instalado" },
  },
  {
    id: "porta-nova",
    name: "Porta Nova",
    category: "Soportes y presentadores",
    image: { src: "/img/porta-nova.webp", alt: "Soporte de acero inoxidable con barra horizontal atornillado al muro" },
  },
  {
    id: "porta-impresora",
    name: "Porta impresora",
    category: "Soportes y presentadores",
    description: "Para la impresora de comandas.",
    // [PROPUESTA]
    note: "Foto referencial",
    image: { src: "/img/porta-impresora.webp", alt: "Bandeja de acero inoxidable atornillada al muro, sobre los enchufes de la impresora" },
  },
  {
    id: "presentadores-pizza",
    name: "Presentadores de pizza",
    category: "Soportes y presentadores",
    description: "Base redonda sobre pedestal.",
    image: { src: "/img/mesa-pizza.webp", alt: "Presentador redondo de acero inoxidable con pedestal central" },
  },
  {
    id: "soporte-pantalla-kds",
    name: "Soporte de pantalla KDS con brazo hidráulico",
    category: "Soportes y presentadores",
    description: "Para la pantalla de pedidos de cocina (KDS).",
    image: { src: "/img/soporte-kds.webp", alt: "Soporte de acero inoxidable colgado del cielo sosteniendo una pantalla KDS sobre la línea de cocina" },
    gallery: [
      { src: "/img/soporte-kds-cocina.webp", alt: "Dos soportes de pantalla KDS colgados del cielo de una cocina" },
      { src: "/img/soporte-kds-brazo.webp", alt: "Brazo hidráulico del soporte con dos pantallas KDS montadas" },
      { src: "/img/soporte-kds-base.webp", alt: "Soporte de pantalla KDS en el taller, con su brazo y la placa de montaje" },
    ],
  },
  {
    id: "perchero",
    name: "Perchero",
    category: "Soportes y presentadores",
    description: "Para muro.",
    image: { pending: true, slot: "Perchero instalado" },
  },
  {
    id: "carro-bandejas-tocino",
    name: "Carro de bandejas de tocino",
    category: "Carros",
    description: "Con guías para las bandejas.",
    image: { src: "/img/carro-tocino-frente.webp", alt: "Carro de acero inoxidable con guías para bandejas de tocino, visto de frente" },
    gallery: [
      { src: "/img/carro-tocino-lado.webp", alt: "Carro de bandejas de tocino en acero inoxidable, visto de lado" },
    ],
  },
  {
    id: "carro-bidones-aceite",
    name: "Carro de bidones de aceite",
    category: "Carros",
    image: { src: "/img/carro-bidones.webp", alt: "Carro plataforma de acero inoxidable con ruedas y manilla alta para mover bidones" },
  },
  {
    id: "meson-repisa",
    name: "Mesón con repisa",
    category: "Mesones",
    image: { src: "/img/meson-repisa.webp", alt: "Mesón de acero inoxidable con baranda y repisa inferior" },
    gallery: [
      { src: "/img/meson-repisas-equipos.webp", alt: "Mesón de acero inoxidable con repisas y divisiones, con equipos de cocina encima" },
    ],
  },
  {
    id: "meson-puertas",
    name: "Mesón con puertas",
    category: "Mesones",
    image: { pending: true, slot: "Mesón con puertas" },
  },
  {
    id: "mesa-bebidas-ccu",
    name: "Mesa bebidas CCU",
    category: "Mesones",
    image: { pending: true, slot: "Mesa bebidas CCU" },
  },
  {
    id: "protector-jabon",
    name: "Protector de jabón",
    category: "Protectores",
    description: "Cubierta para el dispensador de jabón.",
    image: { src: "/img/protector-jabon.webp", alt: "Protector de acero inoxidable para dispensador de jabón sobre un lavamanos blanco y muro negro" },
    gallery: [
      { src: "/img/piezas-cortadas.webp", alt: "Protectores de jabón de acero inoxidable recién cortados y plegados en el taller" },
    ],
  },
  {
    id: "protector-aromatizante",
    name: "Protector de aromatizante",
    category: "Protectores",
    description: "Cubierta para el dispensador de aromatizante.",
    image: { pending: true, slot: "Protector de aromatizante" },
  },
  {
    id: "protector-confort",
    name: "Protector de confort",
    category: "Protectores",
    description: "Cubierta para el dispensador de papel higiénico.",
    image: { pending: true, slot: "Protector de confort" },
  },
  {
    // [CLIENTE]
    id: "aplastador-basura",
    name: "Aplastador de basura",
    category: "Otros",
    image: { src: "/img/aplastador-basura.webp", alt: "Aplastador de basura de acero inoxidable con base cuadrada y mango vertical, en el taller" },
  },
];
