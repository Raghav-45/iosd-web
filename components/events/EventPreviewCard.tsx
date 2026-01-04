import Link from "next/link"
import { cn } from "@/lib/utils"
import { Event } from "@/lib/config/events"

interface EventPreviewCardProps {
  event: Event
  priority?: boolean
}

export function EventPreviewCard({ event, priority }: EventPreviewCardProps) {
  return (
    <Link
      href={`/gallery?category=${encodeURIComponent(event.galleryCategory)}`}
      className={cn(
        "group relative block overflow-hidden bg-background",
        "border border-border"
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.coverImage}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
        />

        {/* Hover veil */}
        <div className="absolute inset-0 bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Meta */}
      <div className="relative p-6">
        <div className="mb-2 mono text-xs text-muted-foreground">
          {event.date} · {event.category}
        </div>

        <h3 className="text-xl font-light tracking-tight">
          {event.title}
        </h3>

        {/* Accent cue */}
        <div className="mt-6 h-px w-8 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </Link>
  )
}