import { Ripple } from "@/components/magicui/ripple";
import React from "react";

const rippleStyle = {
  '--ripple-color': 'rgba(59, 130, 246, 0.3)',
  '--ripple-border-color': 'rgba(59, 130, 246, 0.4)'
} as React.CSSProperties;

const HeroRipple = React.memo(function HeroRipple() {
  return (
    <Ripple
      mainCircleSize={600}
      mainCircleOpacity={0.25}
      numCircles={8}
      className="absolute"
      style={rippleStyle}
    />
  );
});

export default HeroRipple; 