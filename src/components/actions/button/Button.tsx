interface IButton {
  fullWidth?: boolean
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}

export const Button: React.FC<IButton & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  disabled,
  loading,
  fullWidth,
  onClick
}) => {
  return (
    <button
      className={`btn btn-primary px-5 text-white ${loading && 'loading'} ${fullWidth && 'w-full'}`}
      disabled={disabled || loading}
      onClick={onClick}>
      {children}
    </button>
  )
}
