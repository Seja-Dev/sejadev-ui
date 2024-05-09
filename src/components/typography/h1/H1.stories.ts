import type { Meta, StoryObj } from '@storybook/react'

import { H1 } from './H1'

const meta: Meta<typeof H1> = {
  component: H1
}
export default meta

type Story = StoryObj<typeof H1>

export const Basic: Story = {
  args: {
    children: 'Basic title',
    skeletonClassName: 'h-8 w-28 rounded-full'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'h-12 w-1/6 rounded-full'
  }
}
