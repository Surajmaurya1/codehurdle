"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Code2,
  Terminal,
  Trophy
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TIMELINE_STEPS = [
  {
    phase: "Phase 1: Beginner",
    title: "Data Structure Foundations",
    duration: "2-3 Weeks",
    description: "Master essential memory layouts, contiguous vs linked memory, and pointer mutations.",
    topics: ["Arrays & Dynamic Allocation", "Strings & ASCII Manipulation", "Singly & Doubly Linked Lists", "Stacks & Queues"],
    status: "Completed",
  },
  {
    phase: "Phase 2: Intermediate",
    title: "Algorithmic Paradigms & Searching",
    duration: "3-4 Weeks",
    description: "Deep dive into tree traversals, graph recursion, binary search bounds, and heaps.",
    topics: ["Binary Trees & BST", "Graph Traversals (BFS/DFS)", "Binary Search Variants", "Heaps & Priority Queues"],
    status: "Active",
  },
  {
    phase: "Phase 3: Advanced",
    title: "14 Core Coding Patterns & DP",
    duration: "4 Weeks",
    description: "Recognize problem archetypes instantly and solve 1D/2D Dynamic Programming state transitions.",
    topics: ["Sliding Window & Two Pointers", "Monotonic Stack & Queue", "0/1 Knapsack & Grid DP", "Interval Scheduling"],
    status: "Upcoming",
  },
  {
    phase: "Phase 4: Interview Ready",
    title: "Company Kits & Real Mock Simulations",
    duration: "2 Weeks",
    description: "Solve top tagged questions from Google, Meta, Stripe & Vercel with real-time rubric feedback.",
    topics: ["Top 50 Google Questions", "Top 50 Meta Questions", "System Design Fundamentals", "Mock Interview Simulations"],
    status: "Upcoming",
  },
];

export function LearningJourney() {
  return (
    <section id="journey" className="py-28 relative overflow-hidden border-t border-border/40 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            From Zero to Interview Ready.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            A guided, step-by-step vertical roadmap engineered to build deep algorithmic intuition.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-8 space-y-12 border-l-2 border-[#7B2DFF]/30 ml-4 sm:ml-8">
          
          {TIMELINE_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Bullet Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-background border-2 border-[#7B2DFF] flex items-center justify-center text-[#7B2DFF] shadow-[0_0_12px_rgba(123,45,255,0.4)]">
                <span className="w-2 h-2 rounded-full bg-[#7B2DFF]" />
              </div>

              {/* Step Content */}
              <div className="space-y-3">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-[#A675FF] font-bold uppercase tracking-wider">
                    {step.phase}
                  </span>
                  <span className="text-xs font-mono text-foreground-muted flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {step.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground-muted leading-relaxed max-w-xl">
                  {step.description}
                </p>

                {/* Topic Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {step.topics.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg border border-border bg-surface text-xs font-medium text-foreground flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
