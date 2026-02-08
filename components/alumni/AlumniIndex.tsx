import { BorderBeam } from "@/components/ui/border-beam"
import { cn } from "@/lib/utils";

type Alumni = {
  name: string
  batch: string
  role: string
  current?: string
  link?: string
}

interface AlumniIndexProps {
  title: string
  alumni: Alumni[]
}

export function AlumniIndex({ title, alumni }: AlumniIndexProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="mb-12 text-3xl font-light tracking-tight">
        {title}
      </h2>

      <div className="divide-y divide-border">
        {alumni.map((person, i) => (
          <div
            key={i}
            className={cn("group relative grid grid-cols-1 gap-4 py-8 md:grid-cols-4 border border-blue-500/10 p-6 rounded-lg bg-transparent transition-all duration-300 hover:scale-[1.01] hover:bg-blue-500/5 overflow-hidden mb-3 bg-gradient-to-br from-slate-900/50 to-zinc-900/5 border-blue-300/50 rounded-lg")}
          >
            <div className="md:hidden">
              <BorderBeam size={200} duration={12} delay={i * 5} />
            </div>
            {/* Name */}
            <div className="md:col-span-1">
              {person.link ? (
                <a
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  {person.name}
                </a>
              ) : (
                <p className="text-lg font-medium">
                  {person.name}
                </p>
              )}
            </div>

            {/* Role */}
            <div className="md:col-span-1">
              <p className="text-muted-foreground">
                {person.role}
              </p>
            </div>

            {/* Batch */}
            <div className="md:col-span-1 mono text-muted-foreground">
              {person.batch}
            </div>

            {/* Current */}
            <div className="md:col-span-1 text-muted-foreground">
              {person.current ?? "-"}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
