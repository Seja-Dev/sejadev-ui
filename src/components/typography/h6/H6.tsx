import { ReactNode } from 'react'

interface IH6 {
  children: ReactNode
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
}

export function H6({ children, className, skeleton, skeletonClassName }: IH6) {
  if (skeleton) return <div className={`skeleton w-40 h-8 rounded-full ${skeletonClassName}`} />

  return <h6 className={`font-bold text-sm ${className}`}>{children}</h6>
}
