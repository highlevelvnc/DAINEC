import { WHATSAPP_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-screen px-5 md:px-12">
        <div
          data-reveal="zoom"
          className="relative overflow-hidden rounded-2xl border border-brand/40 bg-gradient-to-br from-brand via-brand-600 to-brand-700 p-10 md:p-16"
        >
          {/* Decor */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <svg viewBox="0 0 600 400" className="absolute right-0 top-0 h-full">
              <path
                d="M0,200 L120,200 L160,160 L260,160 L300,200 L600,200"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="120" cy="200" r="3" fill="white" />
              <circle cx="300" cy="200" r="3" fill="white" />
              <path
                d="M50,80 L130,80 L150,60 L250,60"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M250,340 L400,340 L420,320 L580,320"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
          <span className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          {/* Floating sparks (energy) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[
              { left: "8%", d: "5.5s", delay: "0s", x0: "0px", x1: "20px" },
              { left: "22%", d: "7s", delay: "1.2s", x0: "0px", x1: "-12px" },
              { left: "38%", d: "6s", delay: "0.6s", x0: "0px", x1: "16px" },
              { left: "55%", d: "8s", delay: "2.4s", x0: "0px", x1: "-22px" },
              { left: "70%", d: "5s", delay: "1.8s", x0: "0px", x1: "10px" },
              { left: "84%", d: "6.5s", delay: "0.3s", x0: "0px", x1: "-18px" },
              { left: "92%", d: "7.5s", delay: "3.2s", x0: "0px", x1: "14px" },
            ].map((s, i) => (
              <span
                key={i}
                className="spark"
                style={
                  {
                    left: s.left,
                    top: "-10%",
                    "--d": s.d,
                    "--delay": s.delay,
                    "--x0": s.x0,
                    "--x1": s.x1,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-bg/20 bg-bg/10 px-3 py-1 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-bg" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-bg">
                  Resposta rápida via WhatsApp
                </span>
              </div>
              <h2 className="text-fluid-h2 font-display font-extrabold text-bg">
                Precisa de um eletricista ou de apoio para a sua obra?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-bg/80 md:text-lg">
                Fale com a DAINEC e solicite um orçamento de forma simples,
                rápida e direta.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                data-track="cta_section_whatsapp"
                className="magnetic group inline-flex items-center justify-center gap-3 rounded-md bg-bg px-8 py-5 text-base font-bold uppercase tracking-wider text-ink shadow-xl"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-[#25D366]"
                  aria-hidden
                >
                  <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a12 12 0 0 0 5.7 1.4h.1c6.5 0 11.9-5.3 11.9-11.9 0-3.2-1.3-6.2-3.5-8.4M12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A9.9 9.9 0 0 1 2.1 11.9C2.1 6.4 6.5 2 12 2a9.9 9.9 0 0 1 9.9 9.9c0 5.5-4.4 9.9-9.9 9.9m5.4-7.4-2-1c-.3-.1-.5-.2-.7.1l-.9 1.2c-.2.2-.3.3-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5L8.8 7c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1.1 2.9 1.2 3.1.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3" />
                </svg>
                Falar no WhatsApp
              </a>
              <a
                href="tel:+351925579499"
                data-track="cta_section_call"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-bg/90 underline-offset-4 hover:underline"
              >
                ou ligar 925 579 499
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
