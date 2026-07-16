import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Badge = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();

    const dotAnimation = shouldReduceMotion
      ? {}
      : {
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 select-none select-none hover:border-accent/50 transition-colors duration-300",
          className
        )}
        {...props}
      >
        <motion.span
          className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_#0052FF]"
          animate={dotAnimation}
        />
        <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-accent">
          {children}
        </span>
      </div>
    );
  }
);

Badge.displayName = "Badge";
