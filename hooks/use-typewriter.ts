'use client'

import { useEffect, useState } from 'react'

/**
 * Types out `text` character by character. Purely presentational —
 * the real content should always be rendered elsewhere so the page
 * is never blocked waiting on the animation.
 */
export function useTypewriter(text: string, speed = 55, startDelay = 250) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setOutput(text)
      setDone(true)
      return
    }

    let i = 0
    let interval: ReturnType<typeof setInterval>
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setOutput(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return { output, done }
}
