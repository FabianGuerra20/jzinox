// CONTENIDO DEL CLIENTE — parcialmente entregado en el PDF de textos.
//
//   [PDF]       el documento pide "Catálogo / Lista de Precios" con hasta 20
//               productos, pero deja el texto vacío.
//   [PROPUESTA] los nombres y descripciones son nuestros, derivados del rubro
//               que el PDF describe. El cliente debe validarlos.
//
// ⚠️  LOS PRECIOS SON VALORES DE MAQUETA, NO LA LISTA REAL DE JZINOX.
//     `pricesArePlaceholder` controla el aviso visible en /catalogo. NO lo
//     pongas en false hasta tener la lista de precios firmada por el cliente:
//     ese flag es lo único que separa una maqueta de una oferta publicada.

export const pricesArePlaceholder = true;

export const catalogCategories = [
  "Todos", // filtro, no es una categoría del cliente
  "Cocción",
  "Extracción",
  "Mesones y lavado",
  "Almacenamiento",
  "Estructuras",
];

export const catalog = [
  {
    id: "meson-trabajo",
    name: "Mesón de trabajo en acero inoxidable",
    category: "Mesones y lavado",
    description: "Cubierta lisa o con peto, estructura reforzada y patas regulables en altura.",
    price: 185000,
    unit: "m lineal",
    image: { pending: true, slot: "Mesón de trabajo instalado en cocina", ratio: "4:3" },
  },
  {
    id: "meson-entrepano",
    name: "Mesón con entrepaño inferior",
    category: "Mesones y lavado",
    description: "El mismo mesón de trabajo con bandeja inferior para guardar utensilios a mano.",
    price: 225000,
    unit: "m lineal",
    image: { pending: true, slot: "Mesón con entrepaño inferior, vista 3/4", ratio: "4:3" },
  },
  {
    id: "lavaplatos-1-cuba",
    name: "Lavaplatos industrial de una cuba",
    category: "Mesones y lavado",
    description: "Cuba embutida sin aristas, con desagüe y escurridor lateral a elección.",
    price: 210000,
    unit: "unidad",
    image: { pending: true, slot: "Lavaplatos de una cuba, detalle del embutido", ratio: "4:3" },
  },
  {
    id: "lavaplatos-2-cubas",
    name: "Lavaplatos industrial de dos cubas",
    category: "Mesones y lavado",
    description: "Doble cuba para prelavado y enjuague, con mesa de entrada opcional.",
    price: 320000,
    unit: "unidad",
    image: { pending: true, slot: "Lavaplatos de dos cubas con mesa de entrada", ratio: "4:3" },
  },
  {
    id: "campana-mural",
    name: "Campana extractora mural",
    category: "Extracción",
    description: "Campana adosada a muro con filtros tipo bafle desmontables para lavado.",
    price: 420000,
    unit: "m lineal",
    image: { pending: true, slot: "Campana mural sobre la línea de cocción", ratio: "4:3" },
  },
  {
    id: "campana-central",
    name: "Campana extractora central",
    category: "Extracción",
    description: "Campana de isla para líneas de cocción ubicadas al centro de la cocina.",
    price: 560000,
    unit: "m lineal",
    image: { pending: true, slot: "Campana central de isla, vista desde el piso", ratio: "4:3" },
  },
  {
    id: "ducto-extraccion",
    name: "Ducto de extracción en acero inoxidable",
    category: "Extracción",
    description: "Ducto, codos y terminal de descarga fabricados a la medida del recorrido.",
    price: 75000,
    unit: "m lineal",
    image: { pending: true, slot: "Ducto de extracción con codo y terminal", ratio: "4:3" },
  },
  {
    id: "mesa-caliente",
    name: "Mesa caliente / baño maría",
    category: "Cocción",
    description: "Cuba con resistencia y termostato para mantención de alimentos en servicio.",
    price: 480000,
    unit: "unidad",
    image: { pending: true, slot: "Mesa caliente en servicio, con gastronorms", ratio: "4:3" },
  },
  {
    id: "mueble-cocina",
    name: "Mueble base para línea de cocción",
    category: "Cocción",
    description: "Mueble bajo cubierta para soportar cocinas, planchas y freidoras.",
    price: 265000,
    unit: "m lineal",
    image: { pending: true, slot: "Mueble base soportando cocina y plancha", ratio: "4:3" },
  },
  {
    id: "estanteria-inox",
    name: "Estantería de acero inoxidable",
    category: "Almacenamiento",
    description: "Cuatro bandejas regulables, apta para bodega seca y cámara de frío.",
    price: 195000,
    unit: "unidad",
    image: { pending: true, slot: "Estantería de cuatro bandejas en bodega", ratio: "4:3" },
  },
  {
    id: "repisa-mural",
    name: "Repisa mural en acero inoxidable",
    category: "Almacenamiento",
    description: "Repisa colgante con soportes reforzados para utensilios y menaje.",
    price: 68000,
    unit: "m lineal",
    image: { pending: true, slot: "Repisa mural con menaje colgado", ratio: "4:3" },
  },
  {
    id: "carro-transporte",
    name: "Carro de transporte bandejero",
    category: "Almacenamiento",
    description: "Carro móvil con ruedas y freno para traslado de bandejas y gastronorms.",
    price: 240000,
    unit: "unidad",
    image: { pending: true, slot: "Carro bandejero cargado, de perfil", ratio: "4:3" },
  },
  {
    id: "estanque-inox",
    name: "Estanque industrial en acero inoxidable",
    category: "Estructuras",
    description: "Estanque soldado con terminación sanitaria, capacidad según proyecto.",
    price: 950000,
    unit: "desde",
    image: { pending: true, slot: "Estanque soldado, detalle del cordón sanitario", ratio: "4:3" },
  },
  {
    id: "estructura-soporte",
    name: "Estructura y base de soporte a medida",
    category: "Estructuras",
    description: "Bases, pedestales y estructuras para equipos según plano o levantamiento.",
    price: 0,
    unit: "cotizar",
    image: { pending: true, slot: "Estructura de soporte a medida ya instalada", ratio: "4:3" },
  },
  {
    id: "proyecto-cocina-completa",
    name: "Proyecto de cocina completa",
    category: "Estructuras",
    description: "Levantamiento, fabricación e instalación de la línea completa llave en mano.",
    price: 0,
    unit: "cotizar",
    image: { pending: true, slot: "Cocina completa terminada, plano general", ratio: "4:3" },
  },
];
