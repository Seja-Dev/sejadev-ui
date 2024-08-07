export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost'

export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg'

interface BadgeProps {
  size?: BadgeSize
  variant?: BadgeVariant
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
  children?: React.ReactNode
}

export function Badge({
  size = 'md',
  variant = 'primary',
  children,
  className,
  skeleton,
  skeletonClassName
}: BadgeProps) {
  if (skeleton) return <div className={`skeleton w-20 h-6 ${skeletonClassName}`}></div>

  const colorVariants = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    neutral: 'badge-neutral',
    ghost: 'badge-ghost'
  }

  const sizeVariants = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg'
  }

  return (
    <div className={`badge ${sizeVariants[size]} ${colorVariants[variant]} ${className}`}>
      {children}
    </div>
  )
}
