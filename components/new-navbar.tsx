"use client";
import CardNav from '@/components/ui/CardNav';
import type { CardNavItem } from '@/components/ui/CardNav';

export function Navbar() {
    // Transform your navigation items into CardNav format
    const cardNavItems: CardNavItem[] = [
        {
            label: "About Us",
            bgColor: "#091721",
            textColor: "#fff",
            links: [
                { 
                    label: "Our Story", 
                    href: "/about#story",
                    ariaLabel: "Learn about our story" 
                },
                { 
                    label: "Mission & Vision", 
                    href: "/about#mission",
                    ariaLabel: "Our mission and vision" 
                }
            ]
        },
        {
            label: "People", 
            bgColor: "#0b1f2e",
            textColor: "#fff",
            links: [
                { 
                    label: "Team", 
                    href: "/team",
                    ariaLabel: "Meet our team" 
                },
                { 
                    label: "Alumni", 
                    href: "/alumni",
                    ariaLabel: "Our alumni network" 
                }
            ]
        },
        {
            label: "Showcase",
            bgColor: "#0d2a40", 
            textColor: "#fff",
            links: [
                { 
                    label: "Achievements", 
                    href: "/achievements",
                    ariaLabel: "View our achievements" 
                },
                { 
                    label: "Events", 
                    href: "/events",
                    ariaLabel: "Upcoming and past events" 
                }
            ]
        }
    ];

    return (
        <div className="relative w-full min-h-[120px]">
            <CardNav
                logo="/logo.png" // Update this path to your actual logo
                logoAlt="Your Organization Logo"
                items={cardNavItems}
                baseColor="#000"
                menuColor="#fff"
                buttonBgColor="#111111"
                buttonTextColor="#ffffff"
                ease="power3.out"
                className=""
            />
        </div>
    );
}