import GradientHeading from "@/components/ui/GradientHeading";
import { MessageSquareText, PlaySquare, BarChart3, Megaphone } from "lucide-react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useMemo } from "react";

const interfaceFeatures = [
  {
    icon: <MessageSquareText size={24} className="mr-3 mt-1 text-blue-400 flex-shrink-0" />,
    title: "WhatsApp-style Chat Interface",
    description: "Familiar messaging interface that's easy to use with community-focused enhancements.",
  },
  {
    icon: <PlaySquare size={24} className="mr-3 mt-1 text-green-400 flex-shrink-0" />,
    title: "Tab-based Navigation",
    description: "Simple bottom tabs for switching between chat, learning, leaderboard, and more.",
  },
  {
    icon: <BarChart3 size={24} className="mr-3 mt-1 text-purple-400 flex-shrink-0" />,
    title: "Topic Organization",
    description: "Keep conversations organized with topics instead of confusing sub-groups.",
  },
  {
    icon: <Megaphone size={24} className="mr-3 mt-1 text-amber-400 flex-shrink-0" />,
    title: "Mobile-First Design",
    description: "Built for mobile with a responsive design that works on any device.",
  },
];

export default function SimpleInterfaceSection() {
  const neonColors = useMemo(() => ({ firstColor: "#3b82f6", secondColor: "#8b5cf6" }), []);
  return (
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
                {/* <BorderBeam 
                  size={200} 
                  duration={10} 
                  delay={0} 
                  colorFrom="#60a5fa" 
                  colorTo="#c084fc" 
                  className="z-0" 
                /> */}
              </div>
            </div>
          </div>
          <div className="space-y-6 scroll-animation scroll-delay-2">
            <h3 className="text-3xl font-bold text-gray-100">Intuitive Navigation</h3>
            <p className="body-md text-neutral-300">Navigate effortlessly between communities, courses, and features with a simple, WhatsApp-inspired interface.</p>
            <ul className="space-y-4">
              {interfaceFeatures.map((feature) => (
                <li className="flex items-start" key={feature.title}>
                  {feature.icon}
                  <div>
                    <h4 className="font-semibold text-gray-100">{feature.title}</h4>
                    <p className="text-neutral-400 body-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#features" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
              See all interface features
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 