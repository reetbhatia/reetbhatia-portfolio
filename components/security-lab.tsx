'use client'

import { useState } from 'react'
import { Shield, Cloud, Wrench, Code2, BrainCircuit } from 'lucide-react'
import { skillGroups } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const icons: Record<string, typeof Shield> = {
  secops: Shield,
  cloud: Cloud,
  tools: Wrench,
  engineering: Code2,
  ai: BrainCircuit,
}

export function SecurityLab() {
  const [activeId, setActiveId] = useState(skillGroups[0].id)
  const active = skillGroups.find((g) => g.id === activeId) ?? skillGroups[0]
  const Icon = icons[active.id] ?? Shield

  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading command="./scan --capabilities" title="Security Lab">
        A live map of the tools and domains I work across. Select a module to inspect
        its stack.
      </SectionHeading>

      <div className="overflow-hidden rounded-xl border border-border/80 bg-card/50">
        <div className="grid lg:grid-cols-[260px_1fr]">
          {/* module selector */}
          <div className="border-b border-border/70 bg-surface/40 lg:border-b-0 lg:border-r">
            <ul className="flex overflow-x-auto lg:flex-col">
              {skillGroups.map((group) => {
                const GroupIcon = icons[group.id] ?? Shield
                const isActive = group.id === activeId
                return (
                  <li key={group.id} className="flex-1 lg:flex-none">
                    <button
                      type="button"
                      onClick={() => setActiveId(group.id)}
                      className={cn(
                        'flex w-full items-center gap-3 whitespace-nowrap border-b-2 px-4 py-4 text-left font-mono text-xs tracking-wide transition-colors lg:border-b-0 lg:border-l-2',
                        isActive
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-transparent text-muted-foreground hover:bg-background/40 hover:text-foreground',
                      )}
                    >
                      <GroupIcon className="size-4 shrink-0" />
                      <span>
  {group.id === 'secops'
    ? 'SECURITY'
    : group.id === 'cloud'
      ? 'CLOUD'
      : group.id === 'tools'
        ? 'TOOLS'
        : group.id === 'engineering'
          ? 'ENGINEERING'
          : 'AI'}
</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* panel */}
          <div className="scan-beam relative p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </span>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-foreground">
                    {active.title}
                  </h3>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    {active.items.length} modules loaded
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-primary">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                active
              </span>
            </div>

            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {active.items.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-3 py-2.5 transition-colors hover:border-secondary/50 hover:bg-secondary/5"
                  style={{ animation: `fade-up 0.4s ${i * 40}ms both` }}
                >
                  <span className="font-mono text-[10px] text-primary/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="truncate text-sm text-foreground transition-colors group-hover:text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
