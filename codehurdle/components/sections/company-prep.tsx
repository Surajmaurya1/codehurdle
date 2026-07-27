"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const COMPANIES = [
  {
    name: "Google",
    logoText: "GOOGLE",
    level: "L3 - L5",
    questionsCount: 142,
    prepTime: "3-4 Weeks",
    difficulty: "Hard",
    topTopics: ["Graphs", "DP", "Trees"],
  },
  {
    name: "Meta",
    logoText: "META",
    level: "E4 - E5",
    questionsCount: 168,
    prepTime: "3 Weeks",
    difficulty: "Medium-Hard",
    topTopics: ["Binary Search", "Two Pointers"],
  },
  {
    name: "Stripe",
    logoText: "STRIPE",
    level: "L2 - L3",
    questionsCount: 110,
    prepTime: "2-3 Weeks",
    difficulty: "Medium",
    topTopics: ["API Design", "Rate Limiter"],
  },
  {
    name: "Amazon",
    logoText: "AMAZON",
    level: "SDE 1 - 2",
    questionsCount: 195,
    prepTime: "4 Weeks",
    difficulty: "Medium",
    topTopics: ["BFS/DFS", "Priority Queue"],
  },
  {
    name: "Microsoft",
    logoText: "MICROSOFT",
    level: "Level 59-63",
    questionsCount: 128,
    prepTime: "2 Weeks",
    difficulty: "Medium",
    topTopics: ["Arrays", "Linked Lists"],
  },
  {
    name: "Uber",
    logoText: "UBER",
    level: "L4 - L5",
    questionsCount: 94,
    prepTime: "3 Weeks",
    difficulty: "Hard",
    topTopics: ["Graphs", "Intervals"],
  },
  {
    name: "Atlassian",
    logoText: "ATLASSIAN",
    level: "P30 - P40",
    questionsCount: 72,
    prepTime: "2 Weeks",
    difficulty: "Medium",
    topTopics: ["OOD Design", "LRU Cache"],
  },
  {
    name: "Adobe",
    logoText: "ADOBE",
    level: "MTS / Senior",
    questionsCount: 86,
    prepTime: "2 Weeks",
    difficulty: "Medium",
    topTopics: ["Matrix", "Stack"],
  },
];

export function CompanyPrep() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="companies" className="py-28 relative overflow-hidden border-t border-border/40 bg-surface/20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Target Your Dream Company.
            </h2>
            
            <p className="text-sm sm:text-base text-foreground-muted max-w-xl">
              Company-specific question kits, actual interview frequencies, and prep timelines.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="rounded-full w-9 h-9 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="rounded-full w-9 h-9 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel Container */}
        <div
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {COMPANIES.map((company, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[280px] sm:w-[320px] p-6 rounded-2xl border border-border bg-background hover:border-[#7B2DFF]/40 transition-all duration-200 space-y-4"
            >
              {/* Top Row: Company Logo & Difficulty */}
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#7B2DFF]" />
                  <h3 className="text-base font-bold text-foreground font-mono">{company.name}</h3>
                </div>
                <Badge variant={company.difficulty === "Hard" ? "hard" : "medium"}>
                  {company.difficulty}
                </Badge>
              </div>

              {/* Level & Prep Time */}
              <div className="space-y-1 text-xs font-mono">
                <div className="flex items-center justify-between text-foreground-muted">
                  <span>Target Role:</span>
                  <span className="text-foreground font-semibold">{company.level}</span>
                </div>
                <div className="flex items-center justify-between text-foreground-muted">
                  <span>Est. Prep Time:</span>
                  <span className="text-[#A675FF] font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {company.prepTime}
                  </span>
                </div>
                <div className="flex items-center justify-between text-foreground-muted">
                  <span>Tagged Questions:</span>
                  <span className="text-foreground font-semibold">{company.questionsCount}+ Qs</span>
                </div>
              </div>

              {/* Top Topics */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-foreground-muted uppercase block mb-1.5">
                  High Weightage Topics:
                </span>
                <div className="flex flex-wrap gap-1">
                  {company.topTopics.map((topic, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-surface border border-border/60 font-mono text-foreground font-medium">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-[#7B2DFF] font-semibold">
                <span>View Question Kit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
