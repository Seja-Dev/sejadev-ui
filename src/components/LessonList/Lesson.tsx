import { Lesson } from '../../types'

export interface ILessonStyle {
  status: 'default' | 'completed' | 'active' | 'pending' | 'error'
  name: string
  number: number
  skeleton?: boolean
  skeletonClassName?: string
  className?: string
  onCheckClick: () => void
  onLessonClick: () => void
}

export const LessonStyle = ({
  status,
  name,
  number,
  skeleton,
  skeletonClassName,
  className,
  onLessonClick,
  onCheckClick
}: ILessonStyle) => {
  if (skeleton)
    return (
      <div className={`flex my-2 gap-4 items-center ${skeletonClassName}`}>
        <div className="skeleton p-4 w-7 h-7"></div>
        <div className="skeleton h-7 w-full"></div>
      </div>
    )

  const colorDict = {
    default: 'border-common-gray20 text-common-gray20 color-common-gray20',
    completed: 'border-validators-success text-validators-success color-validators-success',
    active: 'border-primary text-primary color-primary',
    pending: 'border-validators-warning text-validators-warning color-validators-warning',
    error: 'border-validators-error text-validators-error color-validators-error'
  }

  return (
    <div className={`flex items-center my-2 mx-0 ${className}`}>
      <div
        className={`w-7 h-7 rounded-full bg-transparent flex justify-center items-center font-bold cursor-pointer border-2 ${colorDict[status]}`}
        onClick={onCheckClick}>
        {number}
      </div>
      <div
        className={`flex-1 ml-5 ${status === 'active' ? 'font-bold ' : ''} cursor-pointer ${status === 'completed' ? 'line-through' : ''} ${colorDict[status]}`}
        onClick={onLessonClick}>
        {name}
      </div>
    </div>
  )
}

interface ILesson {
  lessons: Lesson[]
  module?: string
  onLessonClick: (id: string) => void
  onCheckClick: (id: string) => void
}

export function LessonList({
  lessons,
  module,
  onLessonClick,
  onCheckClick
}: ILesson) {
  return (
    <div>
      {lessons.map(({ name, id,  status, isChallenge }, key) => (
        <LessonStyle
          key={`lesson-${module}-${key}`}
          status={status}
          name={isChallenge ? `[DESAFIO] ${name}` : name}
          number={key + 1}
          onLessonClick={() => onLessonClick(id)}
          onCheckClick={() => onCheckClick(id)}
        />
      ))}
    </div>
  )
}
