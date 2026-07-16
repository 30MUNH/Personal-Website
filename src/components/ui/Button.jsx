import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-accent to-accent-secondary text-accent-foreground shadow-sm hover:shadow-accent-lg hover:-translate-y-0.5 hover:brightness-110 group",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted hover:border-accent/30 hover:text-accent",
        ghost:
          "text-muted-foreground hover:bg-muted hover:text-foreground",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export const Button = React.forwardRef(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
