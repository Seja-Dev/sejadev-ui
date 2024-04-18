interface IButton {
  skeleton?: boolean
  fullWidth?: boolean
  className?: string
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
  loading,
  btnSize = 'md',
  disabled,
  label,
  onClick,
  variant = 'primary'
}: IButton & React.HTMLProps<HTMLButtonElement>) {
  if (skeleton) return <div className={`skeleton ${fullWidth && 'w-full'} ${className}`} />

  const btnVariant = {
    primary: 'btn-primary text-white',
    secondary: 'btn-secondary text-white',
    accent: 'btn-accent text-white',
    neutral: 'btn-neutral text-white',
    ghost: 'btn-white text-primary',
    link: 'text-primary',
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
      className={`btn ${btnVariant[variant]} ${fullWidth && 'w-full'} uppercase ${className} ${btnSizeVariant[btnSize]}`}
      type="button"
      disabled={disabled || loading}
      onClick={onClick}>
      {loading ? <span className="loading loading-spinner"></span> : label}
    </button>
  )
}
