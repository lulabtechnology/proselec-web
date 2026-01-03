// lib/proselec.ts
import { site, contact } from "@/content/site";

export const COMPANY = {
  name: site.name,
  shortName: site.shortName,
  tagline: site.tagline,
  founded: site.founded,
  url: site.url,
  description: site.description,
} as const;

const phoneE164 = contact.phonesE164?.[0] ?? "";
const phoneDisplay = contact.phonesDisplay?.[0] ?? "";

export const CONTACT = {
  // Compatibilidad con código viejo:
  phone: phoneE164 || (contact.phones?.[0] ?? ""),
  phoneE164,
  phoneDisplay,

  // Datos completos:
  phones: contact.phones,
  phonesE164: contact.phonesE164,
  phonesDisplay: contact.phonesDisplay,

  emails: contact.emails,
  address: contact.address,
  whatsappPhoneE164: contact.whatsappPhoneE164 ?? phoneE164,
} as const;
