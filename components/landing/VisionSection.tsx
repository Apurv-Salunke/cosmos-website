import GradientHeading from "@/components/ui/GradientHeading";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function VisionSection() {
  return (
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
  );
} 