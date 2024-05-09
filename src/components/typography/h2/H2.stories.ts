import type { Meta, StoryObj } from '@storybook/react'

import { H2 } from './H2'

const meta: Meta<typeof H2> = {
  component: H2
}
export default meta

type Story = StoryObj<typeof H2>

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
