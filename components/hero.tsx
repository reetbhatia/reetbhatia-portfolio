'use client'

import { ArrowRight, FileText, Folder } from 'lucide-react'
import { profile } from '@/lib/data'
import { useTypewriter } from '@/hooks/use-typewriter'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

function TerminalBar() {
  return (
    <div className="flex items-center gap-2 border-b border-border/70 bg-surface/60 px-4 py-2.5">
      <span className="size-2.5 rounded-full bg-destructive/80" />
      <span className="size-2.5 rounded-full bg-warn/80" />
      <span className="size-2.5 rounded-full bg-primary/80" />
      <span className="ml-2 font-mono text-xs text-muted-foreground">
        ~/{profile.handle}/security
      </span>
      <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
        bash — 80×24
      </span>
    </div>
  )
}
function SecurityRobot() {
  return (
    <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-xl border border-border/80 bg-card/50 p-5 backdrop-blur-sm">
      <div className="flex flex-1 flex-col items-center justify-center">

        {/* Robot */}
        <div className="relative h-44 w-36">

          {/* antenna */}
          <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-primary/70" />

          <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))] animate-pulse" />

          {/* head */}
          <div className="absolute left-1/2 top-7 h-24 w-32 -translate-x-1/2 rounded-2xl border-2 border-primary/70 bg-background shadow-[0_0_25px_hsl(var(--primary)/0.12)]">

            {/* eyes */}
            <div className="absolute left-0 right-0 top-7 flex justify-center gap-8">
            <span className="robot-eye robot-eye-left size-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
            <span className="robot-eye robot-eye-right size-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
    </div>

            {/* mouth */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-primary">
              _
            </div>
          </div>

          {/* neck */}
          <div className="absolute left-1/2 top-[124px] h-4 w-8 -translate-x-1/2 border-x border-primary/50" />

          {/* body */}
          <div className="absolute left-1/2 top-[138px] h-16 w-24 -translate-x-1/2 rounded-xl border-2 border-primary/60 bg-background">
            <div className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))] animate-pulse" />
          </div>

        </div>

        {/* Welcome message */}
        <div className="mt-4 w-full rounded-lg border border-border/60 bg-background/40 p-3">
          <p className="font-mono text-[10px] text-secondary">
            reet@security:~$ <span className="cursor-blink">_</span>
          </p>

          <p className="mt-2 font-mono text-[10px] text-muted-foreground">
            <span className="text-primary">&gt;</span>{' '}
            hey :) welcome to my corner of the internet
          </p>
        </div>

      </div>
    </div>
  )
}


export function Hero() {
  const { output, done } = useTypewriter('whoami', 70, 350)

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60 pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      {/* grid + scan ambiance */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 scanlines" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Terminal card */}
        <div className="animate-fade-up overflow-hidden rounded-xl border border-border/80 bg-card/70 backdrop-blur-sm glow-neon">
          <TerminalBar />
          <div className="scan-beam relative p-5 font-mono text-sm sm:p-7">
            <p className="text-muted-foreground">
              <span className="text-primary">reet@security</span>
              <span className="text-foreground">:</span>
              <span className="text-secondary">~</span>
              <span className="text-foreground">$ </span>
              <span className="text-foreground">{output}</span>
              {!done && <span className="cursor-blink" />}
            </p>

            <div className="mt-6 space-y-1">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground text-glow-neon sm:text-5xl">
                {profile.name.toUpperCase()}
              </h1>
              <p className="pt-2 font-sans text-base font-medium text-primary sm:text-lg">
                {profile.role.toUpperCase()}
              </p>
              <p className="font-sans text-sm text-secondary">{profile.focusLine}</p>
            </div>

            <div className="mt-6 space-y-1 text-muted-foreground">
              {profile.intro.map((line, i) => (
                <p key={i} className="leading-relaxed">
                  <span className="mr-2 select-none text-primary/70">{'>'}</span>
                  {line}
                </p>
              ))}
            </div>

            {/* actions */}
            <div className="mt-8 flex flex-wrap gap-3 font-sans">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                <Folder className="size-4" />
                VIEW PROJECTS
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.links.resume}
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-secondary/60 hover:text-secondary"
              >
                <FileText className="size-4" />
                RESUME
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-secondary/60 hover:text-secondary"
              >
                <LinkedinIcon className="size-4" />
                LINKEDIN
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <GithubIcon className="size-4" />
                GITHUB
              </a>
            </div>
          </div>
        </div>

         <SecurityRobot />

        
      </div>
    </section>
  )
}
