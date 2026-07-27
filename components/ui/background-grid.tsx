"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundGrid() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use direct DOM style mutation — no React state = zero re-renders
    const el = spotlightRef.current;
    if (!el) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(123, 45, 255, 0.12), transparent 45%)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Mouse Cursor Spotlight Glow — zero re-renders via direct DOM */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 opacity-60"
        style={{ willChange: "background" }}
      />

      {/* Ambient Moving Gradient Mesh */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#7B2DFF]/15 rounded-full blur-[120px] animate-pulse-glow"
        style={{ willChange: "opacity, transform" }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#5416B8]/15 rounded-full blur-[150px] animate-pulse-glow"
        style={{ willChange: "opacity, transform" }}
      />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#7B2DFF]/10 rounded-full blur-[140px]" />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
