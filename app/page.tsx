"use client"

import { Inter } from 'next/font/google';
import HeroSection from "@/components/landing/HeroSection";
import WhatIsPlaytoSection from "@/components/landing/WhatIsPlaytoSection";
import WhoIsPlaytoForSection from "@/components/landing/WhoIsPlaytoForSection";
import KeyFeaturesSection from "@/components/landing/KeyFeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SimpleInterfaceSection from "@/components/landing/SimpleInterfaceSection";
import ComprehensiveLearningSection from "@/components/landing/ComprehensiveLearningSection";
// import GamifiedEngagementSection from "@/components/landing/GamifiedEngagementSection";
// import CommunityLandingSection from "@/components/landing/CommunityLandingSection";
// import MarketingToolsSection from "@/components/landing/MarketingToolsSection";
// import TestimonialsSection from "@/components/landing/TestimonialsSection";
// import HowPlaytoIsDifferentSection from "@/components/landing/HowPlaytoIsDifferentSection";
// import VisionSection from "@/components/landing/VisionSection";
// import FAQSection from "@/components/landing/FAQSection";
// import JoinWaitlistSection from "@/components/landing/JoinWaitlistSection";
// import Footer from "@/components/landing/Footer";
import { audienceProfiles } from "@/lib/constants";
import React, { memo } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const MemoizedWhatIsPlaytoSection = memo(WhatIsPlaytoSection);
const MemoizedWhoIsPlaytoForSection = memo(WhoIsPlaytoForSection);
const MemoizedKeyFeaturesSection = memo(KeyFeaturesSection);
const MemoizedHowItWorksSection = memo(HowItWorksSection);
const MemoizedSimpleInterfaceSection = memo(SimpleInterfaceSection);
const MemoizedComprehensiveLearningSection = memo(ComprehensiveLearningSection);
// const MemoizedGamifiedEngagementSection = memo(GamifiedEngagementSection);
// const MemoizedCommunityLandingSection = memo(CommunityLandingSection);
// const MemoizedMarketingToolsSection = memo(MarketingToolsSection);
// const MemoizedTestimonialsSection = memo(TestimonialsSection);
// const MemoizedHowPlaytoIsDifferentSection = memo(HowPlaytoIsDifferentSection);
// const MemoizedVisionSection = memo(VisionSection);
// // const MemoizedFAQSection = memo(FAQSection);
// const MemoizedJoinWaitlistSection = memo(JoinWaitlistSection);
// const MemoizedFooter = memo(Footer);

export default function Home() {
  return (
    <div className={`relative flex flex-col min-h-screen bg-black text-foreground bg-dotted-grid ${inter.className}`}>
      <main className="flex-grow relative z-0">
        {/* Hero Section */}
        <HeroSection />
        {/* What is Playto */}
        <MemoizedWhatIsPlaytoSection />
        {/* Who is Playto for */}
        <MemoizedWhoIsPlaytoForSection audienceProfiles={audienceProfiles} />
        {/* Key Features */}
        <MemoizedKeyFeaturesSection />
        {/* How It Works */}
        <MemoizedHowItWorksSection />
        {/* Simple, Beautiful Interface */}
        <MemoizedSimpleInterfaceSection />
        {/* Comprehensive Learning Experience */}
        <MemoizedComprehensiveLearningSection />
        {/* Gamified Engagement */}
        {/* <MemoizedGamifiedEngagementSection /> */}
        {/* Community Landing Page */}
        {/* <MemoizedCommunityLandingSection /> */}
        {/* Powerful Marketing Tools */}
        {/* <MemoizedMarketingToolsSection /> */}
        {/* Testimonials */}
        {/* <MemoizedTestimonialsSection /> */}
        {/* How Playto is Different */}
        {/* <MemoizedHowPlaytoIsDifferentSection /> */}
        {/* The Vision */}
        {/* <MemoizedVisionSection /> */}
        {/* FAQ Section */}
        {/* <MemoizedFAQSection /> */}
        {/* Join Waitlist */}
        {/* <MemoizedJoinWaitlistSection /> */}
      </main>

      {/* Footer */}
      {/* <MemoizedFooter /> */}
    </div>
  )
}