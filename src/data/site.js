export const site = {
  name: "JZINOX",
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
  whatsappDefaultMessage: "Hola JZINOX, quisiera cotizar un proyecto.",

  email: "ventas@jzinox.cl",
  street: "Av. Departamental 999, Galpón 11",
  // TODO: confirmar comuna con el cliente. Av. Departamental cruza La Florida,
  // Macul y San Joaquín, así que no la deducimos desde la dirección.
  city: "Santiago",
  address: "Av. Departamental 999, Galpón 11",
  addressFull: "Av. Departamental 999, Galpón 11, Región Metropolitana, Chile",
  region: "Región Metropolitana",
  country: "CL",

  hours: "Lun-Vie 9:00-18:00 · Sáb 9:00-13:00",
  hoursLines: ["Lunes a viernes, 9:00 - 18:00", "Sábado, 9:00 - 13:00"],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],

  formsubmitEndpoint: "https://formsubmit.co/ventas@jzinox.cl",
  siteUrl: "https://jzinox.cl",
  // PNG, no SVG: Facebook, WhatsApp, LinkedIn y X no renderizan SVG en Open
  // Graph. Con el SVG anterior, compartir cualquier URL salía sin imagen.
  // El SVG se conserva en public/ como fuente editable.
  ogImage: "/og-image.png",
};

// `ally: true` marca una entrada que NO es una sección de JZ Inox sino otra
// marca del ecosistema. El Header la separa con un divisor para que el
// visitante sepa que va a saltar de marca, no de sección.
export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
  { href: "/al-muebleria", label: "AL Mueblería", ally: true },
];

export const navCta = { href: "/contacto", label: "Cotizar Proyecto" };
