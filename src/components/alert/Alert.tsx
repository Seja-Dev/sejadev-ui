interface IAlert {
  children?: React.ReactNode
  skeleton?: boolean
  className?: string
  text?: string
  selectAlert?: 'info' | 'warning' | 'error' | 'success'
}

export function Alert({ children, skeleton, className, text, selectAlert }: IAlert) {
  if (skeleton) return <div className={`skeleton alert ${className}`}></div>

  return (
    <div role="alert" className={`alert alert-${selectAlert} ${className}`}>
      {children}
      <span>{text}</span>
    </div>
  )
}
