import { Lesson } from '../../types'

export interface ILessonStyle {
  status: 'default' | 'completed' | 'active' | 'pending' | 'error'
  name: string
  number: number
  skeleton?: boolean
  className?: string
  onCheckClick: () => void
  onLessonClick: () => void
}

export const LessonStyle = ({
  status,
  name,
  number,
  skeleton,
  className,
  onLessonClick,
  onCheckClick
}: ILessonStyle) => {
  if (skeleton)
    return (
      <div className="flex my-2 gap-4 items-center">
        <div className={`skeleton p-4 w-7 h-7 ${className}`}></div>
        <div className={`skeleton h-7 min-w-40 ${className}`}></div>
      </div>
    )

  const colorDict = {
    default: 'border-[#898989] text-[#898989] color-[#898989]',
    completed: 'border-[#42FF00] text-[#42FF00] color-[#42FF00]',
    active: 'border-[##386EEC] text-[##386EEC] color-[##386EEC]',
    pending: 'border-[#FFD700] text-[#FFD700] color-[#FFD700]',
    error: 'border-[#FF0000] text-[#FF0000] color-[#FF0000]'
  }

  return (
    <div className="flex items-center my-2 mx-0">
      <div
        className={`w-7 h-7 rounded-full bg-transparent flex justify-center items-center font-bold cursor-pointer border-2 ${colorDict[status]}`}
        onClick={onCheckClick}>
        {number}
      </div>
      <div
        className={`flex-1 ml-5 ${status === 'active' ? 'font-bold' : ''} cursor-pointer ${status === 'completed' ? 'line-through' : ''} ${colorDict[status]}`}
        onClick={onLessonClick}>
        {name}
      </div>
    </div>
  )
}

interface ILesson {
  lessons: Lesson[]
  module?: string
  activeLessonId?: string
  onLessonClick: (id: string) => void
  onCheckClick: (id: string) => void
}

export function LessonList({
  lessons,
  module,
  activeLessonId = '',
  onLessonClick,
  onCheckClick
}: ILesson) {
  return (
    <div>
      {lessons.map(({ name, id, answers, isChallenge }, key) => (
        <LessonStyle
          key={`lesson-${module}-${key}`}
          status={id === activeLessonId ? 'active' : answers ? 'completed' : 'default'}
          name={isChallenge ? `[DESAFIO] ${name}` : name}
          number={key + 1}
          onLessonClick={() => onLessonClick(id)}
          onCheckClick={() => onCheckClick(id)}
        />
      ))}
    </div>
  )
}
