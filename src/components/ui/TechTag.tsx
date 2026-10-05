import Icon from '../icons/Icon'
import { techIcons } from '../icons/shapes'

interface TechTagProps {
  name: string
  showLabel?: boolean // false: logo only (name as tooltip and screen reader label)
}

// Chip for a technology. Shows its logo when one exists, otherwise its name.
export default function TechTag({ name, showLabel = false }: TechTagProps) {
  const shape = techIcons[name]
  const chip = 'inline-flex items-center gap-1.5 rounded-full border border-border bg-surface text-sm'

  if (!shape) return <span className={`${chip} px-3 py-1`}>{name}</span>

  if (showLabel) {
    return (
      <span className={`${chip} px-3 py-1`}>
        <Icon shape={shape} className="size-4" />
        {name}
      </span>
    )
  }

  return (
    <span role="img" aria-label={name} title={name} className={`${chip} p-1.5`}>
      <Icon shape={shape} className="size-5" />
    </span>
  )
}
