// content/site.ts
export const site = {
  name: "PROSELEC, S.A.",
  shortName: "PROSELEC",
  tagline: "Obras Civiles & Electromecánicas",
  founded: 2017, // cambia si aplica
  url: "https://proselec-web.vercel.app",
  description:
    "Empresa panameña enfocada en obras civiles y electromecánicas. Diseño, planificación, construcción y mantenimiento.",
  about:
    "En PROSELEC, S.A. desarrollamos proyectos de obras civiles, instalaciones electromecánicas y sistemas especiales, con enfoque en calidad, seguridad y cumplimiento. Acompañamos a nuestros clientes desde el diseño y planificación hasta la ejecución y mantenimiento.",
} as const;

export const contact = {
  // Teléfono (se usan varios alias para que NO te vuelva a romper el build)
  phoneDisplay: "6852-7127",
  phoneE164: "+50768527127",
  phone: "+50768527127",

  // WhatsApp
  whatsappDigits: "50768527127",
  whatsappE164: "+50768527127",

  // Email(s)
  emails: ["info@proselec.com", "proselec@example.com"],

  // Dirección / mapa
  address: "Santiago, Veraguas, Panamá",
  mapQuery: "PROSELEC Santiago Veraguas Panama",
} as const;
