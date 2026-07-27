"use client";

import React from "react";
import { Sparkles, Zap } from "lucide-react";
import { TICKER_ITEMS } from "@/constants/content";

export function Ticker() {
  return (
    <div className="w-full border-y border-border bg-[#09090B] py-3 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-xs font-mono tracking-wider uppercase text-foreground-muted">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#7B2DFF]" />
              <span className="hover:text-foreground transition-colors">{item}</span>
            </span>
            <Zap className="w-3 h-3 text-[#A675FF]/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
