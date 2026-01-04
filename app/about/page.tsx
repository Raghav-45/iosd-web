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
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden p-4",
        "transition-all duration-200 ease-in-out hover:scale-[1.03]",
        "border border-border bg-background backdrop-blur-md"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre font-medium">
            <span className="text-sm sm:text-base">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-muted-foreground">{time}</span>
          </figcaption>
          <p className="text-sm text-muted-foreground">
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
      <section className="relative flex h-[60vh] items-center justify-center">
        <div className="z-10 flex flex-col items-center gap-6 text-center px-4">
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight">
            {ABOUT_CONTENT.hero.title}
          </h1>
          <p className="max-w-xl text-muted-foreground text-lg">
            {ABOUT_CONTENT.hero.subtitle}
          </p>
          {/* <p className="max-w-[800px] text-lg font-medium text-primary">
            &quot;We are a bunch of students pledged to enrich the development culture.&quot;
          </p> */}
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "opacity-40"
          )}
        />
      </section>

      {/* Velocity Scroll */}
      <section className="py-10">
        <ScrollVelocityRow
          baseVelocity={3}
          className="text-center text-4xl font-light tracking-tight md:text-7xl"
        >
          {ABOUT_CONTENT.velocity.text}
        </ScrollVelocityRow>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {ABOUT_STATS.map((stat, index) => (
            <div
              key={index}
              className="group relative border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-border"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-accent" />

              <stat.Icon className="h-6 w-6 text-foreground mb-6" />

              <h3 className="text-5xl font-light tracking-tight tabular-nums">
                <NumberTicker value={stat.value} />
                <span className="text-3xl align-super">+</span>
              </h3>

              <p className="mt-3 mono text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>



      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex items-center justify-center mb-12">
          <a
            href="/gallery"
            className="text-3xl font-light tracking-tight text-center hover:text-accent transition-colors"
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
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-light tracking-tight">Our Mission</h2>
            <p className="text-muted-foreground">
              To provide a well-resourced platform for developers to come together, create projects, discuss ideas, and learn in a supportive environment. We aim to bridge the gap between theoretical knowledge and practical development.
            </p>
            <h2 className="text-3xl font-light tracking-tight pt-4">Our Vision</h2>
            <p className="text-muted-foreground">
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
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-3xl font-light tracking-tight text-center">
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
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-light tracking-tight">
            {ABOUT_CONTENT.cta.title}
          </h2>
          <p className="max-w-xl text-muted-foreground">
            {ABOUT_CONTENT.cta.description}
          </p>
          <JoinUsButton />
        </div>
      </section>
    </div>
  )
}
