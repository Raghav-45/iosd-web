"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"
import { Code, Brain, Database, BarChart, ArrowUpRight } from "lucide-react"
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa"
import { SiTensorflow, SiTypescript, SiPandas } from "react-icons/si"
import { TbBinaryTree } from "react-icons/tb"
import { type MouseEvent } from "react"

interface Domain {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  description: string
  technologies: { icon: React.ComponentType<{ className?: string }>; name: string }[]
  stats: { value: string; label: string }
  gradient: string
}

const domains: Domain[] = [
  {
    id: "web",
    icon: Code,
    title: "Web Development",
    subtitle: "Our Flagship Domain",
    description: "Our primary focus and largest community. Master modern web technologies from frontend to backend. Build production-ready applications with React, Next.js, Node.js, and industry-standard tools. Participate in collaborative projects, hackathons, and get hands-on mentorship from experienced developers.",
    technologies: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: FaReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
    stats: { value: "50+", label: "Projects Built" },
    gradient: "from-purple-500/20 via-transparent to-transparent",
  },
  {
    id: "ml",
    icon: Brain,
    title: "AI / ML & Data Science",
    subtitle: "Intelligent Systems & Analytics",
    description: "Explore neural networks, computer vision, and NLP. Build intelligent systems that learn and adapt.",
    technologies: [
      { icon: SiTensorflow, name: "TensorFlow" },
      { icon: Brain, name: "PyTorch" },
    ],
    stats: { value: "20+", label: "ML Models" },
    gradient: "from-orange-500/20 via-transparent to-transparent",
  },
  {
    id: "dsa",
    icon: TbBinaryTree,
    title: "DSA & Competitive",
    subtitle: "Algorithms & Problem Solving",
    description: "Sharpen your problem-solving skills. Compete in global coding contests and placement preparation.",
    technologies: [
      { icon: TbBinaryTree, name: "Data Structures" },
      { icon: Database, name: "Algorithms" },
    ],
    stats: { value: "100+", label: "Problems" },
    gradient: "from-green-500/20 via-transparent to-transparent",
  },
]

function DomainCard({ domain, index }: { domain: Domain; index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className={cn(
        "cursor-target group relative border border-border bg-background overflow-hidden",
        "transition-all duration-500 hover:border-accent/50",
        index === 0 && "lg:col-span-2 lg:row-span-2",
        index === 3 && "lg:col-span-2"
      )}
      style={{ cursor: 'none' }}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 219, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Gradient background */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
        domain.gradient
      )} />

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 border border-border group-hover:border-accent/50 transition-colors">
              <domain.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-medium group-hover:text-accent transition-colors">
                {domain.title}
              </h3>
              <p className="text-sm mono text-muted-foreground">
                {domain.subtitle}
              </p>
            </div>
          </div>
          
          {/* Arrow indicator */}
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ x: -10, y: 10 }}
            whileHover={{ x: 0, y: 0 }}
          >
            <ArrowUpRight className="w-5 h-5 text-accent" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed flex-grow">
          {domain.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {domain.technologies.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  <tech.icon className="w-4 h-4" />
                  <span className="text-xs mono hidden sm:inline">{tech.name}</span>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="text-right">
              <div className="text-lg font-medium text-accent">{domain.stats.value}</div>
              <div className="text-xs mono text-muted-foreground">{domain.stats.label}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-700" />
    </motion.div>
  )
}

export function DomainsSection() {
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
          WHAT WE DO
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
          Technical Domains
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Three pillars of technical excellence. Choose your path, or master them all.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {domains.map((domain, index) => (
          <DomainCard key={domain.id} domain={domain} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="mono text-xs text-muted-foreground">
          ● All domains include hands-on projects, mentorship, and real-world experience
        </p>
      </motion.div>
    </section>
  )
}
