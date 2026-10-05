import { navLinks } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTranslation } from '../../preferences/context'
import Container from '../ui/Container'
import PreferenceControls from './PreferenceControls'

const sectionIds = navLinks.map((link) => link.href.slice(1))

// On small screens the section links move to the floating MobileNav bar instead.
export default function Header() {
  const { t } = useTranslation()
  const active = useActiveSection(sectionIds)

  return (
    <header data-page-stop className="relative snap-start border-b border-border">
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* dir="auto": the Latin brand keeps its own direction in Arabic mode */}
        <a href="#top" dir="auto" className="min-w-0 truncate text-lg font-bold">
          {profile.brand}
        </a>

        <div className="flex shrink-0 items-center gap-2 md:gap-6">
          <nav aria-label={t('mainNav')} className="hidden md:block">
            <ul className="flex gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1)
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'location' : undefined}
                      className={`block rounded-full px-4 py-1.5 font-medium transition-colors ${
                        isActive ? 'bg-surface text-foreground shadow-sm' : 'text-muted hover:text-foreground'
                      }`}
                    >
                      {t(link.labelKey)}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <PreferenceControls />
        </div>
      </Container>
    </header>
  )
}
