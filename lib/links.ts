// lib/links.ts

/**
 * Links helpers (tel / whatsapp / mailto)
 * - Mantiene compatibilidad con: telLink, waLink, mailLink y mailtoLink
 */

export function telLink(phoneE164: string) {
  // acepta "+50768527127" o "50768527127"
  const p = String(phoneE164 || "").trim();
  const normalized = p.startsWith("+") ? p : `+${p}`;
  return `tel:${normalized}`;
}

export function waLink(whatsAppDigits: string, message?: string) {
  // WhatsApp usa solo dígitos con país: 50768527127
  const digits = String(whatsAppDigits || "").replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!message) return base;

  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}

export function mailLink(email: string, opts?: { subject?: string; body?: string }) {
  const to = String(email || "").trim();
  if (!opts?.subject && !opts?.body) return `mailto:${to}`;

  const params = new URLSearchParams();
  if (opts.subject) params.set("subject", opts.subject);
  if (opts.body) params.set("body", opts.body);

  return `mailto:${to}?${params.toString()}`;
}

/**
 * ✅ Alias para compatibilidad con imports existentes:
 * import { mailtoLink } from "@/lib/links"
 */
export const mailtoLink = mailLink;
