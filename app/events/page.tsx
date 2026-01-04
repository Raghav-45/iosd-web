import { EVENTS } from "@/lib/config/events"
import { EventPreviewCard } from "@/components/events/EventPreviewCard"

const featured = EVENTS.filter(e => e.featured)
const recent = EVENTS.filter(e => !e.featured)

export default function EventsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Hero (already done) */}

      {/* Featured */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-3xl font-light tracking-tight">
          Recent Highlights
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map(event => (
            <EventPreviewCard
              key={event.id}
              event={event}
              priority
            />
          ))}
        </div>
      </section>

      {/* Recent */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-2xl font-light tracking-tight">
          More Events
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map(event => (
            <EventPreviewCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
