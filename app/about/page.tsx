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

      {/* Mission & Vision Split */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-light tracking-tight">{ABOUT_CONTENT.mission.title}</h2>
            <p className="text-muted-foreground">
              {ABOUT_CONTENT.mission.description}
            </p>
            <h2 className="text-3xl font-light tracking-tight pt-4">{ABOUT_CONTENT.vision.title}</h2>
            <p className="text-muted-foreground">
              {ABOUT_CONTENT.vision.description}
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