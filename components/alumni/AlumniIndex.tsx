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
            className="grid grid-cols-1 gap-4 py-8 md:grid-cols-4"
          >
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
