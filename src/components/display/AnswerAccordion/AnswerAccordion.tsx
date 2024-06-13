import { useState, ReactNode } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Avatar } from '../avatar/Avatar'
import { TextareaWithButton } from '../../form/textareaWithButton/TextareaWithButton'
import { Answer } from '../answer/Answer'

export interface IAnswerAccorion {
  firstState?: boolean
  userProfile?: string
  name?: string
  loading?: boolean
  onClick?: () => void
  onConfirm: (e: React.SyntheticEvent) => void
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  answers: Answers[]
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

type Answers = {
  userProfile?: string
  name?: string
  createdAt?: string
  text: string
  isTeam?: boolean
}

export function AnswerAccorion({
  firstState = false,
  userProfile,
  question,
  onClick,
  onConfirm,
  onChange,
  loading,
  disabled,
  answers,
  value,
  transparent,
  skeleton,
  skeletonClassName,
  className,
  fullWidth
}: IAnswerAccorion) {
  const [open, setOpen] = useState(disabled ? false : firstState)

  if (skeleton)
    return ( <div className={`skeleton ${fullWidth && 'w-full'} h-14 rounded-md ${skeletonClassName}`}></div> )

  return (
    <div
      className={`${disabled ? 'bg-common-dark40' : transparent ? 'bg-transparent' : 'bg-common-dark20'} p-4 rounded-lg relative ${className}`}>
      <Avatar className="absolute -left-3 -top-1 w-11 h-11" src={userProfile} />
      <div
        onClick={() => !disabled && setOpen(!open)}
        className="flex justify-between items-center w-full cursor-pointer px-5">
        <div className='overflow-hidden'>
          <h4 className={`font-bold ${!open && 'truncate'}`}>{question}</h4>
        </div>
        <div className={`transition-transform transform ${open ? 'rotate-180' : 'rotate-0'}`}>
          <RiArrowDropDownLine size={35} />
        </div>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 py-4' : 'grid-rows-[0fr] opacity-0'
          }`}>
        <div className={`overflow-hidden ${transparent ? 'bg-transparent' : 'bg-common-dark20'} px-5`}>
          {loading && (<p className='text-bold text-2xl text-common-white py-8'>Carregando...</p>)}
          {answers && !loading &&
            answers.map((answer, index) => (
              <Answer
                key={index}
                name={answer.name}
                text={answer.text}
                userProfile={answer.userProfile}
                createdAt={answer.createdAt}
                isTeam={answer.isTeam}
              />
            ))}
          <div className='py-5'>
            <a className={`cursor-pointer hover:underline mb-5 text-primary ${loading && 'cursor-default text-gray-500'}`} onClick={() => {
              if (!loading && onClick) {
                onClick();
              }
            }}>
              CARREGAR MAIS RESPOSTAS
            </a>
          </div>
          <TextareaWithButton onConfirm={onConfirm} onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  )
}