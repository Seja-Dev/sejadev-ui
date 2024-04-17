interface BadgeProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost'
  className?: string
  skeleton?: boolean
  children?: React.ReactNode
}

export function Badge({ size="sm", variant = 'primary', children, className, skeleton }: BadgeProps) {
  if (skeleton) return <div className={`skeleton ${className}`}></div>

  const colorVariants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    accent: 'bg-accent text-white',
    neutral: 'bg-neutral text-white',
    ghost: 'bg-transparent text-neutral-500'
  }

  const sizeVariants = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg'
  }

  return <div className={`badge ${sizeVariants[size]} ${colorVariants[variant]} ${className}`}>{children}</div>
}
