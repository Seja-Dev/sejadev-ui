import type { Meta, StoryObj } from '@storybook/react'

import { CourseCard } from './CourseCard'

const meta: Meta<typeof CourseCard> = {
  component: CourseCard
}
export default meta

type Story = StoryObj<typeof CourseCard>

export const Basic: Story = {
  args: {
    title: 'A Jornada Fullstack - básico',
    badgeVariant: 'primary',
    description: ''
  }
}

export const WithTags: Story = {
  args: {
    title: 'A Jornada Fullstack - básico',
    description: '',
    level: 2,
    tags: ['React', 'Node', 'Next.js']
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'w-96 h-40'
  }
}
