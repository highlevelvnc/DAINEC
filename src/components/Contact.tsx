import {
  COMPANY,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/constants";

export function Contact() {
  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-screen px-5 md:px-12">
        <div className="mb-14 max-w-2xl">
          <div
            data-reveal="up"
            className="mb-4 inline-flex items-baseline gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400"
          >
            <span className="font-mono text-[10px] text-brand/60">07 /</span>
            <span className="h-px w-8 self-center bg-brand" />
            <span>Contactos</span>
          </div>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            className="text-fluid-h2 font-display font-extrabold text-ink"
          >
            Vamos falar sobre o seu <span className="text-brand">projeto</span>.
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="160"
            className="mt-4 text-base text-ink/70"
          >
            Resposta rápida pelos canais abaixo. Atendimento a particulares e
            empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <ContactCard
            href={WHATSAPP_URL}
            external
            track="cta_contact_whatsapp"
            label="WhatsApp"
            value={PHONE_DISPLAY}
            icon="whatsapp"
            accent
          />
          <ContactCard
            href={PHONE_TEL}
            track="cta_contact_call"
            label="Ligar agora"
            value={PHONE_DISPLAY}
            icon="phone"
          />
          <ContactCard
            href={COMPANY.maps}
            external
            track="cta_contact_maps"
            label="Localização"
            value="Google Maps"
            icon="pin"
          />
          <ContactCard
            href={COMPANY.instagram}
            external
            track="cta_contact_instagram"
            label="Instagram"
            value="@dainec.lda"
            icon="instagram"
          />
          <ContactCard
            href={COMPANY.facebook}
            external
            track="cta_contact_facebook"
            label="Facebook"
            value="Dainec.lda"
            icon="facebook"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  external,
  label,
  value,
  icon,
  accent,
  track,
}: {
  href: string;
  external?: boolean;
  label: string;
  value: string;
  icon: string;
  accent?: boolean;
  track: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      data-track={track}
      data-reveal="up"
      className={`group relative flex flex-col gap-4 overflow-hidden rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1 ${
        accent
          ? "border-brand/60 bg-brand/10 hover:border-brand hover:shadow-glow"
          : "border-line bg-surface hover:border-brand/60"
      }`}
    >
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-md ${
          accent
            ? "bg-brand text-bg"
            : "border border-brand/40 bg-brand/10 text-brand"
        }`}
      >
        <ContactIcon name={icon} />
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-400">
          {label}
        </div>
        <div className="mt-1 font-display text-lg font-bold text-ink">
          {value}
        </div>
      </div>
      <div className="mt-auto flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink/60 transition-colors group-hover:text-brand">
        Abrir
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}

function ContactIcon({ name }: { name: string }) {
  const cls = "h-6 w-6";
  switch (name) {
    case "whatsapp":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a12 12 0 0 0 5.7 1.4h.1c6.5 0 11.9-5.3 11.9-11.9 0-3.2-1.3-6.2-3.5-8.4M17.4 16.4c-.3.7-1.5 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.4-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1 0-1.5.7-2.2 1-2.4.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c0 .1.1.3 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.2 1.7 2 1.1 1 2.1 1.4 2.4 1.5.3.2.4.1.6-.1l.9-1.2c.2-.3.4-.2.7-.1l2 1c.2.1.4.2.5.3 0 .1 0 .7-.2 1.4" />
        </svg>
      );
    case "phone":
      return (
        <svg
          className={cls}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.9 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.4z" />
        </svg>
      );
    case "pin":
      return (
        <svg
          className={cls}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className={cls}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2-2h2V2.1A28 28 0 0 0 14 2c-3 0-5 1.8-5 5v3H6v4h3v8h4z" />
        </svg>
      );
    default:
      return null;
  }
}
