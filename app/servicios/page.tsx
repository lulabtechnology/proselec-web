import PageHero from "@/components/shared/page-hero";
import { services } from "@/content/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = { title: "Servicios" };

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Servicios"
        subtitle="Soluciones integrales para obras civiles e instalaciones electromecánicas."
      />

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.title} className="rounded-2xl shadow-soft">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-800">
                  <s.icon className="h-5 w-5" />
                </div>
                <CardTitle className="font-display">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
