import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="PROSELEC logo"
        className="h-10 w-10 rounded-md object-contain bg-white/60"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/images/logo.png";
        }}
      />
      <div className="leading-tight">
        <div className="font-semibold">PROSELEC, S.A.</div>
        <div className="text-xs text-muted-foreground">Obras Civiles &amp; Electromecánicas</div>
      </div>
    </Link>
  );
}
