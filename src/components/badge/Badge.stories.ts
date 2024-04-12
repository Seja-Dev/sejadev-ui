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
    children: 'Basic Badge'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Badge'
  }
}

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Accent Badge'
  }
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'Neutral Badge'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Badge'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'w-24 h-8'
  }
}
