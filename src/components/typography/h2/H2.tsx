import { ReactNode } from 'react'

interface IH2 {
  children: ReactNode
  className?: string
  skeleton?: boolean
}

export function H2({ children, className, skeleton }: IH2) {
  if (skeleton) return <div className={`skeleton ${className}`} />

  return <h2 className={`font-bold text-3xl ${className}`}>{children}</h2>
}
