"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/site";
import { telLink, waLink } from "@/lib/links";

export default function FloatingCTA() {
  const wa = waLink("50768527127", "Hola, quiero cotizar un proyecto con PROSELEC, S.A.");
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
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
  );
}
