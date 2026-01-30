import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MagicCard } from "@/components/ui/magic-card"
import { ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { AnimatedList } from "@/components/ui/animated-list";
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { JoinUsButton } from "@/components/join-us-button";
import {
  ABOUT_EVENTS,
  TEAM_MEMBERS,
  ABOUT_CONTENT,
  DOMAINS,
} from "@/lib/config";
import { WordRotate } from "@/components/ui/word-rotate";
import CompleteTeamSection from './complete';
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

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
        <div className="flex flex-col items-center gap-6 text-center px-4">
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

      {/* Mission & Vision Split */}
      <section className="container mx-auto px-4 pt-16 md:pt-24">
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
          {/* 
          Animated List
          
          <div className="relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border-none bg-background p-6 shadow-lg">
            <AnimatedList>
              {ABOUT_EVENTS.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div> */}
          
          {/* Placeholder Image */}
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden border border-border bg-muted/20">
            <div className="flex flex-col items-center gap-4 text-muted-foreground/50">
              <div className="h-16 w-16 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <span className="text-2xl">📷</span>
              </div>
              <p className="mono text-xs">Photo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-24 pb-16">
        <section className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center gap-6 text-center px-5">
            <h1 className="text-5xl sm:text-7xl font-light tracking-tight leading-none">
              Meet the{" "}
              <WordRotate
                className="inline-block font-light text-foreground"
                words={["Builders", "Engineers", "Thinkers"]}
              />
            </h1>
            <p className="max-w-xl text-muted-foreground text-lg">
              The people shaping IOSD - quietly, deliberately, together.
            </p>
          </div>
        </section>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <MagicCard
              key={index}
              className="p-8"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6 h-28 w-28 overflow-hidden border border-border">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-medium">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm text-muted-foreground mono">
                  {member.role}
                </p>

                {/* Socials */}
                <div className="mt-6 flex gap-5">
                  {member.socials.github && (
                    <a href={member.socials.github} className="text-muted-foreground hover:text-foreground transition">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-muted-foreground hover:text-foreground transition">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-muted-foreground hover:text-foreground transition">
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </section>

      <CompleteTeamSection />

      
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