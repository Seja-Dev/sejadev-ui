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

export function Button({ label }: IButton) {
  return (
    <button className="btn btn-primary uppercase text-white" type="button">
      {label}
    </button>
  )
}
