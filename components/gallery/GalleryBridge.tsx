"use client"

import { useState } from "react"
import { GALLERY_IMAGES, type GalleryImage } from "@/lib/config"
import { GalleryModal } from "@/components/gallery/GalleryModal"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function GalleryBridge() {
  const images = GALLERY_IMAGES.slice(0, 10)
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-light tracking-tight text-center">
          Moments from Our Events
        </h2>
      </div>

      {/* Horizontal image strip */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 px-6">
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelected(img)}
              className={cn(
                "group cursor-pointer",
                "h-64 w-96 shrink-0 overflow-hidden",
                "border border-border bg-muted"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={384}
                height={256}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background" />
      </div>

      {/* Modal */}
      <GalleryModal
        images={images}
        selected={selected}
        onClose={() => setSelected(null)}
        onSelect={setSelected}
      />
    </section>
  )
}