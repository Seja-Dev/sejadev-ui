import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar
}
export default meta

type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
  }
}

export const WithoutImage: Story = {
  args: {
    text: 'Aluno Teste',
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
  }
}
