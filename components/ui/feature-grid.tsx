"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FeatureItem {
  title: string
  description: string
  icon?: LucideIcon | React.ComponentType<{ className?: string }>
}

interface FeatureGridProps {
  features: FeatureItem[]
  className?: string
  columns?: 2 | 3 | 4
}

export function FeatureGrid({
  features,
  className,
  columns = 2,
}: FeatureGridProps) {
  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <motion.div
      className={cn(
        "grid gap-8 lg:gap-12",
        columnClasses[columns],
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="group relative"
        >
          {/* Icon */}
          {feature.icon && (
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 border border-border group-hover:border-accent/50 transition-colors">
              <feature.icon className="w-5 h-5 text-accent" />
            </div>
          )}

          {/* Number indicator */}
          {!feature.icon && (
            <div className="mb-4 mono text-accent text-sm">
              {String(index + 1).padStart(2, "0")}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-medium mb-3 group-hover:text-accent transition-colors">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {feature.description}
          </p>

          {/* Decorative line on hover */}
          <motion.div
            className="absolute -left-4 top-0 w-px h-0 bg-accent/30 group-hover:h-full transition-all duration-500"
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
