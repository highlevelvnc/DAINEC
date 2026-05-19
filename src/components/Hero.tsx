"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { CountUp } from "./CountUp";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const el = bgRef.current;
        if (el) el.style.transform = `translate3d(0, ${window.scrollY * 0.18}px, 0)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32"
    >
      {/* Background image with parallax */}
      <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform">
        <Image
          src="/portfolio/img-6125.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/60" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      {/* Floating accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-72 w-72 rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-700/20 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-screen grid-cols-1 gap-10 px-5 md:px-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div
            data-reveal="up"
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-brand/30 bg-brand/5 px-4 py-2"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-pulseDot rounded-full bg-brand" />
              <span className="relative h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-400">
              Eletricidade · Construção · Portugal
            </span>
          </div>

          <h1
            data-reveal="up"
            data-reveal-delay="80"
            className="text-fluid-h1 font-display font-extrabold text-ink"
          >
            Eletricidade e Construção com{" "}
            <span className="relative inline-block text-brand glow-text">
              Segurança
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 50 2, 100 8 T 198 6"
                  stroke="#FF9500"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            ,<br className="hidden sm:block" /> Qualidade e Profissionalismo.
          </h1>

          <p
            data-reveal="up"
            data-reveal-delay="160"
            className="mt-7 max-w-2xl text-fluid-lead text-ink/75 md:mt-9"
          >
            A DAINEC realiza instalações elétricas, reparações, remodelações e
            serviços de construção com atenção ao detalhe, segurança e
            compromisso em cada projeto.
          </p>

          <div
            data-reveal="up"
            data-reveal-delay="240"
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-10"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              data-track="cta_hero_whatsapp"
              className="cta-pulse magnetic group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-md bg-brand px-7 py-4 text-sm font-bold uppercase tracking-wider text-bg shadow-glow hover:shadow-glow-lg sm:text-base"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden
              >
                <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6 0c-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5l.3-.5c.1-.2 0-.4 0-.5L9 5.7C8.7 5 8.5 5.1 8.3 5.1H7.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1.1 2.9 1.2 3.1.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4M12 22a9.9 9.9 0 0 1-5-1.4L2 22l1.4-4.9A10 10 0 1 1 12 22Z" />
              </svg>
              Pedir Orçamento no WhatsApp
            </a>
            <a
              href="#servicos"
              className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-md border border-brand/60 px-7 py-4 text-sm font-bold uppercase tracking-wider text-brand-400 transition-all hover:bg-brand/10 hover:text-brand sm:text-base"
            >
              Ver Serviços
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>

          {/* Trust strip */}
          <div
            data-reveal="up"
            data-reveal-delay="320"
            className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-line pt-6"
          >
            <Stat
              n={<><CountUp to={100} />%</>}
              label="Segurança em obra"
            />
            <Stat
              n={<><CountUp to={24} />h</>}
              label="Resposta rápida"
            />
            <Stat n="PT" label="Particulares e empresas" />
          </div>
        </div>

        {/* Decorative panel */}
        <div className="hidden lg:col-span-4 lg:block">
          <div
            data-reveal="right"
            data-reveal-delay="200"
            className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-surface shine"
          >
            <Image
              src="/portfolio/img-6119.jpg"
              alt="Iluminação LED de teto, instalação DAINEC"
              fill
              sizes="(min-width:1024px) 33vw, 0px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-bg/70 px-3 py-1 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulseDot" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-400">
                Em obra
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
                Caso recente
              </div>
              <div className="mt-1 font-display text-lg font-bold text-ink">
                Iluminação LED · Sanca arquitetural
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom circuit */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <div className="divider-circuit" />
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-extrabold text-brand md:text-3xl">
        {n}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-ink/60">
        {label}
      </div>
    </div>
  );
}
