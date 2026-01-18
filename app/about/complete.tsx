"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// ============================================
// TYPES
// ============================================

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
  website?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio?: string;
  socials: SocialLinks;
}

// ============================================
// SAMPLE TEAM DATA (Replace with your own)
// ============================================

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alexandre Côté",
    role: "Front-End",
    department: "Development",
    image: "/team/placeholder-1.jpg",
    bio: "Passionate about creating beautiful user interfaces",
    socials: {
      linkedin: "https://linkedin.com/in/alexandrecote",
      github: "https://github.com/alexandrecote",
      instagram: "https://instagram.com/alexandrecote",
    },
  },
  {
    id: "2",
    name: "Dimitri Kurc",
    role: "Tech Lead",
    department: "Development",
    image: "/team/placeholder-2.jpg",
    bio: "Leading teams to build exceptional products",
    socials: {
      linkedin: "https://linkedin.com/in/dimitrikurc",
      github: "https://github.com/dimitrikurc",
    },
  },
  {
    id: "3",
    name: "Dominique Roy",
    role: "Front-End",
    department: "Development",
    image: "/team/placeholder-3.jpg",
    bio: "Crafting pixel-perfect experiences",
    socials: {
      linkedin: "https://linkedin.com/in/dominiqueroy",
      github: "https://github.com/dominiqueroy",
      twitter: "https://twitter.com/dominiqueroy",
    },
  },
  {
    id: "4",
    name: "Gaël Patron",
    role: "Team Lead",
    department: "Development",
    image: "/team/placeholder-4.jpg",
    bio: "Building bridges between code and business",
    socials: {
      linkedin: "https://linkedin.com/in/gaelpatron",
      github: "https://github.com/gaelpatron",
    },
  },
  {
    id: "5",
    name: "James Mckernan",
    role: "UX Designer",
    department: "Design",
    image: "/team/placeholder-5.jpg",
    bio: "Designing experiences that users love",
    socials: {
      linkedin: "https://linkedin.com/in/jamesmckernan",
      instagram: "https://instagram.com/jamesmckernan",
      website: "https://jamesmckernan.design",
    },
  },
  {
    id: "6",
    name: "Jenny Bernier",
    role: "UX Designer",
    department: "Design",
    image: "/team/placeholder-6.jpg",
    bio: "User-centered design advocate",
    socials: {
      linkedin: "https://linkedin.com/in/jennybernier",
    },
  },
];

// ============================================
// SOCIAL MEDIA ICONS (SVG Components)
// ============================================

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WebsiteIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

// ============================================
// CSS STYLES (Inline style tag for portability)
// ============================================

const TeamStyles = () => (
  <style jsx global>{`
    @keyframes popup {
      0% {
        opacity: 0;
        transform: translateY(-50%) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(-50%) scale(1);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .animate-popup {
      animation: popup 0.2s ease-out forwards;
    }

    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out forwards;
    }

    .team-member-item {
      position: relative;
    }

    .team-member-image {
      transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
    }

    .team-member-card {
      transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .team-member-card:hover {
      box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.35);
    }

    .team-list > div {
      animation: fadeIn 0.3s ease-out backwards;
    }

    .team-list > div:nth-child(1) { animation-delay: 0ms; }
    .team-list > div:nth-child(2) { animation-delay: 30ms; }
    .team-list > div:nth-child(3) { animation-delay: 60ms; }
    .team-list > div:nth-child(4) { animation-delay: 90ms; }
    .team-list > div:nth-child(5) { animation-delay: 120ms; }
    .team-list > div:nth-child(6) { animation-delay: 150ms; }
  `}</style>
);

// ============================================
// TEAM MEMBER ITEM COMPONENT
// ============================================

interface TeamMemberItemProps {
  member: TeamMember;
}

function TeamMemberItem({ member }: TeamMemberItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setImageError(false);
  }, [member.image]);

  const hasSocials = Object.values(member.socials).some(Boolean);

  return (
    <div
      ref={itemRef}
      className="team-member-item group relative cursor-pointer py-4 border-b border-gray-200 dark:border-gray-800 transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">
            {member.department}
          </span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 dark:text-gray-400">
            {member.role}
          </span>
        </div>
        <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {member.name}
        </span>
      </div>

      {isHovered && (
        <div className="hidden sm:block absolute right-48 top-1/2 -translate-y-1/2 z-50">
          <div className="team-member-card w-72 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl animate-popup border border-gray-200 dark:border-gray-700">
            <div className="relative w-full h-48">
              {!imageError ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="288px"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-5xl font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-white/80 text-sm">{member.role}</p>
              </div>
            </div>

            <div className="p-4">
              {member.bio && (
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {member.bio}
                </p>
              )}
              {hasSocials && (
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                      <LinkedInIcon />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <GitHubIcon />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
                      <InstagramIcon />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                      <TwitterIcon />
                    </a>
                  )}
                  {member.socials.website && (
                    <a href={member.socials.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                      <WebsiteIcon />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
            <div className="w-4 h-4 bg-white dark:bg-gray-900 border-r border-t border-gray-200 dark:border-gray-700 transform rotate-45"></div>
          </div>
        </div>
      )}

      {isHovered && (
        <div className="sm:hidden mt-4 mx-4 animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="relative w-full h-40">
              {!imageError ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-bold text-base">{member.name}</h3>
                <p className="text-white/80 text-xs">{member.role}</p>
              </div>
            </div>
            <div className="p-3">
              {member.bio && (
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">{member.bio}</p>
              )}
              {hasSocials && (
                <div className="flex items-center gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                  {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors"><LinkedInIcon /></a>}
                  {member.socials.github && <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><GitHubIcon /></a>}
                  {member.socials.instagram && <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors"><InstagramIcon /></a>}
                  {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"><TwitterIcon /></a>}
                  {member.socials.website && <a href={member.socials.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors"><WebsiteIcon /></a>}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// MAIN TEAM SECTION COMPONENT
// ============================================

interface CompleteTeamSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  members?: TeamMember[];
}

export default function CompleteTeamSection({
  title = "Meet the Team",
  subtitle = "Get to know the talented people behind our work. Hover over each member to see their photo.",
  className = "",
  members = teamMembers,
}: CompleteTeamSectionProps) {
  return (
    <>
      <TeamStyles />
      <section className={`team-section w-full py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 md:px-8">
          <header className="team-section-header mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              {subtitle}
            </p>
          </header>
          <div className="team-list">
            {members.map((member) => (
              <TeamMemberItem key={member.id} member={member} />
            ))}
          </div>
          <footer className="team-section-footer mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {members.length} team members strong
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}