interface IAlert {
  children?: React.ReactNode
  skeleton?: boolean
  className?: string
  text?: string
  selectAlert?: 'alert-info' | 'alert-warning' | 'alert-error' | 'alert-success'
}

export function Alert({ children, skeleton, className, text, selectAlert = 'alert-info' }: IAlert) {
  if (skeleton) return <div className={`skeleton alert ${className}`}></div>

  return (
    <div role="alert" className={`alert ${selectAlert} ${className}`}>
      {children}
      <span>{text}</span>
    </div>
  )
}
