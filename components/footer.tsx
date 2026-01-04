'use client'

import Link from 'next/link'
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/config'
import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const mouseX = useMotionValue(Infinity)
  const mouseY = useMotionValue(Infinity)

  return (
    <footer 
      className="relative w-full overflow-hidden border-t border-[var(--border-subtle)] bg-background mb-16"
      onMouseMove={(e) => {
        mouseX.set(e.pageX)
        mouseY.set(e.pageY)
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity)
        mouseY.set(Infinity)
      }}
    >
      {/* Subtle ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--accent-glow)] via-transparent to-transparent opacity-30" />
      
      <div className="relative container mx-auto px-6 pt-24 pb-12 lg:px-12">
        {/* Main Content Grid */}
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          
          {/* Left Column - Brand & Description */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              {/* Organization name - big, light, expressive */}
              <h2 className="text-5xl font-light tracking-tight text-foreground/95 md:text-6xl lg:text-7xl">
                {SITE_CONFIG.name.split(' ')[0]}
                <span className="block text-foreground/60">
                  {SITE_CONFIG.name.split(' ').slice(1).join(' ')}
                </span>
              </h2>
              
              {/* Description with controlled width */}
              <p className="max-w-md text-base leading-relaxed text-[var(--text-muted)]">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Social Links - with glow on hover */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <MagneticSocialIcon
                  key={social.title}
                  social={social}
                  mouseX={mouseX}
                  mouseY={mouseY}
                  hoveredSocial={hoveredSocial}
                  setHoveredSocial={setHoveredSocial}
                />
              ))}
            </div>

            {/* Metadata - mono, uppercase, tracked */}
            <div className="mono text-[var(--text-faint)]">
              <p>{SITE_CONFIG.email}</p>
            </div>
          </div>

          {/* Right Column - Navigation */}
          <div className="flex flex-col gap-8 lg:items-end">
            {/* Section label */}
            <div className="mono text-[var(--text-faint)]">
              Site Navigation
            </div>

            {/* Navigation links - clean, atmospheric */}
            <nav className="flex flex-col gap-3 lg:items-end">
              {NAV_LINKS.map((link) => (
                <MagneticNavLink
                  key={link.title}
                  link={link}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar - subtle separator */}
        <div className="mt-20 flex flex-col items-center gap-4 border-t border-[var(--border-subtle)] pt-8 md:flex-row md:justify-between">
          <p className="mono text-[var(--text-faint)]">
            {SITE_CONFIG.copyright}
          </p>
          
          {/* Metadata badges */}
          <div className="flex gap-4">
            <span className="mono rounded-sm border-none px-3 py-1 text-[var(--text-faint)]">
              Maharaja Agrasen Institute of Technology
            </span>
            <span className="mono rounded-sm border border-[var(--border-subtle)] px-3 py-1 text-[var(--text-faint)]">
              Est. 2016
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function MagneticSocialIcon({
  social,
  mouseX,
  mouseY,
  hoveredSocial,
  setHoveredSocial,
}: {
  social: { title: string; href: string; icon: React.ReactNode }
  mouseX: any
  mouseY: any
  hoveredSocial: string | null
  setHoveredSocial: (title: string | null) => void
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const distance = useTransform([mouseX, mouseY], ([x, y]) => {
    if (!ref.current) return 150
    const bounds = ref.current.getBoundingClientRect()
    const centerX = bounds.x + bounds.width / 2
    const centerY = bounds.y + bounds.height / 2
    return Math.sqrt(Math.pow(Number(x) - centerX, 2) + Math.pow(Number(y) - centerY, 2))
  })

  const scale = useTransform(distance as any, [0, 150], [1.4, 1])
  const iconScale = useTransform(distance as any, [0, 150], [1.3, 1])

  const scaleSpring = useSpring(scale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const iconScaleSpring = useSpring(iconScale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <Link
      ref={ref}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHoveredSocial(social.title)}
      onMouseLeave={() => setHoveredSocial(null)}
      className="cursor-target cursor-none group relative"
      aria-label={social.title}
    >
      <motion.div
        style={{ scale: scaleSpring }}
        className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface-1)] transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--surface-2)]"
      >
        {/* Glow effect on hover */}
        {hoveredSocial === social.title && (
          <div className="absolute inset-0 rounded-sm bg-[var(--accent)] opacity-20 blur-md transition-opacity" />
        )}
        <motion.div
          style={{ scale: iconScaleSpring }}
          className="relative transition-colors duration-300 group-hover:text-[var(--accent)]"
        >
          {social.icon}
        </motion.div>
      </motion.div>
    </Link>
  )
}

// Magnetic Nav Link Component
function MagneticNavLink({
  link,
  mouseX,
  mouseY,
}: {
  link: { title: string; href: string }
  mouseX: any
  mouseY: any
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const distance = useTransform([mouseX, mouseY], ([x, y]) => {
    if (!ref.current) return 150
    const bounds = ref.current.getBoundingClientRect()
    const centerX = bounds.x + bounds.width / 2
    const centerY = bounds.y + bounds.height / 2
    return Math.sqrt(Math.pow(Number(x) - centerX, 2) + Math.pow(Number(y) - centerY, 2))
  })

  const scale = useTransform(distance as any, [0, 150], [1.15, 1])
  const scaleSpring = useSpring(scale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <Link
      ref={ref}
      href={link.href}
      className="cursor-target cursor-none group relative inline-block text-lg font-light text-[var(--text-muted)] transition-colors duration-300 hover:text-foreground"
    >
      <motion.span style={{ scale: scaleSpring }} className="relative inline-block">
        {link.title}
      </motion.span>
    </Link>
  )
}
