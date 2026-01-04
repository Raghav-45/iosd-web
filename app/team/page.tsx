import { cn } from "@/lib/utils"
import { WordRotate } from "@/components/ui/word-rotate"
import { DotPattern } from "@/components/ui/dot-pattern"
import { MagicCard } from "@/components/ui/magic-card"
import { JoinUsButton } from "@/components/join-us-button"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { TEAM_MEMBERS } from "@/lib/config"

export default function TeamPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden">
        <div className="z-10 flex flex-col items-center gap-6 text-center px-5">
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

        <DotPattern
          className={cn(
            "opacity-[0.15]",
            "mask-[radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4 pt-24 pb-16">
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

      {/* Join */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            Want to be part of us?
          </h2>
          <p className="text-muted-foreground mb-10">
            We’re always looking for people who care about craft.
          </p>
          <JoinUsButton />
        </div>
      </section>
    </div>
  )
}
