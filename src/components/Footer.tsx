import { Logo } from "./Logo";
import {
  COMPANY,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-bg">
      <div className="absolute inset-x-0 top-0 h-px">
        <div className="divider-circuit" />
      </div>
      <div className="mx-auto grid max-w-screen grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/60">
            Eletricidade e construção com qualidade, segurança e compromisso.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-ink/40">
            {COMPANY.fullName}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener"
              data-track="cta_footer_instagram"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink/70 transition-all hover:border-brand hover:text-brand"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener"
              data-track="cta_footer_facebook"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink/70 transition-all hover:border-brand hover:text-brand"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2-2h2V2.1A28 28 0 0 0 14 2c-3 0-5 1.8-5 5v3H6v4h3v8h4z" />
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              data-track="cta_footer_whatsapp"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink/70 transition-all hover:border-brand hover:text-brand"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6 0c-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5l.3-.5c.1-.2 0-.4 0-.5L9 5.7C8.7 5 8.5 5.1 8.3 5.1H7.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1.1 2.9 1.2 3.1.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4M12 22a9.9 9.9 0 0 1-5-1.4L2 22l1.4-4.9A10 10 0 1 1 12 22Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-brand-400">
            Links
          </h4>
          <ul className="space-y-3 text-sm text-ink/70">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-brand">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-brand-400">
            Contacto direto
          </h4>
          <ul className="space-y-3 text-sm text-ink/70">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                data-track="cta_footer_whatsapp_text"
                className="transition-colors hover:text-brand"
              >
                WhatsApp · {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={PHONE_TEL}
                data-track="cta_footer_call"
                className="transition-colors hover:text-brand"
              >
                Telefone · {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.maps}
                target="_blank"
                rel="noopener"
                data-track="cta_footer_maps"
                className="transition-colors hover:text-brand"
              >
                Ver no Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-screen flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-ink/40 md:flex-row md:px-12">
          <div>© {year} DAINEC — Eletricidade e Construção. Todos os direitos reservados.</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulseDot" />
            <span>Portugal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
