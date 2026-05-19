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
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,149,0,0.14),_transparent_65%)]" />

      <div className="relative flex flex-col items-center gap-6 px-6">
        {/* Energy ripples around the logo */}
        <div className="relative flex h-32 w-32 items-center justify-center">
          <span className="loader-ripple" />
          <span className="loader-ripple loader-ripple-2" />
          <span className="loader-ripple loader-ripple-3" />

          {/* Logo card */}
          <div className="loader-card relative flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-[0_0_40px_rgba(255,149,0,0.45)]">
            <Image
              src="/logo.png"
              alt=""
              width={170}
              height={70}
              priority
              className="h-auto w-[78%]"
            />
          </div>
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
