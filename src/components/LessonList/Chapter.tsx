import { Accordion } from '../accordion/Accordion'
import { LessonList } from './Lesson'
import { Lesson } from '../../types'

interface IChapter {
  lessons: Lesson[]
  module: string
  moduleId?: string
  activeLessonId?: string
  firstState: boolean
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
  fullWidth?: boolean
  onCheckClick: (id: string) => void
}

interface Chapters {
  title: string
  subtitle: string
  firstState: boolean
  transparent: boolean
  lessons: Lesson[]
}

const chapters: Chapters[] = [
  {
    title: 'Título 1',
    subtitle: 'Subtítulo 1',
    firstState: true,
    transparent: false,
    lessons: [
      {
        id: '2',
        name: 'Aula 1 - Passando props no React',
        answers: '',
        isChallenge: false,
        chapterId: '',
        description: 'Lorem Ipsum'
      },
      {
        id: '2',
        name: 'Aula 2 - Utilizando useState no React',
        answers: '',
        isChallenge: false,
        chapterId: '',
        description: 'Lorem Ipsum'
      },
      {
        id: '2',
        name: 'Aula 3 - Utilizando useEffect no React',
        answers: '',
        isChallenge: false,
        chapterId: '',
        description: 'Lorem Ipsum'
      }
    ]
  },
  {
    title: 'Título 2',
    subtitle: 'Subtítulo 2',
    firstState: false,
    transparent: true,
    lessons: [
      {
        id: '3',
        name: 'Aula 2 - Teste',
        answers: '',
        isChallenge: true,
        chapterId: '',
        description: 'Lorem Ipsum dolor sit amet'
      },
      {
        id: '4',
        name: 'Aula 3 - Teste',
        answers: '',
        isChallenge: false,
        chapterId: '',
        description: 'Consectetur adipiscing elit'
      }
    ]
  }
]

export function Chapter({ module, activeLessonId, firstState, onCheckClick, className, skeleton, skeletonClassName, fullWidth }: IChapter) {
  if (skeleton) return <div className={`skeleton ${fullWidth && 'w-full'} h-20 rounded-md ${skeletonClassName}`}></div>

  const handleClickLesson = (id: string) => {
    console.log(id)
  }

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
