import type { Meta, StoryObj } from '@storybook/react'

import { ResponseDetails } from './ResponseDetails'

const meta: Meta<typeof ResponseDetails> = {
  component: ResponseDetails
}
export default meta

type Story = StoryObj<typeof ResponseDetails>

export const Basic: Story = {
  args: {
    admin: true,
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    name: 'Admin',
    date: '12/12/2021',
    skeletonClassName: 'h-24 w-full'
  },
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'h-24 w-full'
  }
}
