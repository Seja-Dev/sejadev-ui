import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { ConfirmationModal } from './ConfirmationModal'

const meta: Meta<typeof ConfirmationModal> = {
  component: ConfirmationModal,
  render: ({ ...args }) => {
    const [open, setOpen] = useState(false)

    const handleSubmit = () => {
      console.log('Submitted')
      setOpen(false)
    }

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <ConfirmationModal
          {...args}
          isOpen={open}
          setIsOpen={(val) => setOpen(val)}
          onCancel={() => setOpen(false)}
          onConfirm={() => handleSubmit()}
          confirmationButton="Delete"
          confirmButtonVariant="error"
          cancelButton="Cancel">
          {args.children}
        </ConfirmationModal>
      </>
    )
  }
}
export default meta

type Story = StoryObj<typeof ConfirmationModal>

export const WithComponentAsChildren: Story = {
  args: {
    children: (
      <div>
        <h1 className="text-xl font-bold">Are you sure you want to delete this item?</h1>
        <p className="text-sm text-gray-400">This action cannot be undone.</p>
      </div>
    )
  }
}

export const WithTextAsChildren: Story = {
  args: {
    children: 'Are you sure you want to delete this item?'
  }
}
