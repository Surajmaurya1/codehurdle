"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-border transition-colors">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left font-medium text-foreground transition-all hover:text-[#7B2DFF]"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold tracking-tight">{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-foreground-muted transition-transform duration-200",
            isOpen && "rotate-180 text-[#7B2DFF]"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out text-sm text-foreground-muted",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0 overflow-hidden"
        )}
      >
        <div className="overflow-hidden leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  return (
    <div className={cn("w-full divide-y divide-border", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}
