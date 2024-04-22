import type { Meta, StoryObj } from '@storybook/react'

import { Chapter } from './Chapter'

const meta: Meta<typeof Chapter> = {
  component: Chapter
}
export default meta

type Story = StoryObj<typeof Chapter>

export const Basic: Story = {
  args: {

  }
}
