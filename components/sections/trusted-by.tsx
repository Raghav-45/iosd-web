"use client"

import { motion } from "framer-motion"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Company logos - using more prominent display
import Meta from "@/public/logos/meta-3.svg"
import Uber from "@/public/logos/uber-15.svg"
import Apple from "@/public/logos/Apple_logo_white.svg"
import ZS from "@/public/logos/zs.png"
import PayPal from "@/public/logos/paypal.png"

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
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
]

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mb-8"
      >
        <p className="mono text-xs text-center text-muted-foreground tracking-widest">
          OUR ALUMNI WORK AT
        </p>
      </motion.div>

      <div className="relative">
        <Marquee className="[--duration:30s]">
          {companies.map((company) => (
            <div
              key={company.name}
              className={cn(
                "cursor-target mx-6 flex h-14 w-36 items-center justify-center gap-3",
                "border border-border/50 bg-background/50",
                "text-sm mono text-muted-foreground",
                "hover:text-foreground hover:border-accent/50 transition-all duration-300"
              )}
            >
              <Image 
                src={company.logo} 
                alt={company.name} 
                width={24} 
                height={24} 
                className="max-w-fit max-h-5 opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span>{company.name}</span>
            </div>
          ))}
        </Marquee>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
      </div>
    </section>
  )
}
