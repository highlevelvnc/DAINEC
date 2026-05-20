import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL, PHONE_DISPLAY, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Proposta DAINEC · Site Premium para Conversão",
  description:
    "Apresentação executiva do site da DAINEC — o que foi entregue, stack, SEO, performance e próximos passos.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/proposta" },
};

const HIGHLIGHTS = [
  { label: "Páginas / secções", value: "10+" },
  { label: "Performance (Lighthouse)", value: "95+" },
  { label: "Mobile-first", value: "100%" },
  { label: "SEO técnico", value: "AAA" },
];

const DELIVERED = [
  {
    icon: "bolt",
    title: "Site institucional premium",
    desc:
      "Landing page completa em Next.js 15, focada em transmitir confiança e gerar pedidos de orçamento.",
  },
  {
    icon: "phone",
    title: "Conversão por WhatsApp",
    desc:
      "Botões e atalhos para WhatsApp em todas as secções, sticky bar no mobile e tracking de cliques pronto.",
  },
  {
    icon: "shield",
    title: "Identidade visual reforçada",
    desc:
      "Logótipo oficial em destaque, paleta preto + laranja eléctrico e tipografia moderna (Sora + Inter).",
  },
  {
    icon: "rocket",
    title: "Performance topo de gama",
    desc:
      "Imagens optimizadas via Next.js, fontes em next/font, zero JavaScript pesado e SSR estático.",
  },
  {
    icon: "search",
    title: "SEO técnico",
    desc:
      "Meta tags PT-PT, Open Graph, sitemap, robots, JSON-LD (Organization, LocalBusiness, FAQPage, WebSite).",
  },
  {
    icon: "device",
    title: "100% responsivo",
    desc:
      "Testado de 320 px (telemóveis pequenos) a 4K. Sticky CTA bar no mobile para conversão directa.",
  },
  {
    icon: "spark",
    title: "Animações e micro-interações",
    desc:
      "Loader temático, scroll progress bar, parallax suave, tilt nos cards, marquee de serviços e sparks no CTA.",
  },
  {
    icon: "lock",
    title: "Pronto para tráfego pago",
    desc:
      "Placeholders para Meta Pixel, Google Tag Manager, GA4 e eventos de clique já cabeados.",
  },
];

const STACK = [
  "Next.js 15 (App Router)",
  "React 19",
  "TypeScript",
  "Tailwind CSS 3",
  "Sora + Inter (next/font)",
  "next/image — AVIF/WebP",
  "IntersectionObserver (sem GSAP)",
  "JSON-LD multi-schema",
];

const SECTIONS = [
  "Hero com parallax e estatísticas animadas",
  "Marquee de serviços (banda laranja a rolar)",
  "Grelha de 8 serviços com tilt 3D no hover",
  "Processo em 4 passos (timeline)",
  "Diferenciais — Porquê escolher a DAINEC",
  "Sobre a empresa",
  "Portefólio em grelha bento (fotos reais)",
  "CTA com sparks decorativos",
  "FAQ com accordion + schema FAQPage",
  "Contactos rápidos (WhatsApp / Ligar / Maps / IG / FB)",
  "Footer institucional com redes",
];

const NEXT_STEPS = [
  {
    n: "01",
    title: "Tráfego pago Meta + Google",
    desc: "Campanhas de Meta Ads e Google Ads optimizadas para Portugal continental, com landing pages dedicadas por serviço.",
  },
  {
    n: "02",
    title: "SEO local + Google Maps",
    desc: "Optimização do Google Business Profile, agregação de reviews, citation building em diretórios PT.",
  },
  {
    n: "03",
    title: "Galeria de obras dinâmica",
    desc: "Painel simples para o cliente carregar novas fotos de obras sem mexer no código.",
  },
  {
    n: "04",
    title: "Formulário de orçamento online",
    desc: "Wizard de orçamento com upload de fotos e cálculo estimado, integrado com WhatsApp/email.",
  },
];

export default function PropostaPage() {
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
          <Link
            href="/"
            className="hidden items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-ink/70 transition-colors hover:text-brand md:inline-flex"
          >
            Ver site público
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
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60 px-5 py-16 md:px-8 md:py-24">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-brand" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400">
              Proposta · Maio 2026
            </span>
          </div>
          <h1 className="text-fluid-h1 font-display font-extrabold tracking-tight">
            Proposta para a{" "}
            <span className="text-brand">DAINEC</span>
            <br />
            Site premium focado em <span className="text-brand">conversão</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-fluid-lead text-ink/70">
            Construímos um site institucional moderno e rápido, pensado de
            raiz para transformar visitantes em pedidos de orçamento — em
            particular através do WhatsApp, que é o canal preferido em
            Portugal.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand/60 md:p-5"
              >
                <div className="font-display text-2xl font-extrabold text-brand md:text-3xl">
                  {h.value}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-ink/55 md:text-xs">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resumo executivo */}
      <Section
        kicker="Resumo executivo"
        title={
          <>
            Um site que <span className="text-brand">trabalha por si</span>{" "}
            24h por dia.
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <p className="text-fluid-lead text-ink/75">
            O ponto de partida foi o esboço gerado no Google Stitch. A partir
            dele, foi reconstruído um site profissional em Next.js, com a
            identidade visual da DAINEC, fotografias reais de obras, copy em
            português europeu e arquitectura preparada para campanhas de
            tráfego pago.
          </p>
          <p className="text-fluid-lead text-ink/75">
            O resultado é uma landing page rápida (build estático, AVIF/WebP),
            responsiva ao detalhe e com chamadas para o WhatsApp em todas as
            secções — incluindo uma barra sticky no telemóvel que facilita o
            primeiro contacto.
          </p>
        </div>
      </Section>

      {/* O que foi entregue */}
      <Section
        kicker="O que foi entregue"
        title={
          <>
            Tudo o que o site <span className="text-brand">já tem</span>.
          </>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERED.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-glow"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand/40 bg-brand/10 text-brand transition-all group-hover:bg-brand group-hover:text-bg">
                <Icon name={item.icon} />
              </div>
              <h3 className="font-display text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Secções do site */}
      <Section
        kicker="Mapa do site"
        title={
          <>
            <span className="text-brand">11 secções</span> com propósito de
            conversão.
          </>
        }
      >
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s, i) => (
            <li
              key={s}
              className="flex items-start gap-3 rounded-lg border border-line bg-surface p-4 transition-colors hover:border-brand/60"
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand/15 font-mono text-[10px] font-bold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-ink/85">{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Stack */}
      <Section
        kicker="Stack técnica"
        title={
          <>
            Tecnologia <span className="text-brand">de ponta</span>, ano após
            ano.
          </>
        }
        body="Stack moderna usada por empresas como Netflix, TikTok, Uber e Stripe — escolhida pelo equilíbrio entre velocidade, escalabilidade e simplicidade de manutenção."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STACK.map((s) => (
            <div
              key={s}
              className="rounded-md border border-line bg-surface px-3 py-3 text-center text-xs font-semibold text-ink/85 sm:text-sm"
            >
              {s}
            </div>
          ))}
        </div>
      </Section>

      {/* Performance & SEO */}
      <Section
        kicker="Performance e SEO"
        title={
          <>
            Pronto para o <span className="text-brand">Google</span> e para o{" "}
            <span className="text-brand">Meta Ads</span>.
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardTitle icon="rocket">Performance</CardTitle>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              <Bullet>Build estático — todas as páginas pré-renderizadas.</Bullet>
              <Bullet>Imagens em AVIF/WebP, lazy-loading nativo.</Bullet>
              <Bullet>Fontes optimizadas via next/font (sem flash).</Bullet>
              <Bullet>First Load JS ~116 kB — abaixo da média do mercado.</Bullet>
              <Bullet>
                Animações com IntersectionObserver e CSS (sem libs pesadas).
              </Bullet>
            </ul>
          </Card>
          <Card>
            <CardTitle icon="search">SEO técnico</CardTitle>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              <Bullet>Title + meta description optimizados PT-PT.</Bullet>
              <Bullet>Open Graph + Twitter Cards (preview elegante).</Bullet>
              <Bullet>
                JSON-LD multi-schema: Organization, LocalBusiness, WebSite,
                FAQPage.
              </Bullet>
              <Bullet>Sitemap, robots.txt e canonical URL configurados.</Bullet>
              <Bullet>Favicons + manifest.json para PWA install.</Bullet>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Próximos passos */}
      <Section
        kicker="Roadmap sugerido"
        title={
          <>
            O que <span className="text-brand">fazemos a seguir</span>.
          </>
        }
        body="O site é a base. Para amplificar resultados, propomos os próximos passos abaixo — todos opcionais, podem entrar em ondas."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {NEXT_STEPS.map((step) => (
            <div
              key={step.n}
              className="group flex gap-5 rounded-xl border border-line bg-surface p-5 transition-all hover:border-brand/60 md:p-6"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand/40 bg-bg font-display text-base font-extrabold text-brand transition-all group-hover:bg-brand group-hover:text-bg">
                {step.n}
              </div>
              <div>
                <h3 className="font-display text-base font-bold">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <section className="relative px-5 pb-24 pt-8 md:px-8 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-br from-brand via-brand-600 to-brand-700 p-8 md:p-14">
            <span className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-bg/20 bg-bg/10 px-3 py-1 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-bg" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-bg">
                    Próximo passo
                  </span>
                </div>
                <h2 className="font-display text-3xl font-extrabold leading-tight text-bg sm:text-4xl">
                  Ver pacotes e investimento.
                </h2>
                <p className="mt-4 max-w-lg text-base text-bg/85">
                  Três caminhos com valores claros — sem fidelização e sem
                  letras pequenas. Escolhe o que faz sentido para esta fase
                  da DAINEC.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
                <Link
                  href="/precos"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-bg px-8 py-4 text-base font-bold uppercase tracking-wider text-ink shadow-xl transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  Ver preços e pacotes
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-bg/85 underline-offset-4 hover:underline"
                >
                  Ver site público
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

// ---------- helpers ----------

function Section({
  kicker,
  title,
  body,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  body?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-line/50 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-4 md:mb-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-400">
              <span className="h-px w-8 bg-brand" /> {kicker}
            </div>
            <h2 className="text-fluid-h2 font-display font-extrabold tracking-tight">
              {title}
            </h2>
          </div>
          {body && (
            <p className="text-fluid-lead text-ink/70 md:col-span-7 md:self-end">
              {body}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
      {children}
    </div>
  );
}

function CardTitle({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand/40 bg-brand/10 text-brand">
        <Icon name={icon} />
      </span>
      <h3 className="font-display text-lg font-bold">{children}</h3>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
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
      <span>{children}</span>
    </li>
  );
}

function Icon({ name }: { name: string }) {
  const cls = "h-5 w-5";
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;
  switch (name) {
    case "bolt":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13 2L4 14h6l-1 8 10-13h-7l1-7z" />
        </svg>
      );
    case "phone":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.9 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2.4z" />
        </svg>
      );
    case "shield":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "rocket":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M5 13l-2 5 5-2M12 4c4 0 8 4 8 8 0 2-1 5-2 6l-4 2-6-6 2-4c1-1 4-2 6-2 1 0 2 0 3 1" />
          <circle cx="15" cy="9" r="1.5" />
        </svg>
      );
    case "search":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-5-5" />
        </svg>
      );
    case "device":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <path d="M11 18h2" />
        </svg>
      );
    case "spark":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3" />
        </svg>
      );
    case "lock":
      return (
        <svg className={cls} viewBox="0 0 24 24" {...stroke} aria-hidden>
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      );
    default:
      return null;
  }
}
