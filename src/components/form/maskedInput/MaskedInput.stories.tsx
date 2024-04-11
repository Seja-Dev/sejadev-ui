import type { Meta, StoryObj } from '@storybook/react'
import { IMask } from 'react-imask'

import MaskedInput from './MaskedInput'

const meta: Meta<typeof MaskedInput> = {
  component: MaskedInput
}

export default meta
type Story = StoryObj<typeof MaskedInput>

export const MaskedTel: Story = {
  args: {
    name: 'Telefone',
    mask: '(00) 00000-0000',
    placeholder: 'Telefone'
  }
}

export const maskedText: Story = {
  args: {
    name: 'Nome',
    mask: '',
    placeholder: 'Nome Completo'
  }
}

export const MaskedDate: Story = {
  args: {
    name: 'Data',
    mask: Date,
    pattern: 'd/`m/`Y',
    blocks: {
      d: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 29999,
      }
    },
    placeholder: 'Data de Expiração'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'w-1/6 h-12 rounded-md'
  }
}