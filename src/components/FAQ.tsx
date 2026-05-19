"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/faq";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-screen px-5 md:px-12">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div
              data-reveal="up"
              className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400"
            >
              <span className="h-px w-8 bg-brand" /> Perguntas frequentes
            </div>
            <h2
              data-reveal="up"
              data-reveal-delay="80"
              className="text-fluid-h2 font-display font-extrabold text-ink"
            >
              Respondemos às dúvidas
              <br />
              <span className="text-brand">mais comuns.</span>
            </h2>
          </div>
          <p
            data-reveal="up"
            data-reveal-delay="160"
            className="text-fluid-lead max-w-xl text-ink/70 md:col-span-7 md:self-end"
          >
            Se ficar alguma dúvida por responder, escreva-nos pelo WhatsApp —
            respondemos rapidamente.
          </p>
        </div>

        <div
          data-reveal="up"
          data-reveal-delay="240"
          className="overflow-hidden rounded-2xl border border-line bg-surface"
        >
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`border-b border-line last:border-b-0 transition-colors ${
                  isOpen ? "bg-surface2" : ""
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-surface2 md:px-8 md:py-6"
                >
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-brand/40 bg-brand/10 font-mono text-xs font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base font-semibold text-ink md:text-lg">
                      {item.q}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink/70 transition-all duration-300 ${
                      isOpen ? "rotate-45 border-brand bg-brand text-bg" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 pl-16 pr-10 text-sm leading-relaxed text-ink/70 md:px-8 md:pb-7 md:pl-[88px] md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
