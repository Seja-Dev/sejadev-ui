import type { Meta, StoryObj } from '@storybook/react'

import { Chapter } from './Chapter'

const meta: Meta<typeof Chapter> = {
  component: Chapter
}
export default meta

type Story = StoryObj<typeof Chapter>

export const Basic: Story = {
  args: {
    module: 'Módulo 1',
    activeLessonId: '',
    firstState: true,
    onCheckClick: () => {},
    handleClickLesson: () => {},
    chapters: [
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
        transparent: false,
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
  }
}
