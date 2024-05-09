import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal
}
export default meta

type Story = StoryObj<typeof Modal>

export const Basic: Story = {
  args: {
    isOpen: true,
    onClose: () => {
      return
    }
  }
}
