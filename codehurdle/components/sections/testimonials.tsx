"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Award, CheckCircle2, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/constants/content";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Testimonials() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Staff Engineer Track", "System Design", "FAANG Prep", "Product Engineering"];

  const filteredTestimonials = filter === "All"
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.highlightTag === filter);

  return (
    <section id="testimonials" className="py-20 border-b border-border bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B2DFF]/10 border border-[#7B2DFF]/30 text-xs font-mono text-[#A675FF]">
            <Award className="w-3.5 h-3.5 text-[#7B2DFF]" />
            <span>VERIFIED CANDIDATE SUCCESS STORIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
            From Preparation to Offer Signing
          </h2>

          <p className="text-foreground-muted text-sm sm:text-base leading-relaxed">
            See how developers leveraged CodeHurdle to land senior and staff roles at Stripe, Linear, Vercel, and Notion.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === cat
                  ? "bg-[#7B2DFF] text-white shadow-[0_0_15px_rgba(123,45,255,0.4)]"
                  : "bg-surface border border-border text-foreground-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredTestimonials.map((item) => (
            <SpotlightCard key={item.id} className="flex flex-col justify-between p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#7B2DFF]/15 text-[#A675FF] border border-[#7B2DFF]/30">
                    {item.highlightTag}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-foreground leading-relaxed italic">
                  &quot;{item.content}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border border-[#7B2DFF]/40"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-sm text-foreground">{item.name}</div>
                    <div className="text-xs text-foreground-muted">
                      {item.role} @ <span className="text-foreground font-semibold">{item.company}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/30 text-xs font-mono font-bold text-[#22C55E]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.outcome}</span>
                  </span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
