import type { Meta, StoryObj } from '@storybook/react'

import { ModalWithButton } from './ModalWithButton'
import { Input } from '../../form/input/Input'

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

export const ModalWithButtonText: Story = {
  args: {
    buttonText: 'Open Modal',
    btnContainerClassName: 'w-72',
    children: (
      <div className="mb-4">
        <h1 className="text-xl font-bold">Confirm</h1>
        <div className="flex flex-col gap-2">
          <Input label="Name" />
          <Input label="email" />
        </div>
      </div>
    ),
    confirmButtonText: 'Confirm',
    onConfirm: () => console.log('Submitted')
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'w-40'
  }
}
