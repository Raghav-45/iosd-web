"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  Code2, 
  Users, 
  Trophy, 
  Lightbulb, 
  Rocket, 
  GraduationCap 
} from "lucide-react"

const offerings = [
  {
    icon: Code2,
    title: "Technical Excellence",
    description:
      "Master web development, machine learning, data science, and competitive programming through hands-on projects and workshops.",
  },
  {
    icon: Users,
    title: "Collaborative Community",
    description:
      "Work alongside passionate peers, share knowledge, and build meaningful connections that last beyond college.",
  },
  {
    icon: Trophy,
    title: "Competitions & Hackathons",
    description:
      "Represent MAIT at national and international hackathons, coding contests, and technical competitions.",
  },
  {
    icon: Lightbulb,
    title: "Project-Based Learning",
    description:
      "Turn ideas into reality. Build real products, contribute to open source, and create a portfolio that stands out.",
  },
  {
    icon: GraduationCap,
    title: "Industry Mentorship",
    description:
      "Learn from alumni working at top tech companies and industry professionals through exclusive sessions.",
  },
  {
    icon: Rocket,
    title: "Career Launchpad",
    description:
      "Get referrals, internship opportunities, and career guidance from our extensive alumni network.",
  },
]

export function WhatWeOffer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section className="container mx-auto px-4 py-24">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono text-accent text-xs tracking-widest mb-4 block">
          WHY JOIN US
        </span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
          What We Offer
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to grow as a developer and build a successful
          career in tech.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {offerings.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="cursor-target group relative p-8 border border-border bg-background hover:border-accent/50 transition-all duration-300"
            style={{ cursor: 'none' }}
          >
            {/* Background hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />

            <div className="relative">
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 border border-border group-hover:border-accent/50 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
