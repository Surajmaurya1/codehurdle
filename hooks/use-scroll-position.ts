"use client";

import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const threshold = 12; // Hysteresis threshold to prevent jitter

    const updateScrollDir = () => {
      const currentY = window.scrollY;
      setScrollPosition(currentY);

      const diff = currentY - lastY;

      if (Math.abs(diff) >= threshold) {
        if (diff > 0 && currentY > 80) {
          setIsScrollingUp(false);
        } else if (diff < 0) {
          setIsScrollingUp(true);
        }
        lastY = currentY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollPosition, isScrollingUp };
}
