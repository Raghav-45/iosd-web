"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GALLERY_IMAGES, type GalleryImage } from "@/lib/config";
import { GalleryModal } from "@/components/gallery/GalleryModal";

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [filter, setFilter] = useState<string>("All");

    const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

    const filteredImages = filter === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === filter);

    return (
        <div className="min-h-screen bg-transparent">
            {/* Header */}
            <div className="container mx-auto px-6 py-24 flex flex-col items-center">
                <h1 className="text-4xl sm:text-7xl font-light tracking-tight text-center mb-6 border-b border-blue-500/20 pb-2 px-6">
                    Gallery
                </h1>
                <p className="text-center text-muted-foreground text-base sm:text-lg mb-8 max-w-xl">
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
                                    "cursor-target cursor-none relative px-5 py-2 mono transition-all",
                                    "border bg-background text-muted-foreground",
                                    "hover:text-foreground",
                                    isActive && [
                                        "text-foreground",
                                        "border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]",
                                    ]
                                )}
                            >
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
                            <div className="relative overflow-hidden rounded-lg bg-muted border border-blue-500/10 md:border-transparent group-hover:border-blue-500/30 transition-all">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={400}
                                    height={image.height}
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                    unoptimized
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

            <GalleryModal
                images={GALLERY_IMAGES}
                selected={selectedImage}
                onClose={() => setSelectedImage(null)}
                onSelect={setSelectedImage}
            />
        </div>
    );
}
