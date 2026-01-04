"use client"

import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selected) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        navigatePrev()
      } else if (e.key === "ArrowRight") {
        navigateNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selected, images])

  if (!selected) return null

  const currentIndex = images.findIndex(img => img.id === selected.id)
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < images.length - 1

  const navigatePrev = () => {
    if (hasPrev) {
      onSelect(images[currentIndex - 1])
    }
  }

  const navigateNext = () => {
    if (hasNext) {
      onSelect(images[currentIndex + 1])
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 border border-border bg-background hover:bg-accent-glow transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Previous button */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigatePrev()
          }}
          className="absolute left-4 p-3 border border-border bg-background hover:bg-accent-glow transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigateNext()
          }}
          className="absolute right-4 p-3 border border-border bg-background hover:bg-accent-glow transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Image container */}
      <div
        className="max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selected.src}
          alt={selected.alt}
          className="w-full h-auto max-h-[80vh] object-contain"
        />

        {selected.description && (
          <div className="mt-4 text-center">
            <p className="text-lg font-light tracking-tight text-muted-foreground">
              {selected.description}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}