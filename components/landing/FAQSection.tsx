import GradientHeading from "@/components/ui/GradientHeading";
import { useState } from "react";

export default function FAQSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <section id="faq" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4 spacing-3">
        <GradientHeading as="h2" className="heading-md text-center scroll-animation">Frequently Asked Questions</GradientHeading>
        <div className="max-w-2xl mx-auto spacing-2">
          <div className="space-y-2">
            {[
              {
                question: "What exactly is Playto?",
                answer: "Playto is an all-in-one mobile-first platform that empowers creators, educators, and community leaders to build, grow, and monetize learning communities—without needing any technical skills, websites, or third-party tools."
              },
              {
                question: "How quickly can I launch my community?",
                answer: "You can launch your community in just 2 minutes. Simply enter your community name, description, price (or set it free), and welcome message—and your mobile landing page is ready instantly."
              },
              {
                question: "What payment methods are supported?",
                answer: "Playto supports global and local payment methods, including credit/debit cards, digital wallets, and region-specific options like UPI in India."
              },
              {
                question: "How much does it cost to use Playto?",
                answer: "Playto has no setup costs or monthly subscriptions. We take a small percentage of your revenue (starting at just 5%, dropping to 3.5% as you scale), which is the lowest platform fee in the industry."
              },
              {
                question: "When is Playto launching?",
                answer: "Playto is currently in private beta. Join the waitlist to be among the first to get access when we launch publicly."
              },
              {
                question: "How do I join the waitlist?",
                answer: "Simply enter your email in the form below and click \"Join Waitlist.\" We'll notify you as soon as Playto is available for you."
              },
              {
                question: "What makes this platform different from others like Discord or Reddit?",
                answer: "Playto is designed specifically for creators and educators to build monetizable learning communities. While Discord and Reddit are great for general communities, Playto offers built-in course structures, monetization, gamification, and a mobile-first experience tailored for this purpose. It's an all-in-one solution, so you don't need to piece together multiple tools."
              },
              {
                question: "How do I create my own community?",
                answer: "Once you have access, creating a community is a simple 3-step process: 1. Define your vision (name, description, topic). 2. Set up your structure (lessons, chat channels). 3. Invite your audience. Our intuitive interface guides you through each step, no technical skills needed."
              },
              {
                question: "What are the benefits of a Creator account?",
                answer: "A Creator account unlocks advanced features like full monetization capabilities (paid access, subscriptions), access to marketing tools (email campaigns, landing page builder - coming soon), detailed analytics, and priority support. It's designed for those serious about building and growing a thriving paid community or course."
              },
              {
                question: "How does the leaderboard system work?",
                answer: "The leaderboard encourages engagement by awarding points for various activities like completing lessons, participating in discussions, helping other members, and achieving milestones. Members can see their rank, earn badges, and compete in a friendly way, fostering a more active and supportive community."
              },
              {
                question: "How do I join and participate in voice chats?",
                answer: "Joining a voice chat is as simple as tapping on an active voice channel within a community. You can listen in, and if you wish to speak, you can request to talk (depending on admin settings). It's designed to be similar to Clubhouse or Twitter Spaces, offering real-time audio conversations."
              },
              {
                question: "Is there a desktop version available?",
                answer: "Playto is a mobile-first platform, optimized for the best experience on smartphones. While a full-featured desktop version is planned for the future to aid creators in content management, the primary member experience is designed for mobile. Members can currently access a web view for basic interactions."
              },
              {
                question: "What types of media can I share in communities?",
                answer: "You can share a wide variety of media, including text messages, images, videos (uploads and embeds), audio files, documents (PDFs, presentations), and links. Our aim is to make content sharing rich and versatile for both creators and members."
              },
              {
                question: "What are the pricing options?",
                answer: "For members, joining most communities will be free, though creators can set up paid-access communities or courses. For creators, we offer a free tier with basic community features. Our Creator Pro plan, which includes monetization and advanced tools, has a simple revenue-sharing model with no upfront costs or monthly fees – we only make money when you do. Detailed pricing will be available at launch."
              }
            ].map((faq, index) => (
              <div key={index} className="rounded-xl border border-gray-800/70 bg-gray-900/70 shadow-sm mb-1">
                <button 
                  className="w-full text-left px-5 py-3 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="body-md text-neutral-300 font-medium">{faq.question}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 text-neutral-400 transition-transform duration-300 ${activeAccordion === index ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 px-5 ${
                    activeAccordion === index ? 'max-h-40 opacity-100 pb-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="body-md text-neutral-400 font-normal leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 