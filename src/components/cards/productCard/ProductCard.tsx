import React from 'react'
import { Button } from '../../actions/button/Button'

import { Badge, BadgeSize, BadgeVariant } from '../../display/badge/Badge'

export interface IProductCard {
  image?: string
  title?: string
  className?: string
  skeletonClassName?: string
  description?: string
  blockedIcon?: React.ReactNode
  buttonText?: string
  skeleton?: boolean
  buttonIcon?: React.ReactNode
  badgeSize?: BadgeSize
  badgeVariant?: BadgeVariant
  badgeClassName?: string
  onClick?: () => void
  status?: 'default' | 'blocked'
  badgeText?: string
}

export function ProductCard({
  image,
  title,
  className,
  skeletonClassName,
  description = '',
  blockedIcon,
  buttonText = '',
  skeleton,
  buttonIcon,
  badgeSize,
  badgeVariant,
  badgeClassName,
  onClick,
  status = 'default',
  badgeText = ''
}: IProductCard) {
  if (skeleton) {
    return (
      <div
        className={`flex w-[300px] h-[450px] sm:w-[350px] sm:h-[500px] flex-col gap-4 rounded-none ${skeletonClassName}`}>
        <div className="skeleton h-64 w-full"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="skeleton h-8 w-72"></div>
          <div className="skeleton h-8 w-64"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="skeleton h-12 w-full rounded-md"></div>
      </div>
    )
  }

  const containerClass = status === 'blocked' ? 'text-common-grey30' : 'text-common-white'
  const buttonClass = status === 'blocked' ? 'bg-common-grey20 text-gray-200' : ''

  return (
    <div
      className={`relative w-[300px] h-[450px] sm:w-[350px] sm:h-[500px] bg-common-dark20 ${containerClass} flex flex-col items-center ${className}`}>
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-[200px] sm:max-h-[247px] sm:h-full object-cover"
      />
      <div className="relative w-full h-1/2">
        {status === 'blocked' && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-common-white text-xl flex flex-col items-center">
              {blockedIcon} Bloqueado
            </span>
          </div>
        )}
      </div>
      <div className="flex mt-1 flex-col items-center px-2 sm:px-0 sm:gap-2 bg-common-dark20 max-w-[300px]">
        <h3 className="text-xl text-center font-bold">{title}</h3>
        <div className="text-common-white">
          {badgeText && (
            <Badge variant={badgeVariant} size={badgeSize} className={badgeClassName}>
              {badgeText}
            </Badge>
          )}
        </div>
        <p className={`text-sm text-center ${containerClass}`}>{description}</p>
        <div className="w-full">
          <Button
            onClick={onClick}
            fullWidth
            className={`mt-4 flex items-center justify-center px-4 py-2 rounded-md border-0 text-xl capitalize ${buttonClass}`}>
            {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
