import { cn } from '@/lib/utils'

const styles: Record<string, string> = {
  'ACTIVE DEVELOPMENT': 'border-primary/50 bg-primary/10 text-primary',
  COMPLETED: 'border-secondary/50 bg-secondary/10 text-secondary',
  ARCHIVED: 'border-border bg-muted text-muted-foreground',
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest',
        styles[status] ?? styles.ARCHIVED,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  )
}
