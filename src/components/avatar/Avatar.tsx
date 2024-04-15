interface IAvatar {
  src?: string
  text?: string
  className?: string
  skeleton?: boolean
}

export function Avatar({ text = '', src, className, skeleton }: IAvatar) {
  if (skeleton) return <div className={`${className} skeleton`}></div>

  const name = text.slice(0, 2).toUpperCase()

  return (
    <div
      className={`${className} flex items-center justify-center rounded-full bg-primary cursor-pointer`}>
      {src && <img src={src} alt="Avatar" className={`${className} object-cover rounded-full`} />}
      {!src && name}
    </div>
  )
}
