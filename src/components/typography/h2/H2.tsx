import { ReactNode } from 'react'

/**
 * Primary H2 component for subtitles
 */

interface IH2 {
  children: ReactNode
  className?: string
}

export function H2({ children, className }: IH2) {
  return <h2 className={`font-bold text-3xl ${className}`}>{children}</h2>
}
