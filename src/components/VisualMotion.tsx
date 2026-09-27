"use client";

import { MotionConfig } from "framer-motion";
import { useEffect } from "react";

export function VisualMotion({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add("is-revealed");
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.08 });
    // Content stays visible without JavaScript; only its arrival is animated.
    document.querySelectorAll(".service-card, .project-card").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <MotionConfig reducedMotion="user" transition={{ duration: 0.3 }}>{children}</MotionConfig>;
}
