"use client";

import { useEffect, useRef } from "react";

type HeroHeadingProps = {
  lines: string[];
};

export default function HeroHeading({ lines }: HeroHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (coarse || reduced) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--tx", `${nx * -14}px`);
        el.style.setProperty("--ty", `${ny * -8}px`);
        raf = 0;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <h1
      ref={ref}
      className="type-display select-none text-[clamp(2.25rem,min(9vw,11svh),6.75rem)] transition-transform duration-300 ease-out"
      style={{
        transform:
          "translate3d(var(--tx, 0px), var(--ty, 0px), 0)",
      }}
    >
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h1>
  );
}
