import type { Meta, StoryObj } from '@storybook/react'

import { Answer } from './Answer'

const meta: Meta<typeof Answer> = {
  component: Answer
}
export default meta

type Story = StoryObj<typeof Answer>

export const Basic: Story = {
  args: {
    answer: 'Estou com dúvida, Estou com dúvida, Estou com dúvida, Estou com dúvida',
    children: 'Configuração do Ambiente',
    skeletonClassName: 'h-24 w-full'
  },
}

export const Disabled: Story = {
  args: {
    answer: 'Estou com dúvida, Estou com dúvida, Estou com dúvida, Estou com dúvida',
    disabled: true,
    skeletonClassName: 'h-16 w-full'
  }
}

export const Transparent: Story = {
  args: {
    answer: 'Estou com dúvida, Estou com dúvida, Estou com dúvida, Estou com dúvida',
    transparent: true,
    children: 'Configuração do Ambiente',
    skeletonClassName: 'h-24 w-full'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'h-24 w-full'
  }
}
