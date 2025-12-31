import Reveal from "@/components/shared/reveal";
import { clients } from "@/content/site";
import SafeImage from "@/components/shared/safe-image";
import ClientsCarousel from "@/components/home/clients-carousel";

export default function ClientsGrid() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p className="text-sm text-muted-foreground">Nuestros clientes</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Confianza que se sostiene</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Carrusel de logos (placeholders) + listado oficial.
          </p>
        </Reveal>

        <div className="mt-8">
          <Reveal>
            <ClientsCarousel />
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {clients.slice(0, 12).map((c, i) => (
            <Reveal key={c} delay={i * 0.02}>
              <div className="glass rounded-2xl p-4 shadow-soft flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white">
                  <SafeImage
                    src={`/images/clients/client-${String(i + 1).padStart(2, "0")}.png`}
                    alt={c}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 glass rounded-2xl p-6 shadow-soft">
          <p className="font-medium">Listado de clientes</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {clients.join(" • ")}
          </p>
        </div>
      </div>
    </section>
  );
}
