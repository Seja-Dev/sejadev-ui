import { ReactNode } from 'react'

interface IH3 {
  children: ReactNode
  className?: string
  skeleton?: boolean
}

export function H3({ children, className, skeleton }: IH3) {
  if (skeleton) return <div className={`skeleton ${className}`} />

  return <h3 className={`font-bold text-2xl ${className}`}>{children}</h3>
}
