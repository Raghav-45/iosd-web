'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/config'
import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react'

export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const mouseX = useMotionValue(Infinity)
  const mouseY = useMotionValue(Infinity)

  return (
    <footer 
      className="relative w-full overflow-hidden border-t border-[var(--border-subtle)] bg-background"
      onMouseMove={(e) => {
        mouseX.set(e.pageX)
        mouseY.set(e.pageY)
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity)
        mouseY.set(Infinity)
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--accent-glow)] via-transparent to-transparent opacity-30" />
      
      <div className="relative container mx-auto px-6 pt-24 pb-12 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <Image
                src="/IOSD_png.png"
                alt={SITE_CONFIG.name}
                width={320}
                height={320}
                className="h-auto w-64 md:w-72 lg:w-80"
                priority
              />
              
              <p className="max-w-md text-base leading-relaxed text-[var(--text-muted)]">
                {SITE_CONFIG.description}
              </p>
            </div>

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

            <div className="mono text-[var(--text-faint)]">
              <p>{SITE_CONFIG.email}</p>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <div className="mono text-[var(--text-faint)]">
              Site Navigation
            </div>

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

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-[var(--border-subtle)] pt-8 md:flex-row md:justify-between">
          <p className="mono text-[var(--text-faint)]">
            {SITE_CONFIG.copyright}
          </p>
          
          <div className="flex gap-4">
            <Link 
              href="https://mait.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mono rounded-sm border-none px-3 py-1 text-[var(--text-faint)] hover:underline transition-all duration-300"
            >
              Maharaja Agrasen Institute of Technology
            </Link>
            <span className="mono rounded-sm border border-[var(--border-subtle)] px-3 py-1 text-[var(--text-faint)]">
              Est. 2016
            </span>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-accent/2 to-transparent pointer-events-none" />
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
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
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

  const scale = useTransform(distance, [0, 150], [1.4, 1])
  const iconScale = useTransform(distance, [0, 150], [1.3, 1])

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
      className="cursor-target cursor-none group relative p-0.5"
      aria-label={social.title}
    >
      <motion.div
        style={{ scale: scaleSpring }}
        className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface-1)] transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--surface-2)]"
      >
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

function MagneticNavLink({
  link,
  mouseX,
  mouseY,
}: {
  link: { title: string; href: string }
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const distance = useTransform([mouseX, mouseY], ([x, y]) => {
    if (!ref.current) return 150
    const bounds = ref.current.getBoundingClientRect()
    const centerX = bounds.x + bounds.width / 2
    const centerY = bounds.y + bounds.height / 2
    return Math.sqrt(Math.pow(Number(x) - centerX, 2) + Math.pow(Number(y) - centerY, 2))
  })

  const scale = useTransform(distance, [0, 150], [1.15, 1])
  const scaleSpring = useSpring(scale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <Link
      ref={ref}
      href={link.href}
      className="cursor-target cursor-none group relative inline-block text-lg font-light text-[var(--text-muted)] transition-colors duration-300 hover:text-foreground p-0.5"
    >
      <motion.span style={{ scale: scaleSpring }} className="relative inline-block">
        {link.title}
      </motion.span>
    </Link>
  )
}
