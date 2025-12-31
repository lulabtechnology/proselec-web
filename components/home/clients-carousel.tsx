import SafeImage from "@/components/shared/safe-image";
import { clients } from "@/content/site";

export default function ClientsCarousel() {
  const items = clients.slice(0, 12).map((name, i) => ({
    name,
    src: `/images/clients/client-${String(i + 1).padStart(2, "0")}.png`
  }));

  // Duplicamos para loop infinito
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card shadow-soft">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="marquee py-5">
        <div className="marquee-track gap-6 px-6">
          {loop.map((it, idx) => (
            <div
              key={`${it.name}-${idx}`}
              className="flex items-center gap-3 rounded-2xl border bg-background/70 px-4 py-3"
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white">
                <SafeImage src={it.src} alt={it.name} fill className="object-contain p-2" />
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">{it.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
