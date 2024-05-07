interface BadgeProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost'
  className?: string
  skeleton?: boolean
  sekeletonClassName?: string
  children?: React.ReactNode
}

export function Badge({
  size = 'md',
  variant = 'primary',
  children,
  className,
  skeleton,
  sekeletonClassName
}: BadgeProps) {
  if (skeleton) return <div className={`skeleton w-20 h-6 ${sekeletonClassName}`}></div>

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
