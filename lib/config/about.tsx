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
