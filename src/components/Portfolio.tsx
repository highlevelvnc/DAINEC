import Image from "next/image";

const PROJECTS = [
  {
    src: "/portfolio/img-6119.jpg",
    title: "Iluminação LED · Sanca arquitetural",
    tag: "Iluminação",
    span: "md:col-span-7 md:row-span-2",
    h: "h-[280px] md:h-[640px]",
  },
  {
    src: "/portfolio/img-6120.jpg",
    title: "Quadro elétrico · Proteções e disjuntores",
    tag: "Eletricidade",
    span: "md:col-span-5",
    h: "h-[260px] md:h-[300px]",
  },
  {
    src: "/portfolio/img-6125.jpg",
    title: "Cablagem em conduta · Obra nova",
    tag: "Instalação",
    span: "md:col-span-5",
    h: "h-[240px] md:h-[320px]",
  },
  {
    src: "/portfolio/img-6121.jpg",
    title: "Remodelação interior",
    tag: "Remodelação",
    span: "md:col-span-4",
    h: "h-[240px] md:h-[320px]",
  },
  {
    src: "/portfolio/img-6122.jpg",
    title: "Trabalhos de eletricidade",
    tag: "Eletricidade",
    span: "md:col-span-4",
    h: "h-[240px] md:h-[320px]",
  },
  {
    src: "/portfolio/img-6123.jpg",
    title: "Detalhe técnico em obra",
    tag: "Obra",
    span: "md:col-span-4",
    h: "h-[240px] md:h-[320px]",
  },
  {
    src: "/portfolio/img-6126.jpg",
    title: "Trabalho concluído",
    tag: "Acabamento",
    span: "md:col-span-6",
    h: "h-[260px] md:h-[340px]",
  },
  {
    src: "/portfolio/img-6127.jpg",
    title: "Projeto residencial",
    tag: "Residencial",
    span: "md:col-span-6",
    h: "h-[260px] md:h-[340px]",
  },
];

export function Portfolio() {
  return (
    <section id="projetos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-screen px-5 md:px-12">
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div
              data-reveal="up"
              className="mb-4 inline-flex items-baseline gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400"
            >
              <span className="font-mono text-[10px] text-brand/60">04 /</span>
              <span className="h-px w-8 self-center bg-brand" />
              <span>Trabalhos realizados</span>
            </div>
            <h2
              data-reveal="up"
              data-reveal-delay="80"
              className="text-fluid-h2 font-display font-extrabold text-ink"
            >
              Projetos da <span className="text-brand">DAINEC</span>
            </h2>
            <p
              data-reveal="up"
              data-reveal-delay="160"
              className="mt-4 max-w-xl text-base text-ink/70"
            >
              Conheça alguns trabalhos realizados pela DAINEC e veja a qualidade
              aplicada em cada detalhe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {PROJECTS.map((p, i) => (
            <a
              key={p.src}
              href="#contacto"
              data-reveal="zoom"
              data-reveal-delay={String((i % 3) * 80)}
              className={`group relative overflow-hidden rounded-lg border border-line ${p.span} ${p.h}`}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent transition-all duration-300 group-hover:ring-brand/40" />
              <div className="absolute left-5 top-5">
                <span className="inline-flex items-center rounded-sm bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-bg">
                  {p.tag}
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <h4 className="font-display text-base font-bold text-ink md:text-lg">
                  {p.title}
                </h4>
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400 opacity-0 transition-opacity group-hover:opacity-100">
                  Ver detalhes
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
