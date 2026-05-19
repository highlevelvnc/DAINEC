type Props = { className?: string; withWordmark?: boolean };

export function Logo({ className = "", withWordmark = true }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex items-center justify-center">
        <span
          aria-hidden
          className="absolute inset-0 rounded-md bg-brand/25 blur-md"
        />
        <svg
          aria-hidden
          viewBox="0 0 32 32"
          className="relative h-8 w-8"
          fill="none"
        >
          <path
            d="M18 3L7 18h7l-2 11 11-15h-7l2-11z"
            fill="#FF9500"
            stroke="#FF9500"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {withWordmark && (
        <span className="font-display text-xl font-extrabold tracking-tight text-ink">
          DAI<span className="text-brand">NEC</span>
        </span>
      )}
    </div>
  );
}
