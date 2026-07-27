"use client";

import React, { useEffect, useState, useRef } from "react";
import { STATS_DATA } from "@/constants/content";
import { useCountUp } from "@/hooks/use-count-up";

interface SingleStatProps {
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  isVisible: boolean;
}

function SingleStat({ numericValue, suffix, label, sublabel, isVisible }: SingleStatProps) {
  const [mounted, setMounted] = useState(false);
  const count = useCountUp(numericValue, 2200, isVisible);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayVal = !mounted
    ? (numericValue >= 1000 ? numericValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : numericValue.toString())
    : (numericValue >= 1000
        ? Math.floor(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : count.toFixed(numericValue % 1 !== 0 ? 1 : 0));

  return (
    <div className="p-8 rounded-2xl bg-surface border border-border flex flex-col items-center text-center space-y-2 hover:border-[#7B2DFF]/40 transition-all">
      <div className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-foreground">
        <span
          suppressHydrationWarning
          className="bg-gradient-to-r from-[#7B2DFF] via-[#A675FF] to-[#7B2DFF] bg-clip-text text-transparent"
        >
          {displayVal}
        </span>
        <span className="text-[#7B2DFF]">{suffix}</span>
      </div>
      <div className="text-base font-bold text-foreground font-sans">{label}</div>
      <div className="text-xs text-foreground-muted leading-relaxed">{sublabel}</div>
    </div>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 border-b border-border bg-surface/30 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat) => (
            <SingleStat
              key={stat.id}
              numericValue={stat.numericValue}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
