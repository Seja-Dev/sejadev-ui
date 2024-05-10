export type Lesson = {
  id: string
  name: string
  answers: Answer[]
  isChallenge: boolean
  chapterId: string
  description: string
}

export type Chapters = {
  title: string
  subtitle: string
  firstState: boolean
  transparent: boolean
  lessons: Lesson[]
}

type Answer = {
  id: string
  status: string
}