interface BadgeProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost'
  className?: string
  skeleton?: boolean
  sekeletonClassName?: string
  children?: React.ReactNode
}

export function Badge({ sizes, variant="badge-primary", children, className, skeleton }: BadgeProps) {
  if (skeleton) return <div className={`skeleton ${className}`}></div>

  return <button className={`badge ${sizes} ${variant} ${className}`}>{children}</button>
}
