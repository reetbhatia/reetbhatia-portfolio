import { ohpvr } from '@/lib/data'

export function OhpvrFlow() {
  return (
    <div className="rounded-lg border border-border/70 bg-background/50 p-4 font-mono">
      <div className="mb-3 flex items-center justify-between border-b border-border/60 pb-2">
        <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
          reasoning_loop
        </span>
        <span className="text-[10px] text-secondary">O-H-P-V-R</span>
      </div>

      <ol className="space-y-0">
        {ohpvr.map((step, i) => (
          <li key={`${step.label}-${i}`}>
            <div className="group flex items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-primary/5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded border border-primary/40 bg-primary/10 text-xs font-bold text-primary">
                {step.key}
              </span>
              <div className="min-w-0">
                <p className="text-xs tracking-wide text-foreground">{step.label}</p>
                <p className="truncate text-[10px] text-muted-foreground">{step.note}</p>
              </div>
            </div>
            {i < ohpvr.length - 1 && (
              <div className="ml-5 flex h-4 items-center" aria-hidden="true">
                <span className="text-primary/50">↓</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
