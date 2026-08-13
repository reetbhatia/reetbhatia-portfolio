import type { ReactNode } from 'react'

export function SectionHeading({
  command,
  title,
  children,
}: {
  command: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs tracking-widest text-muted-foreground">
        <span className="text-primary">$</span> {command}
      </p>
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {children}
        </p>
      ) : null}
    </div>
  )
}
