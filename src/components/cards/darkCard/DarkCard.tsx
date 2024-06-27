import React from 'react'

export interface IDarkCard {
  children?: React.ReactNode
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
  fullWidth?: boolean
}

export const DarkCard = ({
  children,
  className,
  skeleton,
  skeletonClassName,
  fullWidth
}: IDarkCard) => {
  if (skeleton) {
    return (
      <div
        className={`skeleton rounded-md w-80 h-40 ${fullWidth && 'w-full'} ${skeletonClassName}`}
      />
    )
  }

  return (
    <div
      className={`rounded-md p-5 flex flex-col gap-2 cursor-pointer bg-common-black ${className}`}>
      {children}
    </div>
  )
}
