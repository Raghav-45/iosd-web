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
          border border-border shadow-[var(--shadow-card)] overflow-hidden
          bg-surface-1 hover:bg-surface-2
          transition-all duration-300
          hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]
          hover:border-accent/30
        `}
                style={{ animationDelay: `${delay}ms` }}
            >
                {/* Decorative dots */}
                <div
                    className="absolute top-4 left-4 w-3 h-3 rounded-full bg-accent/20"
                />
                <div
                    className="absolute top-4 left-10 w-2 h-2 rounded-full bg-accent/10"
                />

                {/* Date Badge */}
                <div
                    className="absolute top-0 right-4 px-4 py-2 border-l border-b border-accent/20"
                    style={{
                        background: "oklch(0 0 0 / 0.6)",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <div
                        className="mono text-xs text-accent tracking-wider"
                    >
                        {date.split(" ")[0]}
                    </div>
                    <div
                        className="text-2xl font-light leading-none text-foreground"
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
                            className="w-16 h-16 object-cover border border-border shadow-sm"
                        />
                    )}

                    <div className="flex-1">
                        <h3
                            className="text-xl font-light tracking-tight mb-2 leading-tight text-foreground"
                        >
                            {title}
                        </h3>
                        {subtitle && (
                            <p
                                className="mono text-xs mb-2 text-accent"
                            >
                                {subtitle}
                            </p>
                        )}
                        <p
                            className="text-sm text-muted-foreground leading-relaxed"
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