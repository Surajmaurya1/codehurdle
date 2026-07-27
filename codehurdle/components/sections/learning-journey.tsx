"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Layers, 
  Code, 
  Terminal, 
  Trophy, 
  ArrowRight,
  Sparkles,
  Clock,
  BookOpen
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const STAGES = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Data Structure Foundations",
    duration: "2-3 Weeks",
    description: "Master essential memory layouts, contiguous vs linked memory, and basic operations.",
    topics: ["Arrays & Dynamic Arrays", "Strings & ASCII Manipulation", "Singly & Doubly Linked Lists", "Stacks & Queues"],
    status: "Completed",
    codeSample: `// Linked List Reversal
function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Algorithmic Paradigms",
    duration: "3-4 Weeks",
    description: "Deep dive into tree traversals, graph recursion, binary search, and divide-and-conquer.",
    topics: ["Binary Trees & BST", "Graph Traversals (BFS/DFS)", "Binary Search Variants", "Heaps & Priority Queues"],
    status: "Active",
    codeSample: `// Binary Search (Lower Bound)
function binarySearch(nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    let mid = (low + high) >> 1;
    if (nums[mid] >= target) high = mid - 1;
    else low = mid + 1;
  }
  return low;
}`,
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "14 Core Coding Patterns",
    duration: "4 Weeks",
    description: "Recognize problem archetypes instantly to formulate optimal space-time solutions.",
    topics: ["Sliding Window & Two Pointers", "Fast & Slow Pointers", "Monotonic Stack", "Top K Elements & Subsets"],
    status: "Upcoming",
    codeSample: `// Sliding Window Maximum
function maxSlidingWindow(nums, k) {
  const deque = [], res = [];
  for (let i = 0; i < nums.length; i++) {
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) deque.pop();
    deque.push(i);
    if (deque[0] === i - k) deque.shift();
    if (i >= k - 1) res.push(nums[deque[0]]);
  }
  return res;
}`,
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Dynamic Programming & Greedy",
    duration: "3 Weeks",
    description: "Conquer state transitions, memoization tables, 1D/2D DP, and greedy choices.",
    topics: ["0/1 Knapsack & Unbounded", "Longest Common Subsequence", "Matrix Chain & Grid DP", "Interval Scheduling"],
    status: "Upcoming",
    codeSample: `// Coin Change (1D DP)
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (i >= c) dp[i] = Math.min(dp[i], dp[i - c] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
  },
  {
    id: 5,
    phase: "Phase 5",
    title: "Company-Wise & Real Interviews",
    duration: "2 Weeks",
    description: "Solve most asked questions tagged by recent Google, Meta, Stripe & Vercel interviews.",
    topics: ["Top 50 Google Questions", "Top 50 Meta Questions", "System Design Fundamentals", "Real Interview Simulation"],
    status: "Upcoming",
    codeSample: `// Real-Time Evaluation
const interviewOutcome = {
  correctness: "100%",
  timeComplexity: "O(N log N)",
  recommendation: "STRONG HIRE (L5/Senior)"
};`,
  },
];

export function LearningJourney() {
  const [selectedStage, setSelectedStage] = useState(1);
  const currentStage = STAGES.find((s) => s.id === selectedStage) || STAGES[0];

  return (
    <section id="journey" className="py-24 relative overflow-hidden border-t border-border/50 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="purple" className="px-3 py-1 text-xs">
            STRUCTURED ROADMAP
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            From Zero to Interview Ready.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            A guided, step-by-step curriculum engineered to build deep algorithmic intuition and problem-solving speed.
          </p>
        </div>

        {/* Roadmap Steps Indicator */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-10">
          {STAGES.map((stage) => {
            const isSelected = selectedStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-surface border-[#7B2DFF] shadow-sm"
                    : "bg-surface/50 border-border/60 hover:border-border hover:bg-surface"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? "text-[#7B2DFF] font-bold" : "text-foreground-muted"}`}>
                    {stage.phase}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#7B2DFF] animate-pulse" />}
                </div>
                <div className="text-xs font-semibold text-foreground line-clamp-1">
                  {stage.title}
                </div>
                <div className="flex items-center gap-1 mt-2 text-[11px] text-foreground-muted">
                  <Clock className="w-3 h-3" />
                  <span>{stage.duration}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Content Detail Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Stage Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#7B2DFF]/20 bg-[#7B2DFF]/10 text-xs font-mono text-[#A675FF]">
              <span>{currentStage.phase}: {currentStage.duration}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {currentStage.title}
            </h3>

            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
              {currentStage.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-foreground-muted">
                Key Modules & Concepts Covered:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentStage.topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg border border-border/60 bg-surface/60 text-xs text-foreground font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7B2DFF] shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code Snippet & Terminal Output */}
          <div className="lg:col-span-6">
            <Card className="overflow-hidden border-border bg-[#09090B] text-[#F4F4F6]">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#111113]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-[#A1A1AA]">
                  {currentStage.phase.toLowerCase()}_sample.js
                </span>
                <span className="text-[10px] font-mono text-[#22C55E]">OPTIMAL SOLUTION</span>
              </div>

              {/* Code Workspace */}
              <div className="p-5 font-mono text-xs overflow-x-auto min-h-[220px]">
                <pre className="text-purple-300/90 leading-relaxed whitespace-pre-wrap">
                  <code>{currentStage.codeSample}</code>
                </pre>
              </div>

              {/* Status Footer */}
              <div className="px-5 py-3 border-t border-white/10 bg-[#111113] flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                <span className="text-[#22C55E]">✓ Space: O(1) • Time: O(N)</span>
                <span>CodeHurdle Standard</span>
              </div>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
