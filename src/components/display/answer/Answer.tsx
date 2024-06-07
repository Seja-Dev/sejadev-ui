import { useState, ReactNode } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Avatar } from '../avatar/Avatar'
import { TextareaWithButton } from '../../form/textareaWithButton/TextareaWithButton'

interface IAnswer {
  firstState?: boolean
  answer?: string
  subtitle?: string
  disabled?: boolean
  children?: ReactNode
  transparent?: boolean
  skeleton?: boolean
  className?: string
  skeletonClassName?: string
  fullWidth?: boolean
}

export function Answer({
  firstState = false,
  answer,
  subtitle,
  disabled,
  children,
  transparent,
  skeleton,
  skeletonClassName,
  className,
  fullWidth
}: IAnswer) {
  const [open, setOpen] = useState(disabled ? false : firstState)

  if (skeleton)
    return (
      <div
        className={`skeleton ${fullWidth && 'w-full'} h-24 rounded-md ${skeletonClassName}`}></div>
    )

  const handleFunction = () => {} 

  return (
    <div
      className={`${disabled ? 'bg-common-dark40' : transparent ? 'bg-transparent' : 'bg-common-dark20'} relative p-4 rounded-lg ${className}`}>
        <Avatar className='absolute -left-2 -top-2' text='Nalbert de Jesus'/>
      <div
        onClick={() => !disabled && setOpen(!open)}
        className="flex justify-between items-center w-full cursor-pointer">
        <div className='overflow-hidden'>
          <h4 className="font-bold ml-8 truncate text-ellipsis">{answer}</h4>
          {/* {subtitle && <p className="text-sm">{subtitle}</p>} */}
        </div>
        <div className={`transition-transform transform ${open ? 'rotate-180' : 'rotate-0'}`}>
          <RiArrowDropDownLine size={35} />
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100 py-4' : 'grid-rows-[0fr] opacity-0'
        }`}>
        <div className={`ml-8 overflow-hidden ${transparent ? 'bg-transparent' : 'bg-common-dark20'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}