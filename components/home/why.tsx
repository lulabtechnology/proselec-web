import Reveal from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";

export default function Why() {
  return (
    <section className="section">
      <div className="container grid gap-6 md:grid-cols-2">
        <Reveal>
          <p className="text-sm text-muted-foreground">Bienvenido</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">¿Por qué escogernos?</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Alto grado de compromiso en la ejecución de instalaciones y obras, reflejado en la fidelidad de nuestros clientes.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { t: "Calidad", d: "Enfoque en estándares, acabados y ejecución responsable." },
            { t: "Seguridad", d: "Procesos y soluciones confiables para cada proyecto." },
            { t: "Planificación", d: "Diseño, ingeniería y cronogramas con claridad." },
            { t: "Soporte", d: "Asistencia técnica y mantenimiento cuando lo necesitas." }
          ].map((i, idx) => (
            <Reveal key={i.t} delay={idx * 0.05}>
              <Card className="rounded-2xl shadow-soft">
                <CardContent className="p-6">
                  <p className="font-medium">{i.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
