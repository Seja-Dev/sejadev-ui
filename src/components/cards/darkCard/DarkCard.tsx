import React from "react"

export interface IDarkCard {
  children?: React.ReactNode
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
}

export const DarkCard = ({ children, className, skeleton, skeletonClassName }: IDarkCard) => {
  if (skeleton) {
    return (
      <div className={`skeleton rounded-md w-80 h-40 ${skeletonClassName}`}>
        {children}
      </div>
    )
  }

  return (
    <div className={`rounded-md p-5 flex flex-col gap-2 cursor-pointer bg-common-black ${className}`}>
      {children}
    </div>
  )
}

