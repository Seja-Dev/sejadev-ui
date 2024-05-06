import type { Meta, StoryObj } from '@storybook/react'

import { IconCard } from './IconCard'

const meta: Meta<typeof IconCard> = {
  component: IconCard
}
export default meta

type Story = StoryObj<typeof IconCard>

export const Basic: Story = {
  args: {
    title: 'Usuários e acessos',
    children: 'Icon'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'w-[300px] h-32'
  }
}
