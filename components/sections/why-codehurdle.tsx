"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  Building2, 
  Compass, 
  ArrowRight, 
  Check, 
  Sparkles,
  Code2,
  Terminal,
  Cpu
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function WhyCodeHurdle() {
  return (
    <section id="why-codehurdle" className="py-28 relative overflow-hidden border-t border-border/40 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Split Layout: Left Text/CTA, Right Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Storytelling & Editorial Copy (No Card Container) */}
          <div className="lg:col-span-6 space-y-6">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Master the 14 Patterns That Solve 90% of Coding Interviews.
            </h2>

            <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
              Stop grinding hundreds of isolated questions. CodeHurdle organizes data structures and algorithms around core structural blueprints so you can formulate optimal space-time solutions instantly.
            </p>

            {/* Key Outcomes List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#7B2DFF]/15 text-[#7B2DFF] flex items-center justify-center mt-0.5 shrink-0 border border-[#7B2DFF]/30">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Zero-Guesswork Roadmap</h4>
                  <p className="text-xs text-foreground-muted">Linear curriculum from basic arrays to advanced dynamic programming.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#7B2DFF]/15 text-[#7B2DFF] flex items-center justify-center mt-0.5 shrink-0 border border-[#7B2DFF]/30">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Verified Interview Experiences</h4>
                  <p className="text-xs text-foreground-muted">Questions tagged from recent interview cycles at Google, Meta, Stripe & Vercel.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#7B2DFF]/15 text-[#7B2DFF] flex items-center justify-center mt-0.5 shrink-0 border border-[#7B2DFF]/30">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Production-Grade IDE</h4>
                  <p className="text-xs text-foreground-muted">Instant compilation with automated test case evaluation and memory profiling.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <Link href="#journey">
                <Button variant="primary" size="lg" className="gap-2 font-semibold shadow-md cursor-pointer">
                  <span>Explore Learning Path</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

          </div>

          {/* Right Column: Product Visualization / Code Engine Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-surface border border-border/80 p-6 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between text-xs font-mono text-foreground-muted border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                  <span className="text-foreground font-semibold">ALGORITHMIC ENGINE</span>
                </div>
                <span className="text-[#A675FF]">14/14 PATTERNS</span>
              </div>

              {/* Visualization Cards */}
              <div className="space-y-3">
                
                {/* Input Problem Node */}
                <div className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-mono text-xs font-bold border border-amber-500/20">
                      IN
                    </div>
                    <div>
                      <span className="text-xs font-mono text-foreground font-semibold block">LeetCode #209: Subarray Sum</span>
                      <span className="text-[10px] font-mono text-foreground-muted">Target Sum ≥ 7 • Array [2, 3, 1, 2, 4, 3]</span>
                    </div>
                  </div>
                  <Badge variant="medium" className="text-[10px]">Unstructured</Badge>
                </div>

                {/* Arrow */}
                <div className="flex justify-center text-foreground-muted">
                  <span className="text-xs font-mono text-[#7B2DFF]">↓ Pattern Recognition Transformation</span>
                </div>

                {/* Output Blueprint Node */}
                <div className="p-3.5 rounded-xl bg-background border border-[#7B2DFF]/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#7B2DFF]" />
                      <span className="text-xs font-mono text-[#7B2DFF] font-bold">SLIDING WINDOW PATTERN</span>
                    </div>
                    <Badge variant="purple" className="text-[10px]">Time: O(N) • Space: O(1)</Badge>
                  </div>
                  <pre className="text-[11px] font-mono text-emerald-400 bg-[#09090B] p-2.5 rounded-lg overflow-x-auto">
                    <code>{`while (sum >= target) {\n  minLen = Math.min(minLen, right - left + 1);\n  sum -= nums[left++];\n}`}</code>
                  </pre>
                </div>

              </div>

              {/* Status Footer */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-foreground-muted border-t border-border/60">
                <span>Result: Optimal Complexity Reached</span>
                <span className="text-[#22C55E] font-semibold">✓ 100% Acceptance Rate</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
