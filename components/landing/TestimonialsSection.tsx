import GradientHeading from "@/components/ui/GradientHeading";
import { Marquee } from "@/components/magicui/marquee";

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8 spacing-2">
        <GradientHeading as="h2" className="heading-md text-center scroll-animation">What People Are Saying</GradientHeading>
        <p className="body-lg text-center text-container mx-auto scroll-animation scroll-delay-1">Creators and educators love how Playto makes community building simple</p>
      </div>
      <div className="theme">
        <Marquee className="py-2 [--duration:15s]" pauseOnHover repeat={4}>
          <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">A</div>
              <div className="ml-3">
                <div className="font-medium">Alex</div>
                <div className="text-sm text-gray-400">@alex</div>
              </div>
            </div>
            <p className="body-sm text-gray-300">I&apos;ve never seen anything like this before. It&apos;s amazing. I love it.</p>
          </div>
          <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-lg">J</div>
              <div className="ml-3">
                <div className="font-medium">Jack</div>
                <div className="text-sm text-gray-400">@jack</div>
              </div>
            </div>
            <p className="body-sm text-gray-300">I&apos;m at a loss for words. This is amazing. I love it.</p>
          </div>
          <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">J</div>
              <div className="ml-3">
                <div className="font-medium">Jill</div>
                <div className="text-sm text-gray-400">@jill</div>
              </div>
            </div>
            <p className="body-sm text-gray-300">I don&apos;t know what to say. I&apos;m speechless. This is amazing.</p>
          </div>
          <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">J</div>
              <div className="ml-3">
                <div className="font-medium">James</div>
                <div className="text-sm text-gray-400">@james</div>
              </div>
            </div>
            <p className="body-sm text-gray-300">I&apos;m at a loss for words. This is amazing. I love it.</p>
          </div>
          <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">J</div>
              <div className="ml-3">
                <div className="font-medium">Jane</div>
                <div className="text-sm text-gray-400">@jane</div>
              </div>
            </div>
            <p className="body-sm text-gray-300">I&apos;m at a loss for words. This is amazing. I love it.</p>
          </div>
        </Marquee>
        <Marquee className="py-2 [--duration:15s]" reverse pauseOnHover repeat={4}>
          <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">R</div>
              <div className="ml-3">
                <div className="font-medium">Ryan</div>
                <div className="text-sm text-gray-400">@ryan</div>
              </div>
            </div>
            <p className="body-sm text-gray-300">Setting up my community was so easy. Can&apos;t believe it only took minutes.</p>
          </div>
          <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">M</div>
              <div className="ml-3">
                <div className="font-medium">Maria</div>
                <div className="text-sm text-gray-400">@maria</div>
              </div>
            </div>
            <p className="body-sm text-gray-300">My students are loving the mobile experience. It&apos;s so easy to use.</p>
          </div>
          <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">D</div>
              <div className="ml-3">
                <div className="font-medium">David</div>
                <div className="text-sm text-gray-400">@david</div>
              </div>
            </div>
            <p className="body-sm text-gray-300">The gamification features are brilliant. Engagement is up 300%!</p>
          </div>
          <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">S</div>
              <div className="ml-3">
                <div className="font-medium">Sarah</div>
                <div className="text-sm text-gray-400">@sarah</div>
              </div>
            </div>
            <p className="body-sm text-gray-300">Finally a platform that works well in my country. The payments are seamless.</p>
          </div>
          <div className="flex-shrink-0 w-[280px] bg-gray-900 p-5 rounded-xl border border-gray-800 mx-3">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">T</div>
              <div className="ml-3">
                <div className="font-medium">Tom</div>
                <div className="text-sm text-gray-400">@tom</div>
              </div>
            </div>
            <p className="body-sm text-gray-300">I switched from three separate tools to just Playto. So much simpler now.</p>
          </div>
        </Marquee>
      </div>
    </section>
  );
} 