interface BadgeProps {
  sizes?: 'badge-xs' | 'badge-sm' | 'badge-md' | 'badge-lg'
  variant?: 'badge-primary' | 'badge-secondary' | 'badge-accent' | 'badge-neutral' | 'badge-ghost'
  className?: string
  skeleton?: boolean
  children?: React.ReactNode
}

export function Badge({ sizes, variant="badge-primary", children, className, skeleton }: BadgeProps) {
  if (skeleton) return <div className={`skeleton ${className}`}></div>

  return <button className={`badge ${sizes} ${variant} ${className}`}>{children}</button>
}
