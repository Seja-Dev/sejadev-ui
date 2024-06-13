import type { Meta, StoryObj } from '@storybook/react'
import { AnswerAccorion, IAnswerAccorion } from './AnswerAccordion'
import { Answer } from '../answer/Answer'
import { useState } from 'react'

const meta: Meta<typeof AnswerAccorion> = {
  component: AnswerAccorion
}
export default meta

type Story = StoryObj<typeof AnswerAccorion>


export const ResponseAnswer: Story = (args: IAnswerAccorion) => {
  const [answers, setAnswers] = useState(args.answers)
  const [newAnswer, setNewAnswer] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAnswers([...answers, { text: newAnswer, isTeam: true, name: 'admin', createdAt: new Date().toISOString() }])
    setNewAnswer('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNewAnswer(e.target.value)
  }

  return (
    <AnswerAccorion
      {...args}
      answers={answers}
      children={
        <Answer
          name='student'
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
          userProfile="https://cdn-icons-png.flaticon.com/512/9368/9368284.png"
          createdAt={new Date().toISOString()}
          isTeam={true}
        />
      }
      onConfirm={handleSubmit}
      onChange={handleChange}
      value={newAnswer}
    />
  )
}

ResponseAnswer.args = {
  userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
  name: 'student',
  question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  onClick: () => console.log('carregando...'),
  answers: [
    {
      isTeam: true,
      name: 'isTeam',
      createdAt: new Date().toISOString(),
      userProfile: '',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      isTeam: false,
      name: 'student',
      createdAt: new Date().toISOString(),
      userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      isTeam: false,
      name: 'student',
      createdAt: new Date().toISOString(),
      userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
  ],
}

export const Loading: Story = {
  args: {
    userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
    name: 'student',
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    loading: true,
    onClick: () => console.log('carregando...'),
    skeletonClassName: 'h-14 w-full',
  }
}

export const Disabled: Story = {
  args: {
    userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
    name: 'student',
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    disabled: true,
    skeletonClassName: 'h-14 w-full'
  }
}

export const Transparent: Story = {
  args: {
    userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
    name: 'student',
    question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    transparent: true,
    children: 'Configuração do Ambiente',
    skeletonClassName: 'h-14 w-full'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'h-14 w-full'
  }
}
