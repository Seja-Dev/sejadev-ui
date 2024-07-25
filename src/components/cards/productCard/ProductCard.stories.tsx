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
  'https://s3-alpha-sig.figma.com/img/cd34/8892/40195cfc778cd02f32e19965a043d5fa?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NOV1CVL1sXtSUadCT0V7fOAJ89MkiaQxeK~jNU0R6Lu4FUpgOu3I7MyhiXeLt7uFsiK-ZD-HQh54nf-ijfKOIKrlskXayAvSJCaMkt5nCSFacRUxZSwPVfA4N0BnTFyrpeE1rCLTifmYXEpbfXpbPFSX1~h5uXhgecbKUO8a5iK4dFNmVyVSp72KKcw4LGoflrXSl2OwSP56bG6sy8gtg~O78KcSe4ng7Vdxt6Yvu~4WpDbqOu0~IJQ5OCyOZaluEBYhthmanc-Q8BqZEYGu2FiW8UHZpU38K5zEyKuEarLxNN0IOY3~deIJHJwS1epm2iikntyzWPC~4h3NSNCNDA__'

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

export const Editable: Story = {
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
    status: 'editable',
    onClick: () => alert('Administrar clicado')
  }
}

export const EditableDraft: Story = {
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
    status: 'editable',
    onClick: () => alert('Administrar clicado')
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true
  }
}
