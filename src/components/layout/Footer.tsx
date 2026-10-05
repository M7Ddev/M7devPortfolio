import { profile } from '../../data/profile'
import { useTranslation } from '../../preferences/context'
import Container from '../ui/Container'

const currentYear = new Date().getFullYear()
const githubUrl = profile.links.find((link) => link.icon === 'github')?.href

export default function Footer() {
  const { t, tr } = useTranslation()

  return (
    <footer className="snap-end border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          © {currentYear} {tr(profile.name)}
        </p>
        <p>
          {t('builtBy')}{' '}
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-text hover:underline"
            >
              {profile.brand}
              <span className="sr-only"> {t('opensNewTab')}</span>
            </a>
          ) : (
            <span className="font-semibold text-brand-text">{profile.brand}</span>
          )}
        </p>
      </Container>
    </footer>
  )
}
