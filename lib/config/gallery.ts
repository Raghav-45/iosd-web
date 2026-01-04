export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
  category: string;
  height: number; // relative height for masonry layout
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Event 1",
    description: "Annual Tech Fest 2025 - Opening Ceremony",
    category: "Events",
    height: 300,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    alt: "Workshop 1",
    description: "Web Development Workshop - Building Modern Apps",
    category: "Workshops",
    height: 400,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    alt: "Hackathon",
    description: "HackMAIT 4.0 - 24 Hour Coding Marathon",
    category: "Hackathons",
    height: 350,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80",
    alt: "Team Photo",
    description: "IOSD Core Team 2025",
    category: "Team",
    height: 280,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    alt: "Event 2",
    description: "Impulse '25 - Technical Fest Highlights",
    category: "Events",
    height: 420,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    alt: "Workshop 2",
    description: "Android Development Workshop",
    category: "Workshops",
    height: 320,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    alt: "Event 3",
    description: "Alumni Meetup - Networking Session",
    category: "Events",
    height: 380,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    alt: "Seminar",
    description: "Tech Talk on System Design",
    category: "Seminars",
    height: 340,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    alt: "Event 4",
    description: "DSA & CP Competition Winners",
    category: "Competitions",
    height: 300,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    alt: "Workshop 3",
    description: "UI/UX Design Workshop",
    category: "Workshops",
    height: 360,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    alt: "Event 5",
    description: "Open Source Contribution Day",
    category: "Events",
    height: 310,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    alt: "Meeting",
    description: "Weekly Development Sync",
    category: "Meetings",
    height: 390,
  },
];
