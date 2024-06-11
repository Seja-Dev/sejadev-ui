import { ReactNode } from 'react'
import { Avatar } from '../../avatar/Avatar'

import { Accordion } from '../../accordion/Accordion'
import { ResponseDetails } from '../ResponseDetails/ResponseDetails'

export interface IAnswer {
  title?: string
  name?: string
  onClick?: () => void
  admin?: boolean
  answers: Answer[];
  children?: ReactNode
  skeleton?: boolean
  className?: string
  skeletonClassName?: string
  fullWidth?: boolean
}

type Answer = {
  answer: string
}

export function Answer({
  title,
  answers,
  admin,
  name,
  onClick,
  children,
  skeleton,
  skeletonClassName,
  fullWidth
}: IAnswer) {

  if (skeleton)
    return (
      <div className={`skeleton ${fullWidth && 'w-full'} h-24 rounded-md ${skeletonClassName}`}></div>
    )

  return (
    <div className='relative'>
      <Accordion className='px-8' title={title} titleClassName="truncate text-ellipsis text-common-white">
        {answers && answers.map((answer, index) => (
          <ResponseDetails key={index} admin={admin} answer={answer.answer} name={name} date='12/12/2022' />
        ))}
        <a href="#" className='text-primary' onClick={onClick}>CARREGAR MAIS RESPOSTAS</a>
        {children}
      </Accordion>
      <Avatar className='absolute -left-2 -top-2' text={name} />
    </div>
  )
}