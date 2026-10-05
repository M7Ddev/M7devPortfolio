import { useEffect } from 'react'

// Elements marked with this attribute are the "pages" of the full-page scroll.
export const PAGE_STOP = 'data-page-stop'

const LOCK_MS = 750 // roughly the length of a smooth scroll
const QUIET_MS = 150 // a gesture counts as finished after this long without wheel events
const LONG_PAGE = 1.15 // a page this many screens tall (or more) is stepped through, not jumped over

// Mouse wheel / trackpad: one gesture moves to the next or previous page stop.
// Content taller than the screen is paged through one screen at a time first,
// so nothing is skipped. Touch devices use native CSS scroll snapping instead
// (see index.css), and keyboard scrolling is left untouched.
export function useFullPageScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lockedUntil = 0

    const stops = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const tops = [...document.querySelectorAll<HTMLElement>(`[${PAGE_STOP}]`)].map((el) => {
        const marginTop = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
        return Math.min(max, Math.round(el.getBoundingClientRect().top + window.scrollY - marginTop))
      })
      return [...new Set([0, ...tops, max])].sort((a, b) => a - b)
    }

    const onWheel = (event: WheelEvent) => {
      // Leave zooming and sideways scrolling (e.g. screenshot galleries) alone.
      if (event.ctrlKey || event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
      if (event.deltaY === 0) return
      event.preventDefault()

      const now = performance.now()
      if (now < lockedUntil) {
        // Still the same gesture (e.g. trackpad momentum): keep it from turning another page.
        lockedUntil = Math.max(lockedUntil, now + QUIET_MS)
        return
      }

      const y = window.scrollY
      const screen = window.innerHeight
      const all = stops()
      let target: number | undefined

      if (event.deltaY > 0) {
        const next = all.find((top) => top > y + 2)
        if (next === undefined) return
        target = next - y > screen * LONG_PAGE ? y + screen * 0.85 : next // long page: step through it first
      } else {
        const previous = [...all].reverse().find((top) => top < y - 2)
        if (previous === undefined) return
        target = y - previous > screen * LONG_PAGE ? y - screen * 0.85 : previous
      }

      lockedUntil = now + LOCK_MS
      window.scrollTo({ top: target, behavior: reduceMotion.matches ? 'auto' : 'smooth' })
    }

    // Only for mouse/trackpad devices; touch devices get CSS snapping.
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches) return

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])
}
