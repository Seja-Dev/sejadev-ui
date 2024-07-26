import { Meta, StoryObj } from '@storybook/react';
import EditRow from './EditRow';

// export default {
//   title: 'Components/EditRow',
//   component: EditRow,
//   argTypes: {
//     mode: { control: 'radio', options: ['checkbox', 'list'] },
//     checked: { control: 'boolean' },
//     index: { control: 'number' },
//     label: { control: 'text' },
//   },
// } as Meta;

const meta: Meta<typeof EditRow> = {
  component: EditRow,
 argTypes: {
    mode: { control: 'radio', options: ['checkbox', 'list'] },
    checked: { control: 'boolean' },
    index: { control: 'number' },
    label: { control: 'text' },
  },
}
export default meta

// const meta: Meta<typeof ModalWithButton> = {
//   component: ModalWithButton
// }
// export default meta


type Story = StoryObj<typeof EditRow>


export const CheckboxMode: Story = {
  args: {
    mode: 'checkbox',
    label: 'Guia inicial',
    checked: false,
    onCheckChange: (checked: boolean) => {},
  }
}

export const ListMode: Story = {
  args: {
    mode: 'list',
    index: 1,
    label: 'Guia inicial',
  }
}

export const ListModeMultiple: Story = {
  args: {
    mode: 'list',
    label: 'Guia inicial',
  }
}

export const CheckboxModeMultiple: Story = {
  args: {
    mode: 'checkbox',
    label: 'Guia inicial',
  }
}


CheckboxModeMultiple.parameters = {
  docs: {
    description: {
      story: 'Modo checkbox com vários elementos',
    },
  },
};
