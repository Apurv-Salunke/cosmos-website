import GradientHeading from "@/components/ui/GradientHeading";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { BorderBeam } from "@/components/magicui/border-beam";
import { CheckCircle2 } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useMemo } from "react";

const learningFeatures = [
  {
    icon: <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />,
    title: "Structured Course Modules",
    description: "Easily navigate through organized course content with clear progression paths.",
  },
  {
    icon: <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />,
    title: "Assignment Submissions",
    description: "Complete and submit assignments directly within the app with deadline tracking.",
  },
  {
    icon: <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />,
    title: "Progress Tracking",
    description: "Visualize your learning journey with intuitive progress indicators and completion status.",
  },
  {
    icon: <CheckCircle2 size={24} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />,
    title: "Course Discussions",
    description: "Engage directly with instructors and peers through module-specific discussion threads.",
  },
];

export default function ComprehensiveLearningSection() {
  const neonColors = useMemo(() => ({ firstColor: "#ec4899", secondColor: "#3b82f6" }), []);
  return (
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
                  delay={0.4} 
                  colorFrom="#ec4899" 
                  colorTo="#3b82f6" 
                  className="z-0" 
                /> */}
              </div>
            </div>
          </div>
          <div className="space-y-6 scroll-animation scroll-delay-2">
            <h3 className="text-3xl font-bold text-gray-100">Interactive Learning Experience</h3>
            <p className="body-md text-neutral-300">Our learning tab provides a structured, engaging way to consume course content, track progress, and complete assignments.</p>
            <ul className="space-y-4">
              {learningFeatures.map((feature) => (
                <li className="flex items-start" key={feature.title}>
                  {feature.icon}
                  <div>
                    <h4 className="font-semibold text-gray-100">{feature.title}</h4>
                    <p className="text-neutral-400 body-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ShimmerButton className="mt-4 w-full md:w-auto" background="rgba(59, 130, 246, 0.5)">Join the Waitlist</ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
} 