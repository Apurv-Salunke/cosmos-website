import GradientHeading from "@/components/ui/GradientHeading";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { BorderBeam } from "@/components/magicui/border-beam";
import React from "react";

interface AudienceProfile {
  id: number;
  name: string;
  image: string;
}

const AudienceCard = React.memo(function AudienceCard({ profile }: { profile: AudienceProfile }) {
  return (
    <div 
      className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
    >
      <div className="mb-3 relative w-[140px] h-[280px] group">
        <div className="absolute inset-0 bg-blue-500/20 rounded-3xl scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
        <div className="relative rounded-3xl">
          <Iphone15Pro 
            width={140} 
            height={280} 
            className="iphone-frame transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20" 
            src="/images/program.png"
          />
          <BorderBeam 
            size={60}
            colorFrom="#60a5fa"
            colorTo="#c084fc"
            duration={8}
            delay={profile.id * 0.5}
          />
        </div>
      </div>
      <h3 className="body-md font-medium group-hover:text-blue-400 transition-colors duration-300">{profile.name}</h3>
    </div>
  );
});

export default function WhoIsPlaytoForSection({ audienceProfiles }: { audienceProfiles: AudienceProfile[] }) {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4 spacing-3">
        <GradientHeading as="h2" className="heading-md text-center scroll-animation">Who is Playto for?</GradientHeading>
        <div className="mb-12 flex justify-center">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-blue-500' : 'bg-gray-500'} transition-all duration-300 hover:scale-150 hover:bg-blue-500 cursor-pointer`} 
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {audienceProfiles.map((profile) => (
            <AudienceCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
} 
 