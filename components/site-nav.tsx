import { FloatingDock } from '@/components/ui/floating-dock'
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
    href: '/alumini',
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
    <div className="absolute bottom-8 flex w-full justify-center">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  )
}

export default SiteNav