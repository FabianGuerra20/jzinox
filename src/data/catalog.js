// CONTENIDO DEL CLIENTE.
//
//   [CLIENTE]   las seis categorías, su orden y los 18 nombres de producto son
//               la lista que entregó el cliente el 2026-10-11. No reordenar ni
//               renombrar sin que lo pida.
//   [PROPUESTA] las descripciones son nuestras. Regla: la descripción dice lo
//               que el nombre NO dice (para qué sirve, dónde va). Si no hay nada
//               que añadir sin inventar, la pieza va sin descripción: mejor eso
//               que repetir el nombre más "de acero inoxidable".
//
// SIN PRECIOS (pedido del cliente, 2026-10-11): el sitio no publica valores.
//
// FOTOS: cinco piezas tienen foto real y se muestran como tarjeta. Las otras
// trece llevan `pending` y se muestran como renglón, sin caja vacía. `slot` es
// una nota interna de qué foto falta; no se publica.

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
    description: "Prolonga la campana hasta el cielo o el muro.",
    image: { pending: true, slot: "Extensión de campana: fotos 1 y 2 del cliente" },
  },
  {
    id: "lateral-separador",
    name: "Lateral separador de estaciones",
    category: "Revestimientos",
    description: "Panel que separa dos estaciones de trabajo contiguas.",
    image: { pending: true, slot: "Lateral separador de estaciones: foto 3 del cliente" },
  },
  {
    id: "campana",
    name: "Campana",
    category: "Extracción",
    description: "De extracción, a la medida de tu línea de cocción.",
    image: { src: "/img/campana-central.webp", alt: "Campana de extracción en acero inoxidable colgada del cielo de una cocina industrial", position: "50% 40%" },
  },
  {
    id: "filtros-campana",
    name: "Filtros de campana",
    category: "Extracción",
    description: "Desmontables, para lavarlos.",
    image: { src: "/img/campana-filtros.webp", alt: "Interior de una campana de acero inoxidable con su línea de filtros", position: "50% 50%" },
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
    image: { pending: true, slot: "Porta Nova" },
  },
  {
    id: "porta-impresora",
    name: "Porta impresora",
    category: "Soportes y presentadores",
    description: "Para la impresora de comandas.",
    image: { pending: true, slot: "Porta impresora instalado" },
  },
  {
    id: "presentadores-pizza",
    name: "Presentadores de pizza",
    category: "Soportes y presentadores",
    description: "Base redonda sobre pedestal.",
    image: { src: "/img/mesa-pizza.webp", alt: "Presentador redondo de acero inoxidable con pedestal central", position: "50% 55%" },
  },
  {
    id: "soporte-pantalla-kds",
    name: "Soporte de pantalla KDS con brazo hidráulico",
    category: "Soportes y presentadores",
    description: "Para la pantalla de pedidos de cocina (KDS).",
    image: { src: "/img/soporte-kds.webp", alt: "Soporte de acero inoxidable colgado del cielo sosteniendo una pantalla KDS sobre la línea de cocina", position: "50% 40%" },
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
    image: { pending: true, slot: "Carro de bandejas de tocino" },
  },
  {
    id: "carro-bidones-aceite",
    name: "Carro de bidones de aceite",
    category: "Carros",
    image: { pending: true, slot: "Carro de bidones de aceite" },
  },
  {
    id: "meson-repisa",
    name: "Mesón con repisa",
    category: "Mesones",
    image: { pending: true, slot: "Mesón con repisa" },
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
    image: { src: "/img/protector-jabon.webp", alt: "Protector de acero inoxidable para dispensador de jabón sobre un lavamanos blanco y muro negro", position: "50% 30%" },
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
];
