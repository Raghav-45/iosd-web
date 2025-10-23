import { RoadmapCard } from "./RoadmapCard";
import { Flame, Lightbulb, Target, Users, Rocket, Trophy } from "lucide-react";

interface RoadmapEvent {
    title: string;
    subtitle?: string;
    description: string;
    date: string;
    gradient: "flame" | "sunset" | "ocean" | "midnight";
}

const timelineEvents: RoadmapEvent[] = [
    {
        title: "Foundation Era",
        subtitle: "The Beginning",
        description: "Our society was founded with a vision to create a community built on innovation, collaboration, and shared values.",
        date: "JAN 2020",
        gradient: "flame",
    },
    {
        title: "Growth & Expansion",
        subtitle: "Building Together",
        description: "Rapid expansion as we welcomed new members and established core programs that would define our culture.",
        date: "JUN 2020",
        gradient: "sunset",
    },
    {
        title: "Digital Transformation",
        subtitle: "Embracing Change",
        description: "Successfully transitioned to a hybrid model, leveraging technology to connect members across distances.",
        date: "MAR 2021",
        gradient: "ocean",
    },
    {
        title: "Community Impact",
        subtitle: "Making a Difference",
        description: "Launched major initiatives that created lasting positive impact in our community and beyond.",
        date: "SEP 2021",
        gradient: "midnight",
    },
    {
        title: "Innovation Hub",
        subtitle: "Future Forward",
        description: "Established innovation labs and mentorship programs to nurture the next generation of leaders.",
        date: "FEB 2022",
        gradient: "flame",
    },
    {
        title: "Global Recognition",
        subtitle: "Making Waves",
        description: "Received international recognition for our contributions and became a model for similar organizations worldwide.",
        date: "NOV 2022",
        gradient: "sunset",
    },
];

const icons = [Flame, Lightbulb, Target, Users, Rocket, Trophy];

export const RoadmapLine = () => {
    return (
        <div className="relative max-w-7xl mx-auto px-4 py-20">
            {/* Central Line for Roadmap */}
            <div
                className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden md:block"
                style={{ background: "var(--timeline-line-gradient)" }}
            />

            {/* Roadmap Events */}
            <div className="relative">
                {timelineEvents.map((event, index) => {
                    const Icon = icons[index % icons.length];
                    const position = index % 2 === 0 ? "left" : "right";

                    return (
                        <div key={index} className="relative">
                            {/* Roadmap Icon */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-scale-in border-4"
                                    style={{ background: "var(--timeline-icon-gradient)", borderColor: "rgba(0,0,0,0.6)" }}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            {/* Cards */}
                            <div className={position === "left" ? "md:pr-[calc(50%+4rem)]" : "md:pl-[calc(50%+4rem)]"}>
                                <RoadmapCard
                                    {...event}
                                    position={position}
                                    delay={index * 150}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
