"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Boxes, 
  Code2, 
  Cpu, 
  Layers, 
  Zap, 
  Clock, 
  Check, 
  ArrowRight,
  Terminal,
  Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PATTERNS = [
  {
    id: "sliding-window",
    name: "Sliding Window",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    description: "Maintain a dynamic window boundary over linear arrays/strings to track contiguous subsegments without recalculating overlapping elements.",
    problemCount: "48 Problems",
    useCases: ["Substrings with K distinct characters", "Maximum sum subarray of size K", "Longest non-repeating substring"],
    codeSnippet: `function minSubArrayLen(target, nums) {
  let left = 0, sum = 0, minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }
  return minLen === Infinity ? 0 : minLen;
}`,
  },
  {
    id: "two-pointers",
    name: "Two Pointers",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    description: "Iterate using two convergence or divergence indices (left & right) to process sorted sequences or identify pairs in linear time.",
    problemCount: "42 Problems",
    useCases: ["3Sum & 4Sum target search", "Trapping Rain Water", "Container With Most Water"],
    codeSnippet: `function twoSumSorted(numbers, target) {
  let l = 0, r = numbers.length - 1;
  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    else if (sum < target) l++;
    else r--;
  }
  return [];
}`,
  },
  {
    id: "binary-search",
    name: "Modified Binary Search",
    timeComplexity: "O(log N)",
    spaceComplexity: "O(1)",
    description: "Systematically halving monotonic or rotated search spaces to locate elements, bounds, or peak conditions in logarithmic time.",
    problemCount: "55 Problems",
    useCases: ["Search in Rotated Sorted Array", "Find Peak Element", "Kth Smallest Element in Sorted Matrix"],
    codeSnippet: `function searchRotated(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let m = (l + r) >> 1;
    if (nums[m] === target) return m;
    if (nums[l] <= nums[m]) {
      if (nums[l] <= target && target < nums[m]) r = m - 1;
      else l = m + 1;
    } else {
      if (nums[m] < target && target <= nums[r]) l = m + 1;
      else r = m - 1;
    }
  }
  return -1;
}`,
  },
  {
    id: "dfs-bfs",
    name: "DFS & BFS Traversals",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    description: "Exhaustive exploration of hierarchical nodes, graphs, and 2D grid meshes using recursion stacks or FIFO level-order queues.",
    problemCount: "64 Problems",
    useCases: ["Number of Islands", "Course Schedule topological ordering", "Word Ladder shortest path"],
    codeSnippet: `function numIslands(grid) {
  let count = 0;
  function dfs(r, c) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === '0') return;
    grid[r][c] = '0';
    dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1);
  }
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') { count++; dfs(r, c); }
    }
  }
  return count;
}`,
  },
  {
    id: "monotonic-stack",
    name: "Monotonic Stack",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    description: "Maintain strictly increasing or decreasing elements in a stack to find the next greater or smaller element in $O(1)$ amortized time.",
    problemCount: "32 Problems",
    useCases: ["Daily Temperatures", "Next Greater Element I & II", "Largest Rectangle in Histogram"],
    codeSnippet: `function dailyTemperatures(temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = []; // indices
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let idx = stack.pop();
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  return res;
}`,
  },
  {
    id: "dp-paradigm",
    name: "Dynamic Programming Patterns",
    timeComplexity: "O(N × M)",
    spaceComplexity: "O(N)",
    description: "Break complex optimization problems into overlapping subproblems with memoization tables and iterative bottom-up state transitions.",
    problemCount: "82 Problems",
    useCases: ["0/1 Knapsack & Subset Sum", "Longest Common Subsequence", "Edit Distance & Alignment"],
    codeSnippet: `function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i-1] === text2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
      else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[m][n];
}`,
  },
];

export function PatternLearning() {
  const [activePatternId, setActivePatternId] = useState("sliding-window");
  const activePattern = PATTERNS.find((p) => p.id === activePatternId) || PATTERNS[0];

  return (
    <section id="patterns" className="py-24 relative overflow-hidden border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="purple" className="px-3 py-1 text-xs">
            PATTERN-BASED CURRICULUM
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Master 14 Algorithmic Patterns.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Instead of memorizing 1,000 isolated solutions, learn the core structural blueprints that unlock hundreds of coding challenges.
          </p>
        </div>

        {/* Pattern Workspace Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Pattern Selector */}
          <div className="lg:col-span-5 space-y-2">
            {PATTERNS.map((p) => {
              const isSelected = activePatternId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePatternId(p.id)}
                  className={`w-full p-4 rounded-xl text-left border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-surface border-[#7B2DFF] shadow-sm"
                      : "bg-background border-border/60 hover:border-border hover:bg-surface/50"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${isSelected ? "text-[#7B2DFF]" : "text-foreground"}`}>
                        {p.name}
                      </span>
                    </div>
                    <p className="text-xs text-foreground-muted line-clamp-1">
                      {p.description}
                    </p>
                  </div>
                  <Badge variant="purple" className="text-[10px] font-mono shrink-0 ml-2">
                    {p.timeComplexity}
                  </Badge>
                </button>
              );
            })}
          </div>

          {/* Right Column: Code & Structural Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="p-6 bg-surface border-border space-y-6">
              
              {/* Top metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
                <div>
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span>{activePattern.name}</span>
                  </h3>
                  <p className="text-xs text-foreground-muted mt-0.5">{activePattern.problemCount} available to practice</p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <Badge variant="easy" className="px-2.5 py-1">Time: {activePattern.timeComplexity}</Badge>
                  <Badge variant="purple" className="px-2.5 py-1">Space: {activePattern.spaceComplexity}</Badge>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                {activePattern.description}
              </p>

              {/* Use Cases */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-foreground-muted uppercase block">Frequent Applications:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activePattern.useCases.map((useCase, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-background border border-border text-[11px] font-mono text-foreground flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7B2DFF]" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              <div className="rounded-xl border border-white/10 bg-[#09090B] p-4 font-mono text-xs text-[#F4F4F6]">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-[11px] text-[#A1A1AA]">
                  <span>PATTERN TEMPLATE: {activePattern.id}.js</span>
                  <span className="text-[#22C55E]">OPTIMAL TEMPLATE</span>
                </div>
                <pre className="text-green-400/90 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  <code>{activePattern.codeSnippet}</code>
                </pre>
              </div>

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
