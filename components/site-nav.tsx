'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm tracking-wide"
        >
          <Terminal className="size-4 text-primary" aria-hidden="true" />
          <span className="text-foreground">reet</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-primary text-glow-neon">security</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'relative rounded-md px-3 py-2 font-mono text-xs tracking-widest transition-colors',
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-3 top-1 text-primary/70"
                    >
                      ▸
                    </span>
                  )}
                  <span className={cn(isActive && 'pl-3')}>{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center gap-2 rounded-md px-2 py-3 font-mono text-sm tracking-widest',
                      isActive ? 'text-primary' : 'text-muted-foreground',
                    )}
                  >
                    <span className="text-primary/70">
                      {isActive ? '▸' : '·'}
                    </span>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
