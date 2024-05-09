import { ReactNode } from 'react'

interface IH4 {
  children: ReactNode
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
}

export function H4({ children, className, skeleton, skeletonClassName }: IH4) {
  if (skeleton) return <div className={`skeleton w-48 h-8 rounded-full ${skeletonClassName}`} />

  return <h4 className={`font-bold text-xl ${className}`}>{children}</h4>
}
