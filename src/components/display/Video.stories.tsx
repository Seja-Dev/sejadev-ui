import type { Meta, StoryObj } from '@storybook/react'

import { VideoJs } from './VideoJs'

const meta: Meta<typeof VideoJs> = {
  component: VideoJs
}
export default meta

type Story = StoryObj<typeof VideoJs>

export const Basic: Story = {
  args: {
    id: 'clvcrr8ve0004yclkx3piul2c'
  }
}
