"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
  category: string;
  height: number; // relative height for masonry layout
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Event 1",
    description: "Annual Tech Fest 2025 - Opening Ceremony",
    category: "Events",
    height: 300,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    alt: "Workshop 1",
    description: "Web Development Workshop - Building Modern Apps",
    category: "Workshops",
    height: 400,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    alt: "Hackathon",
    description: "HackMAIT 4.0 - 24 Hour Coding Marathon",
    category: "Hackathons",
    height: 350,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80",
    alt: "Team Photo",
    description: "IOSD Core Team 2025",
    category: "Team",
    height: 280,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    alt: "Event 2",
    description: "Impulse '25 - Technical Fest Highlights",
    category: "Events",
    height: 420,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    alt: "Workshop 2",
    description: "Android Development Workshop",
    category: "Workshops",
    height: 320,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    alt: "Event 3",
    description: "Alumni Meetup - Networking Session",
    category: "Events",
    height: 380,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    alt: "Seminar",
    description: "Tech Talk on System Design",
    category: "Seminars",
    height: 340,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    alt: "Event 4",
    description: "DSA & CP Competition Winners",
    category: "Competitions",
    height: 300,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    alt: "Workshop 3",
    description: "UI/UX Design Workshop",
    category: "Workshops",
    height: 360,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    alt: "Event 5",
    description: "Open Source Contribution Day",
    category: "Events",
    height: 310,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    alt: "Meeting",
    description: "Weekly Development Sync",
    category: "Meetings",
    height: 390,
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];
  
  const filteredImages = filter === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold tracking-tighter text-center mb-4">
          Gallery
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Moments captured from our events, workshops, and activities
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg bg-muted">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ height: `${image.height}px` }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-medium text-sm">{image.description}</p>
                    <p className="text-white/70 text-xs mt-1">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                {selectedImage.description}
              </h2>
              <p className="text-white/70">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
