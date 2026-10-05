import type { IconShape } from './shapes'

interface IconProps {
  shape: IconShape
  className?: string
}

// Decorative SVG icon. The accessible name always comes from the surrounding
// button, link or label, so the icon itself is hidden from screen readers.
export default function Icon({ shape, className = 'size-5' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={shape.viewBox}
      fill="currentColor"
      className={`shrink-0 ${className}`}
    >
      {shape.paths.map((d) => (
        <path key={d} d={d} fillRule={shape.evenOdd ? 'evenodd' : undefined} />
      ))}
    </svg>
  )
}
