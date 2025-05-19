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
        <section ref={heroSectionRef} className="relative min-h-screen flex justify-center items-center pt-28 pb-16 md:pt-36 md:pb-20">
          <div 
            className="absolute inset-0 flex items-center justify-center z-0"
            style={{ 
              background: `radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)`,
            }}
          >
            <Ripple 
              mainCircleSize={600}
              mainCircleOpacity={0.25}
              numCircles={8}
              className="absolute"
              style={{
                '--ripple-color': 'rgba(59, 130, 246, 0.3)',
                '--ripple-border-color': 'rgba(59, 130, 246, 0.4)'
              } as React.CSSProperties}
            />
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
                <AuroraText 
                  colors={["#3B82F6", "#60A5FA", "#2563EB", "#93C5FD"]} 
                  className="heading-lg"
                >
                  Community
                </AuroraText>
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
                  neonColors={neonColorPairs[neonColorIndex]}
                  borderRadius={54 * 0.9}
                  borderSize={2 * 0.9}
                >
                  <div className="w-full h-full" />
                </NeonGradientCard>

                <div className="relative rounded-[47px] md:rounded-[54px] overflow-hidden z-10">
                  <Iphone15Pro 
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
                    style={{ opacity: scrollOpacity, pointerEvents: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Playto */}
        <section className="relative py-20 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4 spacing-3 relative z-10">
            <GradientHeading as="h2" className="heading-md text-center scroll-animation mb-3">What is Playto?</GradientHeading>
            <p className="body-lg text-center text-neutral-400 text-container mx-auto scroll-animation scroll-delay-1 mb-3">
              A mobile-first platform to launch communities, courses & memberships fast, generate revenue, and connect deeply with your audience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <MessageSquareText size={32} className="text-blue-400 icon-pulse-glow" />,
                  title: "Community Chat",
                  description: "Organized, WhatsApp-style chat with threads & topics.",
                  features: ["Threaded replies", "Topic organization", "Voice channel"],
                  delay: 1,
                  colSpan: "lg:col-span-2",
                },
                {
                  icon: <PlaySquare size={32} className="text-green-400 icon-pulse-glow" />,
                  title: "Course Delivery",
                  description: "Structured course management & content delivery.",
                  features: ["Organized lessons", "Assignment submission", "Progress tracking"],
                  delay: 2,
                  colSpan: "lg:col-span-2",
                },
                {
                  icon: <BarChart3 size={32} className="text-purple-400 icon-pulse-glow" />,
                  title: "Gamified Engagement",
                  description: "Boost participation with fun gamification elements.",
                  features: ["Member rankings", "Achievement badges", "Activity metrics"],
                  delay: 3,
                  colSpan: "lg:col-span-2",
                },
                {
                  icon: <Megaphone size={32} className="text-amber-400 icon-pulse-glow" />,
                  title: "Creator Marketing",
                  description: "Tools to grow communities, courses & memberships easily.",
                  features: ["Email Marketing", "WhatsApp Marketing", "Landing Page Builder"],
                  delay: 4,
                  colSpan: "lg:col-span-2 lg:col-start-2", // Start at 2nd column for centering
                },
                {
                  icon: <Star size={32} className="text-yellow-400 icon-pulse-glow" />,
                  title: "Exclusive Memberships",
                  description: "Exclusive spaces for supporters with premium content.", // Summarized text
                  features: ["Host Exclusive Content", "Unlimited File Sharing", "Organize Member Events"],
                  delay: 5,
                  colSpan: "lg:col-span-2",
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative group bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md p-8 rounded-xl border border-gray-700/40 scroll-animation scroll-delay-${item.delay} flex flex-col aspect-square box-pulse-glow overflow-hidden ${item.colSpan}`}>
                  <BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-gray-700/50 shadow-inner">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-100">{item.title}</h3>
                      <p className="text-lg text-neutral-300 mb-2">{item.description}</p>
                    </div>
                    <ul className="space-y-2 mt-2">
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-base text-neutral-200">
                          <CheckCircle2 size={18} className="mr-3 text-sky-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is Playto for */}
        <section className="py-20 bg-gray-950 text-white">
          <div className="container mx-auto px-4 spacing-3">
            <GradientHeading as="h2" className="heading-md text-center scroll-animation">Who is Playto for?</GradientHeading>
            <div className="mb-12 flex justify-center">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-blue-500' : 'bg-gray-500'} transition-all duration-300 hover:scale-150 hover:bg-blue-500 cursor-pointer`} 
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {audienceProfiles.map((profile) => (
                <div 
                  key={profile.id} 
                  className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                >
                  <div className="mb-3 relative w-[140px] h-[280px] group">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-3xl scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                    <div className="relative rounded-3xl">
                      <Iphone15Pro 
                        width={140} 
                        height={280} 
                        className="iphone-frame transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20" 
                        src="/images/program.png"
                      />
                      <BorderBeam 
                        size={60}
                        colorFrom="#60a5fa"
                        colorTo="#c084fc"
                        duration={8}
                        delay={profile.id * 0.5}
                      />
                    </div>
                  </div>
                  <h3 className="body-md font-medium group-hover:text-blue-400 transition-colors duration-300">{profile.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 spacing-3">
            <GradientHeading as="h2" className="heading-md text-center scroll-animation">Key Features</GradientHeading>
            <p className="body-lg text-center text-container mx-auto scroll-animation scroll-delay-1">Everything you need to build, grow, and monetize your learning community</p>
            
            <div className="max-w-6xl mx-auto">
              <BentoGrid className="md:auto-rows-[16rem] grid-cols-1 md:grid-cols-4">
                <BentoCard 
                  name="Create Once. Launch in Minutes." 
                  className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-1"
                  description="Enter your community name, description, price, and welcome message—your mobile landing page is ready instantly."
                  href="#"
                  cta="Learn more"
                  background={<BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />}
                  Icon={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                />
                <BentoCard 
                  name="All-in-One Infrastructure" 
                  className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-2"
                  description="No need for separate website builders, payment gateways, email automation, or community forums—Playto bundles it all."
                  href="#"
                  cta="Learn more"
                  background={<BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />}
                  Icon={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 8h8" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16h5" />
                    </svg>
                  )}
                />
                <BentoCard 
                  name="Built-In Monetization" 
                  className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-1"
                  description="Accept global or local payments. Keep 95% of revenue. No setup cost or monthly subscriptions."
                  href="#"
                  cta="Learn more"
                  background={<BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />}
                  Icon={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                />
                <BentoCard 
                  name="Community-Driven Learning" 
                  className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-2"
                  description="Give users a mobile app with daily tasks, leaderboards, discussions, peer connections, and direct messaging."
                  href="#"
                  cta="Learn more"
                  background={<BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />}
                  Icon={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                />
                <BentoCard 
                  name="Gamification That Works" 
                  className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-1"
                  description="Track streaks, reward milestones, promote top contributors, and encourage consistency through fun design."
                  href="#"
                  cta="Learn more"
                  background={<BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />}
                  Icon={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                />
                <BentoCard 
                  name="Works Globally" 
                  className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-2"
                  description="Designed to work on any device, in any country, with localized payment flows and creator-friendly policies."
                  href="#"
                  cta="Learn more"
                  background={<BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />}
                  Icon={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                />
              </BentoGrid>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 spacing-3">
            <GradientHeading as="h2" className="heading-md text-center scroll-animation">How Playto Works: Your 3-Step Path to Success</GradientHeading>
            <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8">
              {[
                {
                  step: 1,
                  title: "Create Your Vision",
                  description: "Build your community or course with a few taps—no code required. Add lessons, set topics, and customize your space."
                },
                {
                  step: 2,
                  title: "Launch with Ease",
                  description: "Share your unique link via social media or messaging apps. Your audience downloads Playto and joins instantly."
                },
                {
                  step: 3,
                  title: "Grow and Thrive",
                  description: "Engage with live chats, structured courses, and challenges. Watch your revenue soar as your community scales."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="relative group bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md p-6 rounded-xl border border-gray-700/40 scroll-animation flex items-start space-x-4 box-pulse-glow overflow-hidden"
                  style={{animationDelay: `${index * 0.1 + 0.1}s`}}
                >
                  <BorderBeam size={100} duration={6} delay={index * 0.2} colorFrom="#60a5fa" colorTo="#c084fc" />
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/50 text-blue-200 font-bold text-lg border border-blue-500/70 shadow-md">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-gray-100 mb-1">{item.title}</h3>
                    <p className="text-neutral-300 body-md">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple, Beautiful Interface */}
        <section className="py-20 bg-gray-950 text-white overflow-hidden">
          <div className="container mx-auto px-4 spacing-3">
            <div className="text-center mb-12 scroll-animation">
              <GradientHeading as="h2" className="heading-md">Simple, Beautiful Interface</GradientHeading>
              <p className="body-lg text-neutral-400 text-container mx-auto mt-2">Inspired by the simplicity of WhatsApp and iMessage but packed with powerful features.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative scroll-animation scroll-delay-1 flex justify-center">
                <div className="relative w-auto inline-block">
                  <NeonGradientCard
                    className="absolute inset-0 rounded-[54px] z-0 scale-75 transform-gpu bg-transparent"
                    neonColors={{firstColor: "#3b82f6", secondColor: "#8b5cf6"}}
                    borderRadius={41}
                    borderSize={1.5}
                  >
                    <div className="w-full h-full bg-transparent" />
                  </NeonGradientCard>
                  <div className="relative rounded-[54px] overflow-hidden z-10">
                    <Iphone15Pro 
                      src="/images/program.png"
                      width={300} 
                      height={610} 
                      className="iphone-frame" 
                    />
                    <BorderBeam 
                      size={200} 
                      duration={10} 
                      delay={0} 
                      colorFrom="#60a5fa" 
                      colorTo="#c084fc" 
                      className="z-0" 
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6 scroll-animation scroll-delay-2">
                <h3 className="text-3xl font-bold text-gray-100">Intuitive Navigation</h3>
                <p className="body-md text-neutral-300">Navigate effortlessly between communities, courses, and features with a simple, WhatsApp-inspired interface.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MessageSquareText size={24} className="mr-3 mt-1 text-blue-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">WhatsApp-style Chat Interface</h4>
                      <p className="text-neutral-400 body-sm">Familiar messaging interface that&apos;s easy to use with community-focused enhancements.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PlaySquare size={24} className="mr-3 mt-1 text-green-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Tab-based Navigation</h4>
                      <p className="text-neutral-400 body-sm">Simple bottom tabs for switching between chat, learning, leaderboard, and more.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 size={24} className="mr-3 mt-1 text-purple-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Topic Organization</h4>
                      <p className="text-neutral-400 body-sm">Keep conversations organized with topics instead of confusing sub-groups.</p>
                    </div>
                  </li>
                   <li className="flex items-start">
                    <Megaphone size={24} className="mr-3 mt-1 text-amber-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Mobile-First Design</h4>
                      <p className="text-neutral-400 body-sm">Built for mobile with a responsive design that works on any device.</p>
                    </div>
                  </li>
                </ul>
                <a href="#features" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                  See all interface features
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Learning Experience */}
        <section className="py-20 bg-gray-950 text-white overflow-hidden">
          <div className="container mx-auto px-4 spacing-3">
            <div className="text-center mb-12 scroll-animation">
              <GradientHeading as="h2" className="heading-md">Comprehensive Learning Experience</GradientHeading>
              <p className="body-lg text-neutral-400 text-container mx-auto mt-2">Access courses, track your progress, and complete assignments in one seamless interface.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative scroll-animation scroll-delay-1 flex justify-center">
                <div className="relative w-auto inline-block">
                  <NeonGradientCard
                    className="absolute inset-0 rounded-[54px] z-0 scale-75 transform-gpu bg-transparent"
                    neonColors={{firstColor: "#ec4899", secondColor: "#3b82f6"}}
                    borderRadius={41}
                    borderSize={1.5}
                  >
                    <div className="w-full h-full bg-transparent" />
                  </NeonGradientCard>
                  <div className="relative rounded-[54px] overflow-hidden z-10">
                    <Iphone15Pro 
                      src="/images/program.png"
                      width={300} 
                      height={610} 
                      className="iphone-frame" 
                    />
                    <BorderBeam 
                      size={200} 
                      duration={10} 
                      delay={0.4} 
                      colorFrom="#ec4899" 
                      colorTo="#3b82f6" 
                      className="z-0" 
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6 scroll-animation scroll-delay-2">
                <h3 className="text-3xl font-bold text-gray-100">Interactive Learning Experience</h3>
                <p className="body-md text-neutral-300">Our learning tab provides a structured, engaging way to consume course content, track progress, and complete assignments.</p>
                <ul className="space-y-4">
                  {/* Replace with actual icons when available */}
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Structured Course Modules</h4>
                      <p className="text-neutral-400 body-sm">Easily navigate through organized course content with clear progression paths.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Assignment Submissions</h4>
                      <p className="text-neutral-400 body-sm">Complete and submit assignments directly within the app with deadline tracking.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Progress Tracking</h4>
                      <p className="text-neutral-400 body-sm">Visualize your learning journey with intuitive progress indicators and completion status.</p>
                    </div>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Course Discussions</h4>
                      <p className="text-neutral-400 body-sm">Engage directly with instructors and peers through module-specific discussion threads.</p>
                    </div>
                  </li>
                </ul>
                <ShimmerButton className="mt-4 w-full md:w-auto" background="rgba(59, 130, 246, 0.5)">Join the Waitlist</ShimmerButton>
              </div>
            </div>
          </div>
        </section>

        {/* Gamified Engagement */}
        <section className="py-20 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4 spacing-3">
            <div className="text-center mb-12 scroll-animation">
              <GradientHeading as="h2" className="heading-md">Gamified Engagement</GradientHeading>
              <p className="body-lg text-neutral-400 text-container mx-auto mt-2">Track your progress, compete with others, and stay motivated through our gamified leaderboard system.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 scroll-animation scroll-delay-2 md:order-2">
                <h3 className="text-3xl font-bold text-gray-100">Boost Engagement with Gamification</h3>
                <p className="body-md text-neutral-300">Our leaderboard system makes learning and community participation more engaging by adding friendly competition and achievement tracking.</p>
                <ul className="space-y-4">
                  {/* Replace with actual icons when available */}
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Point-Based Ranking</h4>
                      <p className="text-neutral-400 body-sm">Earn points for active participation, completing courses, and contributing to discussions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Achievement Badges</h4>
                      <p className="text-neutral-400 body-sm">Collect badges for reaching specific milestones and completing special challenges.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Progress Tracking</h4>
                      <p className="text-neutral-400 body-sm">See your improvement over time with detailed analytics on your community participation.</p>
                    </div>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Community Recognition</h4>
                      <p className="text-neutral-400 body-sm">Get recognized for your contributions with special status indicators and roles.</p>
                    </div>
                  </li>
                </ul>
                <ShimmerButton className="mt-4 w-full md:w-auto" background="rgba(59, 130, 246, 0.5)">Join the Waitlist</ShimmerButton>
              </div>
              <div className="relative scroll-animation scroll-delay-1 md:order-1 flex justify-center">
                <div className="relative w-auto inline-block">
                  <NeonGradientCard
                    className="absolute inset-0 rounded-[54px] z-0 scale-75 transform-gpu bg-transparent"
                    neonColors={{firstColor: "#3b82f6", secondColor: "#10b981"}}
                    borderRadius={41}
                    borderSize={1.5}
                  >
                    <div className="w-full h-full bg-transparent" />
                  </NeonGradientCard>
                  <div className="relative rounded-[54px] overflow-hidden z-10">
                    <Iphone15Pro 
                      src="/images/program.png"
                      width={300} 
                      height={610} 
                      className="iphone-frame" 
                    />
                    <BorderBeam 
                      size={200} 
                      duration={10} 
                      delay={0.6} 
                      colorFrom="#3b82f6" 
                      colorTo="#10b981" 
                      className="z-0" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Landing Page */}
        <section className="py-20 bg-gray-950 text-white overflow-hidden">
          <div className="container mx-auto px-4 spacing-3">
            <div className="text-center mb-12 scroll-animation">
              <GradientHeading as="h2" className="heading-md">Community Landing Page</GradientHeading>
              <p className="body-lg text-neutral-400 text-container mx-auto mt-2">The About tab provides essential information about the community, including resources, upcoming events, and important details for members.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative scroll-animation scroll-delay-1 flex justify-center">
                <div className="relative w-auto inline-block">
                  <NeonGradientCard
                    className="absolute inset-0 rounded-[54px] z-0 scale-75 transform-gpu bg-transparent"
                    neonColors={{firstColor: "#10b981", secondColor: "#f59e0b"}}
                    borderRadius={41}
                    borderSize={1.5}
                  >
                    <div className="w-full h-full bg-transparent" />
                  </NeonGradientCard>
                  <div className="relative rounded-[54px] overflow-hidden z-10">
                    <Iphone15Pro 
                      src="/images/program.png"
                      width={300} 
                      height={610} 
                      className="iphone-frame" 
                    />
                    <BorderBeam 
                      size={200} 
                      duration={10} 
                      delay={0.8} 
                      colorFrom="#10b981" 
                      colorTo="#f59e0b" 
                      className="z-0" 
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6 scroll-animation scroll-delay-2">
                <h3 className="text-3xl font-bold text-gray-100">Your Community&apos;s Front Door</h3>
                <p className="body-md text-neutral-300">The About tab provides essential information about the community, including resources, upcoming events, and important details for members.</p>
                <ul className="space-y-4">
                  {/* Replace with actual icons when available */}
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Community Overview</h4>
                      <p className="text-neutral-400 body-sm">A comprehensive view of the community&apos;s purpose, rules, and organization.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Event Calendar</h4>
                      <p className="text-neutral-400 body-sm">Stay informed about upcoming voice chats, sessions, and community events.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Resource Library</h4>
                      <p className="text-neutral-400 body-sm">Access important documents, guidelines, and shared resources.</p>
                    </div>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-100">Admin Information</h4>
                      <p className="text-neutral-400 body-sm">Get to know your community leaders and how to contact them if needed.</p>
                    </div>
                  </li>
                </ul>
                <ShimmerButton className="mt-4 w-full md:w-auto" background="rgba(59, 130, 246, 0.5)">Join the Waitlist</ShimmerButton>
              </div>
            </div>
          </div>
        </section>

        {/* Powerful Marketing Tools */}
        <section className="py-20 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4 spacing-3">
            <div className="text-center mb-4 scroll-animation">
              <div className="inline-flex items-center gap-2 bg-blue-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg border border-blue-700/60">
                <span className="text-blue-400">✦</span>
                <span className="text-sm font-medium text-white">Creator Tools</span>
              </div>
            </div>
            <div className="text-center mb-12 scroll-animation">
              <GradientHeading as="h2" className="heading-md">Powerful Marketing Tools</GradientHeading>
              <p className="body-lg text-neutral-400 text-container mx-auto mt-2">Everything creators need to grow and manage their communities, courses & memberships.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="relative scroll-animation scroll-delay-1 flex justify-center">
                  <div className="relative w-auto inline-block">
                    <NeonGradientCard
                      className="absolute inset-0 rounded-[54px] z-0 scale-75 transform-gpu bg-transparent"
                      neonColors={{firstColor: "#f59e0b", secondColor: "#ef4444"}}
                      borderRadius={41}
                      borderSize={1.5}
                    >
                      <div className="w-full h-full bg-transparent" />
                    </NeonGradientCard>
                    <div className="relative rounded-[54px] overflow-hidden z-10">
                      <Iphone15Pro 
                        src="/images/program.png"
                        width={300} 
                        height={610} 
                        className="iphone-frame" 
                      />
                      <BorderBeam 
                        size={200} 
                        duration={10} 
                        delay={1} 
                        colorFrom="#f59e0b" 
                        colorTo="#ef4444" 
                        className="z-0" 
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6 scroll-animation scroll-delay-2">
                  <div className="mb-3">
                    <div className="inline-flex items-center gap-2 bg-purple-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full shadow-lg border border-purple-700/60 text-xs font-medium">
                      <span className="text-purple-400">✦</span>
                      Creator-Only Feature
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-100 mb-4">Grow Your Community with Integrated Marketing</h3>
                  <p className="body-md text-neutral-300 mb-6">Our marketing tools give creators everything they need to grow and engage their community, all from a single platform.</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                        <CheckCircle2 size={20} className="mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                        <span className="text-neutral-200">Email Campaigns: Create, send, and track beautiful email campaigns.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 size={20} className="mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                        <span className="text-neutral-200">WhatsApp Marketing: Leverage WhatsApp to reach your community.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 size={20} className="mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                        <span className="text-neutral-200">SMS Broadcasts: Send timely SMS notifications.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 size={20} className="mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                        <span className="text-neutral-200">Landing Page Builder: Create custom landing pages for your courses.</span>
                    </li>
                  </ul>
                  <ShimmerButton className="w-full md:w-auto" background="rgba(59, 130, 246, 0.5)">Upgrade to Creator Account</ShimmerButton>
                </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4 mb-8 spacing-2">
            <GradientHeading as="h2" className="heading-md text-center scroll-animation">What People Are Saying</GradientHeading>
            <p className="body-lg text-center text-container mx-auto scroll-animation scroll-delay-1">Creators and educators love how Playto makes community building simple</p>
                  </div>
          
          <div className="theme">
            <Marquee className="py-2 [--duration:15s]" pauseOnHover repeat={4}>
              <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">A</div>
                  <div className="ml-3">
                    <div className="font-medium">Alex</div>
                    <div className="text-sm text-gray-400">@alex</div>
              </div>
            </div>
                <p className="body-sm text-gray-300">I&apos;ve never seen anything like this before. It&apos;s amazing. I love it.</p>
          </div>
              
              <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-lg">J</div>
                  <div className="ml-3">
                    <div className="font-medium">Jack</div>
                    <div className="text-sm text-gray-400">@jack</div>
                  </div>
                </div>
                <p className="body-sm text-gray-300">I&apos;m at a loss for words. This is amazing. I love it.</p>
                  </div>
              
              <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">J</div>
                  <div className="ml-3">
                    <div className="font-medium">Jill</div>
                    <div className="text-sm text-gray-400">@jill</div>
                </div>
                </div>
                <p className="body-sm text-gray-300">I don&apos;t know what to say. I&apos;m speechless. This is amazing.</p>
            </div>
              
              <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">J</div>
                  <div className="ml-3">
                    <div className="font-medium">James</div>
                    <div className="text-sm text-gray-400">@james</div>
          </div>
              </div>
                <p className="body-sm text-gray-300">I&apos;m at a loss for words. This is amazing. I love it.</p>
                    </div>
              
              <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">J</div>
                  <div className="ml-3">
                    <div className="font-medium">Jane</div>
                    <div className="text-sm text-gray-400">@jane</div>
                    </div>
                    </div>
                <p className="body-sm text-gray-300">I&apos;m at a loss for words. This is amazing. I love it.</p>
              </div>
            </Marquee>
            
            <Marquee className="py-2 [--duration:15s]" reverse pauseOnHover repeat={4}>
              <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">R</div>
                  <div className="ml-3">
                    <div className="font-medium">Ryan</div>
                    <div className="text-sm text-gray-400">@ryan</div>
            </div>
          </div>
                <p className="body-sm text-gray-300">Setting up my community was so easy. Can&apos;t believe it only took minutes.</p>
              </div>
              
              <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">M</div>
                  <div className="ml-3">
                    <div className="font-medium">Maria</div>
                    <div className="text-sm text-gray-400">@maria</div>
            </div>
              </div>
                <p className="body-sm text-gray-300">My students are loving the mobile experience. It&apos;s so easy to use.</p>
                    </div>
              
              <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">D</div>
                  <div className="ml-3">
                    <div className="font-medium">David</div>
                    <div className="text-sm text-gray-400">@david</div>
                    </div>
                    </div>
                <p className="body-sm text-gray-300">The gamification features are brilliant. Engagement is up 300%!</p>
              </div>
              
              <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">S</div>
                  <div className="ml-3">
                    <div className="font-medium">Sarah</div>
                    <div className="text-sm text-gray-400">@sarah</div>
            </div>
              </div>
                <p className="body-sm text-gray-300">Finally a platform that works well in my country. The payments are seamless.</p>
                    </div>
              
              <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">T</div>
                  <div className="ml-3">
                    <div className="font-medium">Tom</div>
                    <div className="text-sm text-gray-400">@tom</div>
                    </div>
                    </div>
                <p className="body-sm text-gray-300">I switched from three separate tools to just Playto. So much simpler now.</p>
              </div>
            </Marquee>
          </div>
        </section>

        {/* How Playto is Different */}
        <section className="py-20 bg-gray-950 text-white">
          <div className="container mx-auto px-4 spacing-3">
            <GradientHeading as="h2" className="heading-md text-center scroll-animation">How Playto is Different</GradientHeading>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full max-w-3xl mx-auto">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-4 px-2 md:px-4 text-left body-md font-bold">Feature</th>
                    <th className="py-4 px-2 md:px-4 text-left body-md font-bold">Other Platforms</th>
                    <th className="py-4 px-2 md:px-4 text-left body-md font-bold">Playto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-2 md:px-4 body-md">Mobile-first design</td>
                    <td className="py-4 px-2 md:px-4 body-md text-gray-400">Mostly desktop</td>
                    <td className="py-4 px-2 md:px-4 body-md text-blue-400 font-medium">100% mobile-native</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-2 md:px-4 body-md">Community + course</td>
                    <td className="py-4 px-2 md:px-4 body-md text-gray-400">Separate tools needed</td>
                    <td className="py-4 px-2 md:px-4 body-md text-blue-400 font-medium">Unified in one</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-2 md:px-4 body-md">Revenue cut</td>
                    <td className="py-4 px-2 md:px-4 body-md text-gray-400">10–30%</td>
                    <td className="py-4 px-2 md:px-4 body-md text-blue-400 font-medium">Starts at 5%, drops to 3.5% as you scale</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-2 md:px-4 body-md">Ease of setup</td>
                    <td className="py-4 px-2 md:px-4 body-md text-gray-400">Tech-heavy</td>
                    <td className="py-4 px-2 md:px-4 body-md text-blue-400 font-medium">2 minutes, no code</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-2 md:px-4 body-md">Global readiness</td>
                    <td className="py-4 px-2 md:px-4 body-md text-gray-400">U.S.-centric</td>
                    <td className="py-4 px-2 md:px-4 body-md text-blue-400 font-medium">Works across India, SEA, LATAM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section id="vision" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 spacing-3">
            <GradientHeading as="h2" className="heading-md text-center">The Vision</GradientHeading>
            <p className="body-lg text-center text-container mx-auto">
              Playto isn&apos;t just a course app. It&apos;s a new way to build movements. We&apos;re helping the next generation of creators launch micro-schools, learning clubs, skill guilds, and peer-powered academies—with zero technical friction and complete ownership.
            </p>
            <div className="flex justify-center">
              <ShimmerButton 
                shimmerColor="rgba(255, 255, 255, 0.5)" 
                background="rgba(59, 130, 246, 0.5)"
                shimmerDuration="2.5s"
                className="font-medium"
              >
                Join the Waitlist
                    </ShimmerButton>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-950 text-white">
          <div className="container mx-auto px-4 spacing-3">
            <GradientHeading as="h2" className="heading-md text-center scroll-animation">Frequently Asked Questions</GradientHeading>
            <div className="max-w-2xl mx-auto spacing-2">
              <div className="space-y-2">
                {[
                  {
                    question: "What exactly is Playto?",
                    answer: "Playto is an all-in-one mobile-first platform that empowers creators, educators, and community leaders to build, grow, and monetize learning communities—without needing any technical skills, websites, or third-party tools."
                  },
                  {
                    question: "How quickly can I launch my community?",
                    answer: "You can launch your community in just 2 minutes. Simply enter your community name, description, price (or set it free), and welcome message—and your mobile landing page is ready instantly."
                  },
                  {
                    question: "What payment methods are supported?",
                    answer: "Playto supports global and local payment methods, including credit/debit cards, digital wallets, and region-specific options like UPI in India."
                  },
                  {
                    question: "How much does it cost to use Playto?",
                    answer: "Playto has no setup costs or monthly subscriptions. We take a small percentage of your revenue (starting at just 5%, dropping to 3.5% as you scale), which is the lowest platform fee in the industry."
                  },
                  {
                    question: "When is Playto launching?",
                    answer: "Playto is currently in private beta. Join the waitlist to be among the first to get access when we launch publicly."
                  },
                  {
                    question: "How do I join the waitlist?",
                    answer: "Simply enter your email in the form below and click \"Join Waitlist.\" We'll notify you as soon as Playto is available for you."
                  },
                  {
                    question: "What makes this platform different from others like Discord or Reddit?",
                    answer: "Playto is designed specifically for creators and educators to build monetizable learning communities. While Discord and Reddit are great for general communities, Playto offers built-in course structures, monetization, gamification, and a mobile-first experience tailored for this purpose. It's an all-in-one solution, so you don't need to piece together multiple tools."
                  },
                  {
                    question: "How do I create my own community?",
                    answer: "Once you have access, creating a community is a simple 3-step process: 1. Define your vision (name, description, topic). 2. Set up your structure (lessons, chat channels). 3. Invite your audience. Our intuitive interface guides you through each step, no technical skills needed."
                  },
                  {
                    question: "What are the benefits of a Creator account?",
                    answer: "A Creator account unlocks advanced features like full monetization capabilities (paid access, subscriptions), access to marketing tools (email campaigns, landing page builder - coming soon), detailed analytics, and priority support. It's designed for those serious about building and growing a thriving paid community or course."
                  },
                  {
                    question: "How does the leaderboard system work?",
                    answer: "The leaderboard encourages engagement by awarding points for various activities like completing lessons, participating in discussions, helping other members, and achieving milestones. Members can see their rank, earn badges, and compete in a friendly way, fostering a more active and supportive community."
                  },
                  {
                    question: "How do I join and participate in voice chats?",
                    answer: "Joining a voice chat is as simple as tapping on an active voice channel within a community. You can listen in, and if you wish to speak, you can request to talk (depending on admin settings). It's designed to be similar to Clubhouse or Twitter Spaces, offering real-time audio conversations."
                  },
                  {
                    question: "Is there a desktop version available?",
                    answer: "Playto is a mobile-first platform, optimized for the best experience on smartphones. While a full-featured desktop version is planned for the future to aid creators in content management, the primary member experience is designed for mobile. Members can currently access a web view for basic interactions."
                  },
                  {
                    question: "What types of media can I share in communities?",
                    answer: "You can share a wide variety of media, including text messages, images, videos (uploads and embeds), audio files, documents (PDFs, presentations), and links. Our aim is to make content sharing rich and versatile for both creators and members."
                  },
                  {
                    question: "What are the pricing options?",
                    answer: "For members, joining most communities will be free, though creators can set up paid-access communities or courses. For creators, we offer a free tier with basic community features. Our Creator Pro plan, which includes monetization and advanced tools, has a simple revenue-sharing model with no upfront costs or monthly fees – we only make money when you do. Detailed pricing will be available at launch."
                  }
                ].map((faq, index) => (
                  <div key={index} className="rounded-xl border border-gray-800/70 bg-gray-900/70 shadow-sm mb-1">
                    <button 
                      className="w-full text-left px-5 py-3 flex justify-between items-center focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="body-md text-neutral-300 font-medium">{faq.question}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 text-neutral-400 transition-transform duration-300 ${activeAccordion === index ? 'transform rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 px-5 ${
                        activeAccordion === index ? 'max-h-40 opacity-100 pb-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="body-md text-neutral-400 font-normal leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Waitlist */}
        <section id="join" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 spacing-3">
            <GradientHeading as="h2" className="heading-md text-center">Ready to see the future?</GradientHeading>
            <div className="flex justify-center mt-2">
              <ShimmerButton 
                shimmerColor="rgba(255, 255, 255, 0.5)" 
                background="rgba(59, 130, 246, 0.5)"
                shimmerDuration="2.5s"
                className="text-base md:text-lg font-medium px-8 py-3"
              >
                Join the Waitlist
              </ShimmerButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between spacing-2">
            <div className="mb-8 md:mb-0">
              <h3 className="text-white font-bold text-xl mb-4">Playto</h3>
              <p className="body-sm max-w-md">
                The all-in-one mobile-first platform for creators, educators, and community leaders.
              </p>
              </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                <h4 className="text-white font-medium mb-4">Links</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="body-sm hover:text-white transition">Features</a></li>
                  <li><a href="#vision" className="body-sm hover:text-white transition">Vision</a></li>
                  <li><a href="#faq" className="body-sm hover:text-white transition">FAQ</a></li>
                  <li><a href="#join" className="body-sm hover:text-white transition">Join Waitlist</a></li>
                </ul>
                    </div>
                    <div>
                <h4 className="text-white font-medium mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="body-sm hover:text-white transition">Terms of Service</a></li>
                  <li><a href="#" className="body-sm hover:text-white transition">Privacy Policy</a></li>
                </ul>
                    </div>
                    <div>
                <h4 className="text-white font-medium mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="body-sm hover:text-white transition">Twitter</a></li>
                  <li><a href="#" className="body-sm hover:text-white transition">Instagram</a></li>
                  <li><a href="#" className="body-sm hover:text-white transition">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-center">
            <p className="body-sm">© 2023 Playto. All rights reserved.</p>
            </div>
              </div>
      </footer>
                    </div>
  )
}