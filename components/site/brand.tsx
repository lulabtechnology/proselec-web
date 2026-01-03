"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type BrandProps = {
  className?: string;
  compact?: boolean;
};

const LOGO_CANDIDATES = [
  "/logo.png",
  "/images/logo.png",
  "/logo.svg",
  "/images/logo.svg",
];

export function Brand({ className = "", compact = false }: BrandProps) {
  const [idx, setIdx] = useState(0);

  const src = useMemo(() => {
    return LOGO_CANDIDATES[Math.min(idx, LOGO_CANDIDATES.length - 1)];
  }, [idx]);

  return (
    <Link
      href="/"
      aria-label="Ir al inicio"
      className={`flex items-center gap-3 ${className}`}
    >
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
        <img
          src={src}
          alt="PROSELEC, S.A."
          className="h-full w-full object-contain p-1.5"
          onError={() => {
            setIdx((i) => (i + 1 < LOGO_CANDIDATES.length ? i + 1 : i));
          }}
        />
      </div>

      {!compact && (
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-tight text-slate-900">
            PROSELEC, S.A.
          </div>
          <div className="text-xs text-slate-600">
            Obras Civiles &amp; Electromecánicas
          </div>
        </div>
      )}
    </Link>
  );
}

/**
 * También export default por compatibilidad,
 * por si algún archivo hace: import Brand from "@/components/site/brand"
 */
export default Brand;
