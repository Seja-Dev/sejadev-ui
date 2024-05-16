import type { Meta, StoryObj } from '@storybook/react'

import { Player } from './Player'

const meta: Meta<typeof Player> = {
  component: Player
}
export default meta

type Story = StoryObj<typeof Player>

export const Basic: Story = {
  args: {
    url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8'
  }
}
