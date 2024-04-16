interface BadgeProps {
  sizes?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost'
  className?: string
  skeleton?: boolean
  children?: React.ReactNode
}

export function Badge({ sizes, variant, children, className, skeleton }: BadgeProps) {
  if (skeleton) return <div className={`skeleton ${className}`}></div>

  return <button className={`badge badge-${sizes} bg-${variant} ${className}`}>{children}</button>
}
