"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, CheckCircle2, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden border-t border-border/40 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Trusted by Engineers Who Got Offers.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Real stories from candidates who used CodeHurdle to land senior roles at top tech companies.
          </p>
        </div>

        {/* Featured Spotlight Layout: 1 Large Hero Testimonial + 2 Supporting Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Large Hero Testimonial Spotlight Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-[#7B2DFF]/40 bg-surface flex flex-col justify-between space-y-8 relative overflow-hidden shadow-xl">
            
            {/* Top Stars & Offer Pill */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <Badge variant="purple" className="text-xs font-mono">
                L5 Offer Secured ($340k TC)
              </Badge>
            </div>

            {/* Large Quote */}
            <blockquote className="text-lg sm:text-xl font-medium text-foreground leading-relaxed italic">
              "CodeHurdle's pattern-based approach completely transformed how I prepare for tech interviews. Instead of memorizing 400+ questions, I mastered 14 core patterns and cleared my L5 onsite at Google with 4 Strong Hire ratings."
            </blockquote>

            {/* Profile Footer */}
            <div className="pt-6 border-t border-border/60 flex items-center gap-4">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                alt="Alex Rivera"
                width={48}
                height={48}
                sizes="48px"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#7B2DFF]"
              />
              <div>
                <h4 className="text-base font-bold text-foreground">Alex Rivera</h4>
                <p className="text-xs text-foreground-muted">Senior Software Engineer @ <span className="text-foreground font-semibold">Google</span></p>
                <span className="text-[11px] font-mono text-emerald-500">4 Months Preparation</span>
              </div>
            </div>

          </div>

          {/* 2 Supporting Candidate Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Supporting Card 1 */}
            <div className="p-6 rounded-2xl border border-border bg-background space-y-4 hover:border-border/80 transition-colors">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <Badge variant="easy" className="text-[10px]">Vercel Offer</Badge>
              </div>

              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed italic">
                "The interactive compiler environment and real interview experiences were spot on. I knew exactly what edge cases to watch for during live coding."
              </p>

              <div className="flex items-center gap-3 pt-2">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Sarah Chen"
                  width={36}
                  height={36}
                  sizes="36px"
                  className="w-9 h-9 rounded-full object-cover border border-border"
                />
                <div>
                  <h5 className="text-xs font-bold text-foreground">Sarah Chen</h5>
                  <p className="text-[11px] text-foreground-muted">Frontend Engineer @ Vercel</p>
                </div>
              </div>
            </div>

            {/* Supporting Card 2 */}
            <div className="p-6 rounded-2xl border border-border bg-background space-y-4 hover:border-border/80 transition-colors">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <Badge variant="purple" className="text-[10px]">Stripe Staff Offer</Badge>
              </div>

              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed italic">
                "The real interview experience logs shared on CodeHurdle gave me a 2-week head start on the specific system design questions Stripe asks."
              </p>

              <div className="flex items-center gap-3 pt-2">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Marcus Vance"
                  width={36}
                  height={36}
                  sizes="36px"
                  className="w-9 h-9 rounded-full object-cover border border-border"
                />
                <div>
                  <h5 className="text-xs font-bold text-foreground">Marcus Vance</h5>
                  <p className="text-[11px] text-foreground-muted">Staff Infra Engineer @ Stripe</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
