"use client";

import { useEffect } from "react";

/**
 * Centralised click tracking. Captures every click on elements with
 * `data-track="..."` and forwards a custom event to all configured
 * analytics platforms (GTM dataLayer, GA4 gtag, Meta Pixel fbq).
 *
 * Substituir os IDs de tracking em layout.tsx — esta camada já está pronta a usar.
 */
export function Tracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-track]"
      );
      if (!target) return;
      const event = target.dataset.track || "click";
      const href = (target as HTMLAnchorElement).href || "";

      // GTM dataLayer
      const w = window as unknown as {
        dataLayer?: Record<string, unknown>[];
        gtag?: (...args: unknown[]) => void;
        fbq?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event, link_url: href });

      // GA4 gtag (works after GA4 script is loaded)
      w.gtag?.("event", event, { link_url: href });

      // Meta Pixel
      if (event.startsWith("cta_")) {
        w.fbq?.("track", "Contact", { content_name: event });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
