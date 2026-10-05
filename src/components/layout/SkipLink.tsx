import { useTranslation } from '../../preferences/context'

// Hidden until focused: lets keyboard users jump past the header to the main content.
export default function SkipLink() {
  const { t } = useTranslation()

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
    >
      {t('skipToContent')}
    </a>
  )
}
