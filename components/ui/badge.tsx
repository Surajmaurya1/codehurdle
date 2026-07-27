import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#7B2DFF]/10 text-[#A675FF] border-[#7B2DFF]/20",
        secondary:
          "border-transparent bg-surface-hover text-foreground-muted hover:text-foreground",
        outline:
          "border-border text-foreground-muted",
        easy:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono",
        medium:
          "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono",
        hard:
          "border-rose-500/20 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono",
        purple:
          "border-[#7B2DFF]/30 bg-[#7B2DFF]/15 text-[#A675FF] font-mono",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
