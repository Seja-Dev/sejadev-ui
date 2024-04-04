import { ReactNode } from 'react'

/**
 * Primary H1 component for titles
 */

interface IH1 {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: IH1) {
  return <h1 className={`font-bold text-4xl ${className}`}>{children}</h1>
}
