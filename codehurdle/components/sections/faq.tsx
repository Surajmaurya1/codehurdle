"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "How is CodeHurdle different from grinding LeetCode?",
    answer: "LeetCode provides an unorganized bank of 3,000+ random problems without a clear trajectory. CodeHurdle organizes learning around 14 foundational algorithmic patterns (Sliding Window, Two Pointers, Monotonic Stack, etc.) so that mastering one pattern unlocks 50+ related problems.",
  },
  {
    id: "faq-2",
    question: "Is this suitable for complete beginners in Data Structures & Algorithms?",
    answer: "Yes! Our curriculum starts from absolute foundations (Arrays, Strings, Linked Lists, Big-O Notation) and smoothly scales up to complex Dynamic Programming, Graph algorithms, and System Design basics.",
  },
  {
    id: "faq-3",
    question: "What programming languages are supported in the interactive compiler?",
    answer: "Our execution environment supports C++ (20), Python (3.12), Java (21), TypeScript (5.4), and Go (1.22). All code runs in isolated sandboxes with instant automated test evaluation.",
  },
  {
    id: "faq-4",
    question: "How frequently are company-specific interview questions updated?",
    answer: "Our company interview kits for Google, Meta, Stripe, Amazon, Microsoft, Uber, and Vercel are updated weekly based on real candidate debriefs and verified interview experiences.",
  },
  {
    id: "faq-5",
    question: "How long does it take to become interview-ready?",
    answer: "Most engineers spend 3 to 4 months following our structured vertical roadmap (spending 8-10 hours per week) to reach a top-tier candidate readiness score.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-28 relative overflow-hidden border-t border-border/40 bg-surface/20">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Minimal Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions.
          </h2>
          
          <p className="text-sm sm:text-base text-foreground-muted max-w-lg leading-relaxed">
            Everything you need to know about our pattern curriculum, practice compiler, and company kits.
          </p>
        </div>

        {/* Minimal Clean Accordion */}
        <div className="space-y-4">
          <Accordion items={FAQ_ITEMS} />
        </div>

      </div>
    </section>
  );
}
