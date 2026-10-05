import { profile } from '../../data/profile'
import { useTranslation } from '../../preferences/context'
import ButtonLink from '../ui/ButtonLink'
import CvMenu from '../ui/CvMenu'
import Container from '../ui/Container'

export default function Hero() {
  const { t, tr } = useTranslation()
  const { name, heroName, role, intro, email, cvs, links } = profile
  const plainName = tr(name)
  const displayName = tr(heroName ?? name)

  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 text-center"
    >
      <Container>
        <p className="font-semibold text-brand-text">{tr(role)}</p>
        <h1 id="hero-heading" className="mt-2 text-4xl font-bold sm:text-5xl">
          {displayName === plainName ? (
            plainName
          ) : (
            <>
              {/* Screen readers get the plain name; the stretched (tatweel) version is visual only. */}
              <span aria-hidden="true">{displayName}</span>
              <span className="sr-only">{plainName}</span>
            </>
          )}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{tr(intro)}</p>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          <li>
            <CvMenu cvs={cvs} />
          </li>
          <li>
            <ButtonLink href={`mailto:${email}`} variant="secondary" icon="mail">
              {t('email')}
            </ButtonLink>
          </li>
          {links.map((link) => (
            <li key={link.href}>
              <ButtonLink href={link.href} variant="secondary" icon={link.icon}>
                {tr(link.label)}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
