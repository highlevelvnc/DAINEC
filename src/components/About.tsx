import Image from "next/image";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-12">
        <div
          data-reveal="zoom"
          className="mb-8 flex items-center justify-center"
        >
          <div className="relative">
            <span className="absolute inset-0 -m-10 rounded-full bg-brand/15 blur-3xl" />
            <Image
              src="/logo-light.png"
              alt="Logótipo DAINEC"
              width={420}
              height={160}
              className="relative h-auto w-[280px] drop-shadow-[0_0_24px_rgba(255,149,0,0.45)] md:w-[420px]"
            />
          </div>
        </div>
        <div
          data-reveal="up"
          className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400"
        >
          <span className="h-px w-8 bg-brand" /> Sobre a empresa
          <span className="h-px w-8 bg-brand" />
        </div>
        <h2
          data-reveal="up"
          data-reveal-delay="80"
          className="text-fluid-h2 font-display font-extrabold text-ink"
        >
          Empresa especializada em{" "}
          <span className="text-brand">eletricidade e construção</span>.
        </h2>
        <p
          data-reveal="up"
          data-reveal-delay="160"
          className="mt-8 text-lg leading-relaxed text-ink/75"
        >
          A {COMPANY.name} é uma empresa especializada em eletricidade e
          construção, preparada para apoiar clientes particulares e empresas em
          serviços técnicos, instalações, remodelações e soluções completas
          para obras. O foco está na segurança, na qualidade do serviço e na
          satisfação de cada cliente.
        </p>
        <p
          data-reveal="up"
          data-reveal-delay="220"
          className="mt-4 text-base leading-relaxed text-ink/55"
        >
          {COMPANY.fullName}
        </p>

        <div
          data-reveal="up"
          data-reveal-delay="300"
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            data-track="cta_about_whatsapp"
            className="cta-pulse inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-bg shadow-glow transition-transform hover:scale-[1.03]"
          >
            Pedir orçamento
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink/80 transition-colors hover:border-brand hover:text-brand"
          >
            Ver projetos
          </a>
        </div>
      </div>
    </section>
  );
}
