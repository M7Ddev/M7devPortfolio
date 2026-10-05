import { useEffect, useRef } from 'react'
import { navLinks } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTranslation } from '../../preferences/context'

const sectionIds = navLinks.map((link) => link.href.slice(1))

// Floating tab bar for small screens. The current section gets a highlighted pill,
// and the bar scrolls sideways if the links don't fit.
export default function MobileNav() {
  const { t } = useTranslation()
  const active = useActiveSection(sectionIds)
  const listRef = useRef<HTMLUListElement>(null)

  // Keep the active pill visible inside the bar. block: 'nearest' leaves the page
  // itself alone (the bar is always on screen); this also works right-to-left.
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>('[aria-current]')
      ?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [active])

  return (
    <nav
      aria-label={t('mainNav')}
      className="fixed inset-x-4 bottom-4 z-40 rounded-full border border-border bg-surface/90 p-1.5 shadow-lg backdrop-blur md:hidden"
    >
      <ul ref={listRef} className="flex gap-1 overflow-x-auto [scrollbar-width:none]">
        {navLinks.map((link) => {
          const isActive = active === link.href.slice(1)
          return (
            <li key={link.href} className="shrink-0 grow">
              <a
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`block rounded-full px-4 py-2 text-center text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive ? 'bg-background text-foreground shadow-sm' : 'text-muted hover:text-foreground'
                }`}
              >
                {t(link.labelKey)}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
