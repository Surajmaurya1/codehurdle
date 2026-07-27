"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { newsletterSchema, NewsletterFormValues } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (data: NewsletterFormValues) => {
    console.log("Newsletter signup:", data);
    setSubmitted(true);
  };

  return (
    <section className="py-24 border-b border-border bg-[#09090B] text-white relative overflow-hidden">
      
      {/* Animated Purple Energy Beam Background */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#7B2DFF] to-transparent shadow-[0_0_25px_#7B2DFF]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B2DFF]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B2DFF]/20 border border-[#7B2DFF]/40 text-xs font-mono text-[#A675FF] shadow-[0_0_15px_rgba(123,45,255,0.3)]">
          <Sparkles className="w-3.5 h-3.5 text-[#7B2DFF] animate-pulse" />
          <span>JOIN 150,000+ HIGH-PERFORMING ENGINEERS</span>
        </div>

        {/* Huge Typography */}
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15] font-sans">
          Ready to Pass Your Next <br />
          <span className="bg-gradient-to-r from-[#7B2DFF] via-[#A675FF] to-white bg-clip-text text-transparent">
            Technical Hurdle?
          </span>
        </h2>

        <p className="text-foreground-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Start your 14-day risk-free trial today. Gain instant access to all production roadmaps, voice AI mock interviews, and ATS resume scans.
        </p>

        {/* Signup Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-2 bg-surface p-2 rounded-2xl border border-[#7B2DFF]/30 shadow-xl">
              <input
                type="email"
                placeholder="Enter your engineer email..."
                {...register("email")}
                className="w-full px-4 py-3 bg-transparent text-sm text-white placeholder:text-foreground-muted focus:outline-none"
              />
              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto whitespace-nowrap gap-2 font-semibold text-sm"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </MagneticButton>
            </div>

            {errors.email && (
              <p className="text-xs text-red-400 text-left px-2">{errors.email.message}</p>
            )}
          </form>
        ) : (
          <div className="p-6 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/30 max-w-md mx-auto flex items-center justify-center gap-3 text-[#22C55E] font-semibold">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <span>Welcome aboard! Check your inbox for instant trial access.</span>
          </div>
        )}

        {/* Feature Checkmarks */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-foreground-muted font-mono">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>14-Day Money-Back Guarantee</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>No Credit Card Required</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Instant Access</span>
          </span>
        </div>

      </div>
    </section>
  );
}
