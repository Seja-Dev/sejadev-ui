import { ReactNode } from 'react'

interface IH5 {
  children: ReactNode
  className?: string
  skeleton?: boolean
}

export function H5({ children, className, skeleton }: IH5) {
  if (skeleton) return <div className={`skeleton ${className}`} />

  return <h5 className={`font-bold text-lg ${className}`}>{children}</h5>
}

