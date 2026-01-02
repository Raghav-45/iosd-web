import TargetCursor from '@/components/TargetCursor'
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

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-10">
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-xl">
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

        <h1 className="mt-0 mb-3 text-2xl font-semibold">
          Hover over the elements below
        </h1>
        <p className="text-gray-500 mb-5">
          A small demo to show interactive targets styled for emphasis.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button className="cursor-target px-4 py-3 rounded-lg transition transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-lg bg-gradient-to-b from-blue-600 to-blue-800 text-white border-0">
            Click me!
          </button>

          <div className="cursor-target px-4 py-3 rounded-lg border border-gray-100 bg-white transition transform duration-150 ease-in-out hover:-translate-y-1 hover:shadow-lg text-gray-900">
            Hover target
          </div>

          <a
            className="cursor-target px-4 py-3 rounded-lg transition transform duration-150 ease-in-out hover:-translate-y-1 text-blue-600"
            href="#"
          >
            Anchor target
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 flex w-full justify-center">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
    </div>
  )
}
