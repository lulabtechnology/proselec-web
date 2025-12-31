import Link from "next/link";
import { site, contact, clients } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { telLink, waLink } from "@/lib/links";
import MapEmbed from "@/components/contact/map-embed";

export default function Footer() {
  const wa = waLink("50768527127", "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-xl">{site.shortName}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Empresa panameña fundada en {site.founded}, enfocada en Obras Civiles, Arquitectura y Obras Electromecánicas.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button asChild className="rounded-2xl shadow-glow">
              <a href={wa} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Cotizar
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-2xl">
              <a href={telLink(contact.phones[0])}>
                <Phone className="mr-2 h-4 w-4" /> Llamar
              </a>
            </Button>
          </div>
        </div>

        <div>
          <p className="font-medium">Navegación</p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" href="/">Inicio</Link></li>
            <li><Link className="hover:text-foreground" href="/sobre-nosotros">Sobre nosotros</Link></li>
            <li><Link className="hover:text-foreground" href="/servicios">Servicios</Link></li>
            <li><Link className="hover:text-foreground" href="/proyectos">Proyectos</Link></li>
            <li><Link className="hover:text-foreground" href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Contacto</p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
            <li>{contact.phones.join(" / ")}</li>
            <li>{contact.emails.join(" / ")}</li>
            <li>{contact.address}</li>
            <li>{contact.web}</li>
          </ul>
          <div className="mt-4">
            <Button asChild variant="outline" className="rounded-2xl">
              <a href={mapsLink} target="_blank" rel="noreferrer">
                <MapPin className="mr-2 h-4 w-4" /> Ver en Google Maps
              </a>
            </Button>
          </div>
        </div>

        <div>
          <p className="font-medium">Ubicación</p>
          <div className="mt-3">
            <MapEmbed height={220} />
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 text-sm text-muted-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {site.shortName}. Todos los derechos reservados.</p>
          <p className="max-w-2xl">
            {clients.slice(0, 12).join(" • ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
