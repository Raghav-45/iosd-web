import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { AnimatedList } from "@/components/ui/animated-list";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  Database,
  Layout,
  Calendar,
  Users,
  Trophy,
} from "lucide-react";

const domains = [
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

interface NotificationProps {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const Notification = ({ name, description, icon, color, time }: NotificationProps) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[1.03]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const events = [
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

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="z-10 flex flex-col items-center gap-4 text-center px-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl bg-clip-text text-transparent bg-linear-to-b from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
            About Us
          </h1>
          <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
            IOSD at MAIT
          </p>
          {/* <p className="max-w-[800px] text-lg font-medium text-primary">
            &quot;We are a bunch of students pledged to enrich the development culture.&quot;
          </p> */}
        </div>
        <DotPattern
          className={cn(
            "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
          )}
        />
      </section>

      {/* Velocity Scroll */}
      <section className="py-10">
        <ScrollVelocityRow
          baseVelocity={3}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-20"
        >
          Development • Student Lead • Mentorship • Innovation •&nbsp;
        </ScrollVelocityRow>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-muted/50">
            <Users className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-4xl font-bold tracking-tighter">
              <NumberTicker value={100} />+
            </h3>
            <p className="text-muted-foreground mt-2">Active Members</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-muted/50">
            <Calendar className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-4xl font-bold tracking-tighter">
              <NumberTicker value={50} />+
            </h3>
            <p className="text-muted-foreground mt-2">Events Organized</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-muted/50">
            <Trophy className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-4xl font-bold tracking-tighter">
              <NumberTicker value={10} />+
            </h3>
            <p className="text-muted-foreground mt-2">Hackathons Won</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Split */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To provide a well-resourced platform for developers to come together, create projects, discuss ideas, and learn in a supportive environment. We aim to bridge the gap between theoretical knowledge and practical development.
            </p>
            <h2 className="text-3xl font-bold tracking-tight pt-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To aggrandize the development purlieu in the country. We pride ourselves on being a student organization that is completely development-oriented, fostering a culture of mentorship and innovation.
            </p>
          </div>
          <div className="relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
            <AnimatedList>
              {events.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* Domains Bento Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
          Technical Domains
        </h2>
        <BentoGrid className="lg:grid-rows-2">
          {domains.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Ready to start your journey?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Join IOSD MAIT and be part of the development revolution.
          </p>
          <Button size="lg" className="rounded-full">
            Join Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}
