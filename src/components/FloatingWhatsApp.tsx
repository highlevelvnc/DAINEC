"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show) {
      setTip(false);
      return;
    }
    const show_t = setTimeout(() => setTip(true), 1200);
    const hide_t = setTimeout(() => setTip(false), 5200);
    return () => {
      clearTimeout(show_t);
      clearTimeout(hide_t);
    };
  }, [show]);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-3 transition-all duration-300 md:bottom-7 md:right-7 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span
        className={`wa-tooltip ${
          tip ? "is-visible" : ""
        } hidden rounded-md border border-line bg-bg/95 px-3 py-2 text-xs font-medium text-ink shadow-lg backdrop-blur md:block`}
      >
        Olá! Precisa de orçamento?
      </span>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        data-track="cta_floating_whatsapp"
        className="group relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.55)] ring-4 ring-white/10 transition-transform hover:scale-110 active:scale-95 md:h-14 md:w-14"
      >
        <span className="absolute inset-0 -z-10 animate-pulseDot rounded-full bg-[#25D366]/40" />
        <svg className="h-8 w-8 fill-current md:h-7 md:w-7" viewBox="0 0 24 24" aria-hidden>
          <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6 0c-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5l.3-.5c.1-.2 0-.4 0-.5L9 5.7C8.7 5 8.5 5.1 8.3 5.1H7.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1.1 2.9 1.2 3.1.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4M12 22a9.9 9.9 0 0 1-5-1.4L2 22l1.4-4.9A10 10 0 1 1 12 22Z" />
        </svg>
      </a>
    </div>
  );
}
