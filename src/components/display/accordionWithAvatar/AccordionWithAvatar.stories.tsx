import type { Meta, StoryObj } from '@storybook/react'
import { AccordionWithAvatar, IAccordionWithAvatar } from './AccordionWithAvatar'
import { Answer } from '../answer/Answer'

const meta: Meta<typeof AccordionWithAvatar> = {
  component: AccordionWithAvatar
}
export default meta

type Story = StoryObj<typeof AccordionWithAvatar>

const answers = [
  {
    isTeam: true,
    name: 'isTeam',
    createdAt: new Date().toISOString(),
    userProfile: '',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
    isTeam: false,
    name: 'student',
    createdAt: new Date().toISOString(),
    userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
    isTeam: false,
    name: 'student',
    createdAt: new Date().toISOString(),
    userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  }
]

export const AccordionWithAnswers: Story = (args: IAccordionWithAvatar) => {
  return (
    <AccordionWithAvatar {...args}>
      {answers.map((answer, i) => (
        <Answer
          key={`answer-${i}`}
          name={answer.name}
          userProfile={answer.userProfile}
          createdAt={answer.createdAt}
          isTeam={answer.isTeam}>
          {answer.text}
        </Answer>
      ))}
    </AccordionWithAvatar>
  )
}

AccordionWithAnswers.args = {
  userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
  name: 'student',
  question:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  onStateChange: () => console.log('Buscando dados')
}

export const Disabled: Story = {
  args: {
    userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
    name: 'student',
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    disabled: true,
    skeletonClassName: 'h-14 w-full'
  }
}

export const WithName: Story = {
  args: {
    userProfile: '',
    name: 'student',
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    skeletonClassName: 'h-14 w-full'
  }
}

export const Transparent: Story = {
  args: {
    userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
    name: 'student',
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    transparent: true,
    children: 'Configuração do Ambiente',
    skeletonClassName: 'h-14 w-full'
  }
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'h-14 w-full'
  }
}

export const AccordionWithChildrenSkeleton: Story = (args: IAccordionWithAvatar) => {
  return (
    <AccordionWithAvatar {...args}>
      <Answer skeleton skeletonClassName="w-full" />
    </AccordionWithAvatar>
  )
}

AccordionWithChildrenSkeleton.args = {
  userProfile: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
  name: 'student',
  question:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
}
