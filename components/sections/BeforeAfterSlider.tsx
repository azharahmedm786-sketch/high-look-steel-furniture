"use client";

import { useState } from "react";
import Image from "next/image";
import type { ServiceImage } from "@/types";

const BASE_PATH = "/high-look-steel-furniture";

const aspectClass: Record<ServiceImage["aspect"], string> = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function BeforeAfterSlider({
  before,
  after,
}: {
  before: ServiceImage;
  after: ServiceImage;
}) {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full">
      <div className={`relative w-full overflow-hidden ${aspectClass[before.aspect]}`}>
        {/* AFTER sits underneath, fully visible */}
        <Image
          src={`${BASE_PATH}${after.src}`}
          alt={after.alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <span className="absolute right-3 top-3 z-10 bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest2 text-white">
          After
        </span>

        {/* BEFORE is clipped to the slider value, sitting on top */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Image
            src={`${BASE_PATH}${before.src}`}
            alt={before.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <span className="absolute left-3 top-3 z-10 bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest2 text-white">
            Before
          </span>
        </div>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white/90"
          style={{ left: `${value}%` }}
        />

        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Drag to compare before and after"
          className="absolute inset-x-0 bottom-0 z-20 h-10 w-full cursor-ew-resize appearance-none bg-transparent [&::-webkit-slider-thumb]:h-9 [&::-webkit-slider-thumb]:w-9 [&::-webkit-slider-thumb]:-translate-y-0 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-ink [&::-webkit-slider-thumb]:bg-white"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        />
      </div>
      <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-widest2 text-ink-soft">
        Drag to compare
      </p>
    </div>
  );
}
