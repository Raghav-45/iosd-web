"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GALLERY_IMAGES, type GalleryImage } from "@/lib/config";
import { GalleryModal } from "@/components/gallery/GalleryModal";
import { DotPattern } from "@/components/ui/dot-pattern";
import { motion } from "framer-motion";

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [filter, setFilter] = useState<string>("All");

    const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

    const filteredImages = filter === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === filter);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Header */}
            <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
                <motion.div 
                    className="container mx-auto px-4 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="mono text-accent text-xs tracking-widest mb-4 block">
                        MEMORIES
                    </span>
                    <h1 className="text-5xl sm:text-7xl font-light tracking-tight mb-4">
                        Gallery
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Moments captured from our events, workshops, and activities
                    </p>
                </motion.div>
                
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                        "opacity-40"
                    )}
                />
            </section>

            {/* Filter + Grid */}
            <section className="container mx-auto px-4 pb-24">
                {/* Category Filter */}
                <motion.div 
                    className="mb-12 flex flex-wrap justify-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {categories.map((category) => {
                        const isActive = filter === category

                        return (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={cn(
                                    "cursor-target cursor-none relative px-5 py-2.5 mono text-xs transition-all",
                                    "border bg-background text-muted-foreground",
                                    "hover:text-foreground hover:border-foreground/30",
                                    isActive && [
                                        "text-foreground",
                                        "border-accent",
                                        "bg-accent/5",
                                    ]
                                )}
                            >
                                {category}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 border border-accent"
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </button>
                        )
                    })}
                </motion.div>

                {/* Masonry Grid */}
                <motion.div 
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.05,
                            },
                        },
                    }}
                >
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="break-inside-avoid cursor-pointer group"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="relative overflow-hidden bg-muted">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={400}
                                    height={image.height}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div>
                                        <p className="text-foreground font-medium text-sm">{image.description}</p>
                                        <p className="text-muted-foreground text-xs mt-1 mono">{image.category}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty state */}
                {filteredImages.length === 0 && (
                    <motion.div 
                        className="text-center py-24"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-muted-foreground">No images found in this category.</p>
                    </motion.div>
                )}
            </section>

            <GalleryModal
                images={GALLERY_IMAGES}
                selected={selectedImage}
                onClose={() => setSelectedImage(null)}
                onSelect={setSelectedImage}
            />
        </div>
    );
}
