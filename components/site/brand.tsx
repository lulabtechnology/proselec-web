// components/site/brand.tsx
import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
        <Image
          src="/images/logo.png"
          alt="PROSELEC, S.A."
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="leading-tight">
        <div className="text-sm font-semibold text-slate-900">PROSELEC, S.A.</div>
        <div className="text-xs text-slate-600">Obras Civiles & Electromecánicas</div>
      </div>
    </Link>
  );
}

export default Brand;
