"use client";

import React from "react";

export function DotMatrixBand() {
  return (
    <div className="w-full bg-[#09090B] border-y border-border py-8 relative overflow-hidden bg-dot-pattern">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface/90 border border-[#7B2DFF]/30 text-xs sm:text-sm font-mono tracking-widest text-[#A675FF] shadow-[0_0_20px_rgba(123,45,255,0.2)]">
          <span className="text-[#7B2DFF] font-bold">··· &gt;</span>
          <span>BUILD → INTERVIEW-READY IN 6 WEEKS</span>
          <span className="text-[#7B2DFF] font-bold">&lt; ···</span>
        </div>
      </div>
    </div>
  );
}
