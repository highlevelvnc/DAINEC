"use client";

import { useEffect } from "react";

/** Tracks pointer across `.card-spot` elements to position a soft brand glow. */
export function CardSpotInit() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        ".card-spot"
      );
      if (!target) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty("--x", `${e.clientX - r.left}px`);
      target.style.setProperty("--y", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
