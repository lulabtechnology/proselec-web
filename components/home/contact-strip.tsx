"use client";

import Reveal from "@/components/shared/reveal";
import { contact, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { mailtoLink, telLink, waLink } from "@/lib/links";
import ContactForm from "@/components/contact/contact-form";

export default function ContactStrip() {
  const wa = waLink("50768527127", "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");
  const mailto = mailtoLink(
    contact.emails[1],
    "Cotización - PROSELEC, S.A.",
    "Hola, me gustaría cotizar. Detalles:\n\n- Nombre:\n- Teléfono:\n- Ubicación:\n- Servicio:\n- Mensaje:\n"
  );

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
                  Respuesta rápida por WhatsApp o correo. También puedes llamar directamente.
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

              <ContactForm title="Formulario" subtitle="Completa los datos y se abrirá WhatsApp con el mensaje listo." />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
