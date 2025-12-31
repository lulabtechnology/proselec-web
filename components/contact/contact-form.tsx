"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import { contact } from "@/content/site";
import { mailtoLink, waLink } from "@/lib/links";

export default function ContactForm({
  title = "Formulario",
  subtitle = "Envíanos tu requerimiento. El envío abre WhatsApp por defecto (sin cuentas externas)."
}: {
  title?: string;
  subtitle?: string;
}) {
  const mailto = mailtoLink(
    contact.emails[1],
    "Cotización - PROSELEC, S.A.",
    "Hola, me gustaría cotizar. Detalles:\n\n- Nombre:\n- Teléfono:\n- Ubicación:\n- Servicio:\n- Mensaje:\n"
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const phone = String(fd.get("phone") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");

    const text =
      `Hola, soy ${name}.\n` +
      `Tel: ${phone}\n` +
      `Email: ${email}\n\n` +
      `Mensaje:\n${message}`;

    window.open(waLink("50768527127", text), "_blank");
  }

  return (
    <Card className="rounded-2xl shadow-soft">
      <CardHeader>
        <CardTitle className="font-display">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </CardHeader>
      <CardContent>
        <form className="grid gap-3" onSubmit={onSubmit}>
          <Input name="name" placeholder="Nombre" required />
          <div className="grid gap-3 sm:grid-cols-2">
            <Input name="phone" placeholder="Teléfono" required />
            <Input name="email" placeholder="Email" type="email" required />
          </div>
          <Textarea name="message" placeholder="Cuéntanos qué necesitas…" rows={5} required />

          <Button type="submit" className="rounded-2xl shadow-glow">
            <MessageCircle className="mr-2 h-4 w-4" /> Enviar por WhatsApp
          </Button>

          <Button type="button" variant="secondary" asChild className="rounded-2xl">
            <a href={mailto}>
              <Mail className="mr-2 h-4 w-4" /> Enviar por correo
            </a>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
