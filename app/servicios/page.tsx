// app/servicios/page.tsx
import { SERVICES } from "@/lib/proselec";
import {
  Building2,
  Droplets,
  Fan,
  Flame,
  HardHat,
  Pipe,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Servicios | PROSELEC, S.A.",
};

const iconMap = {
  HardHat,
  Zap,
  Wrench,
  Droplets,
  Flame,
  Building2,
  Fan,
  Pipe,
} as const;

export default function ServiciosPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-semibold">Servicios</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Capacidades y soluciones para obra civil, arquitectura y sistemas electromecánicos.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.title} className="rounded-xl border p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg border bg-muted/40 p-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg font-semibold">{s.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.description}</div>
                  </div>
                </div>

                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
