import type { Meta, StoryObj } from '@storybook/react'

import { VideoJs } from './VideoJs'

const meta: Meta<typeof VideoJs> = {
  component: VideoJs
}
export default meta

type Story = StoryObj<typeof VideoJs>

export const Basic: Story = {
  args: {
    url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
  }
}
