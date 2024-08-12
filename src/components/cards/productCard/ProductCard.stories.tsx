import { Meta, StoryObj } from '@storybook/react'
import ProductCard from './ProductCard'
import { FaUnlockAlt } from 'react-icons/fa'
import { PiSignIn } from 'react-icons/pi'
import { FaGear, FaLock } from 'react-icons/fa6'

const meta: Meta<typeof ProductCard> = {
  component: ProductCard
}
export default meta

type Story = StoryObj<typeof ProductCard>

const urlImg =
  'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export const Default: Story = {
  args: {
    image: urlImg,
    title: 'Método Crescimento Exponencial',
    description:
      'Aprenda as bases da programação e Aprenda as bases da programação e Aprenda as bases da programação Aprenda as bases da programação e Aprenda as bases da programação e Aprenda as bases da programação Aprenda as bases da programação e Aprenda as bases da programação e Aprenda as bases da programação',
    buttonIcon: <PiSignIn size={24} />,
    buttonText: 'Acessar',
    status: 'default',
    onClick: () => alert('Acessar clicado')
  }
}

export const Blocked: Story = {
  args: {
    image: urlImg,
    title: 'Exercícios de Lógica com Javascript',
    description:
      'Aprenda as bases da programação e ...Aprenda as bases da programação e ...Aprenda as bases da programação e ...',
    blockedIcon: <FaLock size={64} />,
    buttonIcon: <FaUnlockAlt size={24} />,
    buttonText: 'Desbloquear',
    status: 'blocked',
    onClick: () => alert('Desbloquear clicado')
  }
}

export const AdminCard: Story = {
  args: {
    image: urlImg,
    title: 'Método Crescimento Exponencial',
    description:
      'Aprenda as bases da programação e ...Aprenda as bases da programação e ...Aprenda as bases da programação e ...',
    buttonIcon: <FaGear size={24} />,
    buttonText: 'Administrar',
    badgeText: 'Curso publicado',
    badgeClassName: 'text-white',
    badgeSize: 'md',
    status: 'default',
    onClick: () => alert('Administrar clicado')
  }
}

export const AdminCardDraft: Story = {
  args: {
    image: urlImg,
    title: 'Método Crescimento Exponencial',
    description:
      'Aprenda as bases da programação e Aprenda as bases da programação e Aprenda as bases da programação e ',
    buttonIcon: <FaGear size={24} />,
    buttonText: 'Administrar',
    badgeText: 'Em rascunho',
    badgeClassName: 'text-white',
    badgeVariant: 'neutral',
    badgeSize: 'md',
    status: 'default',
    onClick: () => alert('Administrar clicado')
  }
}

export const CardWithoutDescription: Story = {
  args: {
    image: urlImg,
    title: 'Método',
    buttonIcon: <PiSignIn size={24} />,
    buttonText: 'Acessar',
    status: 'default',
    onClick: () => alert('Acessar clicado')
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true
  }
}
