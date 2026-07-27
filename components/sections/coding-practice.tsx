"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Clock, 
  Terminal as TerminalIcon,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LANGUAGES = [
  { id: "cpp", name: "C++ 20" },
  { id: "python", name: "Python 3.12" },
  { id: "java", name: "Java 21" },
  { id: "typescript", name: "TypeScript 5.4" },
  { id: "go", name: "Go 1.22" },
];

const SAMPLE_CODE = {
  python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []`,
  cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> seen;
        for (int i = 0; i < nums.size(); ++i) {
            int comp = target - nums[i];
            if (seen.count(comp)) return {seen[comp], i};
            seen[nums[i]] = i;
        }
        return {};
    }
};`,
  java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int comp = target - nums[i];
            if (map.containsKey(comp)) return new int[] { map.get(comp), i };
            map.put(nums[i], i);
        }
        return new int[0];
    }
}`,
  typescript: `function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement)!, i];
    map.set(nums[i], i);
  }
  return [];
}`,
  go: `func twoSum(nums []int, target int) []int {
    seen := make(map[int]int)
    for i, num := range nums {
        if idx, ok := seen[target-num]; ok {
            return []int{idx, i}
        }
        seen[num] = i
    }
    return nil
}`,
};

export function CodingPractice() {
  const [selectedLang, setSelectedLang] = useState<keyof typeof SAMPLE_CODE>("python");
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 600);
  };

  return (
    <section id="practice" className="py-28 relative overflow-hidden border-t border-border/40 bg-background">
      
      {/* Background Soft Accent Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#7B2DFF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Production-Grade Online Compiler.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Write, execute, and benchmark solutions in a low-latency environment with instant automated test evaluation.
          </p>
        </div>

        {/* Single Focal Point: Large Terminal Showcase Window */}
        <div className="rounded-2xl border border-border bg-[#09090B] text-[#F4F4F6] overflow-hidden shadow-2xl relative">
          
          {/* Terminal Window Header */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#111113] border-b border-white/10 gap-4">
            
            {/* Dots + Sandbox Title */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-[#A1A1AA] ml-2 font-semibold">
                sandbox_v8_execution.py
              </span>
            </div>

            {/* Language Switcher Tabs */}
            <div className="flex items-center gap-1 bg-[#19191D] p-1 rounded-lg border border-white/10">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLang(lang.id as keyof typeof SAMPLE_CODE)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                    selectedLang === lang.id
                      ? "bg-[#7B2DFF] text-white font-bold"
                      : "text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            {/* Run Button */}
            <Button
              variant="purpleGlow"
              size="sm"
              onClick={handleRunCode}
              disabled={isRunning}
              className="gap-2 font-mono text-xs cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isRunning ? "Executing..." : "Run Solution"}</span>
            </Button>
          </div>

          {/* Terminal Code Body */}
          <div className="p-6 font-mono text-xs overflow-x-auto min-h-[260px] bg-[#09090B]">
            <pre className="text-purple-300/90 leading-relaxed whitespace-pre-wrap">
              <code>{SAMPLE_CODE[selectedLang]}</code>
            </pre>
          </div>

          {/* Floating Floating Badges & Execution Status Bar */}
          <div className="px-6 py-4 bg-[#111113] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A1A1AA]">
            
            <div className="flex items-center gap-4">
              <span className="text-[#22C55E] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>35/35 TEST CASES PASSED</span>
              </span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="hidden sm:inline text-white">Execution: 0.4ms</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#7B2DFF]/20 text-[#A675FF] border border-[#7B2DFF]/30">
                Time: O(N) Optimal
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white border border-white/10">
                Memory: 14.2 MB (Top 98.4%)
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
