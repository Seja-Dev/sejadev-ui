import type { Meta, StoryObj } from '@storybook/react'

import { Answer } from './Answer'


const meta: Meta<typeof Answer> = {
  component: Answer
}
export default meta

type Story = StoryObj<typeof Answer>

export const AnswerTeam: Story = {
  args: {
    userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
    name: 'student',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    createdAt: new Date().toISOString(),
    isTeam: true,
  }
}

export const AnswerUser: Story = {
  args: {
    userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
    name: 'student',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    createdAt: new Date().toISOString(),
    isTeam: false,
  }
}
