interface IButton {
  skeleton?: boolean
  fullWidth?: boolean
  className?: string
  loading?: boolean
  sizes?: 'btn-xs' | 'btn-sm' | 'btn-md' | 'btn-lg'
  disabled?: boolean
  label?: string
  onClick?: () => void
  variant?:
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-accent'
    | 'btn-neutral'
    | 'btn-ghost'
    | 'btn-link'
    | 'btn-success'
    | 'btn-error'
}

export function Button({
  skeleton,
  fullWidth,
  className,
  loading,
  sizes,
  disabled,
  label,
  onClick,
  variant = 'btn-primary'
}: IButton & React.HTMLProps<HTMLButtonElement>) {
  if (skeleton) return <div className={`skeleton ${fullWidth && 'w-full'} ${className}`} />

  return (
    <button
      className={`btn ${variant} ${fullWidth && 'w-full'} uppercase ${className} ${sizes}`}
      type="button"
      disabled={disabled || loading}
      onClick={onClick}>
      {loading ? <span className="loading loading-spinner"></span> : label}
    </button>
  )
}
