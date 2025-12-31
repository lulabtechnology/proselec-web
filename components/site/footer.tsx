import Link from "next/link";
import { clients, contact, nav, site } from "@/content/site";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display">{site.shortName}</p>
            <p className="mt-2 text-sm text-muted-foreground">{site.description}</p>
            <p className="mt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} {site.shortName}. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <p className="font-medium">Navegación</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {nav.map((i) => (
                <li key={i.href}><Link className="hover:text-foreground" href={i.href}>{i.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium">Contacto</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>{contact.phones.join(" / ")}</li>
              <li>{contact.emails.join(" / ")}</li>
              <li className="leading-relaxed">{contact.address}</li>
              <li>{contact.web}</li>
            </ul>
          </div>

          <div>
            <p className="font-medium">Clientes</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {clients.slice(0, 6).join(" • ")}…
            </p>
            <Separator className="my-4" />
            <p className="text-xs text-muted-foreground">
              (Logos: sube tus archivos en <code>/public/images/clients</code>)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
