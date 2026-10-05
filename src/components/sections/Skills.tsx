import { skillGroups } from '../../data/skills'
import { useTranslation } from '../../preferences/context'
import Section from '../ui/Section'
import TechTag from '../ui/TechTag'

export default function Skills() {
  const { t, tr } = useTranslation()

  return (
    <Section id="tech-stack" title={t('techStack')}>
      <div className="grid gap-10 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <div key={i}>
            <h3 className="mb-4 text-lg font-semibold">{tr(group.title)}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <TechTag name={skill} showLabel />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
