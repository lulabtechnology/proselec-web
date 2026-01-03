// content/site.ts

export const site = {
  name: "PROYECTOS Y SERVICIOS ELECTROMECÁNICOS, S.A.",
  shortName: "PROSELEC",
  tagline: "Obras Civiles & Electromecánicas",

  // ✅ usados en app/layout.tsx
  founded: 2011,
  description:
    "Empresa panameña fundada en 2011, enfocada en Obras Civiles, Arquitectura y Obras Electromecánicas. Diseño, planificación, construcción, equipamiento y mantenimiento.",
  url: "https://proselec-web.vercel.app",
};

export const contact = {
  // ✅ “solo deja este número” (pero lo damos en varios formatos para que no rompa nada)
  phoneDisplay: "6852-7127",
  phoneE164: "+50768527127",

  // ✅ compatibilidad: algunos componentes usan CONTACT.phone para tel:
  phone: "+50768527127",

  // ✅ usados en app/layout.tsx (JSON-LD)
  phones: ["+507 6852-7127"],

  // ✅ placeholder para que tú lo cambies luego (y para que no rompa layout)
  email: "correo@dominio.com",
  emails: ["correo@dominio.com"],

  // ✅ dirección (completa) y también en 2 líneas
  addressLine1:
    "Calle Ave. Rodolfo Girón, Santiago Veraguas",
  addressLine2:
    "Edificio Eléctrico Santiago, Local N° 2.",
  address:
    "Calle Ave. Rodolfo Girón, Santiago Veraguas, Edificio Eléctrico Santiago, Local N° 2.",

  // ✅ por si usas WhatsApp / mapa
  whatsappDigits: "50768527127",
  mapQuery:
    "Calle Ave. Rodolfo Girón, Santiago Veraguas, Edificio Eléctrico Santiago, Local N° 2.",
};
