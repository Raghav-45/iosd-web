import { Card } from "@/components/ui/card";

interface EventCardProps {
    title: string;
    subtitle?: string;
    description: string;
    date: string;
    position: "left" | "right";
    gradient: "flame" | "sunset" | "ocean" | "midnight";
    coverImage?: string;
    delay?: number;
}


export const EventLineCard = ({
    title,
    subtitle,
    description,
    date,
    position,
    coverImage,
    delay = 0,
}: EventCardProps) => {
    const animationClass =
        position === "left" ? "animate-fade-in-left" : "animate-fade-in-right";

    return (
        <div
            className={`flex items-center gap-8 mb-16 ${position === "left" ? "flex-row" : "flex-row-reverse"
                }`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <Card
                className={`
          ${animationClass}
          relative w-full max-w-md pt-14 pb-6 px-6
          border border-black/60 shadow-[var(--shadow-card)] overflow-hidden
          bg-[hsl(var(--card))] hover:bg-[hsl(var(--card-hover))]
          transition-all duration-300
          hover:scale-105 hover:shadow-[var(--shadow-glow)]
        `}
                style={{ animationDelay: `${delay}ms` }}
            >
                {/* Decorative dots */}
                <div
                    className="absolute top-4 left-4 w-3 h-3 rounded-full"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <div
                    className="absolute top-4 left-10 w-2 h-2 rounded-full"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                />

                {/* Date Badge */}
                <div
                    className="absolute top-0 right-4 px-4 py-2 rounded-lg"
                    style={{
                        background: "hsl(var(--date-badge) / 0.6)",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    <div
                        className="text-xs font-semibold tracking-wider"
                        style={{ color: "hsl(var(--text-secondary))" }}
                    >
                        {date.split(" ")[0]}
                    </div>
                    <div
                        className="text-2xl font-bold leading-none"
                        style={{ color: "hsl(var(--text-primary))" }}
                    >
                        {date.split(" ")[1]}
                    </div>
                </div>

                {/* Content */}
                <div className="flex items-start gap-4">
                    {coverImage && (
                        <img
                            src={coverImage}
                            alt={title}
                            className="w-16 h-16 rounded-lg object-cover border border-black/30 shadow-sm"
                        />
                    )}

                    <div className="flex-1">
                        <h3
                            className="text-2xl font-bold mb-2 leading-tight"
                            style={{ color: "hsl(var(--text-primary))" }}
                        >
                            {title}
                        </h3>
                        {subtitle && (
                            <p
                                className="text-sm mb-2 font-light tracking-wide"
                                style={{ color: "hsl(var(--text-secondary))" }}
                            >
                                {subtitle}
                            </p>
                        )}
                        <p
                            className="text-base leading-relaxed"
                            style={{ color: "hsl(var(--text-primary))" }}
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </Card>

            <div className="hidden md:block w-8" />
        </div>
    );
};