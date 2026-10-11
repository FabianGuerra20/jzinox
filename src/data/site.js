export const site = {
  // Grafía definida por el dueño el 2026-10-11: separado, "JZ INOX".
  name: "JZ INOX",
  // El tagline cierra el <title> de la portada, así que lleva los términos por
  // los que el negocio compite: "mesones" y "acero inoxidable a medida" son los
  // que usan los competidores del rubro en Chile. Del PDF sale el foco en
  // fabricación a medida, que es justo donde el catálogo estándar no llega.
  tagline: "Mesones y equipamiento en acero inoxidable a medida",
  description:
    "Fabricación, reparación y mantención de estructuras en acero inoxidable 100% a medida. Más de 20 años equipando restaurantes, comida rápida e industria alimentaria.",
  domain: "jzinox.cl",

  phoneDisplay: "+56 9 3188 9950",
  phoneHref: "+56931889950",
  whatsappNumber: "56931889950",
  whatsappDefaultMessage: "Hola JZ INOX, quisiera cotizar un proyecto.",

  email: "ventas@jzinox.cl",
  street: "Av. Departamental 999, Galpón 11",
  // TODO: confirmar comuna con el cliente. Av. Departamental cruza La Florida,
  // Macul y San Joaquín, así que no la deducimos desde la dirección.
  city: "Santiago",
  region: "Región Metropolitana",
  country: "CL",
  // Enlaces de búsqueda, sin mapa incrustado ni script. OJO: falta la comuna
  // (ver TODO de arriba); mientras no esté, el buscador decide cuál
  // "Departamental 999" mostrar. Reemplazar por el enlace exacto del taller.
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Av.+Departamental+999%2C+Galp%C3%B3n+11%2C+Santiago%2C+Chile",
  wazeHref: "https://waze.com/ul?q=Av.%20Departamental%20999%2C%20Santiago%2C%20Chile&navigate=yes",

  // Un solo formato de horario en todo el sitio: prosa, con "de… a…".
  hours: "lunes a viernes de 9:00 a 18:00 y sábado de 9:00 a 13:00",
  hoursLines: ["Lunes a viernes, de 9:00 a 18:00", "Sábado, de 9:00 a 13:00"],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],

  formsubmitEndpoint: "https://formsubmit.co/ventas@jzinox.cl",
  siteUrl: "https://jzinox.cl",
  // PNG, no SVG: Facebook, WhatsApp, LinkedIn y X no renderizan SVG en Open
  // Graph. Con el SVG anterior, compartir cualquier URL salía sin imagen.
  // La fuente editable es propuestas/og-image.html (se exporta con Playwright).
  ogImage: "/og-image.png",
};

// `ally: true` marca una entrada que NO es una sección de JZ Inox sino otra
// marca del ecosistema. El Header la separa con un divisor para que el
// visitante sepa que va a saltar de marca, no de sección.
export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  // Una sola entrada para el catálogo: "Productos" es como lo nombra el
  // cliente que compra, mientras "Catálogo" en el rubro suele significar un
  // PDF descargable. La URL se mantiene en /catalogo porque es la que ya
  // enlazan la portada, /servicios y el 404.
  { href: "/catalogo", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/al-muebleria", label: "AL Mueblería", ally: true },
];

export const navCta = { href: "/contacto", label: "Cotizar proyecto" };
