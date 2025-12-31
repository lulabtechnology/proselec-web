import { contact } from "@/content/site";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

function mapQuery(address: string) {
  return encodeURIComponent(address);
}

export default function MapEmbed({
  address = contact.address,
  height = 320
}: {
  address?: string;
  height?: number;
}) {
  const q = mapQuery(address);
  const embedSrc = `https://www.google.com/maps?q=${q}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${q}`;

  return (
    <div className="rounded-2xl overflow-hidden border bg-card shadow-soft">
      <div className="relative w-full" style={{ height }}>
        <iframe
          title="Ubicación en Google Maps"
          src={embedSrc}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="p-4 flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {address}
        </p>
        <Button asChild variant="outline" className="rounded-2xl">
          <a href={mapsLink} target="_blank" rel="noreferrer">
            <MapPin className="mr-2 h-4 w-4" /> Ver mapa
          </a>
        </Button>
      </div>
    </div>
  );
}
