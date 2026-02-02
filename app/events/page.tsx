"use client"

import { useState } from "react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { EVENTS } from "@/lib/config/events"
import { cn } from "@/lib/utils"
import { EventPreviewCard } from "@/components/events/EventPreviewCard"
import { GalleryModal } from "@/components/gallery/GalleryModal"
import { GALLERY_IMAGES, type GalleryImage } from "@/lib/config"
import { UPCOMING_EVENT } from "@/lib/config/events"
import { UpcomingEventCard } from "@/components/events/UpcomingEvent"
import EventsTimeline from "@/components/events/EventsTimeline"
import { GalleryBridge } from "@/components/gallery/GalleryBridge"
import { motion } from "framer-motion"
import { CTASection } from "@/components/sections/cta-section"

const featured = EVENTS.filter(e => e.featured)
const recent = EVENTS.filter(e => !e.featured)

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const handleEventClick = (src: string) => {
    if (GALLERY_IMAGES.length > 0) {
      const image = GALLERY_IMAGES.find((event) => event.src === src)
      if (!image) {
        setSelectedImage(null)
        return
      }
      setSelectedImage(image)
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center">
        <motion.div 
          className="z-10 flex flex-col items-center gap-6 text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mono text-accent text-xs tracking-widest">
            WHAT WE DO
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight">
            Events
          </h1>
          <p className="max-w-xl text-muted-foreground text-lg">
            Workshops, hackathons, talks, and everything that shapes the IOSD community.
          </p>
        </motion.div>

        <DotPattern
          className={cn(
            "opacity-40",
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
      </section>

      {/* Upcoming Event */}
      {UPCOMING_EVENT && (
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono text-accent text-xs tracking-widest mb-6 block">
              UPCOMING
            </span>
            <UpcomingEventCard event={UPCOMING_EVENT} />
          </motion.div>
        </section>
      )}

      {/* Featured Events */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-accent text-xs tracking-widest mb-4 block">
            HIGHLIGHTS
          </span>
          <h2 className="text-3xl font-light tracking-tight">
            Recent Highlights
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <EventPreviewCard
                event={event}
                priority
                onClick={() => handleEventClick(event.coverImage)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Events */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mono text-accent text-xs tracking-widest mb-4 block">
            ARCHIVE
          </span>
          <h2 className="text-2xl font-light tracking-tight">
            More Events
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <EventPreviewCard
                event={event}
                onClick={() => handleEventClick(event.coverImage)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <GalleryModal
        images={GALLERY_IMAGES}
        selected={selectedImage}
        onClose={() => setSelectedImage(null)}
        onSelect={setSelectedImage}
      />

      {/* Timeline */}
      <EventsTimeline />

      {/* Gallery Bridge */}
      <GalleryBridge />

      {/* Footer */}
      <div className="text-center py-16 border-t border-border/40">
        <p className="mono text-xs text-muted-foreground">
          Events are excuses. Learning is the agenda.
        </p>
      </div>

      {/* CTA */}
      <CTASection 
        title="Want to organize"
        highlightedWord="Events?"
        description="Join IOSD and be part of the team that creates unforgettable experiences for the tech community."
      />
    </div>
  )
}
