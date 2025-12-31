import Reveal from "@/components/shared/reveal";

export default function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_0%,rgba(20,184,166,.20),transparent_60%)]" />
      <div className="container relative py-12 md:py-16">
        <Reveal>
          <p className="text-sm text-muted-foreground">PROSELEC, S.A.</p>
          <h1 className="mt-2 font-display text-3xl md:text-5xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
