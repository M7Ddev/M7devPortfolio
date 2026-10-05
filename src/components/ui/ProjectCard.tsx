import { useState } from 'react'
import type { UiKey } from '../../i18n/ui'
import { useTranslation } from '../../preferences/context'
import type { Project, ProjectBack } from '../../types/content'
import Icon from '../icons/Icon'
import { techIcons, uiIcons, type IconShape } from '../icons/shapes'
import ButtonLink from './ButtonLink'
import ProjectCardBack from './ProjectCardBack'
import TechTag from './TechTag'

interface ProjectCardProps {
  project: Project
}

const backLabelKeys: Record<ProjectBack['type'], UiKey> = {
  figma: 'backFigma',
  site: 'backSite',
  dashboard: 'backDashboard',
  gallery: 'backGallery',
}

// Source code links show the host's logo: GitHub, Google Colab, or a generic code icon.
function sourceIcon(url: string): IconShape {
  if (url.includes('github.com')) return uiIcons.github
  if (url.includes('colab.research.google.com')) return techIcons['Google Colab']
  return uiIcons.code
}

// Both faces sit in the same grid cell, so the card is as tall as the taller face.
// The hidden face swaps visibility halfway through the flip (delay-350 of a 700ms turn),
// so embeds never show through. With "reduce motion" on, the faces fade instead.
const faceClasses =
  'col-start-1 row-start-1 flex flex-col overflow-hidden rounded-[2rem] border border-border bg-surface backface-hidden transition-[visibility,opacity] duration-0 delay-350 motion-reduce:duration-300 motion-reduce:delay-0'
const hiddenFaceClasses = 'invisible motion-reduce:opacity-0'

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, tr } = useTranslation()
  const { tech, image, repoUrl, liveUrl, back } = project
  const title = tr(project.title)
  const [flipped, setFlipped] = useState(false)
  // Embeds are heavy, so the back only loads the first time someone flips the card.
  const [backLoaded, setBackLoaded] = useState(false)

  const backLabel = back ? t('showBack', { title, back: t(backLabelKeys[back.type]) }) : ''

  const toggle = () => {
    setFlipped((value) => !value)
    setBackLoaded(true)
  }

  return (
    <article className="relative perspective-distant">
      {back && (
        <button
          type="button"
          onClick={toggle}
          aria-label={flipped ? t('showOverview', { title }) : backLabel}
          title={flipped ? t('showOverview', { title }) : backLabel}
          className="absolute end-4 top-4 z-10 rounded-full border border-border bg-background p-2 hover:bg-surface"
        >
          <Icon shape={uiIcons.flip} />
        </button>
      )}

      <div
        className={`grid transition-transform duration-700 transform-3d motion-reduce:transition-none ${
          flipped ? 'rotate-y-180 motion-reduce:rotate-y-0' : ''
        }`}
      >
        {/* Front */}
        <div inert={flipped} className={`${faceClasses} ${flipped ? hiddenFaceClasses : ''}`}>
          <div className="p-6 pe-16 sm:p-8 sm:pe-20">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-muted">
              <span className="font-semibold text-brand-text">{tr(project.category)}</span> —{' '}
              {tr(project.tagline)}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label={t('technologies')}>
              {tech.map((name) => (
                <li key={name}>
                  <TechTag name={name} />
                </li>
              ))}
            </ul>

            {(repoUrl || liveUrl) && (
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {repoUrl && (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t('sourceCodeOf', { title })} ${t('opensNewTab')}`}
                    title={t('sourceCode')}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background hover:bg-surface"
                  >
                    <Icon shape={sourceIcon(repoUrl)} />
                  </a>
                )}
                {liveUrl && (
                  <ButtonLink
                    href={liveUrl}
                    variant="secondary"
                    icon="external"
                    aria-label={`${t('liveDemoOf', { title })} ${t('opensNewTab')}`}
                    className="bg-background"
                  >
                    {t('liveDemo')}
                  </ButtonLink>
                )}
              </div>
            )}
          </div>

          {image && (
            <div className="mt-auto px-6 sm:px-8">
              <img
                src={image.src}
                alt={tr(image.alt)}
                loading="lazy"
                className="w-full rounded-t-2xl border border-b-0 border-border"
              />
            </div>
          )}
        </div>

        {/* Back */}
        {back && (
          <div
            inert={!flipped}
            className={`${faceClasses} min-h-96 rotate-y-180 motion-reduce:rotate-y-0 ${
              flipped ? '' : hiddenFaceClasses
            }`}
          >
            {backLoaded && <ProjectCardBack back={back} label={backLabel} />}
          </div>
        )}
      </div>
    </article>
  )
}
