export interface ILogo {
  type?: 'colored' | 'white' | 'symbol_colored' | 'symbol_white'
  width?: string
  height?: string
  pointer?: boolean
  className?: string
}

export function Logo({ width, height, type = 'colored', pointer, className }: ILogo) {
  const srcObj = {
    colored: '/logo/logo_colored.svg',
    white: '/logo/logo_white.svg',
    symbol_colored: '/logo/symbol_colored.svg',
    symbol_white: '/logo/symbol_white.svg'
  }
  return (
    <img
      src={srcObj[type]}
      width={width}
      height={height}
      className={`${pointer ? 'cursor-pointer' : ''} ${className}`}
    />
  )
}
