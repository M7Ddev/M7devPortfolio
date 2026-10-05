import type { ReactNode } from 'react'
import Container from './Container'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  revealChildren?: boolean // false when the children animate in one by one themselves (e.g. project cards)
  fullPage?: boolean // false for long sections whose items are their own scroll stops (e.g. projects)
}

// A page section with an anchor id and an <h2> heading that labels it.
// By default it fills the screen as one "page" of the full-page scroll, content centered.
// The heading and content fade and slide in as they scroll into view.
export default function Section({
  id,
  title,
  children,
  revealChildren = true,
  fullPage = true,
}: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      data-page-stop
      aria-labelledby={headingId}
      className={`snap-start border-t border-border py-16 sm:py-24 ${
        fullPage ? 'flex min-h-svh flex-col justify-center' : ''
      }`}
    >
      <Container>
        <Reveal>
          <h2 id={headingId} className="mb-8 text-2xl font-bold sm:text-3xl">
            {title}
          </h2>
        </Reveal>
        {revealChildren ? <Reveal>{children}</Reveal> : children}
      </Container>
    </section>
  )
}
