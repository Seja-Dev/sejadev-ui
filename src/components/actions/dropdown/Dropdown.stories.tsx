import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown
}
export default meta

type Story = StoryObj<typeof Dropdown>

export const Basic: Story = {
  args: {
    label: 'Tipo',
    onChange: () => {
      console.log('onChange')
    },
    options: [
      {
        text: 'TBM',
        value: 'TBM'
      },
      {
        text: 'Provi',
        value: 'Provi'
      }
    ]
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    label: 'Tipo',
    onChange: () => {
      console.log('onChange')
    },
    options: [
      {
        text: 'TBM',
        value: 'TBM'
      },
      {
        text: 'Provi',
        value: 'Provi'
      }
    ]
  }
}
