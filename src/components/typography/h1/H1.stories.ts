import type { Meta, StoryObj } from '@storybook/react'

import { H1 } from './H1'

const meta: Meta<typeof H1> = {
  component: H1
}
export default meta

type Story = StoryObj<typeof H1>

export const Basic: Story = {
  args: {
    children: 'Basic title'
  }
}

export const Primary: Story = {
  args: {
    children: 'Primary title',
    className: 'text-primary'
  }
}
