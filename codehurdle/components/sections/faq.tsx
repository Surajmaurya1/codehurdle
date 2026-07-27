"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "curriculum", label: "Curriculum & Topics" },
  { id: "practice", label: "Practice Environment" },
  { id: "companies", label: "Company Preparation" },
];

const FAQ_ITEMS = [
  {
    id: "faq-1",
    category: "curriculum",
    question: "How is CodeHurdle different from grinding LeetCode?",
    answer: "LeetCode gives you a bank of 3,000+ random problems without a clear learning trajectory. CodeHurdle organizes learning around 14 foundational algorithmic patterns (Sliding Window, Two Pointers, Monotonic Stack, etc.) so that mastering one pattern unlocks 50+ related problems. We focus on deep algorithmic intuition rather than rote memorization.",
  },
  {
    id: "faq-2",
    category: "curriculum",
    question: "Is this suitable for complete beginners in Data Structures & Algorithms?",
    answer: "Yes! Our Structured Learning Journey starts from absolute foundations (Arrays, Strings, Linked Lists, Big-O Notation) and smoothly scales up to complex Dynamic Programming, Graph algorithms, and System Design basics.",
  },
  {
    id: "faq-3",
    category: "practice",
    question: "What programming languages are supported in the interactive compiler?",
    answer: "Our low-latency execution environment supports C++ (20), Python (3.12), Java (21), TypeScript (5.4), and Go (1.22). All code runs in isolated V8/Docker sandboxes with instant automated test evaluation.",
  },
  {
    id: "faq-4",
    category: "companies",
    question: "How frequently are company-specific interview questions updated?",
    answer: "Our company interview kits for Google, Meta, Stripe, Amazon, Microsoft, Uber, and Vercel are updated weekly based on real debriefs and verified candidate experiences.",
  },
  {
    id: "faq-5",
    category: "practice",
    question: "Are mock interviews included as part of the platform?",
    answer: "Yes, Mock Interviews are available as a dedicated practice feature. You can complete voice AI or text-based mock interview rounds with real-time feedback on your code efficiency, verbal communication, and problem-solving rubric.",
  },
  {
    id: "faq-6",
    category: "curriculum",
    question: "How long does it take to become interview-ready?",
    answer: "Most engineers spend 3 to 4 months following our structured 5-phase roadmap (spending 8-10 hours per week) to reach a top-tier candidate readiness score.",
  },
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = FAQ_ITEMS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="faq" className="py-24 relative overflow-hidden border-t border-border/50 bg-surface/30">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge variant="purple" className="px-3 py-1 text-xs">
            FREQUENTLY ASKED QUESTIONS
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Everything You Need to Know.
          </h2>
          
          <p className="text-sm sm:text-base text-foreground-muted max-w-xl leading-relaxed">
            Have questions about our curriculum, practice compiler, or company kits? Find clear answers below.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FAQ_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#7B2DFF] text-white font-semibold"
                    : "bg-background border border-border text-foreground-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion Component */}
        <div className="rounded-2xl border border-border bg-background p-6">
          <Accordion items={filteredItems} />
        </div>

      </div>
    </section>
  );
}
