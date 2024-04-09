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
    sizes: {
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
    label: 'Button'
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
    className: 'h-12 w-1/6 rounded-lg'
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    className: 'h-12 w-1/6 rounded-lg'
  }
}
