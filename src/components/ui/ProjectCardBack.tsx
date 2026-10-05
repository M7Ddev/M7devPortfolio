import { useTranslation } from '../../preferences/context'
import type { ProjectBack } from '../../types/content'

// Turns a normal Figma share link into one that can be embedded.
const figmaEmbedUrl = (url: string) =>
  `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`

interface ProjectCardBackProps {
  back: ProjectBack
  label: string // e.g. "UniSync Figma design", used as the accessible name
}

export default function ProjectCardBack({ back, label }: ProjectCardBackProps) {
  const { tr } = useTranslation()

  if (back.type === 'gallery') {
    // Phone screenshots are tall, so they're shown at phone width instead of card width.
    const itemClasses = back.phone ? 'w-44 sm:w-52' : 'w-[85%]'
    const imageClasses = back.phone ? 'rounded-3xl' : 'rounded-2xl'

    return (
      <ul
        tabIndex={0}
        aria-label={label}
        className="flex h-full snap-x snap-mandatory items-center gap-4 overflow-x-auto p-6 pt-16"
      >
        {back.images.map((image) => (
          <li key={image.src} className={`${itemClasses} shrink-0 snap-center`}>
            {/* No lazy loading: this only mounts when the card is first flipped. */}
            <img src={image.src} alt={tr(image.alt)} className={`w-full border border-border ${imageClasses}`} />
          </li>
        ))}
      </ul>
    )
  }

  const src = back.type === 'figma' ? figmaEmbedUrl(back.url) : back.url

  return (
    <iframe
      src={src}
      title={label}
      loading="lazy"
      allowFullScreen
      className="h-full w-full border-0"
    />
  )
}
