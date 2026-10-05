import { useEffect, useState } from 'react'

// Returns the id of the section currently crossing the middle of the screen
// (or null above the first one), for highlighting the matching nav link.
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(',')

  useEffect(() => {
    const sections = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
          else if (entry.target === sections[0] && entry.boundingClientRect.top > 0) setActive(null)
        }
      },
      // A thin line across the middle of the screen: a section is active while it covers that line.
      { rootMargin: '-50% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [key])

  return active
}
