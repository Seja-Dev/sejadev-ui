interface IButton {
  label: string
  fullWidth?: boolean
  onClick?: () => void
  loading?: boolean
  className?: string
  skeleton?: boolean
  disabled?: boolean
  sizes?: 'btn-xs' | 'btn-sm' | 'btn-md' | 'btn-lg'
}

export const Button: React.FC<IButton & React.HTMLProps<HTMLButtonElement>> = ({
  label,
  onClick,
  loading,
  className,
  fullWidth,
  disabled,
  skeleton,
  sizes
}: IButton) => {

  if (skeleton) {
    return <div className={`skeleton ${fullWidth && 'w-full'} ${className}`} />
  }

  return (
    <button
      className={`btn btn-primary ${fullWidth && 'w-full'} ${loading && 'loading'} uppercase ${className} ${sizes}`}
      type="button"
      disabled={disabled || loading}
      onClick={onClick}>
      {label}
    </button>
  )
}
