"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Building2, 
  Sparkles, 
  Check, 
  X, 
  Compass, 
  Target, 
  FileCode2,
  TrendingUp
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WhyCodeHurdle() {
  return (
    <section id="why-codehurdle" className="py-24 relative overflow-hidden border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="purple" className="px-3 py-1 text-xs">
            WHY CODEHURDLE
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            The best place to learn Data Structures, Algorithms & interview questions.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Stop grinding hundreds of random questions without direction. CodeHurdle provides a structured, pattern-based curriculum curated by engineers who cleared Tier-1 tech interviews.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="p-6 h-full flex flex-col justify-between hover:border-[#7B2DFF]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#7B2DFF]/10 text-[#7B2DFF] flex items-center justify-center border border-[#7B2DFF]/20">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Pattern-Based Learning</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Learn 14 fundamental algorithmic patterns that solve 90%+ of interview problems, instead of memorizing individual solutions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center text-xs text-[#A675FF] font-mono">
                <span>14 Core Patterns Included</span>
              </div>
            </Card>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="p-6 h-full flex flex-col justify-between hover:border-[#7B2DFF]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#7B2DFF]/10 text-[#7B2DFF] flex items-center justify-center border border-[#7B2DFF]/20">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Real Interview Experiences</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Access recent interview questions and verified experiences shared directly by candidates who interviewed at Google, Meta, Stripe & Vercel.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center text-xs text-[#A675FF] font-mono">
                <span>Updated Weekly with Live Debriefs</span>
              </div>
            </Card>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card className="p-6 h-full flex flex-col justify-between hover:border-[#7B2DFF]/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#7B2DFF]/10 text-[#7B2DFF] flex items-center justify-center border border-[#7B2DFF]/20">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Structured Step-by-Step Roadmaps</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Follow a clear, linear trajectory from basic data structures to advanced algorithm optimization and real-time execution benchmarks.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center text-xs text-[#A675FF] font-mono">
                <span>Zero Guesswork Roadmaps</span>
              </div>
            </Card>
          </motion.div>

        </div>

        {/* Comparison: Random LeetCode vs CodeHurdle */}
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold text-foreground">Traditional Prep vs. The CodeHurdle Way</h4>
            <p className="text-sm text-foreground-muted mt-1">Why top candidates switch to pattern-based learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Old Way */}
            <div className="p-5 rounded-xl border border-rose-500/20 bg-rose-500/[0.02] space-y-3">
              <div className="flex items-center gap-2 text-rose-500 font-semibold text-sm">
                <X className="w-4 h-4" />
                <span>The Random Grind (LeetCode)</span>
              </div>
              <ul className="space-y-2 text-xs text-foreground-muted">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Solving 500+ random problems without understanding underlying patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Forgetting solutions 2 weeks after solving them</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>No context on company-specific interview rubrics or actual feedback</span>
                </li>
              </ul>
            </div>

            {/* The CodeHurdle Way */}
            <div className="p-5 rounded-xl border border-[#7B2DFF]/30 bg-[#7B2DFF]/[0.03] space-y-3">
              <div className="flex items-center gap-2 text-[#7B2DFF] font-semibold text-sm">
                <Check className="w-4 h-4 text-[#22C55E]" />
                <span>The CodeHurdle Approach</span>
              </div>
              <ul className="space-y-2 text-xs text-foreground-muted">
                <li className="flex items-start gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span>Master 14 core patterns to unlock 1,000+ top-tier coding questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span>Real interview questions & experiences updated after every hiring cycle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#22C55E] font-bold">•</span>
                  <span>Clear step-by-step progress metrics and code complexity evaluation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
