'use client'

import { FloatingDock } from '@/components/ui/floating-dock'
import { motion } from 'motion/react'
import { NAV_LINKS } from '@/lib/config'

const SiteNav = ({}) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 12,
        delay: 0.2,
      }}
      className="fixed bottom-8 z-50 flex w-full justify-center"
    >
      <FloatingDock
        items={NAV_LINKS}
      />
    </motion.div>
  )
}

export default SiteNav