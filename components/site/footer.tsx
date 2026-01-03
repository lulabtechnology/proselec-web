// components/site/footer.tsx
import Link from "next/link";
import { COMPANY, CONTACT } from "@/lib/proselec";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapQuery)}`;
}
function waLink(text: string) {
  const phone = CONTACT.phoneE164.replace("+", "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export default function Footer() {
  const telHref = `tel:${CONTACT.phoneE164}`;
  const whatsappHref = waLink("Hola, quiero una cotización. ¿Me ayudan por favor?");
  const mapsHref = mapsLink();

  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="font-semibold">{COMPANY.name}</div>
          <p className="text-sm text-muted-foreground">
            Empresa panameña fundada en {COMPANY.foundedYear}, enfocada en {COMPANY.tagline}
          </p>

          <div className="flex flex-wrap gap-2">
            <Button asChild>
              <a href={whatsappHref} target="_blank" rel="noreferrer">Cotizar</a>
            </Button>
            <Button asChild variant="outline">
              <a href={telHref}>Llamar</a>
            </Button>
          </div>
        </div>

        <div>
          <div className="mb-3 font-semibold">Navegación</div>
          <ul className="grid gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link className="text-muted-foreground hover:text-foreground" href={n.href}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="font-semibold">Contacto</div>
          <ul className="grid gap-1 text-sm text-muted-foreground">
            <li>{CONTACT.phoneDisplay}</li>
            <li>{CONTACT.email}</li>
            <li>{COMPANY.address}</li>
            <li>{COMPANY.website}</li>
          </ul>

          <Button asChild variant="outline">
            <a href={mapsHref} target="_blank" rel="noreferrer">Ver mapa</a>
          </Button>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
