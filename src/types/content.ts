// Shapes for everything in src/data. TypeScript will flag a data file
// that is missing a required field or has a typo in a field name.

import type { UiIconName } from '../components/icons/shapes'

export type Lang = 'en' | 'ar'

// Text that can differ by language. A plain string is shown in both languages;
// use { en, ar } when the Arabic version should be different.
export type Text = string | { en: string; ar: string }

export interface Link {
  label: Text
  href: string
  icon?: UiIconName // e.g. 'github', 'linkedin'
}

export interface Profile {
  name: Text
  brand: string // short handle shown in the header and footer, e.g. 'M7dev'
  heroName?: Text // optional display version of the name for the big hero heading (e.g. with tatweel ـ)
  role: Text
  intro: Text
  email: string
  cvs: Link[] // CV versions offered by the Download CV button (files in /public/cv)
  links: Link[] // GitHub, LinkedIn, ...
  contactText: Text // short paragraph in the Contact section
}

export interface SkillGroup {
  title: Text
  skills: string[] // technology names; names in components/icons/shapes.ts get a logo
}

export interface ProjectImage {
  src: string // file in /public/images/projects, e.g. '/images/projects/unisync.png'
  alt: Text // describe what the screenshot shows
}

// What the back of a project card shows when it is flipped.
export type ProjectBack =
  | { type: 'figma'; url: string } // Figma share link (design file or prototype)
  | { type: 'site'; url: string } // live website (must allow being embedded)
  | { type: 'dashboard'; url: string } // Streamlit / Power BI / Tableau embed link
  | { type: 'gallery'; images: ProjectImage[]; phone?: boolean } // screenshots, scrolled sideways; `phone: true` for mobile app screens

export interface Project {
  slug: string // unique id
  title: Text
  category: Text // highlighted before the tagline, e.g. 'Figma Design', 'Full-Stack App'
  tagline: Text
  tech: string[] // technology names; names in components/icons/shapes.ts show as a logo
  image?: ProjectImage // screenshot on the front of the card
  repoUrl?: string
  liveUrl?: string
  back?: ProjectBack // leave out for a card that doesn't flip
}
