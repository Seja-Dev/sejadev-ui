import { Meta, StoryObj } from '@storybook/react'
import { MdOutlineModeEdit } from 'react-icons/md'
import EditRow from './EditRow'
import { useState } from 'react'

const tasks = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
  { id: 3, name: 'Task 3' }
]

const meta: Meta<typeof EditRow> = {
  component: EditRow,
  render: ({ ...args }) => {
    const [checkedState, setCheckedState] = useState<{ [key: number]: boolean }>({})

    const handleCheckChange = (id: number, checked: boolean) => {
      setCheckedState((prevState) => ({
        ...prevState,
        [id]: checked
      }))
    }

    return (
      <>
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <EditRow
              {...args}
              key={task.id}
              children={
                <div className="mr-2">
                  <input
                    type="checkbox"
                    checked={checkedState[task.id] || false}
                    onChange={(e) => handleCheckChange(task.id, e.target.checked)}
                  />
                </div>
              }
              icon={<MdOutlineModeEdit />}
              onEditClick={() => alert('Edit clicked')}
            />
          ))}
        </div>
      </>
    )
  }
}
export default meta

type Story = StoryObj<typeof EditRow>

export const CheckboxMode: Story = {
  args: {
    label: 'Guia inicial'
  }
}

export const DefaultMode: Story = {
  args: {
    label: 'Guia inicial',
    children: null,
    icon: null,
    onEditClick: undefined
  },
  render: ({ ...args }) => (
    <EditRow {...args} icon={<MdOutlineModeEdit />} onEditClick={() => alert('Edit clicked')} />
  )
}

export const ListStyleMode: Story = {
  args: {
    label: 'Guia inicial',
    children: null,
    icon: null,
    onEditClick: undefined
  },
  render: ({ ...args }) => (
    <div className="flex flex-col gap-2">
      {tasks.map((task, index) => (
        <EditRow
          {...args}
          key={task.id}
          children={<div className="mr-2">{index + 1}.</div>}
          icon={<MdOutlineModeEdit />}
          onEditClick={() => alert('Edit clicked')}
        />
      ))}
    </div>
  )
}

export const Skeleton: Story = {
  args: {
    skeleton: true
  }
}
