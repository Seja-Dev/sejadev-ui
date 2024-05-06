import { ReactNode } from 'react'

interface IH1 {
  children: ReactNode
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
}

export function H1({ children, className, skeleton, skeletonClassName }: IH1) {
  if (skeleton) return <div className={`skeleton w-60 h-12 rounded-full ${skeletonClassName}`} />

  return <h1 className={`font-bold text-4xl ${className}`}>{children}</h1>
}
