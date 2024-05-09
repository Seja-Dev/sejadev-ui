import type { Meta, StoryObj } from '@storybook/react'

import { P } from './P'

const meta: Meta<typeof P> = {
  component: P
}
export default meta

type Story = StoryObj<typeof P>

export const Basic: Story = {
  args: {
    children: 'Basic paragraph'
  }
}

export const Bold: Story = {
  args: {
    children: 'bold paragraph',
    className: 'font-bold'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'h-5 w-44 rounded-full'
  }
}
