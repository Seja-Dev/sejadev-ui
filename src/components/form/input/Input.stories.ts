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
    label: 'Nome Completo',
    skeletonClassName: 'w-96 h-12'
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

export const InputMaskDate: Story = {
  args: {
    name: 'Data',
    label: 'Data de Expiração',
    mask: '99/99/9999'
  }
}

export const InputMaskTel: Story = {
  args: {
    name: 'Telefone',
    label: 'Telefone',
    mask: '(99) 99999-9999'
  }
}
