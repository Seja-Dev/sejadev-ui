import { ReactNode } from 'react'

interface IH6 {
  children: ReactNode
  className?: string
  skeleton?: boolean
}

export function H6({ children, className, skeleton }: IH6) {
  if (skeleton) return <div className={`skeleton ${className}`} />

  return <h6 className={`font-bold text-sm ${className}`}>{children}</h6>
}
