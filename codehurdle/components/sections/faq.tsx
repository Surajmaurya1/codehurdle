"use client";

import React, { useState } from "react";
import { HelpCircle, Search } from "lucide-react";
import { FAQ_DATA } from "@/constants/content";
import { Accordion } from "@/components/ui/accordion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General & Platform" },
    { id: "interviews", label: "AI Mock Interviews" },
    { id: "pricing", label: "Pricing & Guarantee" },
  ];

  const filteredFAQs = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 border-b border-border bg-background relative">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B2DFF]/10 border border-[#7B2DFF]/30 text-xs font-mono text-[#A675FF]">
            <HelpCircle className="w-3.5 h-3.5 text-[#7B2DFF]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Everything You Need to Know
          </h2>

          <p className="text-foreground-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Have questions about our voice AI mock interviewer, roadmaps, or guarantee? We’ve got answers.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted" />
            <input
              type="text"
              placeholder="Search FAQ keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface border border-border text-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-[#7B2DFF] focus:ring-1 focus:ring-[#7B2DFF]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#7B2DFF] text-white font-semibold"
                    : "bg-surface border border-border text-foreground-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Component Container */}
        <SpotlightCard className="p-6 sm:p-8">
          {filteredFAQs.length > 0 ? (
            <Accordion items={filteredFAQs} />
          ) : (
            <div className="text-center py-8 text-foreground-muted text-sm">
              No matching questions found for &quot;{searchQuery}&quot;.
            </div>
          )}
        </SpotlightCard>

      </div>
    </section>
  );
}
