import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const PHONE = "6852-7127";
const EMAIL = "correo@proselec.com"; // placeholder (lo cambias cuando me lo digas)
const ADDRESS =
  "Calle Ave. Rodolfo Girón, Santiago Veraguas, Edificio Eléctrico Santiago, Local N° 2.";

export default function ContactoPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS
  )}&output=embed`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Contacto
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-slate-600">
        Escríbenos o llámanos y te cotizamos.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Teléfono
                </div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  {PHONE}
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={`tel:+507${PHONE.replaceAll("-", "")}`}
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                  >
                    Llamar
                  </a>
                  <a
                    href={`https://wa.me/507${PHONE.replaceAll("-", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Correo
                </div>
                <div className="mt-1 text-sm text-slate-700">{EMAIL}</div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Dirección
                </div>
                <div className="mt-1 text-sm text-slate-700">{ADDRESS}</div>
              </div>

              <div className="pt-2">
                <Link
                  href="/servicios"
                  className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700"
                >
                  Ver servicios
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="p-4">
              <div className="text-sm font-semibold text-slate-900">Ubicación</div>
              <div className="mt-1 text-sm text-slate-600">
                Mapa embebido (Google Maps)
              </div>
            </div>
            <div className="h-[360px] w-full">
              <iframe
                title="Mapa PROSELEC"
                src={mapSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
