const ITEMS = [
  "Instalações Elétricas",
  "Quadros Elétricos",
  "Iluminação LED",
  "Remodelações",
  "Construção Civil",
  "Reparações Urgentes",
  "Manutenção Técnica",
  "Acabamentos",
];

export function Marquee() {
  return (
    <section
      aria-hidden
      className="relative isolate -mt-2 overflow-hidden border-y-2 border-brand bg-brand py-4 md:py-5"
    >
      <div className="marquee">
        <div className="marquee-track">
          {[...ITEMS, ...ITEMS, ...ITEMS].map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="inline-flex shrink-0 items-center gap-5 px-5 font-display text-xl font-extrabold uppercase tracking-tight text-bg md:text-2xl"
            >
              {label}
              <Bolt />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bolt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-bg/80"
    >
      <path d="M13 2L4 14h6l-1 8 10-13h-7l1-7z" />
    </svg>
  );
}
