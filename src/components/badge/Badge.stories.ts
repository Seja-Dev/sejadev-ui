import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    sizes: {
      options: ['badge-xs', 'badge-sm', 'badge-md', 'badge-lg'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['badge-primary', 'badge-secondary', 'badge-accent', 'badge-neutral', 'badge-ghost'],
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
