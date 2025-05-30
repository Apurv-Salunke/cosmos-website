import GradientHeading from "@/components/ui/GradientHeading";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { BorderBeam } from "@/components/magicui/border-beam";
import React from "react";

const KeyFeatures = [
  {
    name: "Create Once. Launch in Minutes.",
    className: "col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-1",
    description: "Enter your community name, description, price, and welcome message—your mobile landing page is ready instantly.",
    href: "#",
    cta: "Learn more",
    // background: <BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />,
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "All-in-One Infrastructure",
    className: "col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-2",
    description: "No need for separate website builders, payment gateways, email automation, or community forums—Playto bundles it all.",
    href: "#",
    cta: "Learn more",
    // background: <BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />,
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 8h8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16h5" />
      </svg>
    ),
  },
  {
    name: "Built-In Monetization",
    className: "col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-1",
    description: "Accept global or local payments. Keep 95% of revenue. No setup cost or monthly subscriptions.",
    href: "#",
    cta: "Learn more",
    // background: <BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />,
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Community-Driven Learning",
    className: "col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-2",
    description: "Give users a mobile app with daily tasks, leaderboards, discussions, peer connections, and direct messaging.",
    href: "#",
    cta: "Learn more",
    // background: <BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />,
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: "Gamification That Works",
    className: "col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-1",
    description: "Track streaks, reward milestones, promote top contributors, and encourage consistency through fun design.",
    href: "#",
    cta: "Learn more",
    // background: <BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />,
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: "Works Globally",
    className: "col-span-1 md:col-span-2 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md border border-gray-700/40 box-pulse-glow scroll-animation scroll-delay-2",
    description: "Designed to work on any device, in any country, with localized payment flows and creator-friendly policies.",
    href: "#",
    cta: "Learn more",
    // background: <BorderBeam size={150} duration={8} delay={0} colorFrom="#60a5fa" colorTo="#c084fc" />,
    Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function KeyFeaturesSection() {
  return (
    <section id="features" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 spacing-3">
        <GradientHeading as="h2" className="heading-md text-center scroll-animation">Key Features</GradientHeading>
        <p className="body-lg text-center text-container mx-auto scroll-animation scroll-delay-1">Everything you need to build, grow, and monetize your learning community</p>
        <div className="max-w-6xl mx-auto">
          <BentoGrid className="md:auto-rows-[16rem] grid-cols-1 md:grid-cols-4">
            {KeyFeatures.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
} 