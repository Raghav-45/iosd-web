"use client";
import {
    Navbar as Nav,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Navbar() {
    const navItems = [
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Team",
            link: "/team",
        },
        {
            name: "Alumini",
            link: "/alumini",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="relative w-full">
            <Nav>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <NavbarButton variant="secondary" onClick={() => router.push("/achievements")} onMouseEnter={() => router.prefetch("/achievements")}>Achievements</NavbarButton>
                        <NavbarButton variant="primary" onClick={() => router.push("/events")} onMouseEnter={() => router.prefetch("/events")}>Events</NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                prefetch={true}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => { setIsMobileMenuOpen(false); router.push("/achievements"); }}
                                variant="primary"
                                className="w-full"
                            >
                                Achievements
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => { setIsMobileMenuOpen(false); router.push("/events"); }}
                                variant="primary"
                                className="w-full"
                            >
                                Events
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Nav>
        </div>
    );
}