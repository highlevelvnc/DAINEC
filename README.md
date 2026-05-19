# DAINEC

Site institucional da **DAINEC — Eletricidade e Construção**.

Landing page premium em Next.js 15 (App Router) optimizada para mobile e focada
em conversão por WhatsApp.

## Stack

- Next.js 15 · React 19 · TypeScript
- Tailwind CSS 3 (dark, mobile-first)
- `next/font` (Sora + Inter)
- IntersectionObserver + CSS para scroll-reveal (sem GSAP)
- Imagens optimizadas via `next/image`

## Como correr

```bash
pnpm install
pnpm dev    # http://localhost:3000
pnpm build  # build estático
```

## Estrutura

```
src/
  app/
    layout.tsx       # SEO, fonts, tracking placeholders
    page.tsx         # composição da landing + JSON-LD
    globals.css      # design tokens e animações
    sitemap.ts
  components/
    Header.tsx · Hero.tsx · Services.tsx · WhyUs.tsx
    About.tsx · Portfolio.tsx · CTA.tsx · Contact.tsx
    Footer.tsx · FloatingWhatsApp.tsx · Loader.tsx
    RevealInit.tsx · CardSpotInit.tsx · Tracking.tsx
    Logo.tsx
  lib/
    constants.ts     # WHATSAPP_URL, COMPANY, NAV_LINKS
    scrollReveal.ts  # IO + fallback de 3,5 s
public/
  portfolio/         # fotos reais de obras (img-61xx.jpg)
```

## Personalização

Tudo o que muda entre projectos vive em `src/lib/constants.ts`:

- `WHATSAPP_NUMBER` · `PHONE_DISPLAY`
- `COMPANY` (nome, redes, Google Maps)
- `NAV_LINKS`

## Tracking

Cada CTA tem `data-track="cta_*"`. O componente `Tracking.tsx` propaga os
eventos para `window.dataLayer` (GTM), `gtag` (GA4) e `fbq` (Meta Pixel).
Basta colar os IDs em `src/app/layout.tsx` quando o cliente os fornecer.

## Contactos DAINEC

- WhatsApp: <https://wa.me/351925579499>
- Instagram: <https://www.instagram.com/dainec.lda/>
- Facebook: <https://www.facebook.com/Dainec.lda/>
- Google Maps: <https://share.google/F9tCEZ08aWVdj9xW7>
