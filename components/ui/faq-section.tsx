"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
  className?: string
}

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
  subtitle,
  className,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className={cn("container mx-auto px-4 py-24", className)}>
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono text-accent text-xs tracking-widest mb-4 block">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
        )}
      </motion.div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-border"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="cursor-target w-full py-4.5 flex items-center justify-between text-left group"
              style={{ cursor: 'none' }}
            >
              <span className="text-lg font-medium group-hover:text-accent transition-colors pr-8">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-8 h-8 border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors"
              >
                <Plus className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground pb-6 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
