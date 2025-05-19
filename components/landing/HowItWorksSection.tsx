import GradientHeading from "@/components/ui/GradientHeading";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 spacing-3">
        <GradientHeading as="h2" className="heading-md text-center scroll-animation">How Playto Works: Your 3-Step Path to Success</GradientHeading>
        <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8">
          {[
            {
              step: 1,
              title: "Create Your Vision",
              description: "Build your community or course with a few taps—no code required. Add lessons, set topics, and customize your space."
            },
            {
              step: 2,
              title: "Launch with Ease",
              description: "Share your unique link via social media or messaging apps. Your audience downloads Playto and joins instantly."
            },
            {
              step: 3,
              title: "Grow and Thrive",
              description: "Engage with live chats, structured courses, and challenges. Watch your revenue soar as your community scales."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative group bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black/20 backdrop-blur-md p-6 rounded-xl border border-gray-700/40 scroll-animation flex items-start space-x-4 box-pulse-glow overflow-hidden"
              style={{animationDelay: `${index * 0.1 + 0.1}s`}}
            >
              <BorderBeam size={100} duration={6} delay={index * 0.2} colorFrom="#60a5fa" colorTo="#c084fc" />
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/50 text-blue-200 font-bold text-lg border border-blue-500/70 shadow-md">
                {item.step}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-100 mb-1">{item.title}</h3>
                <p className="text-neutral-300 body-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 