"use client";

import React from "react";
import { useMagnetic } from "@/hooks/use-magnetic";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className = "", strength = 0.3 }: MagneticButtonProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic(strength);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
}
