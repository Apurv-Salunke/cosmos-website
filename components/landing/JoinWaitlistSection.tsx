import GradientHeading from "@/components/ui/GradientHeading";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function JoinWaitlistSection() {
  return (
    <section id="join" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 spacing-3">
        <GradientHeading as="h2" className="heading-md text-center">Ready to see the future?</GradientHeading>
        <div className="flex justify-center mt-2">
          <ShimmerButton 
            shimmerColor="rgba(255, 255, 255, 0.5)" 
            background="rgba(59, 130, 246, 0.5)"
            shimmerDuration="2.5s"
            className="text-base md:text-lg font-medium px-8 py-3"
          >
            Join the Waitlist
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
} 