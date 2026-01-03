// /app/sobre-nosotros/page.tsx
import { site } from "@/content/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SobreNosotrosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Sobre nosotros</h1>
      <p className="mt-2 text-slate-600">{site.tagline}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="rounded-2xl shadow-sm lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-display">Nuestra empresa</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            {site.about}
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="font-display">Misión</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            {site.mission}
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-display">Visión</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            {site.vision}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
