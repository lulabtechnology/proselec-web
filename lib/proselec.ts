// lib/proselec.ts
import { site, contact } from "@/content/site";

const onlyDigits = (s: string) => (s || "").replace(/\D/g, "");

export const COMPANY = {
  name: site.name,
  shortName: site.shortName,
  tagline: site.tagline,
  founded: site.founded,
  url: site.url,
  description: site.description ?? site.tagline,
} as const;

const phoneE164 = contact.phonesE164?.[0] ?? "";
const phoneDisplay = contact.phonesDisplay?.[0] ?? "";
const phonePretty = contact.phones?.[0] ?? "";

const waE164 = contact.whatsappPhoneE164 ?? phoneE164;
const waDigits = onlyDigits(waE164); // 50768527127

export const CONTACT = {
  // ====== Compatibilidad con código viejo ======
  phone: phoneE164 || phonePretty, // para tel:...
  phoneE164,
  phoneDisplay,

  whatsappE164: waE164,
  whatsappDigits: waDigits, // 👈 esto arregla TU ERROR
  mapQuery: contact.address ?? "", // 👈 esto arregla TU ERROR

  // ====== Datos completos ======
  phones: contact.phones ?? [],
  phonesE164: contact.phonesE164 ?? [],
  phonesDisplay: contact.phonesDisplay ?? [],
  emails: contact.emails ?? [],
  address: contact.address ?? "",
} as const;
