import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/magicui/particles";
import { CursorWrapper } from "@/components/ui/cursor-wrapper";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Playto - Community Apps, Courses & Memberships",
  description: "Playto is an all-in-one mobile-first platform that combines community apps, course platforms, and monetization tools for creators and educators.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      }
    ],
    apple: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "180x180"
      }
    ]
  },
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-black bg-dotted-grid relative overflow-x-hidden`}>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Particles
            className="h-full w-full"
            quantity={200}
            ease={20}
            color="#ffffff"
            size={1.2}
            refresh={true}
            staticity={30}
          />
        </div>
        {children}
        <CursorWrapper />
      </body>
    </html>
  );
}
