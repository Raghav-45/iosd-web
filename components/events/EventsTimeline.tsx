import { Event } from "@/lib/config/events"
import { cn } from "@/lib/utils"

interface EventsTimelineProps {
    events: Event[]
}

export function EventsTimeline({ events }: EventsTimelineProps) {
    const eventsByYear = events.reduce<Record<number, Event[]>>((acc, event) => {
        acc[event.year] = acc[event.year] || []
        acc[event.year].push(event)
        return acc
    }, {})

    const years = Object.keys(eventsByYear)
        .map(Number)
        .sort((a, b) => b - a)

    return (
        <section className="container mx-auto px-4 py-32">
            <h2 className="mb-20 text-3xl font-light tracking-tight text-center">
                Timeline
            </h2>

            <div className="space-y-24">
                {years.map((year) => (
                    <div key={year} className="relative">
                        {/* Year header */}
                        <div className="mb-12 flex items-center gap-6">
                            <span className="mono text-sm text-muted-foreground">
                                {year}
                            </span>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <div className="relative">
                            {/* Shared vertical line */}
                            <div className="absolute left-3 top-0 h-full w-px bg-accent/40" />

                            <div className="space-y-10">
                                {eventsByYear[year].map((event) => (
                                    <div
                                        key={event.id}
                                        className="relative flex items-start gap-6"
                                    >
                                        {/* Dot */}
                                        <div className="relative z-10 flex w-6 justify-center">
                                            <span className="mt-1 h-2 w-2 rounded-full bg-accent opacity-80" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <h3 className="text-lg font-light tracking-tight">
                                                    {event.title}
                                                </h3>
                                                <span className="mono text-xs text-muted-foreground">
                                                    {event.date}
                                                </span>
                                            </div>

                                            <p className="mt-1 text-sm text-muted-foreground">
                                                {event.category}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}