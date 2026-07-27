import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function CodeHurdleLogo({ className = "h-8", showText = true }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Logo Image from /public/logo-nav.webp */}
      <Image
        src="/logo-nav.webp"
        alt="CodeHurdle Logo"
        width={160}
        height={36}
        priority
        className="h-8 w-auto object-contain"
      />
    </div>
  );
}
