import Image from "next/image";

type Props = {
  className?: string;
  /** "dark" = renders on dark surface (wordmark gets a subtle white glow);
   *  "light" = renders on light surface (no glow). */
  variant?: "dark" | "light";
  priority?: boolean;
  height?: number;
};

export function Logo({
  className = "",
  variant = "dark",
  priority,
  height = 40,
}: Props) {
  return (
    <Image
      src={variant === "dark" ? "/logo-light.png" : "/logo.png"}
      alt="DAINEC — Eletricidade e Construção"
      width={height * 2.4}
      height={height}
      priority={priority}
      sizes={`${height * 2.4}px`}
      className={`h-auto w-auto select-none ${className}`}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}
