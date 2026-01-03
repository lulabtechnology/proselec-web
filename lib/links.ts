// lib/links.ts
const digitsOnly = (v: string) => (v || "").replace(/\D/g, "");

export function telLink(phone: string) {
  // acepta "+507..." o "507..." o "6852-7127"
  const p = phone?.startsWith("+") ? phone : `+${digitsOnly(phone)}`;
  return `tel:${p}`;
}

export function waLink(phoneDigitsOrE164: string, message?: string) {
  const digits = digitsOnly(phoneDigitsOrE164);
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// Mail: acepta 1, 2 o 3 argumentos (para que NO te vuelva a romper)
export function mailLink(email: string, subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${email}${qs ? `?${qs}` : ""}`;
}

// Alias para compatibilidad con tu código viejo:
export const mailtoLink = mailLink;
