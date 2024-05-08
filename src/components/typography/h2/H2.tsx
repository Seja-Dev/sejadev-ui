import { ReactNode } from 'react'

interface IH2 {
  children: ReactNode
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
}

export function H2({ children, className, skeleton, skeletonClassName }: IH2) {
  if (skeleton) return <div className={`skeleton w-60 h-12 rounded-full ${skeletonClassName}`} />

  return <h2 className={`font-bold text-3xl ${className}`}>{children}</h2>
}
