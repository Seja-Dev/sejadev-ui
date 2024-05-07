import { ReactNode } from 'react'

interface IH3 {
  children: ReactNode
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
}

export function H3({ children, className, skeleton, skeletonClassName }: IH3) {
  if (skeleton) return <div className={`skeleton w-52 h-10 rounded-full ${skeletonClassName}`} />

  return <h3 className={`font-bold text-2xl ${className}`}>{children}</h3>
}
