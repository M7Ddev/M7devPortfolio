import { projects } from '../../data/projects'
import { useTranslation } from '../../preferences/context'
import ProjectCard from '../ui/ProjectCard'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <Section id="projects" title={t('projects')} revealChildren={false} fullPage={false}>
      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.slug} data-page-stop className="snap-start scroll-mt-6">
            {/* Each card is its own scroll stop and animates in on its own. */}
            <Reveal>
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
