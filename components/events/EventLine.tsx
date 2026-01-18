// EventLine.tsx
import { EventLineCard } from "./EventLineCard";
import { Flame, Lightbulb, Target, Users, Rocket, Trophy } from "lucide-react";
import { EVENTS, UPCOMING_EVENT } from "@/lib/config/events";

const icons = [Flame, Lightbulb, Target, Users, Rocket, Trophy];

export const EventLine = () => {
    return (
        <div className="relative max-w-7xl mx-auto px-4 py-20">
            {/* Central Line for Timeline */}
            <div
                className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden md:block"
                style={{ background: "var(--timeline-line-gradient)" }}
            />

            {/* Events */}
            <div className="relative">
                {EVENTS.map((event, index) => {
                    const Icon = icons[index % icons.length];
                    const position = index % 2 === 0 ? "left" : "right";

                    return (
                        <div key={event.id} className="relative">
                            {/* Event Icon */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-scale-in border-4"
                                    style={{
                                        background: "var(--timeline-icon-gradient)",
                                        borderColor: "rgba(0,0,0,0.6)",
                                    }}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            {/* Cards */}
                            <div
                                className={
                                    position === "left"
                                        ? "md:pr-[calc(50%+4rem)]"
                                        : "md:pl-[calc(50%+4rem)]"
                                }
                            >
                                <EventLineCard
                                    title={event.title}
                                    subtitle={event.category}
                                    description={`Gallery: ${event.galleryCategory}`}
                                    date={event.date}
                                    position={position}
                                    delay={index * 150}
                                    coverImage={event.coverImage}
                                    gradient={event.featured ? "flame" : "sunset"} // featured events highlighted
                                />
                            </div>
                        </div>
                    );
                })}

                {/* Upcoming Event */}
                {UPCOMING_EVENT && (
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-scale-in border-4"
                                style={{
                                    background: "var(--timeline-icon-gradient)",
                                    borderColor: "rgba(0,0,0,0.6)",
                                }}
                            >
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <div className="md:pr-[calc(50%+4rem)]">
                            <EventLineCard
                                title={UPCOMING_EVENT.title}
                                subtitle={
                                    UPCOMING_EVENT.registrationOpen
                                        ? "Registration Open"
                                        : "Coming Soon"
                                }
                                description={UPCOMING_EVENT.description}
                                date={UPCOMING_EVENT.date}
                                position="left"
                                delay={EVENTS.length * 150}
                                coverImage={UPCOMING_EVENT.coverImage}
                                gradient="ocean"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};