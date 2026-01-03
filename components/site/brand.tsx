"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";

export default function Brand() {
  const [src, setSrc] = useState("/images/logo.png");

  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
        <Image
          src={src}
          alt={`${site.shortName} logo`}
          fill
          sizes="40px"
          className="object-contain p-1"
          onError={() => {
            // fallback si en algún momento lo metes en /images/logo/logo.png
            if (src !== "/images/logo/logo.png") setSrc("/images/logo/logo.png");
          }}
        />
      </div>

      <div className="leading-tight">
        <div className="text-sm font-semibold text-slate-900">{site.name}</div>
        <div className="text-xs text-slate-600">{site.tagline}</div>
      </div>
    </Link>
  );
}
