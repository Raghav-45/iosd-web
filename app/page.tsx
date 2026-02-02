"use client";

import { Globe } from "@/components/ui/globe";
import { RetroGrid } from "@/components/ui/retro-grid";
import { FAQ_ITEMS } from "@/lib/config";
import Image from "next/image";
import { motion } from "framer-motion";
import { WhatWeOffer } from "@/components/sections/what-we-offer";
import { TrustedBy } from "@/components/sections/trusted-by";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/ui/faq-section";
import { DomainsSection } from "@/components/sections/domains-section";
import { StatsSection } from "@/components/sections/stats-section";
import { GallerySection } from "@/components/sections/gallery-section";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background font-sans selection:bg-accent selection:text-background">
      {/* Hero Section */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden pb-20 pt-10 md:pb-32">
        <RetroGrid />

        <motion.div 
          className="z-10 flex flex-col items-center gap-6 text-center px-4 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/IOSD_HD.png"
            alt="IOSD Logo"
            width={1079}
            height={280}
            className="h-auto w-auto max-w-[85vw] sm:max-w-xl md:max-w-3xl object-contain"
            priority
          />
          <motion.div 
            className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Maharaja Agrasen Institute of Technology
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              className="w-6 h-10 border border-border rounded-full flex justify-center pt-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-1 h-2 bg-accent rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-[500px] w-full translate-y-[20%] opacity-40 md:opacity-60 pointer-events-none">
          <Globe className="top-20" />
        </div>
      </section>

      {/* Trusted By / Alumni Work At */}
      <TrustedBy />

      {/* What We Offer - Broad Benefits */}
      <WhatWeOffer />

      {/* Technical Domains - Specific Tracks */}
      <DomainsSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* FAQ Section */}
      <FAQSection 
        items={FAQ_ITEMS} 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about joining IOSD."
      />

      {/* Footer CTA */}
      <CTASection />
    </div>
  );
}
