'use client'

import { FloatingDock } from '@/components/ui/floating-dock'
import { motion } from 'motion/react'
import {
  IconCalendar,
  IconHome,
  IconInfoCircle,
  IconSchool,
  IconUsers,
} from '@tabler/icons-react'

const links = [
  {
    title: 'Home',
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '/',
  },
  {
    title: 'Events',
    icon: (
      <IconCalendar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '/events',
  },
  {
    title: 'Team',
    icon: (
      <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '/team',
  },
  {
    title: 'Alumni',
    icon: (
      <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '/alumni',
  },
  {
    title: 'About',
    icon: (
      <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '/about',
  },
]

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
      className="fixed bottom-8 flex w-full justify-center"
    >
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </motion.div>
  )
}

export default SiteNav