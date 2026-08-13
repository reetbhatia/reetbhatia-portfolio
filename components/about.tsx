export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="overflow-hidden rounded-xl border border-border/80 bg-card/50">
        <div className="flex items-center gap-2 border-b border-border/70 bg-surface/60 px-4 py-2.5">
          <span className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> cat about.txt
          </span>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.3fr]">
          <blockquote className="border-l-2 border-primary/60 pl-4 font-mono text-lg leading-relaxed text-foreground sm:text-xl">
            {'"I like understanding how systems work —'}
            <br />
            {'and figuring out what happens when they don\u0027t."'}
          </blockquote>

          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              My background spans cybersecurity, cloud security, security operations,
              incident response, threat hunting, and AI-assisted security automation.
            </p>
            <p>
              I recently completed an M.Eng. in Cybersecurity at the University of
              Maryland, College Park, along with a Graduate Certificate in Cloud
              Engineering.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Cloud Security', 'Security Operations', 'Threat Hunting', 'Incident Response', 'AI-assisted Security'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/70 bg-background/40 px-2.5 py-1 font-mono text-[11px] text-secondary"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
