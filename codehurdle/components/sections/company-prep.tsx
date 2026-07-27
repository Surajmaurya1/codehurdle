"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Search, 
  TrendingUp, 
  FileCheck2, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  LockOpen
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const COMPANIES = [
  {
    name: "Google",
    tagline: "L3 / L4 / L5 Software Engineer",
    logoText: "GOOGLE",
    questionsCount: 142,
    experiencesCount: 88,
    passRate: "94%",
    topTopics: ["Graphs", "Dynamic Programming", "Trees & BST", "Sliding Window"],
    sampleQuestion: "Serialize and Deserialize N-ary Tree",
    freqScore: "Very High",
  },
  {
    name: "Meta",
    tagline: "E4 / E5 Software Engineer",
    logoText: "META",
    questionsCount: 168,
    experiencesCount: 104,
    passRate: "96%",
    topTopics: ["Binary Search", "Two Pointers", "Monotonic Queue", "Subsets"],
    sampleQuestion: "Minimum Remove to Make Valid Parentheses",
    freqScore: "Extreme",
  },
  {
    name: "Amazon",
    tagline: "SDE 1 / SDE 2 / SDE 3",
    logoText: "AMAZON",
    questionsCount: 195,
    experiencesCount: 140,
    passRate: "91%",
    topTopics: ["BFS / DFS", "Priority Queue", "Greedy", "String Parsing"],
    sampleQuestion: "Analyze User Website Visit Pattern",
    freqScore: "Very High",
  },
  {
    name: "Microsoft",
    tagline: "SDE 59 - 63",
    logoText: "MICROSOFT",
    questionsCount: 128,
    experiencesCount: 76,
    passRate: "93%",
    topTopics: ["Arrays & Matrices", "Linked Lists", "Trees", "System Design"],
    sampleQuestion: "Sign of the Product of an Array",
    freqScore: "High",
  },
  {
    name: "Stripe",
    tagline: "L2 / L3 Software Engineer",
    logoText: "STRIPE",
    questionsCount: 110,
    experiencesCount: 62,
    passRate: "95%",
    topTopics: ["API Design", "Rate Limiter", "Financial Calculations", "Parsing"],
    sampleQuestion: "Parse HTTP Accept-Language Header",
    freqScore: "High",
  },
  {
    name: "Uber",
    tagline: "L4 / L5 Software Engineer",
    logoText: "UBER",
    questionsCount: 94,
    experiencesCount: 45,
    passRate: "92%",
    topTopics: ["Spatial Graphs", "Intervals", "Heap / Priority Queue", "Trie"],
    sampleQuestion: "Reconstruct Itinerary / Bus Routes",
    freqScore: "High",
  },
  {
    name: "Adobe",
    tagline: "Member of Tech Staff",
    logoText: "ADOBE",
    questionsCount: 86,
    experiencesCount: 39,
    passRate: "90%",
    topTopics: ["Matrix Rotation", "Stack Operations", "Bitwise", "Dynamic Programming"],
    sampleQuestion: "Rotate Image 90 Degrees In-Place",
    freqScore: "Medium",
  },
  {
    name: "Atlassian",
    tagline: "P30 / P40 Software Engineer",
    logoText: "ATLASSIAN",
    questionsCount: 72,
    experiencesCount: 34,
    passRate: "94%",
    topTopics: ["Rate Limiter", "Object Oriented Design", "Lru Cache", "Strings"],
    sampleQuestion: "Design File System with Key Tagging",
    freqScore: "Medium",
  },
];

export function CompanyPrep() {
  const [selectedCompany, setSelectedCompany] = useState("Google");
  const activeCompany = COMPANIES.find((c) => c.name === selectedCompany) || COMPANIES[0];

  return (
    <section id="companies" className="py-24 relative overflow-hidden border-t border-border/50 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="purple" className="px-3 py-1 text-xs">
            COMPANY-WISE PREPARATION
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Target Your Dream Company.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Practice actual questions asked in recent interview cycles at Google, Meta, Amazon, Stripe, Uber, Microsoft and more.
          </p>
        </div>

        {/* Company Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {COMPANIES.map((c) => {
            const isSelected = selectedCompany === c.name;
            return (
              <button
                key={c.name}
                onClick={() => setSelectedCompany(c.name)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#7B2DFF] text-white shadow-md"
                    : "bg-surface border border-border text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        {/* Main Company Highlight Panel */}
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Company Stats & Meta */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#7B2DFF] font-bold uppercase tracking-wider block">
                    TARGET COMPANY HUB
                  </span>
                  <h3 className="text-3xl font-extrabold text-foreground mt-1">
                    {activeCompany.name} Interview Kit
                  </h3>
                  <p className="text-xs text-foreground-muted mt-0.5">{activeCompany.tagline}</p>
                </div>

                <Badge variant="purple" className="text-xs font-mono">
                  {activeCompany.freqScore} Frequency
                </Badge>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl border border-border bg-background space-y-1">
                  <span className="text-[10px] font-mono text-foreground-muted uppercase block">Tagged Questions</span>
                  <div className="text-xl font-bold font-mono text-foreground">{activeCompany.questionsCount}</div>
                  <span className="text-[10px] text-emerald-500 font-semibold">Updated 2 days ago</span>
                </div>

                <div className="p-3.5 rounded-xl border border-border bg-background space-y-1">
                  <span className="text-[10px] font-mono text-foreground-muted uppercase block">Real Experiences</span>
                  <div className="text-xl font-bold font-mono text-foreground">{activeCompany.experiencesCount}</div>
                  <span className="text-[10px] text-foreground-muted">Verified Candidates</span>
                </div>

                <div className="p-3.5 rounded-xl border border-border bg-background space-y-1">
                  <span className="text-[10px] font-mono text-foreground-muted uppercase block">Curriculum Match</span>
                  <div className="text-xl font-bold font-mono text-[#7B2DFF]">{activeCompany.passRate}</div>
                  <span className="text-[10px] text-foreground-muted">Question Accuracy</span>
                </div>
              </div>

              {/* Top Tagged Topics */}
              <div>
                <span className="text-xs font-mono text-foreground-muted uppercase block mb-2">
                  Highest Weightage Topics at {activeCompany.name}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCompany.topTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg border border-border bg-background text-xs font-medium text-foreground flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7B2DFF]" />
                      <span>{topic}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sample Live Experience Card */}
            <div className="lg:col-span-5">
              <Card className="p-5 bg-background border-border space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-xs font-mono text-[#22C55E] flex items-center gap-1.5 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                    RECENT DEBRIEF LOG
                  </span>
                  <span className="text-[11px] font-mono text-foreground-muted">L5 Offer Secured</span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-foreground-muted uppercase">Sample Question Asked:</span>
                  <div className="p-3 rounded-lg bg-surface border border-border text-xs font-mono text-foreground font-semibold">
                    "{activeCompany.sampleQuestion}"
                  </div>
                </div>

                <div className="text-xs text-foreground-muted leading-relaxed italic">
                  "CodeHurdle's pattern breakdown matched the exact problem variation I got in Round 2. The memory complexity optimization tip saved my interview!"
                </div>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-border">
                  <span className="font-mono text-foreground-muted">Candidate: Anonymous SDE</span>
                  <span className="text-[#7B2DFF] font-semibold flex items-center gap-1">
                    View Full Debrief <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Card>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
