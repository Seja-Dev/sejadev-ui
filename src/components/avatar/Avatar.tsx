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
      style={{ backgroundImage: `url(${src})` }}
      className={`${className} bg-cover bg-center rounded-full flex items-center justify-center bg-primary cursor-pointer`}>
      {!src && name}
    </div>
  )
}
