'use client'

import { Maximize2 } from 'lucide-react'
import type { Project } from '@/lib/data'
import { StatusBadge } from '@/components/status-badge'
import { GithubIcon } from '@/components/brand-icons'

export function ProjectModule({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  return (
    <article
      className="scan-beam group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border/80 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:glow-neon"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(project)
        }
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-3xl font-bold text-border transition-colors duration-300 group-hover:text-primary/40">
          {project.index}
        </span>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="mt-4 text-pretty text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.short}
      </p>

      {/* tech chips */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded border border-border/60 bg-background/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="rounded border border-border/60 bg-background/50 px-1.5 py-0.5 font-mono text-[10px] text-secondary">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* metadata revealed on hover */}
      <div className="mt-4 grid grid-rows-[0fr] overflow-hidden transition-all duration-300 group-hover:grid-rows-[1fr]">
        <div className="min-h-0">
          <div className="border-t border-border/60 pt-3">
            <dl className="grid grid-cols-3 gap-2">
              {project.meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/70">
                    {m.label}
                  </dt>
                  <dd className="font-mono text-[10px] text-secondary">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary opacity-0 transition-opacity group-hover:opacity-100">
          <Maximize2 className="size-3" /> open_detail
        </span>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <GithubIcon className="size-3.5" /> repo
          </a>
        )}
      </div>
    </article>
  )
}
