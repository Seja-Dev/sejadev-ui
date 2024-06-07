import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from './Tab'

const meta: Meta<typeof Tab> = {
  component: Tab
}
export default meta

type Story = StoryObj<typeof Tab>

export const Info: Story = {
  args: {
    children: 'Informações Básicas',
  }
}
export const Plan: Story = {
  args: {
    children: 'Planos',
  }
}

export const certificate: Story = {
  args: {
    children: 'Certificados',
  }
}

export const Active: Story = {
  args: {
    children: 'Informações Básicas',
    isActive: true,
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
  }
}


