import { GraduationCap, BadgeCheck } from 'lucide-react'
import { education, certifications } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function EducationCerts() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Education */}
        <div>
          <SectionHeading command="cat ./education" title="Education" />
          <div className="space-y-4">
            {education.map((school) => (
              <div
                key={school.id}
                className="rounded-xl border border-border/80 bg-card/50 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-md border border-secondary/40 bg-secondary/10 text-secondary">
                    <GraduationCap className="size-4" />
                  </span>
                  <h3 className="font-semibold text-foreground">{school.school}</h3>
                </div>
                <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                  {school.entries.map((e, i) => (
                    <li key={i} className="flex items-center justify-between gap-4">
                      <span className="text-sm text-foreground">{e.degree}</span>
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">
                        {e.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <SectionHeading command="ls ./certifications" title="Certifications" />
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card/50 p-4 transition-colors hover:border-primary/50"
              >
                <div className="flex items-start justify-between">
                  <BadgeCheck className="size-5 text-primary" />
                  <span className="rounded border border-border/60 bg-background/50 px-1.5 py-0.5 font-mono text-[10px] text-secondary">
                    {cert.code}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium leading-snug text-foreground">
                    {cert.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-primary">
                  <span className="size-1.5 rounded-full bg-primary" />
                  verified
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
