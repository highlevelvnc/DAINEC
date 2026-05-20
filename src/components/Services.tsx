import { WHATSAPP_URL } from "@/lib/constants";

const SERVICES = [
  {
    title: "Instalações Elétricas",
    desc: "Instalações novas em habitações, comércio e obras. Cablagem, tomadas, circuitos dedicados e ensaios de segurança.",
    icon: "bolt",
  },
  {
    title: "Reparações Elétricas",
    desc: "Diagnóstico e resolução rápida de avarias. Curto-circuitos, disjuntores, falhas de luz e problemas intermitentes.",
    icon: "wrench",
  },
  {
    title: "Quadros Elétricos",
    desc: "Montagem, substituição e atualização de quadros parciais ou completos com proteções diferenciais e disjuntores.",
    icon: "panel",
  },
  {
    title: "Iluminação Interior e Exterior",
    desc: "Projetos de iluminação LED, sancas, focos, fachadas e jardins. Eficiência energética e ambiente certo para cada espaço.",
    icon: "bulb",
  },
  {
    title: "Remodelações",
    desc: "Remodelação completa de casas e espaços comerciais. Eletricidade, paredes, tetos, acabamentos e detalhes finais.",
    icon: "home",
  },
  {
    title: "Construção e Acabamentos",
    desc: "Trabalhos de construção civil, alvenaria, pinturas e acabamentos com rigor técnico e bom gosto.",
    icon: "trowel",
  },
  {
    title: "Manutenção Técnica",
    desc: "Planos de manutenção preventiva e corretiva para condomínios, lojas e instalações industriais.",
    icon: "shield",
  },
  {
    title: "Apoio a Obras e Projetos",
    desc: "Acompanhamento técnico de obras, coordenação com outros ofícios e execução de orçamentos detalhados.",
    icon: "blueprint",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-noise opacity-30" />
      <div className="mx-auto max-w-screen px-5 md:px-12">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <div
              data-reveal="up"
              className="mb-4 inline-flex items-baseline gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400"
            >
              <span className="font-mono text-[10px] text-brand/60">
                01 /
              </span>
              <span className="h-px w-8 self-center bg-brand" />
              <span>O que fazemos</span>
            </div>
            <h2
              data-reveal="up"
              data-reveal-delay="80"
              className="text-fluid-h2 font-display font-extrabold text-ink"
            >
              Serviços <span className="text-brand">técnicos completos</span>
              <br />
              em eletricidade e construção.
            </h2>
          </div>
          <p
            data-reveal="up"
            data-reveal-delay="160"
            className="max-w-md text-base text-ink/70"
          >
            Da pequena reparação à obra completa — entregamos tudo com
            segurança, prazos cumpridos e acabamento à medida.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              data-reveal="up"
              data-reveal-delay={String((i % 4) * 80)}
              className="card-spot tilt gradient-border group relative overflow-hidden rounded-lg border border-line bg-surface p-6 transition-all duration-300 hover:border-transparent hover:shadow-glow sm:p-7"
            >
              {/* corner node */}
              <span className="absolute right-3 top-3 h-1.5 w-1.5 bg-brand opacity-50 transition-opacity group-hover:opacity-100" />

              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md border border-brand/40 bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-bg sm:mb-6">
                <ServiceIcon name={s.icon} />
              </div>

              <h3 className="font-display text-lg font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {s.desc}
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                data-track={`cta_service_${s.icon}`}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-400 transition-colors hover:text-brand"
              >
                Pedir orçamento
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
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const cls = "h-6 w-6";
  switch (name) {
    case "bolt":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13 2L4 14h6l-1 8 10-13h-7l1-7z" />
        </svg>
      );
    case "wrench":
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
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6z" />
        </svg>
      );
    case "panel":
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
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 4v16M16 4v16" />
        </svg>
      );
    case "bulb":
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
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
        </svg>
      );
    case "home":
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
          <path d="M3 11l9-8 9 8M5 10v10h14V10" />
        </svg>
      );
    case "trowel":
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
          <path d="M3 21l6-6m6-12l6 6-9 3-3-3 6-6z" />
        </svg>
      );
    case "shield":
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
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "blueprint":
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
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 3v18" />
        </svg>
      );
    default:
      return null;
  }
}
