export type Lesson = {
  id: string
  name: string
  answers: string
  status:  "default" | "completed" | "active" | "pending" | "error"
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
