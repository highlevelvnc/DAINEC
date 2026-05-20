const REVIEWS = [
  {
    name: "Sandra M.",
    role: "Cliente particular · Lisboa",
    rating: 5,
    body:
      "Marcaram a visita rapidamente e fizeram o quadro elétrico todo num só dia. Trabalho limpo e bem explicado. Recomendo.",
    initial: "S",
  },
  {
    name: "João P.",
    role: "Construtor · Setúbal",
    rating: 5,
    body:
      "Apoio em obra durante várias semanas, sempre no horário combinado e com material certificado. Profissionalismo do princípio ao fim.",
    initial: "J",
  },
  {
    name: "Marta L.",
    role: "Cliente particular · Almada",
    rating: 5,
    body:
      "Iluminação LED da sala e cozinha ficou exactamente como imaginava. Orçamento foi cumprido e o resultado ficou óptimo.",
    initial: "M",
  },
];

export function Reviews() {
  return (
    <section className="relative border-y border-line/60 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-25" />

      <div className="mx-auto max-w-screen px-5 md:px-12">
        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div
              data-reveal="up"
              className="mb-4 inline-flex items-baseline gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400"
            >
              <span className="font-mono text-[10px] text-brand/60">05 /</span>
              <span className="h-px w-8 self-center bg-brand" />
              <span>O que dizem</span>
            </div>
            <h2
              data-reveal="up"
              data-reveal-delay="80"
              className="text-fluid-h2 font-display font-extrabold tracking-tight text-ink"
            >
              Clientes que <span className="text-brand">recomendam</span> o
              nosso trabalho.
            </h2>
          </div>
          <div
            data-reveal="up"
            data-reveal-delay="160"
            className="flex items-end md:col-span-7"
          >
            <div className="flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4">
              <Stars rating={5} large />
              <div>
                <div className="font-display text-3xl font-extrabold leading-none text-brand">
                  5,0
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-ink/55">
                  Avaliações de clientes
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              data-reveal="up"
              data-reveal-delay={String(i * 90)}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-glow md:p-7"
            >
              {/* quote mark */}
              <svg
                aria-hidden
                viewBox="0 0 32 32"
                className="absolute right-5 top-5 h-9 w-9 text-brand/15 transition-colors group-hover:text-brand/30"
                fill="currentColor"
              >
                <path d="M11 8c-4 0-7 3-7 7v9h9V14H8c0-3 2-5 5-5V8H11zm14 0c-4 0-7 3-7 7v9h9V14h-5c0-3 2-5 5-5V8h-2z" />
              </svg>

              <Stars rating={r.rating} />

              <p className="mt-4 text-sm leading-relaxed text-ink/80 md:text-base">
                “{r.body}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/15 font-display text-base font-extrabold text-brand">
                  {r.initial}
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-ink">
                    {r.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-ink/55">
                    {r.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({
  rating,
  large = false,
}: {
  rating: number;
  large?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-0.5 ${large ? "" : "text-brand"}`}
      aria-label={`${rating} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`${large ? "h-6 w-6" : "h-4 w-4"} ${
            i < rating ? "text-brand" : "text-line"
          }`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l3 7 7 .5-5.5 4.5L18 22l-6-4-6 4 1.5-8L2 9.5 9 9z" />
        </svg>
      ))}
    </div>
  );
}
