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
    ],
    className: "w-44",
    skeletonClassName: 'w-44'
  }
}

export const FullWidth: Story = {
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
    ],
    fullWidth: true,
    skeletonClassName: 'h-12 rounded-md'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'h-12 rounded-md'
  }
}