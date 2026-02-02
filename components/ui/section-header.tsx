"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
  eyebrow?: string
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
  eyebrow,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-4 mb-12",
        alignClasses[align],
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <span className="mono text-accent text-xs tracking-widest">
          {eyebrow}
        </span>
      )}

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-light tracking-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}

      {/* Decorative line */}
      {align === "center" && (
        <motion.div
          className="w-16 h-px bg-accent/50 mt-2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      )}
    </motion.div>
  )
}
