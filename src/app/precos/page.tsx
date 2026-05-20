import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL, PHONE_DISPLAY, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Preços · Proposta DAINEC",
  description:
    "Pacotes e investimento para o site da DAINEC: site institucional, tráfego pago Meta + Google e extras à medida.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/precos" },
};

type Plan = {
  name: string;
  tagline: string;
  oneTime: string;
  monthly?: string;
  highlight?: boolean;
  cta: string;
  features: { label: string; included: boolean }[];
};

const PLANS: Plan[] = [
  {
    name: "Essencial",
    tagline: "Para arrancar com presença digital profissional.",
    oneTime: "350€",
    cta: "Quero o Essencial",
    features: [
      { label: "Site institucional premium (este)", included: true },
      { label: "Identidade visual aplicada (logo, cores, fonts)", included: true },
      { label: "Optimização mobile-first + responsivo 320 px → 4K", included: true },
      { label: "SEO técnico (meta, OG, JSON-LD, sitemap, robots)", included: true },
      { label: "Botões e atalhos WhatsApp em todas as secções", included: true },
      { label: "Tracking pronto (Meta Pixel, GA4, GTM)", included: true },
      { label: "Setup de domínio + alojamento Vercel", included: true },
      { label: "30 dias de suporte pós-entrega", included: true },
      { label: "Gestão de tráfego pago", included: false },
      { label: "Manutenção mensal", included: false },
    ],
  },
  {
    name: "Crescimento",
    tagline: "Site + máquina de captação de orçamentos a funcionar.",
    oneTime: "350€",
    monthly: "100€/mês",
    highlight: true,
    cta: "Quero crescer",
    features: [
      { label: "Tudo o que tem o Essencial", included: true },
      { label: "Manutenção mensal do site (updates, backup, monitor)", included: true },
      { label: "Gestão de campanhas Meta Ads (Facebook + Instagram)", included: true },
      { label: "Gestão de campanhas Google Ads (Search + Maps)", included: true },
      { label: "Criativos mensais para anúncios", included: true },
      { label: "Relatório mensal de performance + leads", included: true },
      { label: "Optimização contínua de público e palavras-chave", included: true },
      { label: "SEO local + Google Business Profile", included: false },
      { label: "Galeria dinâmica de obras", included: false },
      { label: "Wizard de orçamento online", included: false },
    ],
  },
  {
    name: "Premium",
    tagline: "Operação completa — atrai, converte e escala.",
    oneTime: "650€",
    monthly: "100€/mês",
    cta: "Falar sobre Premium",
    features: [
      { label: "Tudo o que tem o Crescimento", included: true },
      { label: "SEO local + Google Business Profile optimizado", included: true },
      { label: "Galeria dinâmica de obras (auto-gestão de fotos)", included: true },
      { label: "Wizard de orçamento online com upload de fotos", included: true },
      { label: "Integração WhatsApp Business API", included: true },
      { label: "Página de obra dedicada por projecto", included: true },
      { label: "Suporte prioritário (resposta < 4h em dias úteis)", included: true },
      { label: "2 horas/mês de pequenas alterações incluídas", included: true },
      { label: "Acompanhamento estratégico trimestral", included: true },
      { label: "30 dias de garantia total", included: true },
    ],
  },
];

const ADDONS = [
  { title: "Página de obra adicional", desc: "Página dedicada para mostrar um projecto específico com galeria.", price: "60€" },
  { title: "Sessão fotográfica de obras", desc: "Recolha profissional de fotos em obra (não inclui pós-produção pesada).", price: "150€" },
  { title: "Criativos avulso para Meta Ads", desc: "Pack de 5 criativos (estáticos + carrosséis).", price: "90€" },
  { title: "Vídeo curto para anúncios (15–30s)", desc: "Edição com material fornecido + legendas + CTA.", price: "120€" },
  { title: "Tradução EN para mercado internacional", desc: "Conteúdo do site traduzido para inglês.", price: "80€" },
  { title: "Integração com CRM (HubSpot, Pipedrive…)", desc: "Sincronização automática de leads do WhatsApp/forms.", price: "150€" },
];

const FAQ = [
  {
    q: "O site é meu? Pertence-me?",
    a: "Sim. Todo o código, fotografias e domínio ficam em nome da DAINEC. Posso transferir o repositório GitHub e o alojamento Vercel para a tua conta a qualquer momento.",
  },
  {
    q: "O ad spend (investimento em anúncios) está incluído?",
    a: "Não. A gestão (100€/mês) é o trabalho de configurar, optimizar e reportar campanhas. O investimento que vai directamente para o Meta e Google paga-o tu, à parte. Sugerimos começar com 200–500€/mês de budget e ajustar conforme os resultados.",
  },
  {
    q: "Quanto tempo até ver resultados das campanhas?",
    a: "Tipicamente 7–14 dias para os primeiros leads via Meta Ads, e 2–4 semanas para o Google Ads estabilizar. SEO orgânico é mais lento (2–6 meses) mas dura muito mais tempo.",
  },
  {
    q: "Posso começar com o Essencial e subir mais tarde?",
    a: "Claro. O Essencial é o ponto de partida. Quando quiseres activar tráfego pago, basta passar para o Crescimento — não há custo de \"reactivação\".",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Para o valor one-time, 50% no arranque e 50% na entrega. Mensalidades por transferência ou MB Way no início de cada mês. Emito recibo verde com NIF da empresa, isento de IVA ao abrigo do artigo 53.º do CIVA — o valor que vê é exactamente o que paga.",
  },
  {
    q: "E se eu quiser cancelar a mensalidade?",
    a: "Sem fidelização. Cancelas até ao dia 25 de qualquer mês e o pagamento seguinte deixa de ser cobrado. O site continua a funcionar — só deixas de ter a gestão de campanhas e manutenção.",
  },
];

export default function PrecosPage() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform active:scale-95"
            aria-label="DAINEC"
          >
            <Image
              src="/logo-light.png"
              alt="DAINEC"
              width={150}
              height={56}
              priority
              style={{ height: 40, width: "auto" }}
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/proposta"
              className="hidden items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-ink/70 transition-colors hover:text-brand md:inline-flex"
            >
              ← Voltar à proposta
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-ink/70 transition-colors hover:text-brand"
            >
              Ver site
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60 px-5 py-14 md:px-8 md:py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand/10 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-brand" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400">
              Investimento · valores em euros
            </span>
          </div>
          <h1 className="text-fluid-h1 font-display font-extrabold tracking-tight">
            Escolhe o pacote certo para a{" "}
            <span className="text-brand">DAINEC</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-fluid-lead text-ink/70">
            Três caminhos, sem fidelização, sem letras pequenas. Começamos
            simples e crescemos à medida que os resultados chegam.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="relative px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-ink/55 md:text-sm">
          Valores em euros. Isento de IVA ao abrigo do artigo 53.º do CIVA.
          Pagamento one-time em 2x (50% arranque + 50% entrega). Mensalidades
          sem fidelização.
          <br />
          Investimento em anúncios (ad spend) é à parte e pago directamente ao
          Meta e ao Google.
        </p>
      </section>

      {/* Add-ons */}
      <section className="border-y border-line/60 bg-surface/30 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-4 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
                <span className="h-px w-8 bg-brand" /> Extras à medida
              </div>
              <h2 className="text-fluid-h2 font-display font-extrabold tracking-tight">
                Adicionar <span className="text-brand">quando precisar</span>.
              </h2>
            </div>
            <p className="text-fluid-lead text-ink/70 md:col-span-7 md:self-end">
              Serviços avulso que pode juntar a qualquer pacote ou pedir de
              forma independente.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ADDONS.map((a) => (
              <div
                key={a.title}
                className="group flex flex-col rounded-xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:border-brand/60 hover:shadow-glow"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-bold">
                    {a.title}
                  </h3>
                  <span className="rounded-md bg-brand px-2.5 py-1 font-display text-sm font-extrabold text-bg">
                    {a.price}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink/65">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
              <span className="h-px w-8 bg-brand" /> Perguntas frequentes
              <span className="h-px w-8 bg-brand" />
            </div>
            <h2 className="text-fluid-h2 font-display font-extrabold tracking-tight">
              Tudo o que faz sentido{" "}
              <span className="text-brand">perguntar antes</span>.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <details
                key={item.q}
                className="group rounded-xl border border-line bg-surface px-5 py-4 transition-colors open:border-brand/60 open:bg-surface2 md:px-7 md:py-5"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-brand/40 bg-brand/10 font-mono text-[10px] font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base font-semibold md:text-lg">
                      {item.q}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-ink/70 transition-all duration-300 group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-bg"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 pl-9 text-sm leading-relaxed text-ink/70 md:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-br from-brand via-brand-600 to-brand-700 p-8 md:p-14">
            <span className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-bg/20 bg-bg/10 px-3 py-1 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-bg" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-bg">
                    Pronto para avançar?
                  </span>
                </div>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-bg sm:text-4xl">
                  Decide pelo que faz sentido. Avançamos no mesmo dia.
                </h2>
                <p className="mt-4 max-w-lg text-base text-bg/85">
                  Manda mensagem com o nome do pacote escolhido e arrancamos
                  com a fase de entrega.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-bg px-8 py-4 text-base font-bold uppercase tracking-wider text-ink shadow-xl transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#25D366]" aria-hidden>
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a12 12 0 0 0 5.7 1.4h.1c6.5 0 11.9-5.3 11.9-11.9 0-3.2-1.3-6.2-3.5-8.4M12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A9.9 9.9 0 0 1 2.1 11.9C2.1 6.4 6.5 2 12 2a9.9 9.9 0 0 1 9.9 9.9c0 5.5-4.4 9.9-9.9 9.9" />
                  </svg>
                  Confirmar pelo WhatsApp
                </a>
                <Link
                  href="/proposta"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-bg/85 underline-offset-4 hover:underline"
                >
                  ← Voltar à proposta
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-ink/45">
            Proposta preparada por highlevelvnc · WhatsApp{" "}
            <a className="hover:text-brand" href={WHATSAPP_URL}>
              {PHONE_DISPLAY}
            </a>{" "}
            · {COMPANY.name} {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </div>
  );
}

// ---------- components ----------

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl border bg-surface p-6 transition-all md:p-8 ${
        plan.highlight
          ? "border-brand shadow-glow-lg md:-mt-4 md:mb-4"
          : "border-line hover:border-brand/60"
      }`}
    >
      {plan.highlight && (
        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1">
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-bg" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-bg">
            Mais escolhido
          </span>
        </div>
      )}

      <h3 className="font-display text-2xl font-extrabold">{plan.name}</h3>
      <p className="mt-2 text-sm text-ink/65">{plan.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-4xl font-extrabold text-brand md:text-5xl">
          {plan.oneTime}
        </span>
        <span className="text-xs uppercase tracking-wider text-ink/55">
          one-time
        </span>
      </div>
      {plan.monthly && (
        <div className="mt-1 flex items-baseline gap-2 text-sm">
          <span className="text-ink/60">+</span>
          <span className="font-display text-xl font-bold text-ink">
            {plan.monthly}
          </span>
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        data-track={`cta_plan_${plan.name.toLowerCase()}`}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm font-bold uppercase tracking-wider transition-all active:scale-[0.98] ${
          plan.highlight
            ? "bg-brand text-bg shadow-glow hover:scale-[1.02]"
            : "border border-brand/60 text-brand hover:bg-brand/10"
        }`}
      >
        {plan.cta}
      </a>

      <ul className="mt-7 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li
            key={f.label}
            className={`flex items-start gap-3 ${
              f.included ? "text-ink/85" : "text-ink/35 line-through"
            }`}
          >
            {f.included ? (
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 h-4 w-4 shrink-0 text-ink/30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            )}
            <span>{f.label}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
