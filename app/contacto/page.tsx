// app/contacto/page.tsx
import ContactForm from "@/components/forms/contact-form";
import { COMPANY, CONTACT } from "@/lib/proselec";

export const metadata = {
  title: "Contacto | PROSELEC, S.A.",
};

export default function ContactoPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-semibold">Contacto</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Escríbenos por WhatsApp, llámanos o envíanos un correo.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><span className="font-medium text-foreground">Teléfono:</span> {CONTACT.phoneDisplay}</div>
              <div><span className="font-medium text-foreground">Correo:</span> {CONTACT.email}</div>
              <div><span className="font-medium text-foreground">Dirección:</span> {COMPANY.address}</div>
              <div><span className="font-medium text-foreground">Web:</span> {COMPANY.website}</div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Formulario</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Completa los datos y se abrirá WhatsApp con el mensaje listo (o correo).
              </p>

              <div className="mt-4">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border">
            <iframe
              title="Mapa PROSELEC"
              src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`}
              className="h-[520px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
