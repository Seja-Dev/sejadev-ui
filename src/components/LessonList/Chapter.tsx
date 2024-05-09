import { Accordion } from '../accordion/Accordion'
import { LessonList } from './Lesson'
import { Lesson, Chapters } from '../../types'

interface IChapter {
  lessons: Lesson[]
  chapters: Chapters[]
  module: string
  moduleId?: string
  activeLessonId?: string
  firstState: boolean
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
  fullWidth?: boolean
  onCheckClick: (id: string) => void
  handleClickLesson: (id: string) => void
}

export function Chapter({ module, chapters, activeLessonId, firstState, className, skeleton, skeletonClassName, fullWidth, onCheckClick, handleClickLesson }: IChapter) {
  if (skeleton) return <div className={`skeleton ${fullWidth && 'w-full'} h-20 rounded-md ${skeletonClassName}`}></div>

  return (
    <>
      {chapters.map((chapter, key) => (
        <Accordion
          key={`${key}-${chapter.title}`}
          title={chapter.title}
          subtitle={`${chapter.lessons.length} Aulas`}
          firstState={firstState}
          transparent={false}
          className={className}
          >
          <LessonList
            lessons={chapter.lessons}
            module={module}
            activeLessonId={activeLessonId}
            onLessonClick={handleClickLesson}
            onCheckClick={onCheckClick}
          />
        </Accordion>
      ))}
    </>
  )
}
