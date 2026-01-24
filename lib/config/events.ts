export type Event = {
  id: string
  title: string
  date: string        // "Mar 2024"
  year: number
  category: string
  coverImage: string
  galleryCategory: string
  featured?: boolean
}

export const EVENTS: Event[] = [
  {
    id: "yash-gupta-mentorship",
    title: "Yash Gupta's Mentorship Session",
    date: "December 2025",
    year: 2025,
    category: "Mentorship",
    coverImage: "/gallery/yash-gupta/cover.jpg",
    galleryCategory: "Workshops",
    featured: true,
  },
  {
    id: "career-width",
    title: "IOSD x Career Width",
    date: "November 2025",
    year: 2025,
    category: "Talk",
    coverImage: "/gallery/career-darika/cover.jpg",
    galleryCategory: "Seminars",
  },
  {
    id: "impulse-25",
    title: "IMPULSE 25",
    date: "October 2025",
    year: 2025,
    category: "Hackathon",
    coverImage: "/gallery/impulse-25/cover.jpg",
    galleryCategory: "Events",
  },
  {
    id: "xplode-25",
    title: "XPLODE 25",
    date: "September 2025",
    year: 2025,
    category: "Hackathon",
    coverImage: "/gallery/xplode-25/cover.jpg",
    galleryCategory: "Events",
    featured: true
  },
]

export type UpcomingEvent = {
  title: string
  date: string
  description: string
  coverImage?: string
  registerUrl?: string
  registrationOpen: boolean
}

export const UPCOMING_EVENT: UpcomingEvent | null = {
  title: "IMPULSE 26",
  date: "Feb 2026",
  description:
    "The flagship tech fest of IOSD MAIT",
  coverImage: "/gallery/impulse-25/cover.jpg",
  registerUrl: "https://arpantaneja.dev",
  registrationOpen: false,
}
