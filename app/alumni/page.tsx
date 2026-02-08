import Image from "next/image"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { AvatarCircles } from "@/components/ui/avatar-circles"
import { DotPattern } from "@/components/ui/dot-pattern"
import { AlumniIndex } from "@/components/alumni/AlumniIndex"
import { AlumniOutcomes } from "@/components/alumni/AlumniOutcomes"
import { ALUMNI_OUTCOMES, NOTABLE_ALUMNI } from "@/lib/config"
import Meta from "@/public/logos/meta-3.svg"
import Uber from "@/public/logos/uber-15.svg"
import Apple from "@/public/logos/Apple_logo_white.svg"
import ZS from "@/public/logos/zs.png"
import PayPal from "@/public/logos/paypal.png"

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    logo: Meta,
  },
  {
    name: "Apple",
    logo: Apple
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Uber",
    logo: Uber,
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
  {
    name: "Twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    name: "PayPal",
    logo: PayPal,
  },
  {
    name: "ZS",
    logo: ZS,
  },
];


const avatarUrls = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "#" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "#" },
]

export default function AlumniPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* Hero */}
      <section className="relative flex h-[60vh] items-center justify-center">
        <div className="z-10 flex flex-col items-center gap-6 text-center px-4">
          <h1 className="text-4xl sm:text-7xl font-light tracking-tight border-b border-blue-500/20 pb-2 px-6">
            IOSD Alumni
          </h1>

          <p className="max-w-xl text-muted-foreground text-base sm:text-lg">
            Generations of builders, engineers, and leaders -connected by craft.
          </p>

          <div className="mt-4 flex items-center gap-6">
            <AvatarCircles
              numPeople={99}
              avatarUrls={avatarUrls}
            />
          </div>
        </div>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent_70%)]",
            "opacity-20"
          )}
        />
      </section>

      {/* Impact */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-16 text-3xl font-light tracking-tight text-center">
          Our Impact
        </h2>

        <div className="grid gap-16 md:grid-cols-2">
          <div className="border-b pb-4 border-blue-400/40">
            <h3 className="text-xl font-medium">
              Technical Excellence
            </h3>
            <p className="mt-4 text-muted-foreground">
              Alumni from IOSD go on to build systems, products, and platforms
              that serve millions -across industry, startups, and research.
            </p>
          </div>

          <div className="border-b pb-4 border-blue-400/40">
            <h3 className="text-xl font-medium">
              Leadership & Ownership
            </h3>
            <p className="mt-4 text-muted-foreground">
              From founding startups to leading teams, IOSD alumni carry
              forward a culture of ownership, curiosity, and long-term thinking.
            </p>
          </div>

          <div className="border-b pb-4 border-blue-400/40">
            <h3 className="text-xl font-medium">
              Global Footprint
            </h3>
            <p className="mt-4 text-muted-foreground">
              Our community spans continents -contributing to organizations
              and research institutions across the world.
            </p>
          </div>

          <div className="border-b pb-4 border-blue-400/40">
            <h3 className="text-xl font-medium">
              Giving Back
            </h3>
            <p className="mt-4 text-muted-foreground">
              Many alumni continue to mentor, teach, and guide newer members -
              sustaining the ecosystem that shaped them.
            </p>
          </div>
        </div>
      </section>


      {/* Notable Alumni */}
      <AlumniIndex title="Notable Alumni" alumni={NOTABLE_ALUMNI} />

      {/* Alumni Outcomes */}
      <AlumniOutcomes outcomes={ALUMNI_OUTCOMES} />

      {/* Companies */}
      <section className="py-24">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-light tracking-tight text-center">
            Where We Work
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <Marquee className="[--duration:24s]">
            {companies.map((company) => (
              <div
                key={company.name}
                className={cn(
                  "mx-6 flex h-16 w-40 items-center justify-center",
                  "border border-blue-500/20 md:border-border text-sm mono",
                  "text-muted-foreground hover:text-foreground transition hover:border-blue-500/40"
                )}
              >
                <Image src={company.logo} alt={company.name} width={34} height={34} className="max-w-fit max-h-6 mr-3" />
                {company.name}
              </div>
            ))}
          </Marquee>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background" />
        </div>
      </section>
    </div>
  )
}
