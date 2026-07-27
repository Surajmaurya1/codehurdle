"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Play,
  Star,
  CheckCircle2,
  Terminal as TerminalIcon,
  Code2,
  FileCheck,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

const HERO_TABS = [
  {
    id: "roadmap",
    label: "JavaScript Roadmap",
    icon: Code2,
    code: `// Staff Engineer Learning Path
const roadmap = {
  core: ["Closures", "Event Loop", "V8 Memory Management"],
  advanced: ["Concurrent React", "Wasm Sandbox", "Distributed UI"],
  progress: 88, // % Completed
  status: "FAANG Ready"
};`,
    output: "✔ 14/14 Modules Mastered • Tier 1 Readiness",
  },
  {
    id: "interview",
    label: "React Interview",
    icon: TerminalIcon,
    code: `// Question: Explain Fiber Reconciler & Scheduling
function FiberNode(tag, pendingProps, key) {
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.return = null; // Parent fiber
  this.child = null;  // First child
  this.sibling = null;// Next sibling
}`,
    output: "✔ Evaluated by AI Coach • 98% Match Score",
  },
  {
    id: "mock",
    label: "Mock Interview",
    icon: TerminalIcon,
    code: `$ codehurdle evaluate --candidate="Senior Frontend"
> Analyzing verbal communication & system design...
> Space Complexity: O(1) optimal
> Execution Time: 0.2ms [Passed 24/24 Test Cases]`,
    output: "✔ Result: PASS (L5 Offer Recommended)",
  },
  {
    id: "resume",
    label: "Resume Review",
    icon: FileCheck,
    code: `// ATS Diagnostic Scan Result
const atsAnalysis = {
  faangKeywordDensity: "94%",
  impactMetrics: "Found 12 quantifiable outcomes",
  formattingScore: "100/100 (Clean Parser Compatible)"
};`,
    output: "✔ Resume Score: 98/100 • Ready to Submit",
  },
  {
    id: "tracker",
    label: "Progress Tracker",
    icon: TrendingUp,
    code: `// Live Performance Analytics
const analytics = {
  problemsSolved: 482,
  mockRoundsCompleted: 18,
  confidenceIndex: "96.4%",
  targetCompany: "Stripe & Vercel"
};`,
    output: "✔ Top 2% Candidate Global Ranking",
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(HERO_TABS[0].id);
  const [typedText, setTypedText] = useState("");
  const currentTabData = HERO_TABS.find((t) => t.id === activeTab) || HERO_TABS[0];

  // Simulated code typing effect when switching tabs
  useEffect(() => {
    setTypedText("");
    let index = 0;
    const fullText = currentTabData.code;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [activeTab, currentTabData.code]);

  return (
    <section id="overview" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Top Heatmap / Pixel Grid Visual Band (Structural Beat #2) */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="relative w-full rounded-2xl bg-[#09090B] border border-[#7B2DFF]/20 p-4 md:p-6 overflow-hidden shadow-[0_0_40px_rgba(123,45,255,0.15)]">
          {/* Subtle Heatmap Grid pattern */}
          <div className="grid grid-cols-12 sm:grid-cols-24 gap-1 opacity-60">
            {Array.from({ length: 96 }).map((_, i) => {
              const opacity = (i * 37) % 100;
              return (
                <div
                  key={i}
                  className="h-3 rounded-sm transition-all duration-1000 hover:scale-125"
                  style={{
                    backgroundColor: opacity > 70 ? "#7B2DFF" : opacity > 40 ? "#5416B8" : "#111113",
                    opacity: opacity / 100,
                  }}
                />
              );
            })}
          </div>

          {/* Overlay Monogram & Scroll Hint */}
          <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#A1A1AA] border-t border-white/10 pt-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-white font-semibold">CODEHURDLE ENGINE v1.0-BETA</span>
              <span className="hidden sm:inline text-white/40">| REAL-TIME INTERVIEW SIMULATION</span>
            </div>
            <div className="flex items-center gap-1 text-[#A675FF] animate-bounce">
              <span>scroll for details</span>
              <span>↓</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B2DFF]/30 bg-[#7B2DFF]/10 backdrop-blur-md text-xs font-medium text-[#A675FF]">
              <Sparkles className="w-3.5 h-3.5 text-[#7B2DFF] animate-spin-slow" />
              <span>The #1 Technical Interview Accelerator for Engineers</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground font-sans">
              Become the Engineer Companies Want to Hire.
              <br />
              <span className="mt-2 block font-mono text-3xl sm:text-4xl lg:text-5xl">
                Practice. Build.{" "}
                <span className="relative inline-block px-3 py-1 bg-[#7B2DFF] text-white rounded-lg transform -rotate-1 shadow-[0_0_30px_rgba(123,45,255,0.5)]">
                  Get Hired.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-foreground-muted max-w-xl leading-relaxed">
              Stop grinding endless random LeetCode problems. Master production-grade system architecture, real-time voice AI mock interviews, and company-specific rubrics designed by principal engineers at Stripe, Vercel, and Linear.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <MagneticButton strength={0.2}>
                <Link
                  href="#terminal"
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "gap-2 shadow-xl hover:shadow-[#7B2DFF]/50 text-base font-semibold"
                  )}
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <Link
                href="#overview"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 text-base"
                )}
              >
                <Play className="w-4 h-4 fill-current text-[#7B2DFF]" />
                <span>Watch Demo (2 min)</span>
              </Link>
            </div>

            {/* Trust Badges & Student Rating Cluster */}
            <div className="pt-6 border-t border-border w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
              {/* Avatars */}
              <div className="flex items-center -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Student avatar ${i + 1}`}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full border-2 border-background object-cover"
                    loading="lazy"
                  />
                ))}
              </div>

              {/* Rating info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-foreground">4.9/5 Rating</span>
                </div>
                <p className="text-xs text-foreground-muted">
                  Trusted by <span className="font-semibold text-foreground">150,000+ developers</span> at Google, Stripe, Meta & Vercel.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Animated App Window Preview */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-surface border border-border p-1 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:border-[#7B2DFF]/40">
              
              {/* Window Top Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#09090B] rounded-t-xl border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-[#A1A1AA] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>codehurdle.app/sandbox/live</span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#7B2DFF]/20 text-[#A675FF]">
                  LIVE SESSION
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1 px-2 py-2 bg-surface-hover/80 border-b border-border overflow-x-auto">
                {HERO_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isSelected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                        isSelected
                          ? "bg-[#7B2DFF] text-white shadow-md font-semibold"
                          : "text-foreground-muted hover:text-foreground hover:bg-surface"
                      }`}
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-[#22C55E]"}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Editor Workspace */}
              <div className="p-4 bg-[#09090B] rounded-b-xl font-mono text-xs text-[#F4F4F6] min-h-[260px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] mb-3 pb-2 border-b border-white/10">
                    <span>FILE: main_{activeTab}.ts</span>
                    <span className="text-[#A675FF]">V8 ENGINE • 60 FPS</span>
                  </div>

                  <pre className="text-green-400/90 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                    <code>
                      {typedText}
                      <span className="inline-block w-2 h-4 ml-1 bg-[#7B2DFF] animate-blink align-middle" />
                    </code>
                  </pre>
                </div>

                {/* Animated Execution Evaluation Status Footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#22C55E] font-semibold">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
                    </span>
                    <span>{currentTabData.output}</span>
                  </div>
                  <span className="text-[10px] text-[#A1A1AA]">Latency: 12ms</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
