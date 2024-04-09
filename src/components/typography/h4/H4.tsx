import { ReactNode } from 'react'

interface IH4 {
  children: ReactNode
  className?: string
  skeleton?: boolean
}

export function H4({ children, className, skeleton }: IH4) {
  if (skeleton) return <div className={`skeleton ${className}`} />

  return <h4 className={`font-bold text-xl ${className}`}>{children}</h4>
}
