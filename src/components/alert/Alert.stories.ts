import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  component: Alert,
  argTypes: {
    selectAlert: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'error', 'success']
      }
    }
  }
}
export default meta

type Story = StoryObj<typeof Alert>

export const Basic: Story = {
  args: {
    children: 'X',
    text: 'This is an alert'
  }
}

export const SelectAlert: Story = {
  args: {
    selectAlert: 'success',
    children: 'X',
    text: 'This is an alert'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'h-14'
  }
}
