import React from "react";
import { cn } from "../../utils/cn";

export const Card = React.forwardRef(
  (
    {
      className,
      children,
      featured = false,
      asymmetric = false,
      hoverable = true,
      ...props
    },
    ref
  ) => {
    // Base classes
    const cardClasses = cn(
      "bg-card text-foreground transition-all duration-300",
      asymmetric
        ? "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl"
        : "rounded-2xl",
      // Standard border/shadow
      !featured && "border border-border shadow-sm",
      // Hover behaviors
      hoverable &&
        (featured
          ? "hover:scale-[1.01] hover:shadow-accent"
          : "hover:shadow-xl hover:-translate-y-1 hover:border-accent/20"),
      className
    );

    if (featured) {
      return (
        <div
          ref={ref}
          className={cn(
            "rounded-2xl bg-gradient-to-br from-accent via-accent-secondary to-accent p-[2px] transition-all duration-300 shadow-md",
            hoverable && "hover:shadow-accent hover:-translate-y-1 hover:scale-[1.01]",
            className
          )}
          {...props}
        >
          <div className="h-full w-full rounded-[calc(1rem-2px)] bg-card p-6 md:p-8">
            {children}
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className={cn(cardClasses, "p-6 md:p-8")} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
