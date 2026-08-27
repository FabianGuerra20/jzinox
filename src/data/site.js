export const site = {
  name: "JZINOX",
  tagline: "Equipamiento gastronómico en acero inoxidable",
  description:
    "Equipamiento gastronómico en acero inoxidable, soldadura TIG y estructuras a medida en Cerrillos, Región Metropolitana. Fabricación, instalación y mantención para cocinas industriales, restaurantes y casinos.",
  domain: "jzinox.cl",

  // TODO: reemplazar por el número real del cliente antes de publicar
  phoneDisplay: "+56 9 0000 0000",
  phoneHref: "+56900000000",
  whatsappNumber: "56900000000",
  whatsappDefaultMessage: "Hola JZINOX, quisiera cotizar un proyecto.",

  email: "contacto@jzinox.cl",
  street: "Av. Pedro Aguirre Cerda 6100",
  address: "Av. Pedro Aguirre Cerda 6100, Cerrillos",
  addressFull: "Av. Pedro Aguirre Cerda 6100, Cerrillos, Región Metropolitana, Chile",
  city: "Cerrillos",
  region: "Región Metropolitana",
  country: "CL",

  hours: "Lun-Vie 9:00-18:00 · Sáb 9:00-13:00",
  hoursLines: ["Lunes a viernes, 9:00 - 18:00", "Sábado, 9:00 - 13:00"],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],

  formsubmitEndpoint: "https://formsubmit.co/contacto@jzinox.cl",
  siteUrl: "https://jzinox.cl",
  ogImage: "/og-image.svg",
};

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/soldadura-tig", label: "Soldadura TIG" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
];

export const navCta = { href: "/contacto", label: "Cotizar Proyecto" };

// Páginas que existen pero no van en la barra principal (el mockup usa 6 ítems)
export const footerExtraItems = [{ href: "/nosotros", label: "Nosotros" }];
