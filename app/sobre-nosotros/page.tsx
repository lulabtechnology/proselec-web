import PageHero from "@/components/shared/page-hero";
import { site } from "@/content/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = { title: "Sobre nosotros" };

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="Sobre nosotros"
        subtitle="Empresa panameña fundada en 2011, enfocada en Obras Civiles, Arquitectura y Obras Electromecánicas."
      />

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl shadow-soft">
            <CardHeader>
              <CardTitle className="font-display">Nuestra empresa</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              {site.about}
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="rounded-2xl shadow-soft">
              <CardHeader><CardTitle className="font-display">Misión</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">{site.mission}</CardContent>
            </Card>
            <Card className="rounded-2xl shadow-soft">
              <CardHeader><CardTitle className="font-display">Visión</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">{site.vision}</CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
