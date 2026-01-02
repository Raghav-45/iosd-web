import {
  Code,
  Database,
  Layout,
  Smartphone,
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
    Icon: Smartphone,
    name: "Android Dev",
    description: "Crafting native mobile experiences for the Android ecosystem.",
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
    Icon: Layout,
    name: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces.",
    href: "#",
    cta: "Learn More",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-2",
  },
];

export const ABOUT_EVENTS = [
  {
    name: "Impulse '25",
    description: "Flagship technical fest with 1000+ participants.",
    time: "Upcoming",
    icon: "🚀",
    color: "#00C9A7",
  },
  {
    name: "Web Dev SIG",
    description: "Special Interest Group for Full Stack Development.",
    time: "Ongoing",
    icon: "💻",
    color: "#FFB800",
  },
  {
    name: "HackMAIT 4.0",
    description: "24-hour hackathon solving real-world problems.",
    time: "2m ago",
    icon: "🏆",
    color: "#FF3D71",
  },
  {
    name: "Tech Talk",
    description: "Session on System Design by Alumni.",
    time: "5m ago",
    icon: "🎤",
    color: "#1E86FF",
  },
];
