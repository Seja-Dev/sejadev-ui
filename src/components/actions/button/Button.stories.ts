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
    label: 'Button',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Accent: Story = {
  args: {
    label: 'Button',
    variant: 'accent',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Neutral: Story = {
  args: {
    label: 'Button',
    variant: 'neutral',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Ghost: Story = {
  args: {
    label: 'Button',
    variant: 'ghost',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Link: Story = {
  args: {
    label: 'Button',
    variant: 'link',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Success: Story = {
  args: {
    label: 'Button',
    variant: 'success',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Error: Story = {
  args: {
    label: 'Button',
    variant: 'error',
    skeletonClassName: 'w-32 h-12'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled'
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
    label: 'Disabled',
    className: 'w-32 h-12'
  }
}
