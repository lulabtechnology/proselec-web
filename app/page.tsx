import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { COMPANY, CONTACT, PROJECTS, SERVICES } from "@/lib/proselec";

function waLink(text: string) {
  const phone = CONTACT.phoneE164.replace("+", "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const metadata = {
  title: "PROSELEC, S.A. | Obras Civiles y Electromecánicas",
  description: "Obras Civiles, Arquitectura y Obras Electromecánicas en Panamá.",
};

export default function HomePage() {
  const telHref = `tel:${CONTACT.phoneE164}`;
  const whatsappHref = waLink("Hola, quiero una cotización. ¿Me ayudan por favor?");

  const featuredProjects = PROJECTS.slice(0, 6);
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <main>
      <Hero />

      {/* Por qué escogernos */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-semibold">¿Por qué escogernos?</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enfoque técnico, ejecución responsable y comunicación clara. Trabajamos con calidad,
                  seguridad y confiabilidad en soluciones de ingeniería.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Button asChild className="rounded-2xl">
                    <a href={whatsappHref} target="_blank" rel="noreferrer">
                      Cotizar por WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href={telHref}>Llamar</a>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { t: "Calidad", d: "Estándares de ejecución y acabados." },
                  { t: "Seguridad", d: "Buenas prácticas y control en sitio." },
                  { t: "Confiabilidad", d: "Cumplimiento y soporte post-entrega." },
                  { t: "Capacidad", d: "Civil, arquitectura y electromecánica." },
                ].map((c, i) => (
                  <Reveal key={c.t} delay={0.06 * i}>
                    <div className="rounded-2xl border bg-background/60 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <div className="font-semibold">{c.t}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{c.d}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Servicios */}
      <section className="border-t bg-muted/20 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Servicios</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Soluciones completas para proyectos civiles, sanitarios, pluviales y contra incendio.
                </p>
              </div>
              <Link className="text-sm text-primary underline-offset-4 hover:underline" href="/servicios">
                Ver todos
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredServices.map((s, i) => (
              <Reveal key={s.title} delay={0.05 * i}>
                <div className="rounded-2xl border bg-background/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-lg font-semibold">{s.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.description}</div>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Proyectos</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Una muestra de obras ejecutadas en diversas áreas y ubicaciones.
                </p>
              </div>
              <Link className="text-sm text-primary underline-offset-4 hover:underline" href="/proyectos">
                Ver todos
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <Link
                  href="/proyectos"
                  className="group overflow-hidden rounded-3xl border bg-background shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="aspect-[16/10] bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-semibold">{p.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{p.subtitle}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto (con mapa embebido) */}
      <section className="border-t bg-muted/20 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <Reveal>
              <div className="rounded-3xl border bg-background/70 p-6 shadow-sm backdrop-blur">
                <h2 className="text-2xl font-semibold">Contacto</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Respuesta rápida por WhatsApp. También puedes llamar directamente.
                </p>

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground">Teléfono:</span> {CONTACT.phoneDisplay}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Correo:</span> {CONTACT.email}
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Dirección:</span> {COMPANY.address}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Button asChild className="rounded-2xl">
                    <a href={whatsappHref} target="_blank" rel="noreferrer">
                      Cotizar por WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href={telHref}>Llamar</a>
                  </Button>
                  <Button asChild variant="secondary" className="rounded-2xl">
                    <Link href="/contacto">Ver detalle</Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-3xl border bg-background shadow-sm">
                <iframe
                  title="Mapa PROSELEC"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`}
                  className="h-[380px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
