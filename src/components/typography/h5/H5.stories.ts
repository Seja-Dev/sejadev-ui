import type { Meta, StoryObj } from '@storybook/react'

import { H5 } from './H5'

const meta: Meta<typeof H5> = {
  component: H5
}
export default meta

type Story = StoryObj<typeof H5>

export const Basic: Story = {
  args: {
    children: 'Basic subtitle'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'h-6 w-44 rounded-full'
  }
}
