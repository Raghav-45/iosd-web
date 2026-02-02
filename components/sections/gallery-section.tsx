"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY_PREVIEW } from "@/lib/config";
import Link from "next/link";

export function GallerySection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/gallery"
          className="inline-block text-3xl font-light tracking-tight text-center transition-colors hover:text-accent cursor-target"
          style={{ cursor: 'none' }}
        >
          Gallery
          <span className="block mono text-xs text-muted-foreground mt-2 tracking-widest">
            VIEW ALL →
          </span>
        </Link>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {GALLERY_PREVIEW.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative overflow-hidden bg-muted group cursor-pointer ${item.gridClass}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {item.label && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">{item.label}</p>
              </div>
            )}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
