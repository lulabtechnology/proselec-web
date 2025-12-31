import PageHero from "@/components/shared/page-hero";
import { contact } from "@/content/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/contact/contact-form";

export const metadata = { title: "Contacto" };

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contacto"
        subtitle="Cotiza o agenda una visita técnica. Respuesta rápida por WhatsApp o correo."
      />

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl shadow-soft">
            <CardHeader>
              <CardTitle className="font-display">Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p><span className="font-medium text-foreground">Teléfonos:</span> {contact.phones.join(" / ")}</p>
              <p><span className="font-medium text-foreground">Dirección:</span> {contact.address}</p>
              <p><span className="font-medium text-foreground">Emails:</span> {contact.emails.join(" / ")}</p>
              <p><span className="font-medium text-foreground">Web:</span> {contact.web}</p>

              <div className="mt-5 pt-5 border-t">
                <p className="font-medium text-foreground">Personas de contacto</p>
                <ul className="mt-2 space-y-2">
                  {contact.people.map((p) => (
                    <li key={p.name}>
                      <span className="font-medium text-foreground">{p.name}</span> — {p.role} — {p.phone}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-5 border-t">
                <p className="font-medium text-foreground">Mapa</p>
                <p className="mt-2 text-sm">
                  (Opcional) Puedes incrustar Google Maps aquí luego o enlazar a Maps.
                </p>
              </div>
            </CardContent>
          </Card>

          <ContactForm
            title="Cotiza aquí"
            subtitle="Déjanos tu mensaje y se abrirá WhatsApp con el texto listo para enviar."
          />
        </div>
      </section>
    </main>
  );
}
