import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL, PHONE_DISPLAY, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Proposta especial · DAINEC",
  description:
    "Condições especiais para a DAINEC — site institucional + Instagram + tráfego pago.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/contraproposta" },
};

const INCLUDED = [
  "Site institucional premium (já entregue) com logo, cores e fotos da DAINEC",
  "Optimização mobile-first 320 px → 4K + SEO técnico completo",
  "Setup de domínio + alojamento Vercel + manutenção mensal incluída",
  "Gestão da página de Instagram (publicações, stories, biografia, CTA)",
  "Gestão de campanhas Meta Ads (Facebook + Instagram)",
  "Gestão de campanhas Google Ads (Search + Maps)",
  "Criativos mensais para anúncios (imagens + textos)",
  "Relatório mensal com leads, custo por contacto e ajustes",
  "Optimização contínua de público, palavras-chave e horários",
  "Suporte directo via WhatsApp sempre que precisar",
];

const NOT_INCLUDED = [
  "Investimento publicitário no Meta e Google (ad spend pago directamente pela DAINEC, a partir de 200€/mês recomendado)",
];

export default function ContraPropostaPage() {
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
              href="/precos"
              className="hidden items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-ink/70 transition-colors hover:text-brand md:inline-flex"
            >
              ← Ver preços padrão
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand bg-brand/15 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-brand" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
              Proposta exclusiva · DAINEC
            </span>
          </div>
          <h1 className="text-fluid-h1 font-display font-extrabold tracking-tight">
            Condições <span className="text-brand">especiais</span> para
            arrancarmos agora.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-fluid-lead text-ink/70">
            Ouvimos o vosso pedido e ajustámos os valores. Aqui está a oferta
            personalizada para a DAINEC — sem letras pequenas, sem
            fidelização, isenta de IVA.
          </p>
        </div>
      </section>

      {/* Comparison + offer */}
      <section className="relative px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Original (struck through) */}
          <article className="rounded-2xl border border-line bg-surface/60 p-6 md:p-8 lg:col-span-5">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/45">
              Proposta inicial
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-ink/55">
              Pacote Crescimento (padrão)
            </h3>

            <div className="mt-6 space-y-2 text-ink/50">
              <div className="flex items-baseline justify-between">
                <span className="text-sm">Site institucional</span>
                <span className="font-display text-lg font-bold line-through decoration-brand/70 decoration-2">
                  350€
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-sm">Gestão mensal</span>
                <span className="font-display text-lg font-bold line-through decoration-brand/70 decoration-2">
                  100€/mês
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-line pt-4 text-xs text-ink/45">
              Inclui site, manutenção, Meta Ads e Google Ads. Sem gestão
              dedicada de Instagram.
            </div>
          </article>

          {/* Special offer */}
          <article className="relative overflow-hidden rounded-2xl border-2 border-brand bg-gradient-to-br from-surface to-surface2 p-6 shadow-glow-lg md:p-10 lg:col-span-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand/15 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1">
                <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-bg" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-bg">
                  Proposta especial · só para a DAINEC
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold md:text-3xl">
                Tudo o que precisa <span className="text-brand">+ Instagram</span>
                <br className="hidden md:block" /> com condições nossas.
              </h3>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <PriceBox
                  label="Site institucional"
                  was="350€"
                  now="250€"
                  sub="One-time · 50% + 50%"
                />
                <PriceBox
                  label="Instagram + tráfego pago"
                  was="100€/mês"
                  now="80€/mês"
                  sub="Sem fidelização"
                  highlight
                />
              </div>

              <div className="mt-8 rounded-xl border border-brand/30 bg-bg/40 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400">
                      Poupança no primeiro ano
                    </div>
                    <div className="mt-1 font-display text-3xl font-extrabold text-brand md:text-4xl">
                      340€
                    </div>
                  </div>
                  <ul className="space-y-1 text-xs text-ink/70">
                    <li>· 100€ no investimento inicial</li>
                    <li>· 20€/mês × 12 meses = 240€</li>
                    <li>· Sem IVA (artigo 53.º do CIVA)</li>
                  </ul>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                data-track="cta_contraproposta_accept"
                className="cta-pulse mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md bg-brand px-6 py-4 text-sm font-bold uppercase tracking-wider text-bg shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98] md:text-base"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-bg" aria-hidden>
                  <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a12 12 0 0 0 5.7 1.4h.1c6.5 0 11.9-5.3 11.9-11.9 0-3.2-1.3-6.2-3.5-8.4M12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A9.9 9.9 0 0 1 2.1 11.9C2.1 6.4 6.5 2 12 2a9.9 9.9 0 0 1 9.9 9.9c0 5.5-4.4 9.9-9.9 9.9" />
                </svg>
                Aceitar e arrancar
              </a>
              <div className="mt-3 text-center text-[10px] uppercase tracking-[0.25em] text-ink/45">
                Resposta no mesmo dia · validade 7 dias
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-line/60 bg-surface/30 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-4 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <div className="mb-3 inline-flex items-baseline gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
                <span className="font-mono text-[10px] text-brand/60">
                  01 /
                </span>
                <span className="h-px w-8 self-center bg-brand" />
                <span>O que está incluído</span>
              </div>
              <h2 className="text-fluid-h2 font-display font-extrabold tracking-tight">
                Tudo o que a DAINEC{" "}
                <span className="text-brand">recebe nesta oferta</span>.
              </h2>
            </div>
            <p className="text-fluid-lead text-ink/70 md:col-span-7 md:self-end">
              Lista completa, item a item. Sem surpresas no final do mês — o
              que está aqui é o que entregamos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand/50 md:p-5"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-ink/85">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 md:p-6">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-300">
              O que não está incluído
            </div>
            <ul className="space-y-1.5 text-sm text-ink/70">
              {NOT_INCLUDED.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1 w-1 rounded-full bg-amber-300" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <div className="mb-3 inline-flex items-baseline gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
              <span className="font-mono text-[10px] text-brand/60">02 /</span>
              <span className="h-px w-8 self-center bg-brand" />
              <span>Condições</span>
            </div>
            <h2 className="text-fluid-h2 font-display font-extrabold tracking-tight">
              Regras do jogo, <span className="text-brand">tudo claro</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <ConditionCard
              title="Pagamento"
              body="Site: 50% no arranque, 50% na entrega. Mensalidade por transferência ou MB Way no início de cada mês. Recibo verde com NIF."
              icon="card"
            />
            <ConditionCard
              title="Isenção de IVA"
              body="Valores apresentados sem IVA, ao abrigo do artigo 53.º do CIVA. O valor que vê é o que paga — sem acréscimos."
              icon="tag"
            />
            <ConditionCard
              title="Sem fidelização"
              body="Cancela quando quiser. Aviso até dia 25 de qualquer mês e o pagamento seguinte deixa de ser cobrado. O site é seu para sempre."
              icon="unlock"
            />
            <ConditionCard
              title="Validade"
              body="Estas condições especiais são válidas por 7 dias a partir da data desta proposta. Depois passam a aplicar-se os valores padrão (350€ + 100€/mês)."
              icon="clock"
            />
            <ConditionCard
              title="Suporte"
              body="Resposta no mesmo dia útil via WhatsApp. Para qualquer ajuste no site ou nas campanhas, basta enviar mensagem."
              icon="chat"
            />
            <ConditionCard
              title="Propriedade"
              body="O site, código, domínio e tudo o que produzimos é da DAINEC. Transferimos a qualquer momento que pedirem."
              icon="key"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border-2 border-brand bg-gradient-to-br from-brand via-brand-600 to-brand-700 p-8 md:p-14">
            <span className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-bg/20 bg-bg/15 px-3 py-1 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-bg" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-bg">
                    Decisão simples
                  </span>
                </div>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-bg sm:text-4xl">
                  250€ + 80€/mês.
                  <br />
                  Vamos a isto?
                </h2>
                <p className="mt-4 max-w-lg text-base text-bg/85">
                  Mande “Aceito a proposta especial” no WhatsApp e arrancamos
                  hoje mesmo com a fase de entrega.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
                <a
                  href={`https://wa.me/351925579499?text=${encodeURIComponent(
                    "Olá! Aceito a proposta especial (250€ + 80€/mês). Vamos avançar."
                  )}`}
                  target="_blank"
                  rel="noopener"
                  data-track="cta_contraproposta_whatsapp"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-bg px-8 py-4 text-base font-bold uppercase tracking-wider text-ink shadow-xl transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-[#25D366]"
                    aria-hidden
                  >
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a12 12 0 0 0 5.7 1.4h.1c6.5 0 11.9-5.3 11.9-11.9 0-3.2-1.3-6.2-3.5-8.4" />
                  </svg>
                  Aceito a proposta especial
                </a>
                <Link
                  href="/precos"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-bg/85 underline-offset-4 hover:underline"
                >
                  Comparar com os pacotes padrão
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

// ---------- bits ----------

function PriceBox({
  label,
  was,
  now,
  sub,
  highlight = false,
}: {
  label: string;
  was: string;
  now: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border bg-bg/40 p-5 ${
        highlight ? "border-brand/50" : "border-line"
      }`}
    >
      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/55">
        {label}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-3xl font-extrabold text-brand md:text-4xl">
          {now}
        </span>
        <span className="text-sm text-ink/45 line-through">{was}</span>
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-ink/55">
        {sub}
      </div>
    </div>
  );
}

function ConditionCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-brand/50 md:p-6">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand/40 bg-brand/10 text-brand">
        <CondIcon name={icon} />
      </div>
      <h3 className="font-display text-base font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
    </div>
  );
}

function CondIcon({ name }: { name: string }) {
  const cls = "h-5 w-5";
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;
  switch (name) {
    case "card":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <rect x="2" y="6" width="20" height="13" rx="2" />
          <path d="M2 11h20M6 16h4" />
        </svg>
      );
    case "tag":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <circle cx="9" cy="9" r="1.5" />
        </svg>
      );
    case "unlock":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 7-2.6" />
        </svg>
      );
    case "clock":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "chat":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M21 11.5a8.4 8.4 0 0 1-3.9 7.1L17 22l-3-2.6a8.5 8.5 0 1 1 7-7.9z" />
        </svg>
      );
    case "key":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <circle cx="8" cy="15" r="4" />
          <path d="M10.8 12.2 21 2m-4 4 3 3m-6 0 3 3" />
        </svg>
      );
    default:
      return null;
  }
}
