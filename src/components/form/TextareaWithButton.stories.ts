import type { Meta, StoryObj } from '@storybook/react'

import { TextareaWithButton } from './TextareaWithButton'

const meta: Meta<typeof TextareaWithButton> = {
  component: TextareaWithButton
}
export default meta

type Story = StoryObj<typeof TextareaWithButton>

export const Basic: Story = {
  args: {
    name: 'Name',
    label: 'Resposta',
    rows: 5
  }
}

export const Disabled: Story = {
  args: {
    name: 'Name',
    label: 'Resposta',
    disabledButton: true,
    className: 'h-36'
  }
}
