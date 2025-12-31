"use client";

import Image, { type ImageProps } from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const svg = (label: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stop-color="#0b1220"/>
          <stop offset="1" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#g)"/>
      <text x="50%" y="50%" fill="#94a3b8" font-family="Inter, Arial" font-size="28" text-anchor="middle">
        ${label}
      </text>
    </svg>`
  )}`;

export default function SafeImage(props: ImageProps & { className?: string }) {
  const [broken, setBroken] = useState(false);
  const fallback = useMemo(() => svg("Imagen pendiente"), []);

  return (
    <Image
      {...props}
      src={broken ? fallback : props.src}
      onError={() => setBroken(true)}
      className={cn("bg-slate-900/60", props.className)}
      sizes={props.sizes ?? "100vw"}
      priority={props.priority ?? false}
    />
  );
}
