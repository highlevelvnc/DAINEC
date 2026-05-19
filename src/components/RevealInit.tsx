"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/lib/scrollReveal";

export function RevealInit() {
  useEffect(() => {
    initScrollReveal();
  }, []);
  return null;
}
