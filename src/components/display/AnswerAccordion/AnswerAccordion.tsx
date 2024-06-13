import { ReactNode } from 'react'
import { Avatar } from '../avatar/Avatar'
import { TextareaWithButton } from '../../form/textareaWithButton/TextareaWithButton'
import { Answer } from '../answer/Answer'
import { Accordion } from '../accordion/Accordion'

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
  fullWidth
}: IAnswerAccorion) {

  if (skeleton)
    return (<div className={`skeleton ${fullWidth && 'w-full'} h-14 rounded-md ${skeletonClassName}`}></div>)

  return (
    <div className='relative'>
      <Avatar className="absolute -left-3 -top-1 w-11 h-11" src={userProfile} />
      <Accordion transparent={transparent} disabled={disabled} title={question} textClassName="truncate" className='px-8'>
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
          <a className={`${!loading ? 'cursor-pointer hover:underline text-primary' : 'cursor-default text-common-grey20'} mb-5`} onClick={() => {
            if (!loading && onClick) {
              onClick();
            }
          }}>
            CARREGAR MAIS RESPOSTAS
          </a>
        </div>
        <TextareaWithButton onConfirm={onConfirm} onChange={onChange} value={value} />
      </Accordion>
    </div>
  )
}