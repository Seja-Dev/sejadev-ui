import { useState, ReactNode } from 'react'

interface IAccordion {
  firstState?: boolean
  title?: string
  subtitle?: string
  disabled?: boolean
  children?: ReactNode
  transparent?: boolean
  skeleton?: boolean
  className?: string
}

export function Accordion({
  firstState = false,
  title,
  subtitle,
  disabled,
  children,
  transparent,
  skeleton,
  className
}: IAccordion) {
  const [open, setOpen] = useState(disabled ? false : firstState)

  if(skeleton) return <div className={`skeleton ${className}`}></div>

  return (
    <div className={`${transparent ? 'bg-transparent' : 'bg-[#141316]'} p-4 rounded-lg ${className}`}>
      <div
        onClick={() => !disabled && setOpen(!open)}
        className="flex justify-between items-center w-full cursor-pointer">
        <div>
          <h4 className="font-bold">{title}</h4>
          {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
        <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              open && '!rotate-180'
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              open && '!rotate-180'
            }`}
          />
        </svg>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100 py-4' : 'grid-rows-[0fr] opacity-0'
        }`}>
        <div className={`overflow-hidden ${transparent ? 'bg-transparent' : 'bg-[#141316]'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
