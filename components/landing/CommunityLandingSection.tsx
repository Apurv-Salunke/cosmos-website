import GradientHeading from "@/components/ui/GradientHeading";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CheckCircle2 } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function CommunityLandingSection() {
  return (
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
  );
} 