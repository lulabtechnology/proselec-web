// lib/links.ts
const cleanPhone = (raw: string) => (raw || "").replace(/[^\d+]/g, "");

export function telLink(phone: string) {
  const p = cleanPhone(phone);
  return p ? `tel:${p}` : "tel:";
}

export function waLink(phone: string, message?: string) {
  const p = cleanPhone(phone).replace(/^\+/, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${p}${text}`;
}

export function mailLink(email: string, subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${email}${q ? `?${q}` : ""}`;
}

// Alias para que NO rompa imports viejos
export const mailtoLink = mailLink;
