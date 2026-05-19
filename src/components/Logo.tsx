import Image from "next/image";

type Props = {
  className?: string;
  variant?: "dark" | "light";
  priority?: boolean;
  /** Mobile height in px. Use `md:!h-[NNpx]` on className for desktop override. */
  height?: number;
};

// Trimmed PNG dimensions (see public/logo.png).
const LOGO_W = 1069;
const LOGO_H = 408;
const RATIO = LOGO_W / LOGO_H; // ~2.62

export function Logo({
  className = "",
  variant = "dark",
  priority,
  height = 64,
}: Props) {
  const width = Math.round(height * RATIO);
  return (
    <Image
      src={variant === "dark" ? "/logo-light.png" : "/logo.png"}
      alt="DAINEC — Eletricidade e Construção"
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={`block select-none ${className}`}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}
