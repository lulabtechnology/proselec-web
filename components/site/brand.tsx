import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <img
        src="/images/logo.png"
        alt="PROSELEC"
        className="h-9 w-9 rounded-full object-cover"
      />
      <div className="leading-tight">
        <div className="text-sm font-semibold">PROSELEC, S.A.</div>
        <div className="text-xs text-muted-foreground">Obras Civiles & Electromecánicas</div>
      </div>
    </Link>
  );
}
