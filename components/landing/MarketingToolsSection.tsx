import GradientHeading from "@/components/ui/GradientHeading";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CheckCircle2 } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useMemo } from "react";

export default function MarketingToolsSection() {
  const neonColors = useMemo(() => ({ firstColor: "#f59e0b", secondColor: "#ef4444" }), []);
  return (
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
  );
} 