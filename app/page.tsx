"use client";

import { Globe } from "@/components/ui/globe";
import { RetroGrid } from "@/components/ui/retro-grid";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { WordRotate } from "@/components/ui/word-rotate";
import { Calendar, GraduationCap, Users, Image as ImageIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { EVENTS, NOTABLE_ALUMNI, TEAM_MEMBERS, GALLERY_IMAGES } from "@/lib/config";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background font-sans selection:bg-accent selection:text-background">
      <ScrollProgress className="top-0" />
      
      {/* Hero Section */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden pb-20 pt-10 md:pb-32">
        <RetroGrid />
        
        <div className="z-10 flex flex-col items-center gap-6 text-center px-4">
          <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm font-medium text-accent backdrop-blur-xl">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            MAIT's Premier Tech Society
          </div>
          
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-foreground">
            IOSD
            <span className="text-accent">.</span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground max-w-2xl">
            International Organization of <br className="hidden sm:block" />
            <WordRotate 
              className="font-medium text-foreground inline-block"
              words={["Software Developers", "Innovators", "Builders", "Dreamers"]}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/about">
              <RainbowButton>
                Join the Community <ArrowRight className="ml-2 h-4 w-4" />
              </RainbowButton>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[500px] w-full translate-y-[20%] opacity-40 md:opacity-60 pointer-events-none">
           <Globe className="top-20" />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-24 flex flex-col items-center justify-center text-center px-4 border-t border-border/40 bg-background/50 backdrop-blur-sm">
         <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            Ready to <span className="text-accent">Build?</span>
         </h2>
         <p className="text-muted-foreground max-w-xl mb-8 text-lg">
            Join the most vibrant technical community at MAIT. Whether you're a beginner or a pro, there's a place for you here.
         </p>
         <Link href="https://chat.whatsapp.com/your-group-link" target="_blank">
            <RainbowButton>Join WhatsApp Community</RainbowButton>
         </Link>
      </section>
    </div>
  );
}
