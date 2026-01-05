import {
  Code,
  Database,
  Brain,
  BarChart,
  Users,
  Calendar,
  Trophy,
} from "lucide-react";

export const DOMAINS = [
  {
    Icon: Code,
    name: "Web Development",
    description: "Building modern, scalable web applications using the latest tech stacks.",
    href: "#",
    cta: "Learn More",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-2",
  },
  {
    Icon: Brain,
    name: "Machine Learning",
    description: "Building intelligent systems and exploring artificial intelligence.",
    href: "#",
    cta: "Learn More",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1",
  },
  {
    Icon: Database,
    name: "DSA & CP",
    description: "Mastering algorithms and competing in global coding contests.",
    href: "#",
    cta: "Learn More",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1",
  },
  {
    Icon: BarChart,
    name: "Data Science",
    description: "Analyzing data and extracting insights through statistical methods.",
    href: "#",
    cta: "Learn More",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-2",
  },
];

export const ABOUT_EVENTS = [
  {
    name: "Event 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "Upcoming",
    icon: "🚀",
    color: "#00C9A7",
  },
  {
    name: "Event 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "Ongoing",
    icon: "💻",
    color: "#FFB800",
  },
  {
    name: "Event 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2m ago",
    icon: "🏆",
    color: "#FF3D71",
  },
  {
    name: "Event 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "5m ago",
    icon: "🎤",
    color: "#1E86FF",
  },
];

export const ABOUT_STATS = [
  {
    Icon: Users,
    value: 300,
    label: "Active Members",
  },
  {
    Icon: Calendar,
    value: 9999,
    label: "Event Footfall",
  },
  {
    Icon: Trophy,
    value: 500,
    label: "Students Mentored",
  },
];

export const ABOUT_CONTENT = {
  hero: {
    title: "About Us",
    subtitle: "International Organization of Student Developers at MAIT",
  },
  velocity: {
    text: "Development • Student Lead • Mentorship • Innovation •\u00A0",
  },
  mission: {
    title: "Our Mission",
    description: "To provide a well-resourced platform for developers to come together, create projects, discuss ideas, and learn in a supportive environment. We aim to bridge the gap between theoretical knowledge and practical development.",
  },
  vision: {
    title: "Our Vision",
    description: "To aggrandize the development purlieu in the country. We pride ourselves on being a student organization that is completely development-oriented, fostering a culture of mentorship and innovation.",
  },
  cta: {
    title: "Ready to start your journey?",
    description: "Join IOSD MAIT and be part of the development revolution.",
  },
};

export const GALLERY_PREVIEW = [
  {
    src: "/gallery/impulse-25/cover.jpg",
    alt: "IMPULSE 25",
    label: "IMPULSE 25 Hackathon",
    gridClass: "col-span-2 row-span-2",
  },
  {
    src: "/gallery/impulse-25/cover.jpg",
    alt: "Team Collaboration",
    gridClass: "aspect-square",
  },
  {
    src: "/gallery/xplode-25/cover.jpg",
    alt: "XPLODE 25",
    gridClass: "aspect-square",
  },
  {
    src: "/gallery/xplode-25/cover.jpg",
    alt: "Panel Discussion",
    gridClass: "aspect-square",
  },
  {
    src: "/gallery/yash-gupta/cover.jpg",
    alt: "Workshop Session",
    gridClass: "aspect-square",
  },
  {
    src: "/gallery/career-darika/cover.jpg",
    alt: "Career Width Talk",
    label: "Career Width Talk",
    gridClass: "col-span-2 aspect-[2/1]",
  },
  {
    src: "/gallery/yash-gupta/cover.jpg",
    alt: "Hackathon",
    gridClass: "aspect-square",
  },
  {
    src: "/gallery/career-darika/cover.jpg",
    alt: "Project Demo",
    gridClass: "aspect-square",
  },
];

