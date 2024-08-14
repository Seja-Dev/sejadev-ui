import type { Meta, StoryObj } from '@storybook/react'

import { Answer } from './Answer'

const meta: Meta<typeof Answer> = {
  component: Answer
}
export default meta

type Story = StoryObj<typeof Answer>

export const AnswerTeam: Story = {
  args: {
    name: 'IsTeam',
    avatarClassName: 'bg-primary',
    children:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    createdAt: new Date().toISOString(),
    skeletonClassName: 'w-full',
    isTeam: true
  }
}

export const AnswerTeamWithImage: Story = {
  args: {
    userProfile: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    name: 'IsTeam',
    avatarClassName: 'bg-primary',
    children:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    createdAt: new Date().toISOString(),
    skeletonClassName: 'w-full',
    isTeam: true
  }
}

export const AnswerUser: Story = {
  args: {
    name: 'student',
    avatarClassName: 'bg-primary',
    children:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    createdAt: new Date().toISOString(),
    isTeam: false
  }
}

export const AnswerUserWithImage: Story = {
  args: {
    userProfile: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    name: 'student',
    children:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    createdAt: new Date().toISOString(),
    isTeam: false
  }
}

export const Skeleton: Story = {
  args: {
    userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
    name: 'student',
    children:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    createdAt: new Date().toISOString(),
    isTeam: false,
    skeleton: true
  }
}
