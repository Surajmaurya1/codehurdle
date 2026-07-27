"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Senior Software Engineer @ Google (L5)",
    previousRole: "Mid-level Engineer @ Regional Bank",
    timeline: "4 Months Prep",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    company: "Google",
    quote: "CodeHurdle's pattern-based approach transformed how I prepare. Instead of memorizing 400+ questions, I mastered 14 patterns and cleared my L5 onsite at Google with 4 Strong Hire ratings.",
    highlight: "Secured L5 Offer ($340k TC)",
  },
  {
    name: "Sarah Chen",
    role: "Frontend Engineer @ Vercel",
    previousRole: "Junior Frontend Developer",
    timeline: "3 Months Prep",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    company: "Vercel",
    quote: "The interactive compiler environment and real interview experiences were spot on. I knew exactly what edge cases to watch for during the live coding rounds.",
    highlight: "Transitioned to Top Dev Tool Co",
  },
  {
    name: "Marcus Vance",
    role: "Staff Infrastructure Engineer @ Stripe",
    previousRole: "Backend Engineer @ Mid-stage Startup",
    timeline: "5 Months Prep",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    company: "Stripe",
    quote: "The real interview experience logs shared by candidates on CodeHurdle gave me a 2-week head start on the specific system design questions Stripe loves to ask.",
    highlight: "Promoted to Staff Level",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="purple" className="px-3 py-1 text-xs">
            STUDENT SUCCESS STORIES
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
            Trusted by Engineers Who Got Offers.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Real stories from candidates who used CodeHurdle to land senior and staff engineering roles at top tech companies.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col justify-between hover:border-[#7B2DFF]/40 transition-all duration-300">
                <div className="space-y-4">
                  
                  {/* Top rating & timeline pill */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <Badge variant="purple" className="text-[10px] font-mono">
                      {t.timeline}
                    </Badge>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Profile & Highlight Footer */}
                <div className="mt-6 pt-4 border-t border-border space-y-3">
                  <div className="p-2 rounded-lg bg-surface border border-border/60 flex items-center gap-1.5 text-xs text-[#7B2DFF] font-semibold font-mono">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.highlight}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border border-border"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                      <p className="text-[11px] text-foreground-muted">{t.role}</p>
                    </div>
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
