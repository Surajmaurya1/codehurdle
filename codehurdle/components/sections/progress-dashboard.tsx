"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Flame, 
  Trophy, 
  BarChart2, 
  CheckCircle2, 
  Sparkles,
  TrendingUp
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const TOPIC_PROFICIENCY = [
  { topic: "Arrays & Strings", val: 94 },
  { topic: "Trees & Binary Search", val: 88 },
  { topic: "Dynamic Programming", val: 76 },
  { topic: "Graph Algorithms", val: 82 },
  { topic: "System Design Basics", val: 70 },
];

export function ProgressDashboard() {
  return (
    <section id="dashboard" className="py-28 relative overflow-hidden border-t border-border/40 bg-surface/20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Track Every Metric That Matters.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Gain full visibility into your streak consistency, solved problems by difficulty, and topic proficiency ratings.
          </p>
        </div>

        {/* Dashboard Preview Layout: Main Dashboard Screenshot Window + Side Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Analytics Dashboard Window */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-border bg-background p-6 space-y-6 shadow-xl">
              
              {/* Window Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#7B2DFF]/10 text-[#7B2DFF] flex items-center justify-center font-bold font-mono border border-[#7B2DFF]/20">
                    DB
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Candidate Performance Hub</h3>
                    <span className="text-xs font-mono text-foreground-muted">Live Readiness Metric • 92.8%</span>
                  </div>
                </div>

                <Badge variant="purple" className="text-xs font-mono">
                  FAANG Tier-1 Ready
                </Badge>
              </div>

              {/* Heatmap Activity Grid */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-foreground-muted uppercase">Daily Activity Streak:</span>
                  <span className="font-mono text-amber-500 font-bold flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-current" /> 24 Days Active
                  </span>
                </div>

                <div className="grid grid-cols-24 gap-1 p-3 rounded-xl bg-surface border border-border/60">
                  {Array.from({ length: 96 }).map((_, i) => {
                    const active = i % 3 !== 0;
                    return (
                      <div
                        key={i}
                        className={`h-3 rounded-sm transition-all ${
                          active ? "bg-[#7B2DFF]" : "bg-surface-hover"
                        }`}
                        style={{ opacity: active ? 0.3 + ((i % 4) * 0.2) : 1 }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Topic Mastery Progress Bars */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-foreground-muted uppercase block">Topic Mastery Level:</span>
                
                {TOPIC_PROFICIENCY.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">{item.topic}</span>
                      <span className="font-mono text-foreground-muted">{item.val}%</span>
                    </div>
                    <Progress value={item.val} />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Supporting Metric Column */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Metric 1 */}
            <div className="p-5 rounded-2xl border border-border bg-background space-y-1">
              <span className="text-xs font-mono text-foreground-muted uppercase">Solved Problems</span>
              <div className="text-3xl font-extrabold font-mono text-foreground">261 / 450</div>
              <p className="text-xs text-foreground-muted pt-1">
                92 Easy • 124 Medium • 45 Hard
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-5 rounded-2xl border border-border bg-background space-y-1">
              <span className="text-xs font-mono text-foreground-muted uppercase">Algorithm Speed</span>
              <div className="text-3xl font-extrabold font-mono text-[#7B2DFF]">Top 2.1%</div>
              <p className="text-xs text-foreground-muted pt-1">
                Average solution speed: 12 mins
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-5 rounded-2xl border border-border bg-background space-y-1">
              <span className="text-xs font-mono text-foreground-muted uppercase">Company Match</span>
              <div className="text-3xl font-extrabold font-mono text-emerald-500">96.4%</div>
              <p className="text-xs text-foreground-muted pt-1">
                High alignment with Google & Meta rubrics
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
