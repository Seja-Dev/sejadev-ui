import { ReactNode } from 'react'

interface IH1 {
  children: ReactNode
  className?: string
  skeleton?: boolean
}

export function H1({ children, className, skeleton }: IH1) {
  if (skeleton) return <div className={`skeleton ${className}`} />

  return <h1 className={`font-bold text-4xl ${className}`}>{children}</h1>
}
