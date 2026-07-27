"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Terminal as TerminalIcon, 
  Play, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Clock, 
  ShieldCheck, 
  RotateCcw,
  Sparkles,
  BarChart3,
  FileCode
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LANGUAGES = [
  { id: "cpp", name: "C++ 20", icon: "⚙️" },
  { id: "python", name: "Python 3.12", icon: "🐍" },
  { id: "java", name: "Java 21", icon: "☕" },
  { id: "typescript", name: "TypeScript 5.4", icon: "🟦" },
  { id: "go", name: "Go 1.22", icon: "🐹" },
];

const SAMPLE_CODE = {
  cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
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
  python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []`,
  java: `import java.util.HashMap;

class Solution {
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
  const [testResult, setTestResult] = useState({
    passed: true,
    total: 35,
    executionTime: "0.4ms",
    memoryUsed: "14.2 MB",
    percentile: "98.4%",
  });

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 600);
  };

  return (
    <section id="practice" className="py-24 relative overflow-hidden border-t border-border/50 bg-surface/30">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="purple" className="px-3 py-1 text-xs">
            INTERACTIVE CODING PRACTICE
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Production-Grade Online Compiler.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Write, test, and benchmark your code in a low-latency environment with instant automated test evaluation and memory profiling.
          </p>
        </div>

        {/* IDE Terminal Preview Card */}
        <div className="rounded-2xl border border-border bg-[#09090B] text-[#F4F4F6] overflow-hidden shadow-2xl">
          
          {/* Top Window Bar & Language Switcher */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#111113] border-b border-white/10 gap-3">
            {/* Window Dots */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-[#A1A1AA] ml-2 hidden sm:inline">
                CodeHurdle Sandbox Terminal
              </span>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1.5 bg-[#19191D] p-1 rounded-lg border border-white/10">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLang(lang.id as keyof typeof SAMPLE_CODE)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                    selectedLang === lang.id
                      ? "bg-[#7B2DFF] text-white font-bold"
                      : "text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="purpleGlow"
                size="sm"
                onClick={handleRunCode}
                disabled={isRunning}
                className="gap-1.5 font-mono text-xs cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? "Running..." : "Run & Submit"}</span>
              </Button>
            </div>
          </div>

          {/* Main IDE Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[320px]">
            
            {/* Code Editor Window */}
            <div className="lg:col-span-8 p-5 font-mono text-xs border-b lg:border-b-0 lg:border-r border-white/10 overflow-x-auto">
              <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] mb-4 pb-2 border-b border-white/10">
                <span>solution.{selectedLang === "python" ? "py" : selectedLang === "cpp" ? "cpp" : selectedLang === "java" ? "java" : selectedLang === "go" ? "go" : "ts"}</span>
                <span className="text-[#A675FF]">V8 Sandbox • Isolated Exec</span>
              </div>

              <pre className="text-purple-300/90 leading-relaxed whitespace-pre-wrap">
                <code>{SAMPLE_CODE[selectedLang]}</code>
              </pre>
            </div>

            {/* Execution Console & Test Cases Results */}
            <div className="lg:col-span-4 p-5 bg-[#0D0D10] flex flex-col justify-between space-y-4">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-2">
                  <span className="text-[#A1A1AA]">TEST SUITE RESULTS</span>
                  <span className="text-[#22C55E] font-bold">35/35 PASSED</span>
                </div>

                {/* Status Card */}
                <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>ACCEPTED • ALL TEST CASES PASSED</span>
                  </div>
                  <p className="text-[11px] text-[#A1A1AA]">
                    Your code beats <span className="text-white font-bold font-mono">{testResult.percentile}</span> of submissions.
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 text-[#A1A1AA]">
                    <span>Execution Time:</span>
                    <span className="text-white font-bold">{testResult.executionTime}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 text-[#A1A1AA]">
                    <span>Memory Usage:</span>
                    <span className="text-white font-bold">{testResult.memoryUsed}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 text-[#A1A1AA]">
                    <span>Time Complexity:</span>
                    <span className="text-[#A675FF] font-bold">O(N) Optimal</span>
                  </div>
                </div>
              </div>

              {/* Console Output Footer */}
              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-[#A1A1AA] flex items-center justify-between">
                <span>Compiler Status: Online</span>
                <span className="text-[#22C55E]">✓ Ready for Next Challenge</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
