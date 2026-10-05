import type { AnchorHTMLAttributes } from 'react'
import { useTranslation } from '../../preferences/context'
import Icon from '../icons/Icon'
import { uiIcons, type UiIconName } from '../icons/shapes'

type Variant = 'primary' | 'secondary' | 'text'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  icon?: UiIconName
}

const variantClasses: Record<Variant, string> = {
  primary: 'rounded-full bg-accent px-5 py-2 text-accent-foreground hover:opacity-90',
  secondary: 'rounded-full border border-border px-5 py-2 hover:bg-surface',
  text: 'underline underline-offset-4 hover:no-underline',
}

const isExternal = (href: string) => /^https?:\/\//.test(href)

// A link styled as a button, with an optional icon before the text.
// External links open in a new tab and say so to screen readers.
export default function ButtonLink({
  href,
  variant = 'primary',
  icon,
  className = '',
  children,
  ...rest
}: ButtonLinkProps) {
  const { t } = useTranslation()
  const external = isExternal(href)

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 font-medium ${variantClasses[variant]} ${className}`}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    >
      {icon && <Icon shape={uiIcons[icon]} className="size-4" />}
      {children}
      {external && <span className="sr-only"> {t('opensNewTab')}</span>}
    </a>
  )
}
