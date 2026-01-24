export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description?: string;
  category: string;
  height: number; // relative height for masonry layout
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/yash-gupta/cover.jpg",
    alt: "Yash Gupta Mentorship Session",
    description: "Yash Gupta's Mentorship Session",
    category: "Workshops",
    height: 350,
  },
  {
    id: 2,
    src: "/gallery/career-darika/cover.jpg",
    alt: "IOSD x Career Width",
    description: "Career Width Talk",
    category: "Seminars",
    height: 320,
  },
  {
    id: 3,
    src: "/gallery/impulse-25/cover.jpg",
    alt: "IMPULSE 25",
    description: "IMPULSE 25 Hackathon",
    category: "Events",
    height: 380,
  },
  {
    id: 4,
    src: "/gallery/xplode-25/cover.jpg",
    alt: "XPLODE 25",
    description: "XPLODE 25 Hackathon",
    category: "Events",
    height: 360,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    alt: "Team Collaboration Workshop",
    description: "Student collaboration during tech workshop",
    category: "Workshops",
    height: 340,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
    alt: "Panel Discussion",
    description: "Industry experts panel discussion",
    category: "Seminars",
    height: 300,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    alt: "Hackathon Night",
    description: "Late night coding session at hackathon",
    category: "Events",
    height: 390,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800",
    alt: "Code Review Session",
    description: "Peer code review and learning",
    category: "Workshops",
    height: 330,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Team Building Activity",
    description: "IOSD team bonding session",
    category: "Community",
    height: 360,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
    alt: "Tech Talk Series",
    description: "Guest speaker tech talk",
    category: "Seminars",
    height: 310,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    alt: "Project Demo Day",
    description: "Students presenting their projects",
    category: "Events",
    height: 370,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    alt: "Coding Workshop",
    description: "Hands-on coding workshop session",
    category: "Workshops",
    height: 345,
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
    alt: "IOSD Meetup",
    description: "Monthly community meetup",
    category: "Community",
    height: 325,
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800",
    alt: "Innovation Summit",
    description: "Annual innovation and tech summit",
    category: "Events",
    height: 355,
  },
];
