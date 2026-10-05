import { useEffect, useId, useRef, useState } from 'react'
import { useTranslation } from '../../preferences/context'
import type { Link } from '../../types/content'
import Icon from '../icons/Icon'
import { uiIcons } from '../icons/shapes'

interface CvMenuProps {
  cvs: Link[]
}

// "Download CV" button that opens a small list of CV versions to choose from.
// Closes on Escape (focus returns to the button), on an outside click, or after a choice.
export default function CvMenu({ cvs }: CvMenuProps) {
  const { t, tr } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listId = useId()

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 font-medium text-accent-foreground hover:opacity-90"
      >
        <Icon shape={uiIcons.download} className="size-4" />
        {t('downloadCv')}
        <Icon
          shape={uiIcons.chevronDown}
          className={`size-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          id={listId}
          className="absolute top-full left-1/2 z-20 mt-2 w-64 -translate-x-1/2 rounded-3xl border border-border bg-surface p-2 text-start shadow-lg"
        >
          <p className="px-4 pt-2 pb-1 text-xs font-medium text-muted">{t('chooseCv')}</p>
          <ul>
            {cvs.map((cv) => (
              <li key={cv.href}>
                <a
                  href={cv.href}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-full px-4 py-2.5 font-medium hover:bg-background"
                >
                  <Icon shape={uiIcons.download} className="size-4 text-brand-text" />
                  {tr(cv.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
