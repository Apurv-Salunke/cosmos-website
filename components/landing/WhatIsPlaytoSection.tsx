import GradientHeading from "@/components/ui/GradientHeading";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MessageSquareText, PlaySquare, BarChart3, Megaphone, Star, CheckCircle2 } from "lucide-react";

export default function WhatIsPlaytoSection() {
  return (
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
              description: "Exclusive spaces for supporters with premium content.",
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
  );
} 