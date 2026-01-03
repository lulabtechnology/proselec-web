// lib/links.ts

/**
 * Links helpers (tel / whatsapp / mailto)
 * Compatible con:
 * - telLink(phone)
 * - waLink(phone, message?)
 * - mailLink(email, {subject, body})
 * - mailLink(email, subject, body)
 * - mailtoLink(...)  (alias)
 */

export function telLink(phoneE164: string) {
  const p = String(phoneE164 || "").trim();
  const normalized = p.startsWith("+") ? p : `+${p}`;
  return `tel:${normalized}`;
}

export function waLink(whatsAppDigits: string, message?: string) {
  const digits = String(whatsAppDigits || "").replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// ✅ Acepta 2 formatos:
// 1) mailLink(email, { subject, body })
// 2) mailLink(email, subject, body)
export function mailLink(
  email: string,
  subjectOrOpts?: string | { subject?: string; body?: string },
  bodyMaybe?: string
) {
  const to = String(email || "").trim();

  let subject: string | undefined;
  let body: string | undefined;

  if (typeof subjectOrOpts === "string") {
    subject = subjectOrOpts;
    body = bodyMaybe;
  } else if (typeof subjectOrOpts === "object" && subjectOrOpts) {
    subject = subjectOrOpts.subject;
    body = subjectOrOpts.body;
  }

  if (!subject && !body) return `mailto:${to}`;

  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);

  return `mailto:${to}?${params.toString()}`;
}

// ✅ Alias para compatibilidad con imports existentes:
// import { mailtoLink } from "@/lib/links"
export const mailtoLink = mailLink;
