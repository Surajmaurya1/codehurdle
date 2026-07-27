"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mic, 
  Bot, 
  CheckCircle2, 
  FileSpreadsheet, 
  Sparkles, 
  Award, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MockInterviewsSection() {
  return (
    <section id="mock-interviews" className="py-24 relative overflow-hidden border-t border-border/50 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Simulate Real Interview Pressure.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Validate your readiness before facing hiring managers with voice AI mock interview sessions and detailed rubric scoring.
          </p>
        </div>

        {/* Feature Preview Card */}
        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="w-10 h-10 rounded-lg bg-[#7B2DFF]/10 text-[#7B2DFF] flex items-center justify-center border border-[#7B2DFF]/20">
                <Mic className="w-5 h-5" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Voice AI Interviewer & Live Rubric Evaluation
              </h3>

              <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                Practice talking through your code aloud while the AI interviewer evaluates your problem formulation, space-time trade-off explanations, edge case handling, and communication clarity.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "Real-time feedback on verbal communication & time complexity explainability",
                  "Industry rubrics aligned with Google L4/L5 and Meta E4/E5 standards",
                  "Detailed post-interview report card with actionable code refactoring suggestions"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Report Preview UI */}
            <div className="lg:col-span-6">
              <Card className="p-5 bg-surface border-border space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-[#7B2DFF]" />
                    <span className="text-xs font-mono font-bold text-foreground">MOCK EVALUATION REPORT #104</span>
                  </div>
                  <Badge variant="easy">RECOMMEND: HIRE</Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-background border border-border">
                    <span className="text-[10px] text-foreground-muted block">Algorithmic Efficiency</span>
                    <span className="text-base font-bold text-[#7B2DFF]">98/100</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background border border-border">
                    <span className="text-[10px] text-foreground-muted block">Verbal Explanation</span>
                    <span className="text-base font-bold text-[#7B2DFF]">92/100</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-background border border-border text-xs text-foreground-muted space-y-1">
                  <span className="font-mono text-[10px] uppercase text-[#7B2DFF] font-bold block">AI Feedback Summary:</span>
                  <p className="italic">
                    "Candidate clearly stated the O(N) sliding window approach before writing code. Edge cases (k &gt; length) were correctly handled."
                  </p>
                </div>
              </Card>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
