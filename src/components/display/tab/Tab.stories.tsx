import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from './Tab'

const meta: Meta<typeof Tab> = {
  component: Tab
}
export default meta

type Story = StoryObj<typeof Tab>

export const Active: Story = {
  args: {
    tabs: [
      {
        isActive: true,
        title: 'Informações Básicas',
        onClick: () => console.log('Informações Básicas')
      },
    ]
  }
}
export const Plan: Story = {
  args: {
    tabs: [
      {
        isActive: false,
        title: 'Planos',
        onClick: () => console.log('Planos')
      },
    ]
  }
}

export const Certificate: Story = {
  args: {
    tabs: [
      {
        isActive: false,
        title: 'Certificados',
        onClick: () => console.log('Certificados')
      },
    ]
  }
}

export const Tabs: Story = {
  args: {
    tabs: [
      {
        isActive: true,
        title: 'Informações Básicas',
        onClick: () => console.log('Informações Básicas')
      },
      {
        isActive: false,
        title: 'Certificados',
        onClick: () => console.log('Certificados')
      },
      {
        isActive: false,
        title: 'Planos',
        onClick: () => console.log('Planos')
      },
    ]
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    tabs: [
      {
        isActive: true,
        title: 'Informações Básicas',
        onClick: () => console.log('Informações Básicas')
      },
      {
        isActive: false,
        title: 'Certificados',
        onClick: () => console.log('Certificados')
      },
      {
        isActive: false,
        title: 'Planos',
        onClick: () => console.log('Planos')
      },
    ]
  }
}


