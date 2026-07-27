"use client";

import React from "react";
import { COMPANY_LOGOS } from "@/constants/navigation";

export function LogoGrid() {
  return (
    <section className="py-12 border-b border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hairline Boxed Grid Header */}
        <div className="text-center mb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-foreground-muted">
            Engineers hired at top product teams rely on CodeHurdle
          </p>
        </div>

        {/* Boxed Cell Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 border-l border-t border-border rounded-xl overflow-hidden shadow-sm">
          {COMPANY_LOGOS.map((company, index) => (
            <div
              key={index}
              className="border-r border-b border-border p-4 h-20 flex flex-col items-center justify-center bg-surface hover:bg-surface-hover hover:border-[#7B2DFF]/30 transition-all group"
            >
              <span className="font-mono font-bold text-sm tracking-wider text-foreground-muted group-hover:text-[#7B2DFF] transition-colors">
                {company.logoText}
              </span>
              <span className="text-[10px] text-foreground-muted/60 mt-1">
                {company.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
