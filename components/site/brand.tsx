// components/site/brand.tsx
import Link from "next/link";
import Image from "next/image";

export default function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="PROSELEC, S.A."
        width={44}
        height={44}
        priority
        className="h-11 w-11 rounded-full bg-white object-contain ring-1 ring-black/10"
      />
      <div className="leading-tight">
        <div className="text-sm font-semibold text-slate-900">PROSELEC, S.A.</div>
        <div className="text-xs text-slate-500">Obras Civiles & Electromecánicas</div>
      </div>
    </Link>
  );
}
