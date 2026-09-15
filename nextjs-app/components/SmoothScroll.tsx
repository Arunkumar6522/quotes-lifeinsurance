"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      // Butter-smooth: longer duration with a silky cubic bezier feel
      duration: 1.4,
      // Custom easing — feels like iOS momentum scroll
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      // Natural touch multiplier — not too fast, not sluggish
      touchMultiplier: 2.0,
      // Prevent wheel overshooting
      wheelMultiplier: 1.0,
      infinite: false,
      // Sync with native scroll for accessibility
      syncTouch: false,
    });

    lenisRef.current = lenis;

    // Use a single rAF loop — most efficient
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
