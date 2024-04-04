import { ReactNode } from 'react'

/**
 * Primary H6 component for subtitles
 */

interface IH6 {
  children: ReactNode
  className?: string
}

export function H6({ children, className }: IH6) {
  return <h6 className={`font-bold text-sm ${className}`}>{children}</h6>
}
