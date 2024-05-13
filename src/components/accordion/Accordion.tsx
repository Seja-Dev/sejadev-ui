import { useState, ReactNode } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

interface IAccordion {
  firstState?: boolean
  title?: string
  subtitle?: string
  disabled?: boolean
  children?: ReactNode
  transparent?: boolean
  skeleton?: boolean
  className?: string
  skeletonClassName?: string
  fullWidth?: boolean
}

export function Accordion({
  firstState = false,
  title,
  subtitle,
  disabled,
  children,
  transparent,
  skeleton,
  skeletonClassName,
  className,
  fullWidth
}: IAccordion) {
  const [open, setOpen] = useState(disabled ? false : firstState)

  if(skeleton) return <div className={`skeleton ${className}`}></div>

  if (skeleton)
    return (
      <div
        className={`skeleton ${fullWidth && 'w-full'} h-24 rounded-md ${skeletonClassName}`}></div>
    )

  return (
    <div
      className={`${disabled ? 'bg-common-dark40' : transparent ? 'bg-transparent' : 'bg-common-dark20'} p-4 rounded-lg ${className}`}>
      <div
        onClick={() => !disabled && setOpen(!open)}
        className="flex justify-between items-center w-full cursor-pointer">
        <div>
          <h4 className="font-bold">{title}</h4>
          {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
        <div className={`transition-transform transform ${open ? 'rotate-180' : 'rotate-0'}`}>
          <RiArrowDropDownLine size={35} />
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100 py-4' : 'grid-rows-[0fr] opacity-0'
        }`}>
        <div className={`overflow-hidden ${transparent ? 'bg-transparent' : 'bg-common-dark20'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
