'use client'

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { Ripple } from "@/components/magicui/ripple";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Particles } from "@/components/magicui/particles";
import { Facebook, Instagram, Linkedin, LucideProps, MessageSquareText, PlaySquare, BarChart3, Megaphone, CheckCircle2, Star } from "lucide-react";
import GradientHeading from "@/components/ui/GradientHeading";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsPlaytoSection from "@/components/landing/WhatIsPlaytoSection";
import WhoIsPlaytoForSection from "@/components/landing/WhoIsPlaytoForSection";
import KeyFeaturesSection from "@/components/landing/KeyFeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SimpleInterfaceSection from "@/components/landing/SimpleInterfaceSection";
import ComprehensiveLearningSection from "@/components/landing/ComprehensiveLearningSection";
import GamifiedEngagementSection from "@/components/landing/GamifiedEngagementSection";
import CommunityLandingSection from "@/components/landing/CommunityLandingSection";
import MarketingToolsSection from "@/components/landing/MarketingToolsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import HowPlaytoIsDifferentSection from "@/components/landing/HowPlaytoIsDifferentSection";
import VisionSection from "@/components/landing/VisionSection";
import FAQSection from "@/components/landing/FAQSection";
import JoinWaitlistSection from "@/components/landing/JoinWaitlistSection";
import Footer from "@/components/landing/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const neonColorPairs = [
  { firstColor: "#3b82f6", secondColor: "#8b5cf6" }, // Blue to Purple
  { firstColor: "#8b5cf6", secondColor: "#ec4899" }, // Purple to Pink
  { firstColor: "#ec4899", secondColor: "#3b82f6" }, // Pink to Blue
];

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const heroSectionRef = useRef<HTMLElement>(null);
  const [neonColorIndex, setNeonColorIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const audienceProfiles = [
    {
      id: 1,
      name: "Creators & Influencers",
      image: "/images/app-creator.png",
    },
    {
      id: 2,
      name: "Educators & Tutors",
      image: "/images/app-educator.png",
    },
    {
      id: 3,
      name: "Coaches & Freelancers",
      image: "/images/app-coach.png",
    },
    {
      id: 4,
      name: "Content Creators",
      image: "/images/app-content.png",
    },
    {
      id: 5,
      name: "Passionate Hobbyists",
      image: "/images/app-hobbyist.png",
    },
  ];

  // Add scroll animation on mount
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animation');
      scrollElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);

        if (isVisible) {
          el.classList.add('animate-in');
        }
      });

      // Fade-to-black for hero iPhone
      if (heroSectionRef.current) {
        const heroRect = heroSectionRef.current.getBoundingClientRect();
        // Start fading when the top of the hero section is 1/3 of the way off screen
        // and be fully faded when it's 2/3 off screen.
        const fadeStartOffset = -heroRect.height / 3;
        const fadeEndOffset = -heroRect.height * (2 / 3);

        if (heroRect.top < fadeStartOffset) {
          const progress = Math.min(1, (fadeStartOffset - heroRect.top) / (fadeStartOffset - fadeEndOffset));
          setScrollOpacity(progress);
        } else {
          setScrollOpacity(0);
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Neon color pulsation useEffect (new)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNeonColorIndex((prevIndex) => (prevIndex + 1) % neonColorPairs.length);
    }, 2500); // Change color every 2.5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`relative flex flex-col min-h-screen bg-black text-foreground bg-dotted-grid ${inter.className}`}>
      <Particles
        className="absolute inset-0 -z-10 particle-container"
        quantity={150}
        color="#ffffff"
        size={1.5}
        staticity={30}
        ease={60}
        vy={0.05}
        vx={0.05}
      />
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.03),
            rgba(59, 130, 246, 0.06),
            rgba(59, 130, 246, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.03),
            rgba(59, 130, 246, 0.06),
            rgba(59, 130, 246, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 70%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70%;
          height: 350px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 25%,
            transparent 60%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(40px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }

        .particle-container canvas {
          filter: drop-shadow(0 0 1.5px #ffffff) drop-shadow(0 0 4px rgba(255,255,255,0.4));
        }
      `}</style>

      <main className="flex-grow relative z-0">
        {/* Hero Section */}
        <HeroSection
          neonColorIndex={neonColorIndex}
          neonColorPairs={neonColorPairs}
          scrollOpacity={scrollOpacity}
          heroSectionRef={heroSectionRef}
          interClassName={inter.className}
        />
        {/* What is Playto */}
        <WhatIsPlaytoSection />
        {/* Who is Playto for */}
        <WhoIsPlaytoForSection audienceProfiles={audienceProfiles} />
        {/* Key Features */}
        <KeyFeaturesSection />
        {/* How It Works */}
        <HowItWorksSection />
        {/* Simple, Beautiful Interface */}
        <SimpleInterfaceSection />
        {/* Comprehensive Learning Experience */}
        <ComprehensiveLearningSection />
        {/* Gamified Engagement */}
        <GamifiedEngagementSection />
        {/* Community Landing Page */}
        <CommunityLandingSection />
        {/* Powerful Marketing Tools */}
        <MarketingToolsSection />
        {/* Testimonials */}
        <TestimonialsSection />
        {/* How Playto is Different */}
        <HowPlaytoIsDifferentSection />
        {/* The Vision */}
        <VisionSection />
        {/* FAQ Section */}
        <FAQSection />
        {/* Join Waitlist */}
        <JoinWaitlistSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}