import { ReactNode } from 'react'

/**
 * Primary paragraphs
 */

interface IP {
  children: ReactNode
  className?: string
}

export function P({ children, className }: IP) {
  return <p className={`text-base ${className}`}>{children}</p>
}
