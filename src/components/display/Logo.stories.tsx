import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  component: Logo
}
export default meta

type Story = StoryObj<typeof Logo>

export const Basic: Story = {
  args: {
    type: 'colored'
  }
}

export const White: Story = {
  args: {
    type: 'white'
  }
}

export const SymbolColored: Story = {
  args: {
    type: 'symbol_colored',
    className: 'w-20 h-20'
  }
}

export const SymbolWhite: Story = {
  args: {
    type: 'symbol_white',
    className: 'w-20 h-20',
    skeletonClassName: 'w-14 h-20 rounded-3xl'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true
  }
}
