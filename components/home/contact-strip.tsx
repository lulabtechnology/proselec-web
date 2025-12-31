"use client";

import Reveal from "@/components/shared/reveal";
import { contact, site } from "@/content/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { mailtoLink, telLink, waLink } from "@/lib/links";

export default function ContactStrip() {
  const wa = waLink("50768527127", "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");
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
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="glass rounded-2xl p-6 md:p-8 shadow-soft">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Contacto</p>
                <h2 className="mt-2 font-display text-3xl md:text-4xl">Hablemos de tu proyecto</h2>
                <p className="mt-3 text-muted-foreground">
                  Envíanos tu requerimiento. Por defecto, el formulario abre WhatsApp (sin cuentas externas).
                </p>

                <div className="mt-6 grid gap-2">
                  <Button asChild className="rounded-2xl shadow-glow">
                    <a href={wa} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> Cotizar por WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="rounded-2xl">
                    <a href={telLink(contact.phones[0])}>
                      <Phone className="mr-2 h-4 w-4" /> Llamar
                    </a>
                  </Button>
                  <Button variant="secondary" asChild className="rounded-2xl">
                    <a href={mailto}>
                      <Mail className="mr-2 h-4 w-4" /> Enviar correo
                    </a>
                  </Button>
                </div>

                <p className="mt-6 text-xs text-muted-foreground">
                  {site.shortName} · {contact.address}
                </p>
              </div>

              <Card className="rounded-2xl shadow-soft">
                <CardHeader>
                  <CardTitle className="font-display">Formulario</CardTitle>
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
                      Enviar por WhatsApp
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      * También existe un endpoint opcional: <code>/api/contact</code> (no es obligatorio).
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
