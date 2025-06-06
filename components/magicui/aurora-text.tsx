"use client";

import React, { memo, useMemo, forwardRef } from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const AuroraText = memo(forwardRef<HTMLSpanElement, AuroraTextProps>(
  function AuroraTextFn({
    children,
    className = "",
    colors = ["#3B82F6", "#60A5FA", "#2563EB", "#93C5FD"],
    speed = 1,
  }, ref) {
    const gradientStyle = useMemo(() => ({
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    }), [colors, speed]);

    return (
      <span ref={ref} className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    );
  }
));

AuroraText.displayName = "AuroraText";
