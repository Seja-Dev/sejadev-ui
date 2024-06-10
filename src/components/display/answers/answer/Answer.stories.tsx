import type { Meta, StoryObj } from '@storybook/react'

import { Answer, IAnswer } from './Answer'
import { useState } from 'react'
import { TextareaWithButton } from '../../../form/textareaWithButton/TextareaWithButton'

const meta: Meta<typeof Answer> = {
  component: Answer
}
export default meta

type Story = StoryObj<typeof Answer>

export const AdminReponse: Story = (args: IAnswer) => {
  const [answers, setAnswers] = useState(args.answers)
  const [newAnswer, setNewAnswer] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAnswers([...answers, { answer: newAnswer }])
    setNewAnswer('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNewAnswer(e.target.value)
  }

  return (
    <Answer
      {...args}
      answers={answers}
      children={
        <TextareaWithButton
          onConfirm={handleSubmit}
          onChange={handleChange}
          value={newAnswer}
        />
      }
    />
  )
}

AdminReponse.args = {
  title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  admin: true,
  onClick: () => console.log('carregando...'),
  name: 'Admin',
  answers: [
    {
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
  ],
  skeletonClassName: 'h-24 w-full'
}

export const UserResponse: Story = (args: IAnswer) => {
  const [answers, setAnswers] = useState(args.answers)
  const [newAnswer, setNewAnswer] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAnswers([...answers, { answer: newAnswer }])
    setNewAnswer('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNewAnswer(e.target.value)
  }

  return (
    <Answer
      {...args}
      answers={answers}
      children={
        <TextareaWithButton
          onConfirm={handleSubmit}
          onChange={handleChange}
          value={newAnswer}
        />
      }
    />
  )
}

UserResponse.args = {
  title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  admin: false,
  onClick: () => console.log('carregando...'),
  name: 'Usuario 1',
  answers: [
    {
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
  ],
  skeletonClassName: 'h-24 w-full'
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'h-24 w-full'
  }
}
