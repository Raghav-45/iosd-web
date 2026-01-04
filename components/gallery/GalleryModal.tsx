"use client"

import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { GalleryImage } from "@/lib/config"

interface GalleryModalProps {
  images: GalleryImage[]
  selected: GalleryImage | null
  onClose: () => void
  onSelect: (img: GalleryImage) => void
}

export function GalleryModal({
  images,
  selected,
  onClose,
  onSelect,
}: GalleryModalProps) {
  if (!selected) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 border border-border bg-background hover:bg-accent-glow transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      <div
        className="max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selected.src}
          alt={selected.alt}
          className="w-full h-auto max-h-[80vh] object-contain"
        />

        <div className="mt-4 text-center">
          <h2 className="text-2xl font-light tracking-tight mb-2">
            {selected.description}
          </h2>
          <p className="text-muted-foreground">
            {selected.category}
          </p>
        </div>
      </div>
    </div>
  )
}