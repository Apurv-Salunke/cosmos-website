import GradientHeading from "@/components/ui/GradientHeading";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CheckCircle2 } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useMemo } from "react";

export default function GamifiedEngagementSection() {
  const neonColors = useMemo(() => ({ firstColor: "#3b82f6", secondColor: "#10b981" }), []);
  return (
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
                neonColors={neonColors}
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
  );
} 