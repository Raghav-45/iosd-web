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
import { EventsTimeline } from "@/components/events/EventsTimeline"
import { GalleryBridge } from "@/components/gallery/GalleryBridge"

const featured = EVENTS.filter(e => e.featured)
const recent = EVENTS.filter(e => !e.featured)

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const handleEventClick = (src:string) => {
    if (GALLERY_IMAGES.length > 0) {
      const image = GALLERY_IMAGES.find((event)=>event.src===src)
      if(!image) {
        setSelectedImage(null)
        return
      }
      setSelectedImage(image)
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative flex h-[60vh] items-center justify-center">
        <div className="z-10 flex flex-col items-center gap-6 text-center px-4">
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight">
            Events
          </h1>

          <p className="max-w-xl text-muted-foreground text-lg">
            Workshops, hackathons, talks, and everything that shapes the IOSD community.
          </p>
        </div>

        {/* <MeshGradient
          className="absolute inset-0 opacity-20"
          colors={["#000000", "#1a1a2e", "#67bed9", "#ffffff"]}
          speed={0.8}
        /> */}

        <DotPattern
          className={cn(
            "opacity-40",
            "mask-[radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />

      </section>

      {/* Featured */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-3xl font-light tracking-tight">
          Recent Highlights
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map(event => (
            <EventPreviewCard
              key={event.id}
              event={event}
              priority
              onClick={()=>handleEventClick(event.coverImage)}
            />
          ))}
        </div>
      </section>

      {/* Recent */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-2xl font-light tracking-tight">
          More Events
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map(event => (
            <EventPreviewCard
              key={event.id}
              event={event}
              onClick={()=>handleEventClick(event.coverImage)}
            />
          ))}
        </div>
      </section>

      {UPCOMING_EVENT && (
        <UpcomingEventCard event={UPCOMING_EVENT} />
      )}

      {/* More Events */}

      <GalleryModal
        images={GALLERY_IMAGES}
        selected={selectedImage}
        onClose={() => setSelectedImage(null)}
        onSelect={setSelectedImage}
      />


      <EventsTimeline events={EVENTS} />

      <GalleryBridge />

      <p className="mono text-xs text-muted-foreground text-center py-16">
        Events are excuses. Learning is the agenda.
      </p>


    </div>
  )
}
