"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { AvatarCircles } from "@/components/ui/avatar-circles"
import { DotPattern } from "@/components/ui/dot-pattern"
import { AlumniIndex } from "@/components/alumni/AlumniIndex"
import { AlumniOutcomes } from "@/components/alumni/AlumniOutcomes"
import { ALUMNI_OUTCOMES, NOTABLE_ALUMNI } from "@/lib/config"
import Meta from "@/public/logos/meta-3.svg"
import Uber from "@/public/logos/uber-15.svg"
import Apple from "@/public/logos/Apple_logo_white.svg"
import ZS from "@/public/logos/zs.png"
import PayPal from "@/public/logos/paypal.png"
import { motion } from "framer-motion"
import { CTASection } from "@/components/sections/cta-section"
import { FeatureGrid } from "@/components/ui/feature-grid"

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    logo: Meta,
  },
  {
    name: "Apple",
    logo: Apple
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Uber",
    logo: Uber,
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
  {
    name: "Twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    name: "PayPal",
    logo: PayPal,
  },
  {
    name: "ZS",
    logo: ZS,
  },
];


const avatarUrls = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "#" },
]

const impactFeatures = [
  {
    title: "Technical Excellence",
    description:
      "Alumni from IOSD go on to build systems, products, and platforms that serve millions - across industry, startups, and research.",
  },
  {
    title: "Leadership & Ownership",
    description:
      "From founding startups to leading teams, IOSD alumni carry forward a culture of ownership, curiosity, and long-term thinking.",
  },
  {
    title: "Global Footprint",
    description:
      "Our community spans continents - contributing to organizations and research institutions across the world.",
  },
  {
    title: "Giving Back",
    description:
      "Many alumni continue to mentor, teach, and guide newer members - sustaining the ecosystem that shaped them.",
  },
]

export default function AlumniPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center">
        <motion.div 
          className="z-10 flex flex-col items-center gap-6 text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mono text-accent text-xs tracking-widest">
            OUR NETWORK
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight">
            IOSD Alumni
          </h1>

          <p className="max-w-xl text-muted-foreground text-lg">
            Generations of builders, engineers, and leaders - connected by craft.
          </p>

          <motion.div 
            className="mt-4 flex items-center gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <AvatarCircles
              numPeople={99}
              avatarUrls={avatarUrls}
            />
          </motion.div>
        </motion.div>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "opacity-40"
          )}
        />
      </section>

      {/* Impact */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-accent text-xs tracking-widest mb-4 block text-center">
            THE IMPACT
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-4">
            Our Impact
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            The influence of IOSD extends far beyond campus walls.
          </p>
        </motion.div>

        <FeatureGrid features={impactFeatures} columns={2} />
      </section>


      {/* Notable Alumni */}
      <AlumniIndex title="Notable Alumni" alumni={NOTABLE_ALUMNI} />

      {/* Alumni Outcomes */}
      <AlumniOutcomes outcomes={ALUMNI_OUTCOMES} />

      {/* Companies */}
      <section className="py-24">
        <motion.div 
          className="container mx-auto px-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-accent text-xs tracking-widest mb-4 block text-center">
            WHERE WE WORK
          </span>
          <h2 className="text-3xl font-light tracking-tight text-center">
            Industry Presence
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <Marquee className="[--duration:24s]">
            {companies.map((company) => (
              <div
                key={company.name}
                className={cn(
                  "mx-6 flex h-16 w-40 items-center justify-center",
                  "border border-border text-sm mono",
                  "text-muted-foreground hover:text-foreground hover:border-accent/50 transition"
                )}
              >
                <Image src={company.logo} alt={company.name} width={34} height={34} className="max-w-fit max-h-6 mr-3"/>
                {company.name}
              </div>
            ))}
          </Marquee>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Become an"
        highlightedWord="Alumni?"
        description="Join IOSD today and become part of a legacy that spans industries and continents."
      />
    </div>
  )
}
