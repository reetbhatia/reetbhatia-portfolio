'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Maximize2, ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { projects, type Project } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { ProjectModule } from '@/components/project-module'
import { StatusBadge } from '@/components/status-badge'
import { OhpvrFlow } from '@/components/ohpvr-flow'
import { Modal } from '@/components/modal'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [lightbox, setLightbox] = useState(false)

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative scroll-mt-20 border-y border-border/60 bg-surface/20">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading command="ls -la ./projects" title="Featured Projects">
          Interactive security-system modules. Hover to reveal metadata, click to open
          the full case file.
        </SectionHeading>

        {/* Featured: Aegis */}
        {featured && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-primary/40 bg-card/60 glow-neon">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-surface/60 px-5 py-3">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="font-bold text-primary">PROJECT {featured.index}</span>
                <span className="text-muted-foreground">— AEGIS</span>
              </div>
              <StatusBadge status={featured.status} />
            </div>

            <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.25fr_1fr]">
              {/* left: info + architecture */}
              <div className="flex flex-col">
                <h3 className="text-pretty text-xl font-semibold text-foreground sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>

                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="group relative mt-5 overflow-hidden rounded-lg border border-border/70 bg-background/40"
                  aria-label="Expand Aegis architecture diagram"
                >
                  <Image
                    src="/images/aegis-architecture.png"
                    alt="Aegis architecture diagram: SOC analyst request flowing through Gemini query planning, guardrails, data access, O-H-P-V-R investigation and reasoning loop, post-processing enrichment, and reporting"
                    width={1200}
                    height={675}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    priority
                  />
                  <span className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/20" />
                  <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-background/80 px-2 py-1 font-mono text-[10px] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <Maximize2 className="size-3" /> expand
                  </span>
                  <span className="absolute left-2 top-2 rounded border border-border/70 bg-background/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    architecture.png
                  </span>
                </button>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border/60 bg-background/50 px-2 py-0.5 font-mono text-[10px] text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => setActive(featured)}
                    className="inline-flex items-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-4 py-2 font-mono text-xs text-primary transition-colors hover:bg-primary/20"
                  >
                    <Maximize2 className="size-3.5" /> open case file
                  </button>
                </div>
              </div>

              {/* right: O-H-P-V-R visualization */}
              <OhpvrFlow />
            </div>
          </div>
        )}

        {/* Remaining projects */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectModule key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      {/* Architecture lightbox */}
      <Modal
        open={lightbox}
        onClose={() => setLightbox(false)}
        label="Aegis architecture diagram"
        className="max-w-5xl"
      >
        <div className="border-b border-border/70 bg-surface/60 px-4 py-2.5 font-mono text-xs text-muted-foreground">
          aegis-architecture.png
        </div>
        <div className="p-3 sm:p-5">
          <Image
            src="/images/aegis-architecture.png"
            alt="Full-size Aegis system architecture diagram"
            width={1600}
            height={900}
            className="h-auto w-full rounded-lg border border-border/60"
          />
        </div>
      </Modal>

      {/* Project detail modal */}
      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        label={active ? active.title : 'Project details'}
      >
        {active && (
          <div>
            <div className="flex items-center gap-3 border-b border-border/70 bg-surface/60 px-5 py-3 font-mono text-xs">
              <span className="font-bold text-primary">PROJECT {active.index}</span>
              <StatusBadge status={active.status} />
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="text-pretty text-xl font-semibold text-foreground">
                {active.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {active.description}
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {active.meta.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-border/60 bg-background/40 p-3"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                      {m.label}
                    </dt>
                    <dd className="mt-1 font-mono text-xs text-secondary">{m.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border/60 bg-background/50 px-2 py-0.5 font-mono text-[11px] text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {active.id === 'aegis' && (
                <div className="mt-6">
                  <OhpvrFlow />
                </div>
              )}

              {active.github && (
                <a
                  href={active.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <GithubIcon className="size-4" /> view repository
                  <ExternalLink className="size-3" />
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
