import type { Meta, StoryObj } from '@storybook/react'

import { P } from './P'

const meta: Meta<typeof P> = {
  component: P
}
export default meta

type Story = StoryObj<typeof P>

export const Basic: Story = {
  args: {
    children: 'Basic paragraph'
  }
}

export const Primary: Story = {
  args: {
    children: 'Primary paragraph',
    className: 'text-primary'
  }
}

export const Bold: Story = {
  args: {
    children: 'bold paragraph',
    className: 'font-bold'
  }
}

export const WithSpan: Story = {
  render: () => (
    <P>
      Text <span className="font-bold">With</span> span
    </P>
  )
}
