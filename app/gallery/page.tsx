"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GALLERY_IMAGES, type GalleryImage } from "@/lib/config";

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
            <div className="container mx-auto px-4 py-24">
                <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-center mb-4">
                    Gallery
                </h1>
                <p className="text-center text-muted-foreground text-lg mb-8">
                    Moments captured from our events, workshops, and activities
                </p>

                {/* Category Filter */}
                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {categories.map((category) => {
                        const isActive = filter === category

                        return (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={cn(
                                    "relative px-5 py-2 mono transition-all",
                                    "border border-border bg-background text-muted-foreground",
                                    "hover:border-border hover:text-foreground",
                                    isActive && [
                                        "text-foreground",
                                        "border-accent",
                                    ]
                                )}
                            >
                                {/* Active accent line */}
                                {isActive && (
                                    <span className="absolute left-0 top-0 h-full w-[2px] bg-accent" />
                                )}

                                {category}
                            </button>
                        )
                    })}
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
                                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div>
                                        <p className="text-foreground font-medium text-sm">{image.description}</p>
                                        <p className="text-muted-foreground text-xs mt-1">{image.category}</p>
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
                    className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 p-2 border border-border bg-background hover:bg-accent-glow transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <div
                        className="max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-auto max-h-[80vh] object-contain"
                        />
                        <div className="mt-4 text-center">
                            <h2 className="text-2xl font-light tracking-tight mb-2">
                                {selectedImage.description}
                            </h2>
                            <p className="text-muted-foreground">{selectedImage.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
