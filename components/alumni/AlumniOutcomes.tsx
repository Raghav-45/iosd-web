import { BorderBeam } from "@/components/ui/border-beam"

type Outcome = {
  label: string
  value: number
}

interface AlumniOutcomesProps {
  title?: string
  outcomes: Outcome[]
}

export function AlumniOutcomes({
  title = "Alumni Outcomes",
  outcomes,
}: AlumniOutcomesProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      {/* Section header */}
      <div className="mb-16 flex items-end justify-between">
        <h2 className="text-3xl font-light tracking-tight">
          {title}
        </h2>

        {/* subtle accent rule */}
        <div className="h-px w-12 bg-accent opacity-50" />
      </div>

      {/* Outcomes */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((outcome, i) => (
          <div key={i} className="relative overflow-hidden border border-blue-500/10 p-6 rounded-lg bg-transparent transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/5 group">
            <BorderBeam size={150} duration={10} delay={i * 1.5} />
            <p className="text-5xl font-light tracking-tight tabular-nums">
              {outcome.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground mono">
              {outcome.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
