import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { ConfirmationModal } from './ConfirmationModal'
import { Button } from '../button/Button'

const meta: Meta<typeof ConfirmationModal> = {
  component: ConfirmationModal,
  render: ({ ...args }) => {
    const [open, setOpen] = useState(false)

    const handleSubmit = () => {
      console.log('Submitted')
    }

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <ConfirmationModal
          {...args}
          open={open}
          setOpen={() => setOpen(!open)}
          onCancel={() => setOpen(false)}
          onConfirm={() => handleSubmit()}
          confirmationButton="Deletar"
          cancelButton="Cancelar"
          confirmButtonVariant="error">
          {args.children}
        </ConfirmationModal>
      </>
    )
  }
}
export default meta

type Story = StoryObj<typeof ConfirmationModal>

export const WithComponenteAsChildren: Story = {
  args: {
    children: <Button fullWidth />
  }
}

export const WithTextAsChildren: Story = {
  args: {
    children: 'Are you sure you want to delete this item?'
  }
}
