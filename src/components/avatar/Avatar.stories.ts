import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar
}
export default meta

type Story = StoryObj<typeof Avatar>

export const Basic: Story = {
  args: {
    text: 'Aluno Teste',
    className: 'w-10 h-10 text-xl text-white'
  }
}

export const Image: Story = {
  args: {
    src: 'https://tm.ibxk.com.br/2017/06/22/22100428046161.jpg',
    className: 'w-10 h-10'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    className: 'w-10 h-10 rounded-full'
  }
}
