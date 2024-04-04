import type { Meta, StoryObj } from '@storybook/react'

import { H6 } from './H6'

const meta: Meta<typeof H6> = {
  component: H6
}
export default meta

type Story = StoryObj<typeof H6>

export const Basic: Story = {
  args: {
    children: 'Basic subtitle'
  }
}

export const Primary: Story = {
  args: {
    children: 'Primary subtitle',
    className: 'text-primary'
  }
}
