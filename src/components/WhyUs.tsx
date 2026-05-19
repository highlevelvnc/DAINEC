import Image from "next/image";

const ITEMS = [
  {
    icon: "shield",
    title: "Serviço seguro e bem executado",
    desc: "Cumprimos rigorosamente as normas técnicas e de segurança em cada intervenção.",
  },
  {
    icon: "user",
    title: "Atendimento profissional",
    desc: "Tratamos cada cliente com respeito, transparência e linguagem clara.",
  },
  {
    icon: "building",
    title: "Habitação, comércio e obras",
    desc: "Soluções para particulares, empresas, condomínios e construtores.",
  },
  {
    icon: "tag",
    title: "Orçamentos claros",
    desc: "Sem surpresas — valores discriminados antes de iniciar o trabalho.",
  },
  {
    icon: "clock",
    title: "Compromisso com prazos",
    desc: "Planeamento realista e entrega no prazo acordado.",
  },
  {
    icon: "sparkle",
    title: "Acabamento de qualidade",
    desc: "Atenção ao detalhe que se vê e dura — em obra e em casa.",
  },
];

export function WhyUs() {
  return (
    <section className="relative border-y border-line/60 py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="mx-auto grid max-w-screen grid-cols-1 gap-16 px-5 md:px-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div
            data-reveal="up"
            className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400"
          >
            <span className="h-px w-8 bg-brand" /> Diferenciais
          </div>
          <h2
            data-reveal="up"
            data-reveal-delay="80"
            className="text-fluid-h2 font-display font-extrabold text-ink"
          >
            Porquê escolher a <span className="text-brand">DAINEC</span>?
          </h2>
          <p
            data-reveal="up"
            data-reveal-delay="160"
            className="mt-6 max-w-md text-base leading-relaxed text-ink/70"
          >
            Trabalhamos para que o cliente fique tranquilo do início ao fim —
            obra organizada, segurança em primeiro lugar e resultado à altura.
          </p>

          <div
            data-reveal="zoom"
            data-reveal-delay="240"
            className="relative mt-10 hidden aspect-square overflow-hidden rounded-lg border border-line lg:block"
          >
            <span className="pointer-events-none absolute -left-2 -top-2 z-10 h-10 w-10 border-l-2 border-t-2 border-brand" />
            <span className="pointer-events-none absolute -bottom-2 -right-2 z-10 h-10 w-10 border-b-2 border-r-2 border-brand" />
            <Image
              src="/portfolio/img-6120.jpg"
              alt="Quadro elétrico montado pela DAINEC"
              fill
              sizes="(min-width:1024px) 40vw, 0px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              data-reveal="up"
              data-reveal-delay={String((i % 2) * 100 + 60)}
              className="group relative flex gap-5 rounded-lg border border-line bg-surface p-6 transition-all duration-300 hover:border-brand/60 hover:bg-surface2"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brand/40 bg-brand/10 text-brand">
                <WhyIcon name={it.icon} />
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-ink">
                  {it.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyIcon({ name }: { name: string }) {
  const cls = "h-5 w-5";
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;
  switch (name) {
    case "shield":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "user":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      );
    case "building":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 7h2M9 11h2M9 15h2M13 7h2M13 11h2M13 15h2" />
        </svg>
      );
    case "tag":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="9" cy="9" r="1.5" />
        </svg>
      );
    case "clock":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "sparkle":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3" />
        </svg>
      );
    default:
      return null;
  }
}
