'use client'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  className?: string
  onClick?: () => void
}

/**
 * Tailwind Button component (no dependencies)
 * Supports: primary, secondary, ghost, and outline variants.
 */
export default function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
}: Props) {
  // shared base styles
  let base =
    'inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium transition ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 dark:focus-visible:ring-white/20 ' +
    'disabled:opacity-60 disabled:cursor-not-allowed select-none '

  // choose variant style
  let variantClass = ''
  if (variant === 'primary') {
    variantClass = 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
  } else if (variant === 'secondary') {
    variantClass =
      'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 shadow-sm'
  } else if (variant === 'ghost') {
    variantClass =
      'bg-transparent text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800'
  } else if (variant === 'outline') {
    variantClass =
      'bg-transparent border border-neutral-300 text-neutral-900 hover:bg-neutral-50 ' +
      'dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800'
  }

  const classes = `${base}${variantClass} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
