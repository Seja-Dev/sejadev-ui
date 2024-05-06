import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['primary', 'secondary', 'accent', 'neutral', 'ghost'],
      control: { type: 'select' }
    }
  }
}
export default meta

type Story = StoryObj<typeof Badge>

export const Basic: Story = {
  args: {
    children: 'Basic Badge',
    sekeletonClassName: 'w-20 h-6'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    sekeletonClassName: 'w-20 h-6'
  }
}
