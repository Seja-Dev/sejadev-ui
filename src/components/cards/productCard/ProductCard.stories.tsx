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
  'https://relaxaeusouti.com.br/wp-content/uploads/2020/11/Curso-Programador-FullStack-JavaScript-em-8-Semanas-e%CC%81-Bom-Vale-pena.jpeg'

export const Default: Story = {
  args: {
    image: urlImg,
    title: 'Método Crescimento Exponencial',
    description:
      'Aprenda as bases da programação e ...Aprenda as bases da programação e ...Aprenda as bases da programação e ...',
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
      'Aprenda as bases da programação e ...Aprenda as bases da programação e ...Aprenda as bases da programação e ...',
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

export const Skeleton: Story = {
  args: {
    skeleton: true
  }
}
