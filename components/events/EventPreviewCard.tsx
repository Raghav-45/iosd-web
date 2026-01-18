"use client"

import { cn } from "@/lib/utils"
import { Event } from "@/lib/config/events"
import Image from "next/image"

interface EventPreviewCardProps {
  event: Event
  priority?: boolean
  onClick?: () => void
}

export function EventPreviewCard({ event, priority, onClick }: EventPreviewCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer overflow-hidden bg-background",
        "border border-border"
      )}
    >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={event.coverImage}
            alt={event.title}
            width={800}
            height={500}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading={priority ? "eager" : "lazy"}
            unoptimized
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

          <div className="mt-6 h-px w-8 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
  )
}