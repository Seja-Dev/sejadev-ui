import { ReactNode } from 'react'

interface IH5 {
  children: ReactNode
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
}

export function H5({ children, className, skeleton, skeletonClassName }: IH5) {
  if (skeleton) return <div className={`skeleton w-44 h-8 rounded-full ${skeletonClassName}`} />

  return <h5 className={`font-bold text-lg ${className}`}>{children}</h5>
}

