"use client"

import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern"
import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  className?: string
  pattern?: "dots" | "none"
}

export function PageHeader({
  title,
  subtitle,
  badge,
  className,
  pattern = "dots",
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[60vh] items-center justify-center overflow-hidden",
        className
      )}
    >
      <div className="z-10 flex flex-col items-center gap-6 text-center px-4">
        {/* Optional Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 mono text-muted-foreground border border-border px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {badge}
            </span>
          </motion.div>
        )}

        {/* Title with word-reveal animation */}
        <motion.h1
          className="text-5xl sm:text-7xl font-light tracking-tight"
          initial="hidden"
          animate="visible"
        >
          {title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em]"
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: 90 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.2 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="max-w-xl text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Background Pattern */}
      {pattern === "dots" && (
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "opacity-40"
          )}
        />
      )}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
    </section>
  )
}
