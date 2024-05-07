import type { Meta, StoryObj } from '@storybook/react'

import { H3 } from './H3'

const meta: Meta<typeof H3> = {
  component: H3
}
export default meta

type Story = StoryObj<typeof H3>

export const Basic: Story = {
  args: {
    children: 'Basic subtitle'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'h-10 w-1/6 rounded-full'
  }
}
