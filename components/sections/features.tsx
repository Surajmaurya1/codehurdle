"use client";

import React from "react";
import { Zap, Cpu, Layers, Mic, Users, BarChart3, ArrowRight } from "lucide-react";
import { FEATURES_DATA } from "@/constants/content";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Cpu,
  Layers,
  Mic,
  Users,
  BarChart3,
};

export function Features() {
  return (
    <section id="features" className="py-20 border-b border-border bg-background relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#7B2DFF] uppercase mb-2">
              [02.00] ... &gt; CORE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-sans">
              Built for High-Performing Frontend &amp; Systems Engineers
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground-muted max-w-md">
            Every feature is engineered to eliminate trial-and-error, giving you direct insight into senior engineering interview rubrics.
          </p>
        </div>

        {/* Features 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feature) => {
            const IconComponent = ICON_MAP[feature.iconName] || Zap;
            return (
              <SpotlightCard
                key={feature.id}
                enableTilt={true}
                className="group flex flex-col justify-between h-full space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#7B2DFF]/10 border border-[#7B2DFF]/30 flex items-center justify-center text-[#7B2DFF] group-hover:scale-110 group-hover:bg-[#7B2DFF] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(123,45,255,0.2)]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-foreground-muted font-bold">
                      {feature.index}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#A675FF] uppercase tracking-wider mb-1">
                    {feature.category}
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-[#7B2DFF] transition-colors mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-foreground group-hover:text-[#7B2DFF] transition-colors">
                  <span>Explore Feature</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
