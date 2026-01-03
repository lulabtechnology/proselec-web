// content/site.ts

const emails = ["info@proselec.com"] as const; // <-- cámbialo si tienes otro
const phoneDisplay = "6852-7127" as const;
const phoneE164 = "+50768527127" as const;
const whatsappDigits = "50768527127" as const;

export const site = {
  name: "PROSELEC, S.A.",
  shortName: "PROSELEC",
  tagline: "Obras Civiles & Electromecánicas",
  description:
    "Empresa panameña enfocada en obras civiles y electromecánicas. Diseño, planificación, construcción y mantenimiento.",
  about:
    "PROSELEC, S.A. brinda soluciones integrales en obras civiles, instalaciones eléctricas, sistemas especiales y protección contra incendios. Trabajamos con enfoque en calidad, seguridad y cumplimiento.",
  url: "https://proselec-web.vercel.app",
  founded: 2015, // <-- si el año real es otro, cámbialo
} as const;

export const contact = {
  phoneDisplay,
  phoneE164,
  phone: phoneE164,              // para componentes que usan CONTACT.phone
  phones: [phoneE164] as const,  // para tu JSON-LD: contact.phones

  whatsappDigits,
  whatsappE164: `+${whatsappDigits}` as const,

  emails,
  email: emails[0],              // <-- ESTO arregla el error CONTACT.email

  address: "Santiago, Veraguas, Panamá",
  mapQuery: "PROSELEC Santiago Veraguas Panamá",
} as const;
