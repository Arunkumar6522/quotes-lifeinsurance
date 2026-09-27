"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      // Butter-smooth: longer duration with silky easing
      duration: 1.4,
      // Expo out easing — fast start, glides to stop like butter
      easing: (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      wheelMultiplier: 0.9,   // Slightly slower wheel for silky feel
      touchMultiplier: 1.5,   // Natural touch on mobile
      infinite: false,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    // High-performance RAF loop — synced to display refresh rate
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
