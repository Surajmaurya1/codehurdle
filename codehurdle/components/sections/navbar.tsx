"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { CodeHurdleLogo } from "@/components/icons/codehurdle-logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigation";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Smooth, jitter-free scroll hide/show — uses rAF + hysteresis
  useEffect(() => {
    const HIDE_THRESHOLD = 80;    // px before we start hiding
    const SHOW_DELTA = 10;        // scroll up by this many px to show
    const HIDE_DELTA = 14;        // scroll down by this many px to hide

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const diff = currentY - lastScrollY.current;

        setIsScrolled(currentY > 20);

        if (currentY < HIDE_THRESHOLD) {
          // Always visible at top
          setNavVisible(true);
        } else if (diff > HIDE_DELTA) {
          // Scrolling down fast enough — hide
          setNavVisible(false);
          setMobileMenuOpen(false);
        } else if (diff < -SHOW_DELTA) {
          // Scrolling up fast enough — show
          setNavVisible(true);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section highlighting (zero scroll event churn)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_LINKS.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Floating Glass Header — CSS transition for buttery-smooth hide/show */}
      <header
        className={cn(
          "fixed top-4 left-0 right-0 z-40 mx-auto max-w-6xl px-4 pointer-events-none",
          "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          navVisible ? "translate-y-0" : "-translate-y-[calc(100%+24px)]"
        )}
      >
        <div
          className={cn(
            "pointer-events-auto glass-panel rounded-2xl px-4 py-2.5 flex items-center justify-between",
            "transition-all duration-300",
            isScrolled
              ? "shadow-[0_10px_30px_rgba(0,0,0,0.18)] border-[#7B2DFF]/30"
              : "border-border"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <CodeHurdleLogo className="h-7" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 bg-surface-hover/60 p-1 rounded-xl border border-border/50"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors",
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-foreground-muted hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-[#7B2DFF]/15 border border-[#7B2DFF]/30 rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="#terminal"
              className={cn(
                buttonVariants({ variant: "primary", size: "sm" }),
                "hidden sm:inline-flex gap-1.5 font-semibold text-xs shadow-md"
              )}
            >
              <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>Start Practicing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl glass-panel p-6 md:hidden shadow-2xl border-[#7B2DFF]/30"
          >
            <nav aria-label="Mobile navigation">
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-foreground-muted hover:text-[#7B2DFF] py-2 border-b border-border/40 flex items-center justify-between transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-foreground-muted" />
                  </Link>
                ))}
                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href="#terminal"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      buttonVariants({ variant: "primary" }),
                      "w-full justify-center gap-2"
                    )}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Start Free Trial</span>
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
