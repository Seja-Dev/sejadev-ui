import type { Meta, StoryObj } from '@storybook/react'

import { DarkCard, IDarkCard } from './DarkCard'

const meta: Meta<typeof DarkCard> = {
  component: DarkCard
}
export default meta

type Story = StoryObj<typeof DarkCard>

export const DarkCardComponent: Story = (args: IDarkCard) => {
  return (
    <DarkCard {...args}>
      <p>
        <b>Transação: </b>
        7
      </p>
      <p>
        <b>Status: </b>
        Aprovado
      </p>
      <p>
        <b>Data de compra: </b>
        12/09/2021
      </p>
      <p>
        <b>Data de expiração: </b>
        12/09/2021
      </p>
    </DarkCard>
  )
}

DarkCardComponent.args = {
  children: 'This is a dark card',
  className: 'w-80 h-40'
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'w-32 h-40',
    fullWidth: true
  }
}