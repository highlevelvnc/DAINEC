"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen items-center justify-between gap-3 px-4 py-3 md:px-12 md:py-5">
        <Link
          href="#inicio"
          aria-label="DAINEC início"
          className="shrink-0 transition-transform active:scale-95"
        >
          <Logo height={56} priority className="sm:!h-[64px] md:!h-[80px]" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-brand"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          data-track="cta_header"
          className="cta-pulse hidden rounded-md bg-brand px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-bg shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.98] md:inline-flex"
        >
          Pedir Orçamento
        </a>

        {/* Mobile compact WhatsApp — icon only at 320px, label visible from 360px */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          data-track="cta_header_compact"
          aria-label="WhatsApp DAINEC"
          className="inline-flex h-10 items-center gap-1.5 rounded-md bg-brand px-3 text-xs font-bold uppercase tracking-wider text-bg shadow-glow transition-transform active:scale-95 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
            <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6 0c-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5l.3-.5c.1-.2 0-.4 0-.5L9 5.7C8.7 5 8.5 5.1 8.3 5.1H7.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1.1 2.9 1.2 3.1.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4M12 22a9.9 9.9 0 0 1-5-1.4L2 22l1.4-4.9A10 10 0 1 1 12 22Z" />
          </svg>
          <span className="hidden xs:inline">Orçamento</span>
        </a>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-[2px] w-6 bg-ink transition-all ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-ink transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-ink transition-all ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`fixed inset-0 top-[68px] bg-bg/95 backdrop-blur-xl transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2 px-6 pt-8">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
                className={`border-b border-line py-5 font-display text-2xl font-bold text-ink transition-all duration-500 ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              data-track="cta_header_mobile"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-md bg-brand px-6 py-4 text-center font-bold uppercase tracking-wider text-bg shadow-glow"
            >
              Pedir Orçamento no WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
