import { createContext, useContext } from 'react'
import { ui, type UiKey } from '../i18n/ui'
import type { Lang, Text } from '../types/content'

export type Theme = 'light' | 'dark'

export interface Preferences {
  lang: Lang
  theme: Theme
  toggleLang: () => void
  toggleTheme: () => void
}

export const PreferencesContext = createContext<Preferences | null>(null)

export function usePreferences() {
  const value = useContext(PreferencesContext)
  if (!value) throw new Error('usePreferences must be used inside <PreferencesProvider>')
  return value
}

// t('key') for interface wording, tr(text) for content from src/data.
export function useTranslation() {
  const { lang } = usePreferences()

  const t = (key: UiKey, vars: Record<string, string> = {}) =>
    ui[lang][key].replace(/\{(\w+)\}/g, (_, name: string) => vars[name] ?? '')

  const tr = (text: Text) => (typeof text === 'string' ? text : text[lang])

  return { lang, t, tr }
}
