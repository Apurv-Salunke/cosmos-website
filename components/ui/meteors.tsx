"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export function Meteors({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const [meteorStyles, setMeteorStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * 100) + "%",
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: Math.random() * 1 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="absolute h-0.5 w-0.5 bg-blue-500 rotate-[215deg] block"
          style={{
            ...style,
            boxShadow: "0 0 0 1px #ffffff10",
          }}
        >
          <span className="absolute top-0 left-0 w-[100px] h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent meteor" />
        </span>
      ))}
    </div>
  );
} 