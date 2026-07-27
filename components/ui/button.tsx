import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2DFF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#7B2DFF] text-white hover:bg-[#6922E8] shadow-[0_0_20px_rgba(123,45,255,0.4)] border border-[#A675FF]/30",
        secondary:
          "bg-surface text-foreground border border-border hover:bg-surface-hover hover:border-[#7B2DFF]/40",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-[#7B2DFF]/10 hover:border-[#7B2DFF]/50",
        ghost:
          "text-foreground-muted hover:text-foreground hover:bg-surface-hover",
        link:
          "text-[#7B2DFF] underline-offset-4 hover:underline",
        purpleGlow:
          "bg-gradient-to-r from-[#7B2DFF] to-[#5416B8] text-white shadow-[0_0_25px_rgba(123,45,255,0.5)] hover:shadow-[0_0_35px_rgba(123,45,255,0.7)] border border-white/20",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-6 text-base font-semibold",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
