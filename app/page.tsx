// app/page.tsx
import Link from "next/link";
import { COMPANY, CONTACT, PROJECTS, SERVICES } from "@/lib/proselec";
import { Button } from "@/components/ui/button";

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
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <p className="text-sm text-muted-foreground">{COMPANY.legalName}</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {COMPANY.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {COMPANY.tagline}
            </p>

            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <a href={whatsappHref} target="_blank" rel="noreferrer">Cotizar por WhatsApp</a>
              </Button>
              <Button asChild variant="outline">
                <a href={telHref}>Llamar</a>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/proyectos">Ver proyectos</Link>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              {COMPANY.address}
            </div>
          </div>

          <div className="rounded-xl border bg-muted/30 p-6">
            <div className="grid gap-4">
              <div>
                <div className="text-2xl font-semibold">{COMPANY.foundedYear}</div>
                <div className="text-sm text-muted-foreground">Fundada</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">+{CONTACT.phoneDisplay}</div>
                <div className="text-sm text-muted-foreground">Contacto directo</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">{COMPANY.website}</div>
                <div className="text-sm text-muted-foreground">Web</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Servicios</h2>
              <p className="text-sm text-muted-foreground">
                Soluciones completas para obras civiles, arquitectura y electromecánica.
              </p>
            </div>
            <Link className="text-sm text-primary underline-offset-4 hover:underline" href="/servicios">
              Ver todos
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredServices.map((s) => (
              <div key={s.title} className="rounded-xl border p-5">
                <div className="font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.description}</div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {s.bullets.slice(0, 3).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="border-t bg-muted/20 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Proyectos</h2>
              <p className="text-sm text-muted-foreground">
                Experiencia demostrable en proyectos civiles, sanitarios, eléctricos y contra incendio.
              </p>
            </div>
            <Link className="text-sm text-primary underline-offset-4 hover:underline" href="/proyectos">
              Ver todos
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((p) => (
              <Link key={p.title} href="/proyectos" className="group overflow-hidden rounded-xl border bg-background">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold">{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.subtitle}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-start">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Hablemos de tu proyecto</h2>
            <p className="text-sm text-muted-foreground">
              Respuesta rápida por WhatsApp o correo. También puedes llamar directamente.
            </p>

            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <a href={whatsappHref} target="_blank" rel="noreferrer">Cotizar por WhatsApp</a>
              </Button>
              <Button asChild variant="outline">
                <a href={telHref}>Llamar</a>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contacto">Ver contacto</Link>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              {COMPANY.name} · {COMPANY.address}
            </div>
          </div>

          <div className="rounded-xl border overflow-hidden">
            <iframe
              title="Mapa PROSELEC"
              src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`}
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
