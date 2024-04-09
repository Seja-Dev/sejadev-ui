import { ReactNode } from 'react'

interface IP {
  children: ReactNode
  className?: string
  skeleton?: boolean
}

export function P({ children, className, skeleton }: IP) {
  if (skeleton) return <div className={`skeleton ${className}`} />

  return <p className={`text-base ${className}`}>{children}</p>
}
