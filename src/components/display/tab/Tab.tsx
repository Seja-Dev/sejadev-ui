interface ITab {
  skeleton?: boolean
  fullWidth?: boolean
  isActive?: boolean
  children?: React.ReactNode
  className?: string
  skeletonClassName?: string
  onClick?: () => void
}

export function Tab({
  skeleton,
  fullWidth,
  isActive,
  children,
  className,
  skeletonClassName,
  onClick,
}: ITab & React.HTMLProps<HTMLButtonElement>) {
  if (skeleton)
    return (
      <div className={`skeleton ${fullWidth && 'w-full'} h-12 rounded-md ${skeletonClassName}`} />
    )

  return (
    <div
      className={`${fullWidth && 'w-full'} ${isActive ? 'bg-primary' : 'bg-common-dark25'} p-3 text-lg text-common-white rounded-md ${className}`}
      onClick={onClick}>
      {children}
    </div>
  )
}
