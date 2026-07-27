"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Flame, 
  Trophy, 
  Target, 
  TrendingUp, 
  Award, 
  Calendar, 
  BarChart2, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const TOPIC_MASTERY = [
  { topic: "Arrays & Strings", mastery: 94, solved: "82/87", color: "bg-[#7B2DFF]" },
  { topic: "Trees & Binary Search", mastery: 88, solved: "64/72", color: "bg-[#7B2DFF]" },
  { topic: "Dynamic Programming", mastery: 76, solved: "45/60", color: "bg-[#A675FF]" },
  { topic: "Graph Algorithms", mastery: 82, solved: "52/64", color: "bg-[#7B2DFF]" },
  { topic: "System Design Basics", mastery: 70, solved: "18/25", color: "bg-[#A675FF]" },
];

export function ProgressDashboard() {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="purple" className="px-3 py-1 text-xs">
            PROGRESS DASHBOARD
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Track Every Metric That Matters.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Gain full visibility into your streak consistency, solved problems by difficulty, topic proficiency ratings, and interview readiness index.
          </p>
        </div>

        {/* Dashboard Preview Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Streaks & Overall Stat Cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Daily Streak Card */}
            <Card className="p-6 bg-surface border-border space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
                    <Flame className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">24 Day Streak</h4>
                    <p className="text-xs text-foreground-muted">Active coding habit</p>
                  </div>
                </div>
                <Badge variant="purple" className="text-[10px]">On Fire</Badge>
              </div>

              {/* GitHub style heat grid sample */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono text-foreground-muted uppercase block">Last 4 Weeks Activity:</span>
                <div className="grid grid-cols-14 gap-1">
                  {Array.from({ length: 28 }).map((_, i) => {
                    const isFilled = i % 3 !== 0;
                    return (
                      <div
                        key={i}
                        className={`h-4 rounded-sm transition-all ${
                          isFilled ? "bg-[#7B2DFF]" : "bg-surface-hover border border-border/50"
                        }`}
                        style={{ opacity: isFilled ? 0.4 + ((i % 5) * 0.15) : 1 }}
                      />
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Solved Problems Breakdown */}
            <Card className="p-6 bg-surface border-border space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-foreground-muted">
                Solved Problems Breakdown
              </h4>

              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold font-mono text-foreground">261</span>
                <span className="text-xs text-foreground-muted font-mono">/ 450 Total</span>
              </div>

              {/* Difficulty breakdown pills */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block font-semibold">Easy</span>
                  <span className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">92</span>
                </div>

                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
                  <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 block font-semibold">Medium</span>
                  <span className="text-lg font-bold font-mono text-amber-600 dark:text-amber-400">124</span>
                </div>

                <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-center">
                  <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 block font-semibold">Hard</span>
                  <span className="text-lg font-bold font-mono text-rose-600 dark:text-rose-400">45</span>
                </div>
              </div>
            </Card>

          </div>

          {/* Right Column: Topic Mastery Bars & Readiness Score */}
          <div className="lg:col-span-8 space-y-6">
            
            <Card className="p-6 bg-surface border-border space-y-6">
              
              {/* Readiness Index */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
                <div>
                  <h4 className="text-xl font-bold text-foreground">Interview Readiness Score</h4>
                  <p className="text-xs text-foreground-muted mt-0.5">Calculated from problem speed, accuracy, and topic coverage</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-2xl font-extrabold font-mono text-[#7B2DFF]">92.8%</span>
                    <span className="text-[10px] text-emerald-500 block font-semibold">Tier-1 FAANG Ready</span>
                  </div>
                </div>
              </div>

              {/* Progress Bars per Topic */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-foreground-muted uppercase block">Topic Proficiency:</span>
                
                {TOPIC_MASTERY.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-foreground">{item.topic}</span>
                      <span className="font-mono text-foreground-muted">{item.solved} ({item.mastery}%)</span>
                    </div>
                    <Progress value={item.mastery} />
                  </div>
                ))}
              </div>

            </Card>

          </div>

        </div>

      </div>
    </section>
  );
}
