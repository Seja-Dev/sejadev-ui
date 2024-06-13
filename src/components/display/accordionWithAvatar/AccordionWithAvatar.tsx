import { ReactNode } from 'react'
import { Avatar } from '../avatar/Avatar'
import { Accordion } from '../accordion/Accordion'

export interface IAccordionWithAvatar {
  firstState?: boolean
  userProfile?: string
  name?: string
  loading?: boolean
  value?: string
  question?: string
  disabled?: boolean
  children?: ReactNode
  transparent?: boolean
  skeleton?: boolean
  className?: string
  skeletonClassName?: string
  fullWidth?: boolean
}

export function AccordionWithAvatar({
  userProfile,
  question,
  loading,
  disabled,
  children,
  transparent,
  skeleton,
  skeletonClassName,
  fullWidth
}: IAccordionWithAvatar) {

  if (skeleton)
    return (<div className={`skeleton ${fullWidth && 'w-full'} h-14 rounded-md ${skeletonClassName}`}></div>)

  return (
    <div className='relative'>
      <Avatar className="absolute -left-3 -top-1 w-11 h-11" src={userProfile} />
      <Accordion transparent={transparent} disabled={disabled} title={question} textClassName="truncate" className='px-8'>
        {loading && (<p className='text-bold text-2xl text-common-white py-8'>Carregando...</p>)}
        {children}
      </Accordion>
    </div>
  )
}