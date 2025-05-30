"use client"

import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import HeroSection from "@/components/landing/HeroSection";
import Footer from "@/components/landing/Footer";
import { audienceProfiles } from "@/lib/constants";
import React, { memo } from 'react';
import LoadOnScroll from '@/components/LoadOnScroll';

const WhatIsPlaytoSection = dynamic(() => import('@/components/landing/WhatIsPlaytoSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const WhoIsPlaytoForSection = dynamic(() => import('@/components/landing/WhoIsPlaytoForSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const KeyFeaturesSection = dynamic(() => import('@/components/landing/KeyFeaturesSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const HowItWorksSection = dynamic(() => import('@/components/landing/HowItWorksSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const SimpleInterfaceSection = dynamic(() => import('@/components/landing/SimpleInterfaceSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const ComprehensiveLearningSection = dynamic(() => import('@/components/landing/ComprehensiveLearningSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const GamifiedEngagementSection = dynamic(() => import('@/components/landing/GamifiedEngagementSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const CommunityLandingSection = dynamic(() => import('@/components/landing/CommunityLandingSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const MarketingToolsSection = dynamic(() => import('@/components/landing/MarketingToolsSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const TestimonialsSection = dynamic(() => import('@/components/landing/TestimonialsSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const HowPlaytoIsDifferentSection = dynamic(() => import('@/components/landing/HowPlaytoIsDifferentSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const VisionSection = dynamic(() => import('@/components/landing/VisionSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const FAQSection = dynamic(() => import('@/components/landing/FAQSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });
const JoinWaitlistSection = dynamic(() => import('@/components/landing/JoinWaitlistSection'), { loading: () => <div style={{minHeight: 200}}>Loading...</div> });

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
const MemoizedGamifiedEngagementSection = memo(GamifiedEngagementSection);
const MemoizedCommunityLandingSection = memo(CommunityLandingSection);
const MemoizedMarketingToolsSection = memo(MarketingToolsSection);
const MemoizedTestimonialsSection = memo(TestimonialsSection);
const MemoizedHowPlaytoIsDifferentSection = memo(HowPlaytoIsDifferentSection);
const MemoizedVisionSection = memo(VisionSection);
const MemoizedFAQSection = memo(FAQSection);
const MemoizedJoinWaitlistSection = memo(JoinWaitlistSection);
const MemoizedFooter = memo(Footer);

export default function Home() {
  return (
    <div className={`relative flex flex-col min-h-screen bg-black text-foreground bg-dotted-grid ${inter.className}`}>
      <main className="flex-grow relative z-0">
        {/* Hero Section */}
        <HeroSection />
        {/* What is Playto */}
        <LoadOnScroll><MemoizedWhatIsPlaytoSection /></LoadOnScroll>
        {/* Who is Playto for */}
        <LoadOnScroll><MemoizedWhoIsPlaytoForSection audienceProfiles={audienceProfiles} /></LoadOnScroll>
        {/* Key Features */}
        <LoadOnScroll><MemoizedKeyFeaturesSection /></LoadOnScroll>
        {/* How It Works */}
        <LoadOnScroll><MemoizedHowItWorksSection /></LoadOnScroll>
        {/* Simple, Beautiful Interface */}
        <LoadOnScroll><MemoizedSimpleInterfaceSection /></LoadOnScroll>
        {/* Comprehensive Learning Experience */}
        <LoadOnScroll><MemoizedComprehensiveLearningSection /></LoadOnScroll>
        {/* Gamified Engagement */}
        <LoadOnScroll><MemoizedGamifiedEngagementSection /></LoadOnScroll>
        {/* Community Landing Page */}
        <LoadOnScroll><MemoizedCommunityLandingSection /></LoadOnScroll>
        {/* Powerful Marketing Tools */}
        <LoadOnScroll><MemoizedMarketingToolsSection /></LoadOnScroll>
        {/* Testimonials */}
        <LoadOnScroll><MemoizedTestimonialsSection /></LoadOnScroll>
        {/* How Playto is Different */}
        <LoadOnScroll><MemoizedHowPlaytoIsDifferentSection /></LoadOnScroll>
        {/* The Vision */}
        <LoadOnScroll><MemoizedVisionSection /></LoadOnScroll>
        {/* FAQ Section */}
        <LoadOnScroll><MemoizedFAQSection /></LoadOnScroll>
        {/* Join Waitlist */}
        <LoadOnScroll><MemoizedJoinWaitlistSection /></LoadOnScroll>
      </main>
      {/* Footer */}
      <MemoizedFooter />
    </div>
  )
}