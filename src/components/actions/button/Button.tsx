interface IButton {
  skeleton?: boolean
  fullWidth?: boolean
  className?: string
  skeletonClassName?: string
  loading?: boolean
  disabled?: boolean
  label?: string
  onClick?: () => void
  btnSize?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost' | 'link' | 'success' | 'error'
}

export function Button({
  skeleton,
  fullWidth,
  className,
  skeletonClassName,
  loading,
  btnSize = 'md',
  disabled,
  label,
  onClick,
  variant = 'primary'
}: IButton & React.HTMLProps<HTMLButtonElement>) {

  if (skeleton) return <div className={`skeleton ${fullWidth && 'w-full'} h-12 rounded-md ${skeletonClassName}`} />

  const btnVariant = {
    primary: 'btn-primary text-white',
    secondary: 'btn-secondary text-white',
    accent: 'btn-accent text-white',
    neutral: 'btn-neutral text-white',
    ghost: 'btn-ghost text-primary',
    link: 'btn-link text-primary',
    success: 'btn-success text-white',
    error: 'btn-error text-white'
  }

  const btnSizeVariant = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  }

  return (
    <button
      className={`btn ${fullWidth && 'w-full'} uppercase ${btnVariant[variant]} ${btnSizeVariant[btnSize]} ${className}`}
      type="button"
      disabled={disabled || loading}
      onClick={onClick}>
      {loading ? <span className="loading loading-spinner"></span> : label}
    </button>
  )
}
