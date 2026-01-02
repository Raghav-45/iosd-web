import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { DotPattern } from "@/components/ui/dot-pattern";
import { JoinUsButton } from "@/components/join-us-button";
import { 
  Briefcase, 
  Globe,
  Trophy,
  Rocket
} from "lucide-react";

const features = [
  {
    Icon: Trophy,
    name: "Achievements",
    description: "Our alumni have won numerous hackathons and competitions globally.",
    href: "#",
    cta: "View Achievements",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:col-start-1 lg:col-span-2",
  },
  {
    Icon: Briefcase,
    name: "Careers",
    description: "Working at top tech companies like Google, Microsoft, and Amazon.",
    href: "#",
    cta: "View Careers",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:col-start-3 lg:col-span-1",
  },
  {
    Icon: Rocket,
    name: "Startups",
    description: "Founders of successful startups and innovative ventures.",
    href: "#",
    cta: "View Startups",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:col-start-1 lg:col-span-1",
  },
  {
    Icon: Globe,
    name: "Global Network",
    description: "Connected across 15+ countries and growing.",
    href: "#",
    cta: "View Network",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:col-start-2 lg:col-span-2",
  },
];

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Netflix",
  "Uber",
  "Airbnb",
  "Twitter",
  "LinkedIn",
];

const avatarUrls = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "#" },
];

export default function AlumniPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="z-10 flex flex-col items-center gap-4 text-center px-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl bg-clip-text text-transparent bg-linear-to-b from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500">
            IOSD Alumni
          </h1>
          <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
            Connecting generations of developers, innovators, and leaders. 
            Our legacy continues through you.
          </p>
          <div className="flex items-center gap-4">
            <JoinUsButton />
            <div className="flex items-center gap-2">
              <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            </div>
          </div>
        </div>
        <DotPattern
          className={cn(
            "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
          )}
        />
      </section>

      {/* Bento Grid Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
          Our Impact
        </h2>
        <BentoGrid className="lg:grid-rows-2">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* Marquee Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Where We Work
          </h2>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {companies.map((company) => (
              <div
                key={company}
                className={cn(
                  "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                  "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
                  "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15",
                  "flex items-center justify-center font-semibold"
                )}
              >
                {company}
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background"></div>
        </div>
      </section>
    </div>
  );
}
