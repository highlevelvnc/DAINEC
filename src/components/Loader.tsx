"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`loader-overlay ${hidden ? "is-hidden" : ""}`}
      aria-hidden={hidden}
      role="status"
      aria-label="A carregar DAINEC"
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,149,0,0.18),_transparent_60%)]" />

      <div className="relative flex flex-col items-center gap-7 px-6">
        {/* Energy ripples around the bolt */}
        <div className="relative flex h-48 w-48 items-center justify-center">
          <span className="loader-ripple-circle" />
          <span className="loader-ripple-circle loader-ripple-2" />
          <span className="loader-ripple-circle loader-ripple-3" />

          <Image
            src="/logo-light.png"
            alt=""
            width={220}
            height={92}
            priority
            className="loader-logo relative h-auto w-[170px] drop-shadow-[0_0_20px_rgba(255,149,0,0.6)]"
          />
        </div>

        <div className="text-[10px] font-semibold uppercase tracking-[0.45em] text-ink/55">
          Eletricidade · Construção
        </div>

        <div className="h-[2px] w-44 overflow-hidden rounded-full bg-line/80">
          <span className="block h-full w-1/3 animate-sweep bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>
      </div>
    </div>
  );
}
