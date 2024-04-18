import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  component: Accordion
}
export default meta

type Story = StoryObj<typeof Accordion>

export const Basic: Story = {
  args: {
    title: 'Módulo 1 - O Início',
    subtitle: '3 aulas',
    children: 'Configuração do Ambiente',
  }
}

export const Disabled: Story = {
  args: {
    title: 'Disabled accordion',
    disabled: true
  }
}

export const Transparent: Story = {
  args: {
    title: 'Transparent accordion',
    transparent: true
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'h-16 rounded-md'
  }
}
