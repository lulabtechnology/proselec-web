import Reveal from "@/components/shared/reveal";
import { services } from "@/content/site";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Nuestros servicios</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">Soluciones especializadas</h2>
            </div>
            <Button asChild variant="outline" className="rounded-2xl">
              <Link href="/servicios">
                Ver todos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.04}>
              <Card className="rounded-2xl shadow-soft hover:shadow-glow transition">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-800">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <p className="font-medium">{s.title}</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {s.bullets.slice(0, 3).map((b) => <li key={b}>• {b}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
