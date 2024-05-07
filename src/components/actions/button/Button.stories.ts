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
    skeletonClassName: 'w-96 h-12'
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Disabled'
  }
}


