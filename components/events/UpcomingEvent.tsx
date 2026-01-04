'use client'

import { cn } from "@/lib/utils"
import { UpcomingEvent } from "@/lib/config/events"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

interface UpcomingEventProps {
  event: UpcomingEvent
}

export function UpcomingEventCard({ event }: UpcomingEventProps) {
  const mouseX = useMotionValue(Infinity)
  const mouseY = useMotionValue(Infinity)

  return (
    <section 
      className="container mx-auto px-4 md:py-20"
      onMouseMove={(e) => {
        mouseX.set(e.pageX)
        mouseY.set(e.pageY)
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity)
        mouseY.set(Infinity)
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={cn(
            "relative overflow-hidden border border-border",
            "bg-background group"
          )}
        >
          {/* Accent glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent-glow),transparent_60%)] transition-opacity duration-700 group-hover:opacity-70" />

          <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-0 items-center">
            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="mono mb-3 text-xs text-muted-foreground tracking-wider uppercase">
                Upcoming Event
              </div>

              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-3">
                {event.title}
              </h2>

              <p className="text-muted-foreground text-sm mb-6">
                {event.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <span className="mono text-xs text-muted-foreground">
                  {event.date}
                </span>

                {event.registrationOpen && event.registerUrl && (
                  <MagneticButton 
                    href={event.registerUrl}
                    mouseX={mouseX}
                    mouseY={mouseY}
                  />
                )}

                {!event.registrationOpen && (
                <span className="relative mono text-sm text-muted-foreground">
                <span className="relative z-10">
                    Registration opening soon
                </span>

                <span
                    className="absolute inset-0 -z-10 rounded-sm blur-xl"
                    style={{
                    background:
                        "radial-gradient(circle at center, var(--accent), transparent 70%)",
                    animation: "pulseGlow 2.5s ease-in-out infinite",
                    }}
                />
                </span>

                )}
              </div>
            </div>

            {/* Image */}
            {event.coverImage && (
              <div className="relative h-full min-h-[280px] md:min-h-[320px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80 z-10" />
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle cyan glow on image */}
                <div className="absolute inset-0 bg-accent/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function MagneticButton({
  href,
  mouseX,
  mouseY,
}: {
  href: string
  mouseX: any
  mouseY: any
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const distance = useTransform([mouseX, mouseY], ([x, y]) => {
    if (!ref.current) return 150
    const bounds = ref.current.getBoundingClientRect()
    const centerX = bounds.x + bounds.width / 2
    const centerY = bounds.y + bounds.height / 2
    return Math.sqrt(Math.pow(Number(x) - centerX, 2) + Math.pow(Number(y) - centerY, 2))
  })

  const scale = useTransform(distance as any, [0, 150], [1.1, 1])
  const scaleSpring = useSpring(scale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <Button asChild>
      <motion.a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ scale: scaleSpring }}
        className="cursor-target cursor-none"
      >
        Register
      </motion.a>
    </Button>
  )
}