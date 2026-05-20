const BADGES = [
  {
    icon: "shield",
    title: "Trabalho seguro",
    sub: "Normas e certificações",
  },
  {
    icon: "clock",
    title: "Resposta < 24h",
    sub: "Orçamentos rápidos",
  },
  {
    icon: "thumbs",
    title: "Garantia de serviço",
    sub: "Em todas as obras",
  },
  {
    icon: "tools",
    title: "Material certificado",
    sub: "Hager, Schneider, OSRAM",
  },
];

export function TrustStrip() {
  return (
    <section className="relative border-b border-line/60 bg-surface/40 py-8 md:py-10">
      <div className="mx-auto grid max-w-screen grid-cols-2 gap-5 px-5 md:grid-cols-4 md:gap-8 md:px-12">
        {BADGES.map((b) => (
          <div
            key={b.title}
            className="flex items-center gap-3 md:gap-4"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-brand/30 bg-brand/10 text-brand transition-colors md:h-12 md:w-12">
              <BadgeIcon name={b.icon} />
            </span>
            <div className="min-w-0">
              <div className="font-display text-sm font-bold leading-tight text-ink md:text-base">
                {b.title}
              </div>
              <div className="mt-0.5 truncate text-[10px] uppercase tracking-wider text-ink/50 md:text-xs">
                {b.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BadgeIcon({ name }: { name: string }) {
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
    case "clock":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "thumbs":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M7 22h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-3.4l.4-3a2 2 0 0 0-1.6-2.3L11 4l-3 6v12h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h0" />
        </svg>
      );
    case "tools":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6z" />
        </svg>
      );
    default:
      return null;
  }
}
