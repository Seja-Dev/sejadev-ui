import { ReactNode, useEffect, useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import { RiArrowDropDownLine } from 'react-icons/ri'

export interface IAccordionWithAvatar {
  firstState?: boolean
  userProfile?: string
  name?: string
  question?: ReactNode
  disabled?: boolean
  children?: ReactNode
  transparent?: boolean
  skeleton?: boolean
  className?: string
  skeletonClassName?: string
  onStateChange?: (open: boolean) => void
  fullWidth?: boolean
}

export function AccordionWithAvatar({
  userProfile,
  firstState = false,
  name,
  question,
  disabled,
  children,
  transparent,
  skeleton,
  skeletonClassName,
  onStateChange,
  className,
  fullWidth
}: IAccordionWithAvatar) {
  const [open, setOpen] = useState(disabled ? false : firstState)

  useEffect(() => {
    onStateChange && onStateChange(open)
  }, [open, onStateChange])

  if (skeleton)
    return (
      <div
        className={`skeleton ${fullWidth && 'w-full'} h-14 rounded-md ${skeletonClassName}`}></div>
    )

  return (
    <div className="relative">
      <Avatar className="absolute -left-3 -top-1 w-11 h-11" src={userProfile} text={name} />
      <div
        className={`${disabled ? 'bg-common-dark40' : transparent ? 'bg-transparent' : 'bg-common-dark20'} p-4 px-8 rounded-lg ${className}`}>
        <div
          onClick={() => !disabled && setOpen(!open)}
          className="flex justify-between items-center w-full cursor-pointer">
          <div className="overflow-hidden">
            <h4 className={`font-bold ${!open && 'truncate'}`}>{question}</h4>
          </div>
          <div className={`transition-transform transform ${open ? 'rotate-180' : 'rotate-0'}`}>
            <RiArrowDropDownLine size={35} />
          </div>
        </div>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            open ? 'grid-rows-[1fr] opacity-100 py-4' : 'grid-rows-[0fr] opacity-0'
          }`}>
          <div className={`overflow-hidden ${transparent ? 'bg-transparent' : 'bg-common-dark20'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
