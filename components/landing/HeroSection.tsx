import { Ripple } from "@/components/magicui/ripple";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { BorderBeam } from "@/components/magicui/border-beam";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { useRef, useMemo, useEffect, useState, memo } from "react";
import HeroRipple from "./HeroRipple";

const neonColorPairs = [
  { firstColor: "#3b82f6", secondColor: "#8b5cf6" },
  { firstColor: "#8b5cf6", secondColor: "#ec4899" },
  { firstColor: "#ec4899", secondColor: "#3b82f6" },
];

const MemoizedAuroraText = memo(AuroraText);
const MemoizedIphone15Pro = memo(Iphone15Pro);

export default function HeroSection() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [neonColorIndex, setNeonColorIndex] = useState(0);
  const heroSectionRef = useRef<HTMLElement>(null);

  // Throttled scroll effect
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroSectionRef.current) {
            const heroRect = heroSectionRef.current.getBoundingClientRect();
            const fadeStartOffset = -heroRect.height / 3;
            const fadeEndOffset = -heroRect.height * (2 / 3);
            let newOpacity = 0;
            if (heroRect.top < fadeStartOffset) {
              newOpacity = Math.min(1, (fadeStartOffset - heroRect.top) / (fadeStartOffset - fadeEndOffset));
            }
            setScrollOpacity(prev => (prev !== newOpacity ? newOpacity : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Neon color pulsation effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNeonColorIndex((prevIndex) => (prevIndex + 1) % neonColorPairs.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  const neonColors = useMemo(() => neonColorPairs[neonColorIndex], [neonColorIndex]);
  const rippleStyle = useMemo(() => ({
    '--ripple-color': 'rgba(59, 130, 246, 0.3)',
    '--ripple-border-color': 'rgba(59, 130, 246, 0.4)'
  }) as React.CSSProperties, []);

  const fadeStyle = useMemo(() => ({
    opacity: scrollOpacity,
    pointerEvents: 'none' as React.CSSProperties['pointerEvents'],
  }) as React.CSSProperties, [scrollOpacity]);

  return (
    <section ref={heroSectionRef} className="relative min-h-screen flex justify-center items-center pt-28 pb-16 md:pt-36 md:pb-20">
      <div 
        className="absolute inset-0 flex items-center justify-center z-0"
        style={{ background: `radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)` }}
      >
        <HeroRipple />
      </div>
      <div className="hero-glow"></div>
      <div className="container mx-auto px-4 z-20 relative flex flex-col items-center">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg border border-gray-700/60">
            <span className="text-amber-400">✦</span>
            <AnimatedShinyText className="text-sm font-medium text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              Introducing Playto
            </AnimatedShinyText>
            <span className="text-white/90">→</span>
          </div>
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="heading-lg fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 relative z-10">
            The Future of building<br />
            <MemoizedAuroraText 
              colors={["#3B82F6", "#60A5FA", "#2563EB", "#93C5FD"]} 
              className="heading-lg"
            >
              Community
            </MemoizedAuroraText>
          </h1>
          <p className="body-lg fade-in delay-1 text-center max-w-3xl mx-auto mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] font-medium">
            The Easiest Way to Build & Monetize Communities, Courses & Memberships.
          </p>
          <div className="flex justify-center fade-in delay-2 mt-8 mb-12">
            <ShimmerButton 
              shimmerColor="rgba(255, 255, 255, 0.5)" 
              background="rgba(59, 130, 246, 0.5)"
              shimmerDuration="2.5s"
              className="text-base md:text-lg font-medium"
            >
              Join the Waitlist
            </ShimmerButton>
          </div>
        </div>
        <div className="flex justify-center items-center relative z-10">
          <div className="relative">
            <NeonGradientCard
              className="absolute inset-0 rounded-[47px] md:rounded-[54px] z-0 scale-90 transform-gpu"
              neonColors={neonColors}
              borderRadius={54 * 0.9}
              borderSize={2 * 0.9}
            >
              <div className="w-full h-full" />
            </NeonGradientCard>
            <div className="relative rounded-[47px] md:rounded-[54px] overflow-hidden z-10">
              <MemoizedIphone15Pro 
                width={280} 
                height={570} 
                className="iphone-frame md:w-[320px] md:h-[650px]" 
                src="/images/program.png"
              />
              <BorderBeam 
                size={108}
                colorFrom="#60a5fa"
                colorTo="#c084fc"
                duration={8}
              />
              <div 
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ease-in-out"
                style={fadeStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 