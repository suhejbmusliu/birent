"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right" | "scale";

const dirClass: Record<Direction, string> = {
  up:    "reveal",
  left:  "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
};

export function AnimateIn({ children, className = "", delay = 0, direction = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("show"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${dirClass[direction]} ${className}`}>
      {children}
    </div>
  );
}
