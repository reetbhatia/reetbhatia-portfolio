'use client'

import { useEffect, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Modal({
  open,
  onClose,
  children,
  label,
  className,
}: {
  open: boolean
  onClose: () => void
  children: ReactNode
  label: string
  className?: string
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-background/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border/80 bg-card shadow-2xl animate-fade-up',
          className,
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 inline-flex size-8 items-center justify-center rounded-md border border-border bg-background/70 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
        >
          <X className="size-4" />
        </button>
        {children}
      </div>
    </div>
  )
}
