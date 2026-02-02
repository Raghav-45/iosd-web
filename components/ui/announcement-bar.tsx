"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface AnnouncementBarProps {
  message: string
  link?: {
    href: string
    label: string
  }
  dismissible?: boolean
  variant?: "default" | "accent" | "gradient"
  className?: string
}

export function AnnouncementBar({
  message,
  link,
  dismissible = true,
  variant = "default",
  className,
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true)

  const variantClasses = {
    default: "bg-surface-1 border-b border-border",
    accent: "bg-accent/10 border-b border-accent/20",
    gradient:
      "bg-gradient-to-r from-accent/10 via-transparent to-accent/10 border-b border-border",
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "relative w-full overflow-hidden",
          variantClasses[variant],
          className
        )}
      >
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-4">
          <Sparkles className="w-4 h-4 text-accent hidden sm:block" />

          <p className="mono text-xs text-center flex items-center gap-2">
            <span className="text-muted-foreground">{message}</span>
            {link && (
              <Link
                href={link.href}
                className="group inline-flex items-center gap-1 text-foreground hover:text-accent transition-colors"
              >
                {link.label}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
          </p>

          {dismissible && (
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
