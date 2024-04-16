import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    sizes: {
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
    children: 'Basic Badge'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'w-20 h-6'
  }
}
