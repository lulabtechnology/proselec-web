import { CONTACT } from "@/lib/proselec";
import { mailLink, telLink, waLink } from "@/lib/links";

export default function ContactoPage() {
  // Email principal (tu CONTACT trae emails: [])
  const email = CONTACT.emails?.[0] ?? "";

  // WhatsApp: si no existe whatsappDigits, lo construimos con digits del phone
  const waDigits =
    (CONTACT as any).whatsappDigits ??
    String(CONTACT.phoneE164 ?? CONTACT.phone ?? "").replace(/\D/g, "");

  const wa = waLink(waDigits, "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Contacto</h1>
      <p className="mt-2 text-slate-600">Escríbenos por WhatsApp o llámanos. También puedes visitarnos.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Información</h2>

          <div className="mt-4 space-y-3 text-slate-700">
            <div>
              <div className="text-sm font-medium text-slate-900">Teléfono</div>
              <a className="text-sm text-slate-700 underline" href={telLink(CONTACT.phoneE164 ?? CONTACT.phone)}>
                {CONTACT.phoneDisplay}
              </a>
            </div>

            <div>
              <div className="text-sm font-medium text-slate-900">WhatsApp</div>
              <a className="text-sm text-slate-700 underline" href={wa} target="_blank" rel="noreferrer">
                {CONTACT.phoneDisplay}
              </a>
            </div>

            <div>
              <div className="text-sm font-medium text-slate-900">Correo</div>
              {email ? (
                <a className="text-sm text-slate-700 underline" href={mailLink(email)}>
                  {email}
                </a>
              ) : (
                <div className="text-sm text-slate-600">No disponible</div>
              )}
            </div>

            <div>
              <div className="text-sm font-medium text-slate-900">Dirección</div>
              <div className="text-sm">{CONTACT.address}</div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-slate-900">Ubicación</h2>
            <p className="mt-2 text-sm text-slate-600">Mapa en tiempo real (Google Maps).</p>
          </div>

          <div className="relative h-[360px] w-full">
            <iframe
              title="Mapa PROSELEC"
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
