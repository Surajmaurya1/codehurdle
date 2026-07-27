"use client";

import React, { useState } from "react";
import { Terminal as TerminalIcon, Play, CheckCircle2, RefreshCw, Cpu, Award } from "lucide-react";
import { TERMINAL_STEPS } from "@/constants/content";
import { Button } from "@/components/ui/button";

export function InterviewTerminal() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(true);

  const scenario = TERMINAL_STEPS[currentScenarioIndex];

  const handleRunEvaluation = () => {
    setIsExecuting(true);
    setShowEvaluation(false);

    setTimeout(() => {
      setIsExecuting(false);
      setShowEvaluation(true);
    }, 1200);
  };

  return (
    <section id="terminal" className="py-20 border-b border-border bg-[#09090B] text-white relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B2DFF]/20 border border-[#7B2DFF]/40 text-xs font-mono text-[#A675FF]">
            <TerminalIcon className="w-3.5 h-3.5 text-[#7B2DFF]" />
            <span>INTERACTIVE REAL-TIME TERMINAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Test Your Knowledge in Our Live Terminal
          </h2>

          <p className="text-foreground-muted text-sm sm:text-base leading-relaxed">
            Experience the exact environment used during FAANG and unicorn engineering interviews. Run code evaluations, inspect performance profiles, and get instant feedback.
          </p>
        </div>

        {/* Scenario Switcher Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {TERMINAL_STEPS.map((step, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentScenarioIndex(idx);
                setShowEvaluation(true);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                currentScenarioIndex === idx
                  ? "bg-[#7B2DFF] text-white border-[#A675FF] font-bold shadow-[0_0_20px_rgba(123,45,255,0.4)]"
                  : "bg-surface border-border text-foreground-muted hover:text-white"
              }`}
            >
              Scenario 0{idx + 1}: {step.category}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#09090B] border border-[#7B2DFF]/40 shadow-[0_0_50px_rgba(123,45,255,0.2)] overflow-hidden font-mono">
          
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111113] border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-foreground-muted">bash — 80x24</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#7B2DFF]/20 text-[#A675FF]">
                {scenario.difficulty} LEVEL
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRunEvaluation}
                disabled={isExecuting}
                className="h-7 text-xs gap-1 border-white/20 text-white hover:bg-[#7B2DFF]"
              >
                {isExecuting ? (
                  <RefreshCw className="w-3 h-3 animate-spin" />
                ) : (
                  <Play className="w-3 h-3 fill-current text-[#22C55E]" />
                )}
                <span>{isExecuting ? "Evaluating..." : "Run Evaluation"}</span>
              </Button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 space-y-6 text-xs sm:text-sm leading-relaxed overflow-x-auto">
            
            {/* Command Prompt */}
            <div className="flex items-center gap-2 text-green-400 font-bold">
              <span>$</span>
              <span>{scenario.command}</span>
            </div>

            {/* Question Title Box */}
            <div className="p-4 rounded-xl bg-surface border border-border space-y-1">
              <div className="text-[11px] text-[#A675FF] font-semibold uppercase tracking-wider">
                Question 1: {scenario.category}
              </div>
              <div className="text-base font-bold text-white font-sans">
                {scenario.questionTitle}
              </div>
            </div>

            {/* Candidate Code Submission Snippet */}
            <div className="space-y-2">
              <div className="text-xs text-foreground-muted flex items-center justify-between">
                <span>CANDIDATE CODE SUBMISSION:</span>
                <span className="text-[#22C55E]">SYNTAX: VALID</span>
              </div>
              <pre className="p-4 rounded-xl bg-[#111113] border border-white/10 text-purple-200 overflow-x-auto">
                <code>{scenario.userCodeSnippet}</code>
              </pre>
            </div>

            {/* Execution Loading state */}
            {isExecuting && (
              <div className="p-4 rounded-xl bg-[#7B2DFF]/10 border border-[#7B2DFF]/30 flex items-center gap-3 text-white">
                <RefreshCw className="w-5 h-5 text-[#7B2DFF] animate-spin" />
                <div>
                  <div className="font-bold">Executing WebAssembly Sandbox &amp; AI Diagnostic Engine...</div>
                  <div className="text-xs text-foreground-muted">Checking time complexity, memory allocation, and edge cases.</div>
                </div>
              </div>
            )}

            {/* Output Logs & Evaluation Result Bar */}
            {showEvaluation && !isExecuting && (
              <div className="space-y-4 pt-2">
                
                {/* Console Logs */}
                <div className="space-y-1 text-xs text-foreground-muted">
                  {scenario.outputLog.map((log, i) => (
                    <div key={i}>{log}</div>
                  ))}
                </div>

                {/* Simulated Progress Bar: ██████████ */}
                <div className="p-4 rounded-xl bg-[#111113] border border-[#7B2DFF]/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#7B2DFF]" />
                      <span>ANSWER EVALUATED — CONFIDENCE SCORE</span>
                    </span>
                    <span className="font-bold text-xl text-[#22C55E]">
                      {scenario.confidenceScore}%
                    </span>
                  </div>

                  {/* Progress Meter Bar */}
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#7B2DFF] via-[#A675FF] to-[#22C55E] rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                      style={{ width: `${scenario.confidenceScore}%` }}
                    />
                  </div>

                  {/* Feedback Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-2.5 rounded bg-surface border border-border">
                      <div className="text-[#A675FF] font-semibold">Correctness:</div>
                      <div className="text-foreground-muted mt-0.5">{scenario.feedback.correctness}</div>
                    </div>
                    <div className="p-2.5 rounded bg-surface border border-border">
                      <div className="text-[#A675FF] font-semibold">Complexity:</div>
                      <div className="text-foreground-muted mt-0.5">{scenario.feedback.complexity}</div>
                    </div>
                    <div className="p-2.5 rounded bg-surface border border-border">
                      <div className="text-[#A675FF] font-semibold">Edge Cases:</div>
                      <div className="text-foreground-muted mt-0.5">{scenario.feedback.edgeCases}</div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Prompt blinking cursor */}
            <div className="flex items-center gap-2 text-foreground-muted text-xs pt-2">
              <span>codehurdle@sandbox:~ $</span>
              <span className="w-2 h-4 bg-[#7B2DFF] animate-blink" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
