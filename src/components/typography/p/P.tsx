import { ReactNode } from 'react'

interface IP {
  children: ReactNode
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
}

export function P({ children, className, skeleton, skeletonClassName }: IP) {
  if (skeleton) return <div className={`skeleton w-40 h-6 rounded-full ${skeletonClassName}`} />

  return <p className={`text-base ${className}`}>{children}</p>
}
