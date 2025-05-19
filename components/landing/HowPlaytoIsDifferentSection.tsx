import GradientHeading from "@/components/ui/GradientHeading";

export default function HowPlaytoIsDifferentSection() {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4 spacing-3">
        <GradientHeading as="h2" className="heading-md text-center scroll-animation">How Playto is Different</GradientHeading>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full max-w-3xl mx-auto">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-2 md:px-4 text-left body-md font-bold">Feature</th>
                <th className="py-4 px-2 md:px-4 text-left body-md font-bold">Other Platforms</th>
                <th className="py-4 px-2 md:px-4 text-left body-md font-bold">Playto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-2 md:px-4 body-md">Mobile-first design</td>
                <td className="py-4 px-2 md:px-4 body-md text-gray-400">Mostly desktop</td>
                <td className="py-4 px-2 md:px-4 body-md text-blue-400 font-medium">100% mobile-native</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-2 md:px-4 body-md">Community + course</td>
                <td className="py-4 px-2 md:px-4 body-md text-gray-400">Separate tools needed</td>
                <td className="py-4 px-2 md:px-4 body-md text-blue-400 font-medium">Unified in one</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-2 md:px-4 body-md">Revenue cut</td>
                <td className="py-4 px-2 md:px-4 body-md text-gray-400">10–30%</td>
                <td className="py-4 px-2 md:px-4 body-md text-blue-400 font-medium">Starts at 5%, drops to 3.5% as you scale</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-2 md:px-4 body-md">Ease of setup</td>
                <td className="py-4 px-2 md:px-4 body-md text-gray-400">Tech-heavy</td>
                <td className="py-4 px-2 md:px-4 body-md text-blue-400 font-medium">2 minutes, no code</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-2 md:px-4 body-md">Global readiness</td>
                <td className="py-4 px-2 md:px-4 body-md text-gray-400">U.S.-centric</td>
                <td className="py-4 px-2 md:px-4 body-md text-blue-400 font-medium">Works across India, SEA, LATAM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
} 