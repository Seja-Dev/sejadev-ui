import type { Meta, StoryObj } from '@storybook/react'

import { LessonStyle } from './Lesson'

const meta: Meta<typeof LessonStyle> = {
  component: LessonStyle
}
export default meta

type Story = StoryObj<typeof LessonStyle>

export const Default: Story = {
  args: {
    status: 'default',
    name: 'Nome da aula',
    number: 1
  }
}

export const Completed: Story = {
  args: {
    status: 'completed',
    name: 'Nome da aula',
    number: 1
  }
}

export const Active: Story = {
  args: {
    status: 'active',
    name: 'Nome da aula',
    number: 1
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
  }
}