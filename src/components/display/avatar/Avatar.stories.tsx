import type { Meta, StoryObj } from '@storybook/react'
import { MdAddAPhoto } from 'react-icons/md'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar
}
export default meta

type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
  }
}

export const WithoutImage: Story = {
  args: {
    text: 'Aluno Teste',
    className: 'w-10 h-10 bg-primary text-xl'
  }
}

export const WithHover: Story = {
  args: {
    text: 'Aluno Teste',
    onClick: () => alert('clicked'),
    hoverClassName:
      'bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300',
    className: 'w-24 h-24 text-4xl bg-primary text-white text-sm',
    imageClassName: 'text-4xl',
    hoverIcon: <MdAddAPhoto size={24} />,
    hoverText: 'Alterar foto'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true
  }
}
