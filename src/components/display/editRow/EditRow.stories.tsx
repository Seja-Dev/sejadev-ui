import { Meta, StoryObj } from '@storybook/react'
import { MdOutlineModeEdit } from 'react-icons/md'
import EditRow from './EditRow'
import { useState } from 'react'

const meta: Meta<typeof EditRow> = {
  component: EditRow,
  render: ({ ...args }) => {
    const [checked, setChecked] = useState(args.checked)
    const [checked1, setChecked1] = useState(args.checked)
    const [checked2, setChecked2] = useState(args.checked)

    return (
      <div className="flex flex-col gap-2">
        <EditRow
          {...args}
          checked={checked}
          icon={<MdOutlineModeEdit />}
          onCheckChange={setChecked}
          onEditClick={() => alert('Edit clicked')}
        />
        <EditRow
          {...args}
          checked={checked1}
          icon={<MdOutlineModeEdit />}
          onCheckChange={setChecked1}
          onEditClick={() => alert('Edit clicked')}
        />
        <EditRow
          {...args}
          checked={checked2}
          icon={<MdOutlineModeEdit />}
          onCheckChange={setChecked2}
          onEditClick={() => alert('Edit clicked')}
        />
      </div>
    )
  },
  argTypes: {
    mode: { control: 'radio', options: ['checkbox', 'list', 'none'] },
    checked: { control: 'boolean' },
    orderedNumer: { control: 'number' },
    label: { control: 'text' }
  }
}
export default meta

type Story = StoryObj<typeof EditRow>

export const CheckboxMode: Story = {
  args: {
    mode: 'checkbox',
    label: 'Guia inicial',
    checked: false
  }
}

export const ListMode: Story = {
  args: {
    mode: 'list',
    orderedNumer: 1,
    label: 'Guia inicial'
  }
}

export const NoListStyle: Story = {
  args: {
    mode: 'none',
    orderedNumer: 1,
    label: 'Guia inicial'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true
  }
}
