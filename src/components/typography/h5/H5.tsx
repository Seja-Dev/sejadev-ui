import { ReactNode } from 'react'

/**
 * Primary H5 component for subtitles
 */

interface IH5 {
  children: ReactNode
  className?: string
}

export function H5({ children, className }: IH5) {
  return <h5 className={`font-bold text-lg ${className}`}>{children}</h5>
}
