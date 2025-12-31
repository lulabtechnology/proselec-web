import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <div className="glass rounded-2xl p-8 md:p-10 shadow-soft">
          <p className="text-sm text-muted-foreground">404</p>
          <h1 className="mt-2 font-display text-3xl md:text-4xl">Página no encontrada</h1>
          <p className="mt-3 text-muted-foreground">
            La ruta no existe. Vuelve al inicio.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/">Ir al inicio</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
