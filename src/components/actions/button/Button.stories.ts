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

export const Variant: Story = {
  args: {
    label: 'Button',
    skeletonClassName: 'h-12 w-24 rounded-lg',
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
    className: 'h-12 w-28 rounded-lg'
  }
}

export const Loading: Story = {
    loading: true,
    className: 'h-12 w-28 rounded-lg'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled'
  }
}

