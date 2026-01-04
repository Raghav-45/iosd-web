import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { AnimatedList } from "@/components/ui/animated-list";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Testimonial } from "@/components/ui/design-testimonial";
import { JoinUsButton } from "@/components/join-us-button";
import {
  ABOUT_EVENTS,
  DOMAINS,
  ABOUT_STATS,
  ABOUT_CONTENT,
  GALLERY_PREVIEW,
} from "@/lib/config";

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
            {ABOUT_CONTENT.hero.title}
          </h1>
          <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
            {ABOUT_CONTENT.hero.subtitle}
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
          {ABOUT_CONTENT.velocity.text}
        </ScrollVelocityRow>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {ABOUT_STATS.map((stat, index) => (
            <div
              key={index}
              className="group relative border border-white/10 bg-background p-6 transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/70" />

              <stat.Icon className="h-6 w-6 text-primary mb-6" />

              <h3 className="text-5xl font-extrabold tracking-tight tabular-nums">
                <NumberTicker value={stat.value} />
                <span className="text-3xl align-super">+</span>
              </h3>

              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
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
          {GALLERY_PREVIEW.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg bg-muted group cursor-pointer ${item.gridClass}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} group-hover:${item.hoverGradient} transition-all duration-300 flex items-center justify-center`}
              >
                <span className={item.gridClass.includes("col-span-2") ? "text-6xl" : item.gridClass.includes("aspect-[2/1]") ? "text-5xl" : "text-4xl"}>
                  {item.emoji}
                </span>
              </div>
              {item.label && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-medium">{item.label}</p>
                </div>
              )}
            </div>
          ))}
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
      <section className="py-20 bg-muted/30">{ABOUT_CONTENT.mission.title}
        <p className="text-lg text-muted-foreground">
          {ABOUT_CONTENT.mission.description}
          {ABOUT_CONTENT.cta.title}
        </p>
        <p className="mb-8 text-muted-foreground">
          {ABOUT_CONTENT.cta.description}
        </p>
        <JoinUsButton />
      </section>
    </div>
  )
}
