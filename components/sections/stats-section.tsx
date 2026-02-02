"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ABOUT_STATS } from "@/lib/config";

export function StatsSection() {
  return (
    <section className="container mx-auto px-4 py-32">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mono text-accent text-xs tracking-widest mb-4 block">
          IMPACT
        </span>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight">
          Our Numbers
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        {ABOUT_STATS.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-accent" />

            <stat.Icon className="h-6 w-6 text-foreground mb-6" />

            <h3 className="text-5xl font-light tracking-tight tabular-nums">
              <NumberTicker value={stat.value} />
              <span className="text-3xl align-super text-accent">+</span>
            </h3>

            <p className="mt-3 mono text-muted-foreground">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
