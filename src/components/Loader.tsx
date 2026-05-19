"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`loader-overlay ${hidden ? "is-hidden" : ""}`}
      aria-hidden={hidden}
      role="status"
      aria-label="A carregar"
    >
      {/* Subtle ambient glow */}
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,149,0,0.12),_transparent_60%)]" />

      <div className="relative flex flex-col items-center gap-7 px-6">
        {/* Energized circuit + bolt */}
        <div className="relative">
          <svg
            viewBox="0 0 140 140"
            width="120"
            height="120"
            className="loader-circuit"
            aria-hidden
          >
            {/* outer track */}
            <rect
              x="6"
              y="6"
              width="128"
              height="128"
              rx="6"
              className="loader-track"
            />
            {/* energized path */}
            <path
              d="M6 40 L40 40 L48 32 L92 32 L100 40 L134 40
                 M6 100 L40 100 L48 108 L92 108 L100 100 L134 100"
              className="loader-wire"
            />
            {/* nodes */}
            <circle cx="40" cy="40" r="2.4" className="loader-node" />
            <circle cx="100" cy="40" r="2.4" className="loader-node" />
            <circle cx="40" cy="100" r="2.4" className="loader-node" />
            <circle cx="100" cy="100" r="2.4" className="loader-node" />
            {/* central bolt */}
            <path
              d="M76 38 L56 76 H72 L66 102 L88 64 H72 L78 38 Z"
              className="loader-bolt"
            />
          </svg>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-display text-2xl font-extrabold tracking-[0.32em] text-ink">
            DAI<span className="text-brand">NEC</span>
          </div>
        </div>

        <div className="text-[10px] font-semibold uppercase tracking-[0.45em] text-ink/50">
          Eletricidade · Construção
        </div>

        <div className="h-[2px] w-44 overflow-hidden rounded-full bg-line/80">
          <span className="block h-full w-1/3 animate-sweep bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>
      </div>
    </div>
  );
}
