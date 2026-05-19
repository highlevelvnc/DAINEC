"use client";

export function initScrollReveal() {
  if (typeof window === "undefined") return;

  const els = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]")
  );
  if (!els.length) return;

  els.forEach((el) => el.setAttribute("data-revealed", "false"));

  const reveal = (el: HTMLElement) => el.setAttribute("data-revealed", "true");

  if (!("IntersectionObserver" in window)) {
    els.forEach(reveal);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.revealDelay || "0", 10);
          if (delay) setTimeout(() => reveal(el), delay);
          else reveal(el);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach((el) => io.observe(el));

  // Safety net — never leave the page blank in headless / background tabs.
  setTimeout(() => els.forEach(reveal), 3500);
}
