"use client";

import { Globe } from "@/components/ui/globe";
import { RetroGrid } from "@/components/ui/retro-grid";
import {
  ABOUT_STATS,
  GALLERY_PREVIEW,
  FAQ_ITEMS,
} from "@/lib/config";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Testimonial } from "@/components/ui/design-testimonial";
import Image from "next/image";
import { motion } from "framer-motion";
import { WhatWeOffer } from "@/components/sections/what-we-offer";
import { TrustedBy } from "@/components/sections/trusted-by";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/ui/faq-section";
import { DomainsSection } from "@/components/sections/domains-section";

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
            className="h-auto w-auto max-w-[80vw] sm:max-w-lg md:max-w-xl object-contain scale-140"
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

      {/* What We Offer */}
      {/* <WhatWeOffer /> */}

      {/* Technical Domains */}
      <DomainsSection />

      {/* Testimonials Section */}
      {/* <section className="w-full border-y border-border/40">
        <Testimonial />
      </section> */}

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-accent text-xs tracking-widest mb-4 block">
            IMPACT
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Our Numbers
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {ABOUT_STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-accent" />

              <stat.Icon className="h-6 w-6 text-foreground mb-6" />

              <h3 className="text-5xl font-light tracking-tight tabular-nums">
                <NumberTicker value={stat.value} />
                <span className="text-3xl align-super text-accent">+</span>
              </h3>

              <p className="mt-3 mono text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        items={FAQ_ITEMS} 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about joining IOSD."
      />

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/gallery"
            className="inline-block text-3xl font-light tracking-tight text-center transition-colors hover:text-accent cursor-target"
            style={{ cursor: 'none' }}
          >
            Gallery
            <span className="block mono text-xs text-muted-foreground mt-2 tracking-widest">
              VIEW ALL →
            </span>
          </a>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_PREVIEW.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden bg-muted group cursor-pointer ${item.gridClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {item.label && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium">{item.label}</p>
                </div>
              )}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <CTASection />
    </div>
  );
}
