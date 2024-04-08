import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }
  }
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Button'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Loading'
  }
}

export const Sizes: Story = {
  argTypes: {
    sizes: {
      control: {
        type: 'select',
        options: ['btn-xs', 'btn-sm', 'btn-md', 'btn-lg']
      }
    }
  }
}

// export const Primary = Template.bind({})
// Primary.args = {
//   label: 'Button'
// }

// export const Disabled = Template.bind({})
// Disabled.args = {
//   disabled: true,
//   label: 'Disabled'
// }
