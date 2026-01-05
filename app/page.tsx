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
import {
  ABOUT_EVENTS,
  DOMAINS,
  ABOUT_STATS,
  ABOUT_CONTENT,
  GALLERY_PREVIEW,
} from "@/lib/config";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Testimonial } from "@/components/ui/design-testimonial";
import { JoinUsButton } from "@/components/join-us-button";


export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background font-sans selection:bg-accent selection:text-background">
      {/* <ScrollProgress className="top-0" /> */}

      {/* Hero Section */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden pb-20 pt-10 md:pb-32">
        <RetroGrid />

        <div className="z-10 flex flex-col items-center gap-6 text-center px-4">


          {/* LOGO tba here*/}

          {/* <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-foreground">
            IOSD
            <span className="text-accent">.</span>
          </h1> */}

          <div className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground max-w-2xl">
            Maharaja Agrasen Institute of Technology
            <br className="hidden sm:block" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[500px] w-full translate-y-[20%] opacity-40 md:opacity-60 pointer-events-none">
          <Globe className="top-20" />
        </div>
      </section>

      {/* Domains Bento Grid */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-3xl font-light tracking-tight text-center">
          Technical Domains
        </h2>
        <BentoGrid className="lg:grid-rows-2">
          {DOMAINS.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* Testimonials Section */}
      <section className="w-full">
        <Testimonial />
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {ABOUT_STATS.map((stat, index) => (
            <div
              key={index}
              className="group relative border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-border"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-accent" />

              <stat.Icon className="h-6 w-6 text-foreground mb-6" />

              <h3 className="text-5xl font-light tracking-tight tabular-nums">
                <NumberTicker value={stat.value} />
                <span className="text-3xl align-super">+</span>
              </h3>

              <p className="mt-3 mono text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>



      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex items-center justify-center mb-12">
          <a
            href="/gallery"
            className="text-3xl font-light tracking-tight text-center transition-colors cursor-target"
            style={{ cursor: 'none' }}
          >
            Gallery
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_PREVIEW.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-muted group cursor-pointer ${item.gridClass}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {item.label && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium">{item.label}</p>
                </div>
              )}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-24 flex flex-col items-center justify-center text-center px-4 border-t border-border/40 bg-background/50 backdrop-blur-sm">
        <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tighter">
          Ready to <span className="text-accent">Build?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mb-8 text-lg">
          Join the most vibrant technical community at MAIT. Whether you're a beginner or a pro, there's a place for you here.
        </p>
        <JoinUsButton/>
      </section>
    </div>
  );
}
