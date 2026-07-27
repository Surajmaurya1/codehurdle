"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Cpu,
  FileCheck2,
  Users,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    stepNumber: "01",
    title: "Diagnostic Skill Mapping",
    subtitle: "Identify gaps before interviewers do.",
    description:
      "Our AI engine scans your repository history and practice attempts to generate a precise radar chart of your algorithmic, concurrency, and architectural proficiency.",
    icon: Compass,
    features: ["Personalized Weak Spot Targeting", "Company Rubric Benchmark", "Automated Daily Drills"],
    previewType: "radar",
  },
  {
    stepNumber: "02",
    title: "Interactive Voice & Code AI Rounds",
    subtitle: "Simulate pressure-packed technical interviews.",
    description:
      "Speak directly to an adaptive AI interviewer trained on thousands of FAANG transcripts. Receive immediate feedback on speech clarity, complexity analysis, and edge-case handling.",
    icon: Cpu,
    features: ["Speech & Tone Diagnostics", "WebAssembly Sandbox Execution", "Real-Time Hints & Follow-ups"],
    previewType: "terminal",
  },
  {
    stepNumber: "03",
    title: "Resume & Portfolio Engine",
    subtitle: "Pass ATS filters with zero friction.",
    description:
      "Format your engineering achievements using recruiter-tested STAR templates, quantitative metric metrics, and verified production project repositories.",
    icon: FileCheck2,
    features: ["Instant ATS Parser Score", "Quantified Impact Rephrasing", "GitHub Repository Review"],
    previewType: "resume",
  },
  {
    stepNumber: "04",
    title: "Direct Tech Matchmaking",
    subtitle: "Skip cold applications entirely.",
    description:
      "Top-scoring candidate profiles are featured directly to hiring managers at verified partner companies looking for senior and staff frontend engineers.",
    icon: Users,
    features: ["Fast-Track Recruiter Calls", "Transparent Leveling Data", "Negotiation Playbooks"],
    previewType: "matchmaking",
  },
];

export function ProductOverview() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = STEPS[activeStep];

  return (
    <section id="overview" className="py-20 border-b border-border bg-background relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Major Section Header Pattern (Structural Beat #7) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#7B2DFF] uppercase mb-2">
              [01.00] ... &gt; KEY VALUE ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-sans">
              / Less manual work. More intelligent execution. /
            </h2>
          </div>

          <a
            href="#terminal"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-2 self-start md:self-auto"
            )}
          >
            <span>Try Interactive Demo</span>
            <ArrowRight className="w-4 h-4 text-[#7B2DFF]" />
          </a>
        </div>

        {/* Step Tabs Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? "bg-[#7B2DFF]/10 border-[#7B2DFF] shadow-lg"
                    : "bg-surface border-border hover:border-border/80"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? "text-[#7B2DFF]" : "text-foreground-muted"}`}>
                    PHASE {step.stepNumber}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#7B2DFF]" : "text-foreground-muted"}`} />
                </div>
                <div className={`text-sm font-semibold truncate ${isSelected ? "text-foreground" : "text-foreground-muted"}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Storytelling Active Step Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Description Card */}
          <div className="lg:col-span-6">
            <SpotlightCard className="p-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B2DFF]/10 border border-[#7B2DFF]/30 text-xs font-mono text-[#A675FF]">
                <Zap className="w-3.5 h-3.5 text-[#7B2DFF]" />
                <span>Phase {currentStep.stepNumber} — {currentStep.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {currentStep.title}
              </h3>

              <p className="text-foreground-muted leading-relaxed text-sm sm:text-base">
                {currentStep.description}
              </p>

              <div className="space-y-3 pt-2">
                {currentStep.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-foreground">
                    <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-foreground-muted">SYSTEM RUBRIC: STAFF LEVEL</span>
                <span className="text-xs font-mono font-bold text-[#7B2DFF]">PASS GUARANTEE AVAILABLE</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Visual Simulation Display */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#09090B] border border-[#7B2DFF]/30 p-6 shadow-2xl font-mono text-xs text-white min-h-[360px] flex flex-col justify-between">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="ml-2 text-white/50">codehurdle // engine // phase_{currentStep.stepNumber}</span>
                </div>
                <span className="text-[#A675FF] text-[10px]">ACTIVE WORKFLOW</span>
              </div>

              {/* Dynamic Content Rendering based on Step */}
              <div className="my-6 space-y-4">
                {currentStep.previewType === "radar" && (
                  <div className="space-y-3">
                    <div className="text-amber-400">&gt; INITIALIZING SKILL RADAR SCAN...</div>
                    <div className="space-y-2 text-white/80">
                      <div>Data Structures &amp; Algorithms: [██████████████░░] 84%</div>
                      <div>System Architecture &amp; Scale: [████████████████] 96%</div>
                      <div>React Fiber &amp; State Concurrency: [████████████████] 98%</div>
                      <div>Memory Management &amp; Closures: [██████████████░░] 88%</div>
                    </div>
                    <div className="p-3 rounded bg-[#7B2DFF]/20 border border-[#7B2DFF]/40 text-[#A675FF]">
                      ★ DIAGNOSTIC VERDICT: Ready for Stripe L5 &amp; Vercel Senior Frontend interview loops.
                    </div>
                  </div>
                )}

                {currentStep.previewType === "terminal" && (
                  <div className="space-y-3">
                    <div className="text-green-400">&gt; CONNECTED TO AI VOICE COACH (MODEL V4.2)...</div>
                    <p className="text-white/80 italic">
                      &quot;Candidate, how would you prevent state tearing in React 19 when consuming external stores under high mutation load?&quot;
                    </p>
                    <div className="p-3 rounded bg-white/5 border border-white/10 text-emerald-400">
                      ✔ AI EVALUATION: &quot;Correctly cited useSyncExternalStore with server snapshot fallback.&quot;
                    </div>
                  </div>
                )}

                {currentStep.previewType === "resume" && (
                  <div className="space-y-3">
                    <div className="text-cyan-400">&gt; ATS RECRUITER PARSER CHECK...</div>
                    <div className="space-y-1 text-white/80">
                      <p>✓ Quantified Outcomes: &quot;Reduced LCP by 42% across 2M daily users&quot;</p>
                      <p>✓ Tech Stack Keywords: Next.js 15, TypeScript, WebAssembly, Tailwind</p>
                      <p>✓ FAANG Recruiter Rating: Top 1.5% percentile</p>
                    </div>
                  </div>
                )}

                {currentStep.previewType === "matchmaking" && (
                  <div className="space-y-3">
                    <div className="text-[#A675FF]">&gt; MATCHMAKING PIPELINE ACTIVE...</div>
                    <div className="p-3 rounded bg-[#7B2DFF]/20 border border-[#7B2DFF]/40 space-y-2">
                      <div className="flex justify-between">
                        <span className="font-bold text-white">Stripe — Staff UI Engineer</span>
                        <span className="text-[#22C55E]">MATCH SCORE: 98%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold text-white">Vercel — Principal Frontend</span>
                        <span className="text-[#22C55E]">MATCH SCORE: 96%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-between text-[11px] text-white/50">
                <span>SECURITY: ENCRYPTED</span>
                <span>SYSTEM STATUS: OPERATIONAL</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
