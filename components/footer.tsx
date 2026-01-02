import Link from 'next/link'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react'

const footerLinks = [
  { title: 'Home', href: '/' },
  { title: 'Events', href: '/events' },
  { title: 'Team', href: '/team' },
  { title: 'Alumni', href: '/alumni' },
  { title: 'About', href: '/about' },
]

const socialLinks = [
  {
    title: 'Twitter',
    href: 'https://twitter.com',
    icon: <IconBrandTwitter className="h-5 w-5" />,
  },
  {
    title: 'GitHub',
    href: 'https://github.com',
    icon: <IconBrandGithub className="h-5 w-5" />,
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <IconBrandLinkedin className="h-5 w-5" />,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com',
    icon: <IconBrandInstagram className="h-5 w-5" />,
  },
]

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="container mx-auto px-4 pt-12 pb-32 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                IOSD
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
                International Organization of Software Developers. Empowering developers worldwide.
              </p>
            </div>
            <div className="flex justify-center space-x-4 md:justify-start">
              {socialLinks.map((social) => (
                <Link
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  aria-label={social.title}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <nav className="flex flex-wrap justify-center gap-6 md:justify-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              contact@iosd.tech
            </p>
          </div>
        </div>
        
        <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} IOSD MAIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
