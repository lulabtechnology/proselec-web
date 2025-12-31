import Reveal from "@/components/shared/reveal";
import { site } from "@/content/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MissionVision() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl">Nuestro objetivo</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Diseñar, planificar, construir, equipar y mantener proyectos con visión técnica y foco en servicio.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="rounded-2xl shadow-soft">
              <CardHeader><CardTitle className="font-display">Misión</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">{site.mission}</CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card className="rounded-2xl shadow-soft">
              <CardHeader><CardTitle className="font-display">Visión</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">{site.vision}</CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
