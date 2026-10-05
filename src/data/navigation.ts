import type { UiKey } from '../i18n/ui'

// Header links. Each href must match a section id; labels come from src/i18n/ui.ts.
export const navLinks: { labelKey: UiKey; href: string }[] = [
  { labelKey: 'techStack', href: '#tech-stack' },
  { labelKey: 'projects', href: '#projects' },
  { labelKey: 'contact', href: '#contact' },
]
