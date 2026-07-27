"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden border-t border-border/50 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-14 text-center space-y-8 relative overflow-hidden">
          
          {/* Subtle Accent Glow Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7B2DFF]/30 bg-[#7B2DFF]/10 text-xs font-mono text-[#A675FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#7B2DFF]" />
            <span>START PREPARING TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
            Ready to Master DSA & Land Your Next Offer?
          </h2>

          <p className="text-base sm:text-lg text-foreground-muted max-w-xl mx-auto leading-relaxed">
            Join 150,000+ software engineers mastering algorithms, company questions, and real interview patterns on CodeHurdle.
          </p>

          {/* Email Signup Input Form */}
          <div className="max-w-md mx-auto pt-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-[#7B2DFF]"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto h-11 px-6 text-sm font-semibold whitespace-nowrap gap-1.5 cursor-pointer"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold flex items-center justify-center gap-2 font-mono">
                <CheckCircle2 className="w-5 h-5" />
                <span>Account created! Redirecting to dashboard...</span>
              </div>
            )}
          </div>

          {/* Guarantee Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-foreground-muted font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>14-Day Free Access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Instant Compiler Access</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
