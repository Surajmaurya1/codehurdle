"use client";

import React, { useState } from "react";
import { Compass, Code2, Terminal, FileCheck, TrendingUp, Building2, Check, ArrowUpRight } from "lucide-react";
import { WHY_CODEHURDLE_ITEMS } from "@/constants/content";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const ICON_LOOKUP: Record<string, React.ElementType> = {
  Compass,
  Code2,
  Terminal,
  FileCheck,
  TrendingUp,
  Building2,
};

export function WhyCodeHurdle() {
  const [activeCardId, setActiveCardId] = useState(WHY_CODEHURDLE_ITEMS[0].id);

  return (
    <section id="why-codehurdle" className="py-20 border-b border-border bg-surface/40 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Major Section Header Pattern (Beat #7) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#7B2DFF] uppercase mb-2">
              [03.00] ... &gt; THE CODEHURDLE ADVANTAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-sans">
              / Complete Editorial Mastery Track. /
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground-muted max-w-md">
            Instead of loose generic question lists, CodeHurdle delivers end-to-end career acceleration from preparation to offer signing.
          </p>
        </div>

        {/* Numbered Cards Pattern Grid (Structural Beat #8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CODEHURDLE_ITEMS.map((item) => {
            const Icon = ICON_LOOKUP[item.iconName] || Compass;
            const isActive = activeCardId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveCardId(item.id)}
                className="cursor-pointer"
              >
                <SpotlightCard
                  enableTilt={false}
                  className={`h-full flex flex-col justify-between p-6 transition-all duration-300 ${
                    isActive
                      ? "border-[#7B2DFF] bg-surface shadow-[0_0_30px_rgba(123,45,255,0.2)] ring-1 ring-[#7B2DFF]/50"
                      : "border-border bg-surface hover:border-border/80"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Index & Category Header */}
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[#7B2DFF] font-bold tracking-wider">
                        {item.index}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#7B2DFF]/10 text-[#A675FF] text-[10px]">
                        {item.category}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-3 pt-2">
                      <div className={`p-2.5 rounded-xl border transition-colors ${
                        isActive
                          ? "bg-[#7B2DFF] text-white border-[#A675FF]"
                          : "bg-surface-hover text-[#7B2DFF] border-border"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                      {item.description}
                    </p>

                    {/* Active Code Snippet / Metric Pill */}
                    {item.codeSnippet && (
                      <div className="p-3 rounded-lg bg-[#09090B] border border-white/10 font-mono text-[11px] text-green-400 overflow-x-auto">
                        <code>{item.codeSnippet}</code>
                      </div>
                    )}
                  </div>

                  {/* Bottom Metric Tag */}
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-foreground">
                      {item.metrics}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform ${
                      isActive ? "text-[#7B2DFF] translate-x-0.5 -translate-y-0.5" : "text-foreground-muted"
                    }`} />
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
