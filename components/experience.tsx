'use client'

import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import { experience } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null)

  return (
    <section
      id="experience"
      className="relative scroll-mt-20 border-y border-border/60 bg-surface/20"
    >
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading command="tail -f ./activity.log" title="Experience">
          An operational log rather than a résumé. Expand an entry to read the detail.
        </SectionHeading>

        <ol className="relative ml-1 border-l border-border/70 pl-6 sm:pl-8">
          {experience.map((exp) => {
            const isOpen = openId === exp.id
            return (
              <li key={exp.id} className="relative mb-4 last:mb-0">
                <span
                  className={cn(
                    'absolute -left-[calc(1.5rem+5px)] top-5 flex size-3 items-center justify-center sm:-left-[calc(2rem+5px)]',
                  )}
                  aria-hidden="true"
                >
                  <span className="absolute inline-flex size-3 rounded-full bg-primary/30" />
                  <span className="relative size-1.5 rounded-full bg-primary" />
                </span>

                <div
                  className={cn(
                    'overflow-hidden rounded-xl border bg-card/50 transition-colors',
                    isOpen ? 'border-primary/40' : 'border-border/70',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : exp.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-semibold text-foreground">{exp.role}</h3>
                        <span className="font-mono text-xs text-primary">
                          @ {exp.company}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-3" /> {exp.location}
                        </span>
                        <span className="text-secondary">{exp.period}</span>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        'size-4 shrink-0 text-muted-foreground transition-transform',
                        isOpen && 'rotate-180 text-primary',
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      'grid transition-all duration-300',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <ul className="space-y-2 border-t border-border/60 px-5 py-4">
                        {exp.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-1 font-mono text-xs text-primary/70">
                              {'>'}
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
