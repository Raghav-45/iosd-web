"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { NumberTicker } from "@/components/ui/number-ticker"
import type { LucideIcon } from "lucide-react"

interface StatItem {
  value: number
  label: string
  suffix?: string
  Icon?: LucideIcon | React.ComponentType<{ className?: string }>
}

interface StatsGridProps {
  stats: StatItem[]
  className?: string
  variant?: "default" | "cards" | "minimal"
}

export function StatsGrid({
  stats,
  className,
  variant = "default",
}: StatsGridProps) {
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

  if (variant === "minimal") {
    return (
      <motion.div
        className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
          className
        )}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="text-4xl md:text-5xl font-light tracking-tight tabular-nums">
              <NumberTicker value={stat.value} />
              {stat.suffix && (
                <span className="text-accent">{stat.suffix}</span>
              )}
            </div>
            <p className="mt-2 mono text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (variant === "cards") {
    return (
      <motion.div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
          className
        )}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative border border-border bg-background p-6 hover:border-accent/50 transition-colors"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              {stat.Icon && (
                <stat.Icon className="w-6 h-6 text-accent mb-4" />
              )}
              <div className="text-4xl font-light tracking-tight tabular-nums">
                <NumberTicker value={stat.value} />
                {stat.suffix && (
                  <span className="text-2xl text-accent ml-1">{stat.suffix}</span>
                )}
              </div>
              <p className="mt-2 mono text-muted-foreground">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  // Default variant with left accent line
  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 gap-10 sm:grid-cols-3",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="group relative border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
        >
          <div className="absolute left-0 top-0 h-full w-[2px] bg-accent" />

          {stat.Icon && <stat.Icon className="h-6 w-6 text-foreground mb-6" />}

          <h3 className="text-5xl font-light tracking-tight tabular-nums">
            <NumberTicker value={stat.value} />
            <span className="text-3xl align-super text-accent">
              {stat.suffix || "+"}
            </span>
          </h3>

          <p className="mt-3 mono text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
