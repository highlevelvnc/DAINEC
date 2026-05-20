import { WHATSAPP_URL } from "@/lib/constants";

const STEPS = [
  {
    n: "01",
    title: "Contacto e briefing",
    desc:
      "Fala connosco pelo WhatsApp ou telefone. Ouvimos o que precisa, recolhemos detalhes e marcamos a visita técnica quando faz sentido.",
  },
  {
    n: "02",
    title: "Visita e orçamento",
    desc:
      "Vamos ao local, medimos, fotografamos e percebemos o estado da obra. Em seguida enviamos um orçamento claro, item a item.",
  },
  {
    n: "03",
    title: "Execução em obra",
    desc:
      "Combinamos um calendário realista. Trabalhamos com material certificado, mantemos o espaço limpo e a comunicação aberta.",
  },
  {
    n: "04",
    title: "Entrega e garantia",
    desc:
      "Validamos consigo o resultado, ensaiamos tudo e entregamos com garantia de serviço. Continuamos disponíveis para qualquer ajuste.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-[140px]" />

      <div className="mx-auto max-w-screen px-5 md:px-12">
        <div className="mb-14 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div
              data-reveal="up"
              className="mb-4 inline-flex items-baseline gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400"
            >
              <span className="font-mono text-[10px] text-brand/60">02 /</span>
              <span className="h-px w-8 self-center bg-brand" />
              <span>Como trabalhamos</span>
            </div>
            <h2
              data-reveal="up"
              data-reveal-delay="80"
              className="text-fluid-h2 font-display font-extrabold text-ink"
            >
              Quatro passos
              <br />
              <span className="text-brand">simples e directos.</span>
            </h2>
          </div>
          <p
            data-reveal="up"
            data-reveal-delay="160"
            className="text-fluid-lead max-w-xl text-ink/70 md:col-span-7 md:self-end"
          >
            Sem rodeios. Da primeira mensagem à entrega da obra, sabe sempre em
            que ponto está o serviço — e quanto vai custar.
          </p>
        </div>

        <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {/* vertical rail (mobile) */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[35px] top-6 bottom-6 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent md:hidden"
          />
          {/* horizontal rail (desktop) */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[58px] hidden h-px bg-gradient-to-r from-line via-brand/60 to-line lg:block"
          />

          {STEPS.map((s, i) => (
            <li
              key={s.n}
              data-reveal="up"
              data-reveal-delay={String((i % 4) * 90)}
              className="group relative flex gap-5 md:block"
            >
              <div className="relative z-10 inline-flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl border border-brand/40 bg-bg font-display text-xl font-extrabold text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-bg group-hover:shadow-glow md:mb-5 md:h-[72px] md:w-[72px] md:text-2xl">
                {s.n}
                <span
                  aria-hidden
                  className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-brand opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-ink md:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 md:mt-3">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div
          data-reveal="up"
          data-reveal-delay="200"
          className="mt-14 flex flex-wrap items-center gap-4 md:mt-20"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            data-track="cta_process_whatsapp"
            className="cta-pulse inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-bg shadow-glow transition-transform hover:scale-[1.03]"
          >
            Começar o passo 1
          </a>
          <span className="text-xs uppercase tracking-[0.25em] text-ink/45">
            Sem compromisso · resposta no mesmo dia
          </span>
        </div>
      </div>
    </section>
  );
}
