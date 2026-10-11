// CONTENIDO DEL CLIENTE.
//
//   [CLIENTE]   las seis categorías, su orden y los 18 nombres de producto son
//               la lista que entregó el cliente el 2026-10-11. No reordenar ni
//               renombrar sin que lo pida.
//   [PROPUESTA] las descripciones son nuestras, deducidas del nombre o de la
//               foto. Donde el nombre no alcanza para describir la pieza sin
//               inventar (porta Nova, mesa bebidas CCU) NO hay descripción:
//               la tarjeta la omite. El cliente debe validarlas y completarlas.
//
// SIN PRECIOS (pedido del cliente, 2026-10-11): el sitio no publica valores,
// cada pieza lleva solo el botón de cotizar.
//
// FOTOS: solo cuatro piezas tienen foto real asignada. El resto lleva hueco
// rotulado (`pending`) hasta que lleguen las fotos numeradas del cliente.

export const catalogCategories = [
  "Revestimientos",
  "Extracción",
  "Soportes y presentadores",
  "Carros",
  "Mesones",
  "Protectores",
];

export const catalog = [
  {
    id: "extension-campana",
    name: "Extensión de campana",
    category: "Revestimientos",
    description: "Revestimiento en acero inoxidable que prolonga la campana hasta el cielo o el muro.",
    image: { pending: true, slot: "Extensión de campana (fotos 1 y 2 del cliente)", ratio: "4:3" },
  },
  {
    id: "lateral-separador",
    name: "Lateral separador de estaciones",
    category: "Revestimientos",
    description: "Panel de acero inoxidable que divide dos estaciones de trabajo contiguas.",
    image: { pending: true, slot: "Lateral separador de estaciones (foto 3 del cliente)", ratio: "4:3" },
  },
  {
    id: "campana",
    name: "Campana",
    category: "Extracción",
    description: "Campana de extracción en acero inoxidable, fabricada a la medida de la línea de cocción.",
    image: { src: "/img/campana-central.webp", alt: "Campana de extracción en acero inoxidable colgada del cielo de una cocina industrial", position: "50% 40%" },
  },
  {
    id: "filtros-campana",
    name: "Filtros de campana",
    category: "Extracción",
    description: "Filtros de acero inoxidable desmontables para lavado.",
    image: { src: "/img/campana-filtros.webp", alt: "Interior de una campana de acero inoxidable con su línea de filtros", position: "50% 50%" },
  },
  {
    id: "porta-extintor",
    name: "Porta extintor",
    category: "Soportes y presentadores",
    description: "Soporte de acero inoxidable para fijar el extintor al muro.",
    image: { pending: true, slot: "Porta extintor instalado", ratio: "4:3" },
  },
  {
    id: "porta-nova",
    name: "Porta Nova",
    category: "Soportes y presentadores",
    image: { pending: true, slot: "Porta Nova", ratio: "4:3" },
  },
  {
    id: "porta-impresora",
    name: "Porta impresora",
    category: "Soportes y presentadores",
    description: "Soporte de acero inoxidable para la impresora de comandas.",
    image: { pending: true, slot: "Porta impresora instalado", ratio: "4:3" },
  },
  {
    id: "presentadores-pizza",
    name: "Presentadores de pizza",
    category: "Soportes y presentadores",
    description: "Base de acero inoxidable sobre pedestal para presentar la pizza.",
    image: { src: "/img/mesa-pizza.webp", alt: "Presentador redondo de acero inoxidable con pedestal central", position: "50% 55%" },
  },
  {
    id: "soporte-pantalla-kds",
    name: "Soporte de pantalla KDS con brazo hidráulico",
    category: "Soportes y presentadores",
    description: "Soporte en acero inoxidable con brazo hidráulico para la pantalla de cocina.",
    image: { src: "/img/soporte-kds.webp", alt: "Soporte de acero inoxidable colgado del cielo sosteniendo una pantalla KDS sobre la línea de cocina", position: "50% 40%" },
  },
  {
    id: "perchero",
    name: "Perchero",
    category: "Soportes y presentadores",
    description: "Perchero de acero inoxidable para muro.",
    image: { pending: true, slot: "Perchero instalado", ratio: "4:3" },
  },
  {
    id: "carro-bandejas-tocino",
    name: "Carro de bandejas de tocino",
    category: "Carros",
    description: "Carro de acero inoxidable con guías para bandejas de tocino.",
    image: { pending: true, slot: "Carro de bandejas de tocino", ratio: "4:3" },
  },
  {
    id: "carro-bidones-aceite",
    name: "Carro de bidones de aceite",
    category: "Carros",
    description: "Carro de acero inoxidable para trasladar bidones de aceite.",
    image: { pending: true, slot: "Carro de bidones de aceite", ratio: "4:3" },
  },
  {
    id: "meson-repisa",
    name: "Mesón con repisa",
    category: "Mesones",
    description: "Mesón de trabajo en acero inoxidable con repisa.",
    image: { pending: true, slot: "Mesón con repisa", ratio: "4:3" },
  },
  {
    id: "meson-puertas",
    name: "Mesón con puertas",
    category: "Mesones",
    description: "Mesón de trabajo en acero inoxidable con puertas.",
    image: { pending: true, slot: "Mesón con puertas", ratio: "4:3" },
  },
  {
    id: "mesa-bebidas-ccu",
    name: "Mesa bebidas CCU",
    category: "Mesones",
    image: { pending: true, slot: "Mesa bebidas CCU", ratio: "4:3" },
  },
  {
    id: "protector-jabon",
    name: "Protector de jabón",
    category: "Protectores",
    description: "Cubierta de acero inoxidable que protege el dosificador de jabón.",
    image: { src: "/img/protector-jabon.webp", alt: "Protector de acero inoxidable para dosificador de jabón sobre un lavamanos blanco y muro negro", position: "50% 30%" },
  },
  {
    id: "protector-aromatizante",
    name: "Protector de aromatizante",
    category: "Protectores",
    description: "Cubierta de acero inoxidable que protege el dispensador de aromatizante.",
    image: { pending: true, slot: "Protector de aromatizante", ratio: "4:3" },
  },
  {
    id: "protector-confort",
    name: "Protector de confort",
    category: "Protectores",
    description: "Cubierta de acero inoxidable que protege el dispensador de papel higiénico.",
    image: { pending: true, slot: "Protector de confort", ratio: "4:3" },
  },
];
