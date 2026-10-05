import { useEffect, useState, type ReactNode } from 'react'
import { ui } from '../i18n/ui'
import type { Lang } from '../types/content'
import { PreferencesContext, type Theme } from './context'

// The inline script in index.html sets these attributes before the first paint
// (from the saved choice, or the defaults: dark and Arabic), so we start from them.
const root = document.documentElement
const initialTheme: Theme = root.dataset.theme === 'light' ? 'light' : 'dark'
const initialLang: Lang = root.lang === 'en' ? 'en' : 'ar'

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Storage can be blocked (private mode); the choice then lasts for this visit only.
  }
}

export default function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    root.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = ui[lang].metaTitle
  }, [lang])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    save('theme', next)
  }

  const toggleLang = () => {
    const next = lang === 'ar' ? 'en' : 'ar'
    setLang(next)
    save('lang', next)
  }

  return (
    <PreferencesContext.Provider value={{ theme, lang, toggleTheme, toggleLang }}>
      {children}
    </PreferencesContext.Provider>
  )
}
