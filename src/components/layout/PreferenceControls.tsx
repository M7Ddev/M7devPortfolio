import Icon from '../icons/Icon'
import { uiIcons } from '../icons/shapes'
import { usePreferences, useTranslation } from '../../preferences/context'

const buttonClasses =
  'inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-sm font-medium hover:bg-surface'

// Language and light/dark switches in the header.
export default function PreferenceControls() {
  const { theme, toggleTheme, toggleLang } = usePreferences()
  const { lang, t } = useTranslation()
  const isDark = theme === 'dark'

  return (
    <div className="flex items-center gap-2">
      <button type="button" onClick={toggleLang} className={buttonClasses}>
        <Icon shape={uiIcons.translate} className="size-4" />
        {/* The label is in the language you switch to, so mark it as such. */}
        <span lang={lang === 'ar' ? 'en' : 'ar'}>
          <span className="hidden sm:inline">{t('otherLanguage')}</span>
          <span className="sm:hidden" aria-hidden="true">
            {t('otherLanguageShort')}
          </span>
          <span className="sr-only sm:hidden">{t('otherLanguage')}</span>
        </span>
      </button>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? t('switchToLight') : t('switchToDark')}
        title={isDark ? t('switchToLight') : t('switchToDark')}
        className={buttonClasses}
      >
        <Icon shape={isDark ? uiIcons.sun : uiIcons.moon} className="size-4" />
      </button>
    </div>
  )
}
