import { ReactNode } from 'react'

/**
 * Primary H3 component for subtitles
 */

interface IH3 {
  children: ReactNode
  className?: string
}

export function H3({ children, className }: IH3) {
  return <h3 className={`font-bold text-2xl ${className}`}>{children}</h3>
}
