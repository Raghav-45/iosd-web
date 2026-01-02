import { cn } from "@/lib/utils";
import { WordRotate } from "@/components/ui/word-rotate";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { JoinUsButton } from "@/components/join-us-button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Lead Developer",
    image: "https://avatars.githubusercontent.com/u/16860528",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    image: "https://avatars.githubusercontent.com/u/20110627",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "James Wilson",
    role: "Backend Engineer",
    image: "https://avatars.githubusercontent.com/u/106103625",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    image: "https://avatars.githubusercontent.com/u/59228569",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Brown",
    role: "DevOps Specialist",
    image: "https://avatars.githubusercontent.com/u/12345678",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Jessica Taylor",
    role: "Frontend Developer",
    image: "https://avatars.githubusercontent.com/u/87654321",
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function TeamPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="z-10 flex flex-col items-center gap-4 text-center px-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
              Meet the
            </span>
            <WordRotate
              className="text-5xl font-bold tracking-tighter sm:text-7xl text-primary"
              words={["Innovators", "Creators", "Dreamers", "Builders"]}
            />
          </h1>
          <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
            The brilliant minds behind IOSD. Passionate about technology, driven by innovation.
          </p>
        </div>
        <DotPattern
          className={cn(
            "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
          )}
        />
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <MagicCard
              key={index}
              className="flex flex-col items-center justify-center p-8 text-center shadow-2xl"
              gradientColor="#D9D9D955"
            >
              <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-2xl font-bold">{member.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{member.role}</p>
              <div className="flex gap-4">
                <a
                  href={member.socials.github}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={member.socials.linkedin}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={member.socials.twitter}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </MagicCard>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Want to join the team?
          </h2>
          <p className="mb-8 text-muted-foreground">
            We are always looking for talented individuals to join our community.
          </p>
          <JoinUsButton />
        </div>
      </section>
    </div>
  );
}
