"use client";

import React from "react";
import Link from "next/link";
import { CodeHurdleLogo } from "@/components/icons/codehurdle-logo";

const FOOTER_NAV = [
  {
    title: "Curriculum",
    links: [
      { label: "Data Structures", href: "#topics" },
      { label: "14 Coding Patterns", href: "#patterns" },
      { label: "Company Question Kits", href: "#companies" },
      { label: "System Design Basics", href: "#topics" },
      { label: "Dynamic Programming", href: "#patterns" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Online Compiler Sandbox", href: "#practice" },
      { label: "Progress Dashboard", href: "#dashboard" },
      { label: "Voice AI Mock Interviews", href: "#mock-interviews" },
      { label: "Real Interview Experiences", href: "#companies" },
      { label: "Blind 75 & NeetCode 150", href: "#topics" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why CodeHurdle", href: "#why-codehurdle" },
      { label: "Student Success Stories", href: "#testimonials" },
      { label: "Changelog", href: "#overview" },
      { label: "Careers", href: "#overview" },
      { label: "Contact Support", href: "#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 text-xs text-foreground-muted">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <CodeHurdleLogo className="h-7" />
            </Link>

            <p className="text-xs text-foreground-muted max-w-sm leading-relaxed">
              The best place to learn Data Structures, Algorithms, most asked coding interview questions, and real interview experiences.
            </p>
          </div>

          {/* Nav Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_NAV.map((col, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div className="flex flex-col gap-1">
            <span>
              © {new Date().getFullYear()}{" "}
              <a 
                href="mailto:surajmaurya.pvt@gmail.com" 
                className="hover:text-foreground transition-colors underline decoration-dotted underline-offset-4"
              >
                surajmaurya
              </a>
              . All rights reserved.
            </span>
            <span className="text-[10px] text-foreground-muted/70 font-sans">
              This is purely for assignment purpose demo. Using code without permission is not allowed.
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="#faq" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#faq" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#faq" className="hover:text-foreground transition-colors">
              Security
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
