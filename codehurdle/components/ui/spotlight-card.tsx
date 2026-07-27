"use client";

import React, { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spotlightColor?: string;
  className?: string;
  enableTilt?: boolean;
}

export function SpotlightCard({
  children,
  spotlightColor = "rgba(123, 45, 255, 0.15)",
  className,
  enableTilt = false,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);

  // Direct DOM mutations — zero React re-renders on mouse move
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const card = cardRef.current;
        const spotlight = spotlightRef.current;
        if (!card || !spotlight) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        spotlight.style.opacity = "1";
        spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`;

        if (enableTilt) {
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -4;
          const rotateY = ((x - centerX) / centerX) * 4;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      });
    },
    [enableTilt, spotlightColor]
  );

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    const card = cardRef.current;
    const spotlight = spotlightRef.current;
    if (spotlight) spotlight.style.opacity = "0";
    if (card && enableTilt) card.style.transform = "";
  }, [enableTilt]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: enableTilt ? "transform 0.15s ease-out" : undefined,
        willChange: enableTilt ? "transform" : undefined,
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-[#7B2DFF]/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        className
      )}
      {...props}
    >
      {/* Spotlight Halo — rendered via direct DOM, zero re-renders */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px"
        style={{ opacity: 0, transition: "opacity 0.3s ease" }}
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
