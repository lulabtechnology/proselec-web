export function waLink(phoneE164Digits: string, text: string) {
  const q = encodeURIComponent(text);
  return `https://wa.me/${phoneE164Digits}?text=${q}`;
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function mailtoLink(email: string, subject: string, body: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
