import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'select'
      }
    },
    size: {
      control: {
        type: 'select'
      }
    }
  }
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Accent: Story = {
  args: {
    children: 'Button',
    variant: 'accent',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Neutral: Story = {
  args: {
    children: 'Button',
    variant: 'neutral',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Success: Story = {
  args: {
    children: 'Button',
    variant: 'success',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Error: Story = {
  args: {
    children: 'Button',
    variant: 'error',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'w-32 h-12'
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Disabled',
    className: 'w-32 h-12'
  }
}

