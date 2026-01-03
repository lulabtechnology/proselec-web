// lib/links.ts

export function telLink(phoneE164: string) {
  return `tel:${phoneE164}`;
}

export function waLink(
  phone: string,
  messageOrTitle?: string,
  bodyMaybe?: string
) {
  // acepta 1, 2 o 3 argumentos (para no romperte builds viejos)
  const digits = phone.replace(/\D/g, "");
  const text =
    typeof bodyMaybe === "string"
      ? `${messageOrTitle ?? ""}\n\n${bodyMaybe}`.trim()
      : (messageOrTitle ?? "").trim();

  const qs = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${digits}${qs}`;
}

export function mailLink(email: string, subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);

  const qs = params.toString();
  return `mailto:${email}${qs ? `?${qs}` : ""}`;
}

// Alias para imports viejos que decían "mailtoLink"
export const mailtoLink = mailLink;
