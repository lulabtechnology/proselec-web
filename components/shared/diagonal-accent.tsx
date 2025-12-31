import { cn } from "@/lib/utils";

export default function DiagonalAccent({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute right-0 top-0 h-full w-[55%] opacity-90",
        className
      )}
    >
      <div className="absolute right-0 top-0 h-full w-full bg-[linear-gradient(135deg,transparent_0%,transparent_35%,rgba(20,184,166,.18)_35%,rgba(20,184,166,.18)_55%,rgba(14,165,233,.14)_55%,rgba(14,165,233,.14)_72%,transparent_72%)]" />
      <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(900px_500px_at_80%_20%,rgba(14,165,233,.18),transparent_60%)]" />
    </div>
  );
}
