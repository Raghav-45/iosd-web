"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { JoinUsButton } from "@/components/join-us-button"
import { RetroGrid } from "@/components/ui/retro-grid"

interface CTASectionProps {
  title?: string
  highlightedWord?: string
  description?: string
  className?: string
  showGrid?: boolean
}

export function CTASection({
  title = "Ready to",
  highlightedWord = "Build?",
  description = "Join the most vibrant technical community at MAIT. Whether you're a beginner or a pro, there's a place for you here.",
  className,
  showGrid = false,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative py-32 flex flex-col items-center justify-center text-center px-4 border-t border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden",
        className
      )}
    >
      {showGrid && <RetroGrid className="opacity-30" />}

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      >
        {/* Decorative element */}
        <div className="mb-8 flex justify-center gap-2">
          <div className="w-8 h-px bg-accent" />
          <div className="w-2 h-2 rotate-45 border border-accent" />
          <div className="w-8 h-px bg-accent" />
        </div>

        <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tighter">
          {title} <span className="text-accent">{highlightedWord}</span>
        </h2>

        <p className="text-muted-foreground max-w-xl mb-10 text-lg">
          {description}
        </p>

        <div className="flex justify-center">
          <JoinUsButton />
        </div>

        {/* Decorative bottom element */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="mono text-xs text-muted-foreground/50">
            ● No prior experience required
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
