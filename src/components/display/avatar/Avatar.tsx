interface IAvatar {
  src?: string
  text?: string
  className?: string
  skeletonClassName?: string
  skeleton?: boolean
}

export function Avatar({ text = '', src, className, skeleton, skeletonClassName }: IAvatar) {
  if (skeleton)
    return <div className={`skeleton w-10 h-10 rounded-full ${skeletonClassName}`}></div>

  const name = text.slice(0, 2).toUpperCase()

  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={`w-10 h-10 bg-cover bg-center text-xl text-common-white rounded-full flex items-center justify-center bg-primary cursor-pointer ${className}`}>
      {!src && name}
    </div>
  )
}
