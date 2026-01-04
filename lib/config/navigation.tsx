import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCalendar,
  IconHome,
  IconInfoCircle,
  IconPhoto,
  IconSchool,
  IconUsers,
} from '@tabler/icons-react'

export const NAV_LINKS = [
  {
    title: 'Home',
    href: '/',
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'Events',
    href: '/events',
    icon: (
      <IconCalendar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'Team',
    href: '/team',
    icon: (
      <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'Alumni',
    href: '/alumni',
    icon: (
      <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'About',
    href: '/about',
    icon: (
      <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
  {
    title: 'Gallery',
    href: '/gallery',
    icon: (
      <IconPhoto className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
  },
]

export const SOCIAL_LINKS = [
  {
    title: 'Twitter',
    href: 'https://x.com/iosdorg',
    icon: <IconBrandTwitter className="h-5 w-5" />,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/iosdmait',
    icon: <IconBrandGithub className="h-5 w-5" />,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/iosdmait/',
    icon: <IconBrandLinkedin className="h-5 w-5" />,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/iosdmait',
    icon: <IconBrandInstagram className="h-5 w-5" />,
  },
]
