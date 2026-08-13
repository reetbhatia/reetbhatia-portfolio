'use client'

import { Mail, FileText } from 'lucide-react'
import { profile } from '@/lib/data'
import { useTypewriter } from '@/hooks/use-typewriter'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const actions = [
  { label: 'LINKEDIN', href: profile.links.linkedin, icon: LinkedinIcon, external: true },
  { label: 'GITHUB', href: profile.links.github, icon: GithubIcon, external: true },
  { label: 'EMAIL', href: profile.links.email, icon: Mail, external: false },
  { label: 'RESUME', href: profile.links.resume, icon: FileText, external: false },
]

export function Contact() {
  const { output, done } = useTypewriter('./connect.sh', 60, 200)

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 border-t border-border/60 bg-surface/20"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <div className="overflow-hidden rounded-xl border border-border/80 bg-card/60 glow-neon">
          <div className="flex items-center gap-2 border-b border-border/70 bg-surface/60 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-destructive/80" />
            <span className="size-2.5 rounded-full bg-warn/80" />
            <span className="size-2.5 rounded-full bg-primary/80" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              session — closing
            </span>
          </div>

          <div className="p-6 font-mono sm:p-8">
            <p className="text-sm">
              <span className="text-primary">reet@security</span>
              <span className="text-foreground">:</span>
              <span className="text-secondary">~</span>
              <span className="text-foreground">$ {output}</span>
              {!done && <span className="cursor-blink" />}
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              <span className="text-primary/70">{'>'}</span> Open to cybersecurity,
              cloud security, and security operations roles. Let&apos;s connect.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {actions.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-3 rounded-lg border border-border/70 bg-background/40 px-4 py-3 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                >
                  <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  <span className="tracking-widest">{label}</span>
                  <span className="ml-auto text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    ▸
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              <span className="text-primary">reet@security</span>
              <span className="text-foreground">:</span>
              <span className="text-secondary">~</span>
              <span className="text-foreground">$ </span>
              <span className="cursor-blink" />
            </p>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 text-center font-mono text-[11px] text-muted-foreground sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="text-muted-foreground/70">
            built in a terminal · deployed on vercel
          </span>
        </footer>
      </div>
    </section>
  )
}
