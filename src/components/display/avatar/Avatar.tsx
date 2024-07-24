import { ReactNode } from 'react'

export interface IAvatar {
  src?: string
  text?: string
  className?: string
  imageClassName?: string
  onClick?: () => void
  hoverClassName?: string
  hoverIcon?: ReactNode
  hoverText?: string
  skeletonClassName?: string
  skeleton?: boolean
}

export function Avatar({
  text = '',
  src,
  className,
  imageClassName,
  onClick,
  skeleton,
  skeletonClassName,
  hoverClassName,
  hoverIcon,
  hoverText = ''
}: IAvatar) {
  if (skeleton)
    return <div className={`skeleton w-10 h-10 rounded-full ${skeletonClassName}`}></div>

  const name = text.slice(0, 2).toUpperCase()

  return (
    <div
      className={`relative w-10 h-10 rounded-full cursor-pointer overflow-hidden ${className}`}
      onClick={onClick}>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={`w-full h-full bg-cover bg-center rounded-full flex items-center justify-center ${imageClassName}`}>
        {!src && name}
      </div>
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center ${hoverClassName}`}>
        {hoverIcon}
        <span className="mt-2">{hoverText}</span>
      </div>
    </div>
  )
}
