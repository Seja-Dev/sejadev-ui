import type { Meta, StoryObj } from '@storybook/react'

import { H4 } from './H4'

const meta: Meta<typeof H4> = {
  component: H4
}
export default meta

type Story = StoryObj<typeof H4>

export const Basic: Story = {
  args: {
    children: 'Basic subtitle'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'h-8 w-1/6 rounded-full'
  }
}
