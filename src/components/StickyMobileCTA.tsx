"use client";

import { useEffect, useState } from "react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line/80 bg-bg/95 px-3 py-2.5 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-stretch gap-2">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          data-track="cta_sticky_whatsapp"
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] active:scale-[0.98]"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
            <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6 0c-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5l.3-.5c.1-.2 0-.4 0-.5L9 5.7C8.7 5 8.5 5.1 8.3 5.1H7.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1.1 2.9 1.2 3.1.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4M12 22a9.9 9.9 0 0 1-5-1.4L2 22l1.4-4.9A10 10 0 1 1 12 22Z" />
          </svg>
          WhatsApp
        </a>
        <a
          href={PHONE_TEL}
          data-track="cta_sticky_call"
          aria-label="Ligar para a DAINEC"
          className="flex items-center justify-center gap-2 rounded-md border border-brand bg-brand/10 px-4 py-3 text-sm font-bold uppercase tracking-wider text-brand active:scale-[0.98]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.9 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.4z" />
          </svg>
          Ligar
        </a>
      </div>
    </div>
  );
}
