import { ReactNode } from 'react'

/**
 * Primary H4 component for subtitles
 */

interface IH4 {
  children: ReactNode
  className?: string
}

export function H4({ children, className }: IH4) {
  return <h4 className={`font-bold text-xl ${className}`}>{children}</h4>
}
