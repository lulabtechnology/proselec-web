// lib/links.ts
export function telLink(phoneE164: string) {
  const clean = phoneE164.replace(/\s+/g, "");
  return `tel:${clean}`;
}

export function waLink(whatsappDigits: string, message?: string) {
  const digits = whatsappDigits.replace(/\D/g, "");
  const q = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${q}`;
}

export function mailLink(email: string) {
  return `mailto:${email}`;
}
