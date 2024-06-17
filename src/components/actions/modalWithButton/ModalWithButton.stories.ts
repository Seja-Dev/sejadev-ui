import type { Meta, StoryObj } from '@storybook/react'

import { ModalWithButton } from './ModalWithButton'

const meta: Meta<typeof ModalWithButton> = {
  component: ModalWithButton
}
export default meta

type Story = StoryObj<typeof ModalWithButton>

export const Basic: Story = {
  args: {
    buttonText: 'Open Modal',
    children: 'Modal Content'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'w-40'
  }
}
