import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function CodeHurdleLogo({ className = "h-8", showText = true }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Monogram Icon */}
      <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#7B2DFF] via-[#5416B8] to-[#09090B] p-[1px] shadow-[0_0_15px_rgba(123,45,255,0.4)] transition-transform hover:scale-105">
        <div className="w-full h-full bg-[#09090B] rounded-[7px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle inner grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#7B2DFF_1px,transparent_1px)] [background-size:6px_6px] opacity-30" />
          
          {/* Monogram Symbol: + / Hurdle Emblem */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-[#7B2DFF] relative z-10"
          >
            <path d="M12 4v16" />
            <path d="M4 12h16" />
            <path d="M7 7l10 10" strokeDasharray="2 2" className="text-[#A675FF]" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-bold tracking-tight text-lg font-mono text-foreground">
              Code<span className="text-[#7B2DFF]">Hurdle</span>
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border border-[#7B2DFF]/30 text-[#A675FF] bg-[#7B2DFF]/10">
              v1.0
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
