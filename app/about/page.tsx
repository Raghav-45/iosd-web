import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { AnimatedList } from "@/components/ui/animated-list";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Testimonial } from "@/components/ui/design-testimonial";
import { JoinUsButton } from "@/components/join-us-button";
import { ABOUT_EVENTS, DOMAINS } from "@/lib/config";
import {
  Calendar,
  Users,
  Trophy,
} from "lucide-react";

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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative border border-white/10 bg-background p-6 transition-all hover:-translate-y-1 hover:border-white/20">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/70" />

            <Users className="h-6 w-6 text-primary mb-6" />

            <h3 className="text-5xl font-extrabold tracking-tight tabular-nums">
              <NumberTicker value={300} />
              <span className="text-3xl align-super">+</span>
            </h3>

            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Active Members
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative border border-white/10 bg-background p-6 transition-all hover:-translate-y-1 hover:border-white/20">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/70" />

            <Calendar className="h-6 w-6 text-primary mb-6" />

            <h3 className="text-5xl font-extrabold tracking-tight tabular-nums">
              <NumberTicker value={1000} />
              <span className="text-3xl align-super">+</span>
            </h3>

            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Event Footfall
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative border border-white/10 bg-background p-6 transition-all hover:-translate-y-1 hover:border-white/20">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/70" />

            <Trophy className="h-6 w-6 text-primary mb-6" />

            <h3 className="text-5xl font-extrabold tracking-tight tabular-nums">
              <NumberTicker value={500} />
              <span className="text-3xl align-super">+</span>
            </h3>

            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Students Mentored
            </p>
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-12">
          <a
            href="/gallery"
            className="text-3xl font-bold tracking-tight text-center hover:text-primary transition-colors"
          >
            Gallery
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Large image - spans 2 rows and 2 columns */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg bg-muted group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 flex items-center justify-center">
              <span className="text-6xl">🎯</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-medium">Event Highlight 1</p>
            </div>
          </div>

          {/* Small images */}
          <div className="relative overflow-hidden rounded-lg bg-muted aspect-square group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/5 group-hover:from-blue-500/30 group-hover:to-blue-500/10 transition-all duration-300 flex items-center justify-center">
              <span className="text-4xl">💻</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-muted aspect-square group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-500/5 group-hover:from-green-500/30 group-hover:to-green-500/10 transition-all duration-300 flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-muted aspect-square group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-500/5 group-hover:from-purple-500/30 group-hover:to-purple-500/10 transition-all duration-300 flex items-center justify-center">
              <span className="text-4xl">🎨</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-muted aspect-square group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-500/5 group-hover:from-orange-500/30 group-hover:to-orange-500/10 transition-all duration-300 flex items-center justify-center">
              <span className="text-4xl">🏆</span>
            </div>
          </div>

          {/* Wide image - spans 2 columns */}
          <div className="col-span-2 relative overflow-hidden rounded-lg bg-muted aspect-[2/1] group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-500/5 group-hover:from-pink-500/30 group-hover:to-pink-500/10 transition-all duration-300 flex items-center justify-center">
              <span className="text-5xl">🎭</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-medium">Event Highlight 2</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-muted aspect-square group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 group-hover:from-yellow-500/30 group-hover:to-yellow-500/10 transition-all duration-300 flex items-center justify-center">
              <span className="text-4xl">🎤</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-muted aspect-square group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-500/5 group-hover:from-red-500/30 group-hover:to-red-500/10 transition-all duration-300 flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
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
          <div className="relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border-none bg-background p-6 shadow-lg">
            <AnimatedList>
              {ABOUT_EVENTS.map((item, idx) => (
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
          {DOMAINS.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* Testimonials Section */}
      <section className="w-full">
        <Testimonial />
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
          <JoinUsButton />
        </div>
      </section>
    </div>
  );
}
