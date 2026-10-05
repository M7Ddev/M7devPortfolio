import { profile } from '../../data/profile'
import { useTranslation } from '../../preferences/context'
import ButtonLink from '../ui/ButtonLink'
import Section from '../ui/Section'

export default function Contact() {
  const { t, tr } = useTranslation()
  const { email, links, contactText } = profile

  return (
    <Section id="contact" title={t('contact')}>
      <p className="max-w-2xl">{tr(contactText)}</p>

      <ButtonLink href={`mailto:${email}`} icon="mail" className="mt-6">
        {email}
      </ButtonLink>

      <ul className="mt-6 flex flex-wrap gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <ButtonLink href={link.href} variant="text" icon={link.icon}>
              {tr(link.label)}
            </ButtonLink>
          </li>
        ))}
      </ul>
    </Section>
  )
}
