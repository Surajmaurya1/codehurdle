"use client";

import React from "react";
import Link from "next/link";
import { CodeHurdleLogo } from "@/components/icons/codehurdle-logo";
import { NAV_LINKS } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-12 relative text-xs">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <CodeHurdleLogo className="h-7" />
            <p className="text-foreground-muted leading-relaxed max-w-sm">
              The premier technical interview acceleration platform built for senior &amp; staff software engineers targeting top product companies.
            </p>
            
            {/* System Status Ping */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[11px] font-mono text-[#22C55E]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
              <span>● All Systems Operational (v1.0-beta)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono font-bold text-foreground uppercase tracking-wider text-[11px]">
              Platform Navigation
            </div>
            <ul className="space-y-2 text-foreground-muted">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#7B2DFF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Socials */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono font-bold text-foreground uppercase tracking-wider text-[11px]">
              Engineering Resources
            </div>
            <ul className="space-y-2 text-foreground-muted">
              <li>
                <a href="#why-codehurdle" className="hover:text-[#7B2DFF] transition-colors">
                  Staff Frontend Architecture Guide 2026
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-[#7B2DFF] transition-colors">
                  Real-Time Voice AI Interview Simulator
                </a>
              </li>
              <li>
                <a href="#why-codehurdle" className="hover:text-[#7B2DFF] transition-colors">
                  ATS Resume Metric Optimizing Rubric
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#7B2DFF] transition-colors">
                  FAANG Compensation &amp; Offer Playbook
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Hairline Strip */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-foreground-muted gap-4">
          <div>
            © {new Date().getFullYear()} CodeHurdle Inc. All rights reserved. Handcrafted for senior engineers.
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#overview" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#overview" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#overview" className="hover:text-foreground transition-colors">Security Audit</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
