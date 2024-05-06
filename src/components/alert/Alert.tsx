interface IAlert {
  children?: React.ReactNode
  skeleton?: boolean
  className?: string
  skeletonClassName?: string
  text?: string
  selectAlert: 'info' | 'warning' | 'error' | 'success'
}

export function Alert({ children, skeleton, className, skeletonClassName, text, selectAlert = 'info' }: IAlert) {
  if (skeleton) return <div className={`skeleton alert h-16 ${skeletonClassName}`}></div>

  const alertVariants = {
    info: 'alert-info text-white ',
    warning: 'alert-warning text-white',
    error: 'alert-error text-white',
    success: 'alert-success text-white'
  }

  return (
    <div role="alert" className={`alert ${alertVariants[selectAlert]} ${className}`}>
      {children}
      <span>{text}</span>
    </div>
  )
}
