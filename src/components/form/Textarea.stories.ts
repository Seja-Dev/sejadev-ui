import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  component: Textarea
}
export default meta

type Story = StoryObj<typeof Textarea>

export const Basic: Story = {
  args: {
    name: 'Name',
    label: 'Resposta',
  }
}

export const Error: Story = {
  args: {
    name: 'Name',
    label: 'Label',
    error: 'Label incorrect'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    fullWidth: true,
    className: 'h-16 rounded-md'
  }
}