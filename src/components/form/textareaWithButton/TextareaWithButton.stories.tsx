import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { TextareaWithButton } from './TextareaWithButton'

const meta: Meta<typeof TextareaWithButton> = {
  component: TextareaWithButton,
  render: ({ ...args }) => {
    const [text, setText] = useState('')

    return (
      <TextareaWithButton
        {...args}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabledButton={args.disabledButton || text.length === 0}
      />
    )
  }
}
export default meta

type Story = StoryObj<typeof TextareaWithButton>

export const Basic: Story = {
  args: {
    name: 'Answer',
    label: 'Resposta',
    confirmLabel: 'Enviar',
    className: 'h-36',
    onConfirm: (e) => {
      e.preventDefault()
      console.log('Submitted')
    }
  }
}

export const Loading: Story = {
  args: {
    name: 'Answer',
    label: 'Resposta',
    loading: true,
    className: 'h-36'
  }
}

export const Disabled: Story = {
  args: {
    name: 'Answer',
    label: 'Resposta',
    disabledButton: true,
    className: 'h-36'
  }
}
