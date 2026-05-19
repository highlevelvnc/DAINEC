"use client";

import { useEffect } from "react";

/**
 * Adds subtle 3D tilt on `.tilt` elements and a magnetic-pull effect on
 * `.magnetic` elements. Both are pointer-fine only — touch users get the
 * resting state.
 */
export function InteractionsInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onTilt = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(".tilt");
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${px * 6}deg`);
      el.style.setProperty("--ry", `${-py * 6}deg`);
    };
    const resetTilt = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(".tilt");
      if (!el) return;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    const onMag = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(".magnetic");
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * 0.18;
      const dy = (e.clientY - cy) * 0.18;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };
    const resetMag = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(".magnetic");
      if (!el) return;
      el.style.transform = "translate3d(0,0,0)";
    };

    document.addEventListener("pointermove", onTilt, { passive: true });
    document.addEventListener("pointerleave", resetTilt, true);
    document.addEventListener("pointermove", onMag, { passive: true });
    document.addEventListener("pointerleave", resetMag, true);

    return () => {
      document.removeEventListener("pointermove", onTilt);
      document.removeEventListener("pointerleave", resetTilt, true);
      document.removeEventListener("pointermove", onMag);
      document.removeEventListener("pointerleave", resetMag, true);
    };
  }, []);
  return null;
}
