import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  component: Input
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    name: 'Nome',
    label: 'Nome Completo'
  }
}

export const Error: Story = {
  args: {
    name: 'Nome',
    label: 'Nome Completo',
    error: true
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'w-1/6 h-12 rounded-md'
  }
}