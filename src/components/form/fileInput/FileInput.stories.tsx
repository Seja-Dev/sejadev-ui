import type { Meta, StoryObj } from '@storybook/react'
import { useRef, useState } from 'react'
import { FileInput } from './FileInput'

const meta: Meta<typeof FileInput> = {
  component: FileInput,
  render: ({ ...args }) => {
    const [coverFileName, setCoverFileName] = useState('Nenhum arquivo selecionado')
    const [headerFileName, setHeaderFileName] = useState('Nenhum arquivo selecionado')

    const coverFileInputRef = useRef<HTMLInputElement>(null)
    const headerFileInputRef = useRef<HTMLInputElement>(null)

    const handleButtonClick = (inputRef: React.RefObject<HTMLInputElement>) => {
      if (inputRef.current) {
        inputRef.current.click()
      }
    }

    const handleFileChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      setFileName: React.Dispatch<React.SetStateAction<string>>
    ) => {
      if (event.target.files && event.target.files.length > 0) {
        setFileName(event.target.files[0].name)
      } else {
        setFileName('Nenhum arquivo selecionado')
      }
    }

    return (
      <div className="flex flex-col gap-2 max-w-[500px]">
        <FileInput
          {...args}
          fileText="Imagem de capa"
          fileSize="Tamanho: 250x250 px"
          fileInputRef={coverFileInputRef}
          fileName={coverFileName}
          handleFileChange={(e) => handleFileChange(e, setCoverFileName)}
          handleButtonClick={() => handleButtonClick(coverFileInputRef)}
        />
        <FileInput
          fileText="Imagem Header"
          fileSize="Tamanho: 1440x300 px"
          fileInputRef={headerFileInputRef}
          fileName={headerFileName}
          handleFileChange={(e) => handleFileChange(e, setHeaderFileName)}
          handleButtonClick={() => handleButtonClick(headerFileInputRef)}
        />
      </div>
    )
  }
}
export default meta

type Story = StoryObj<typeof FileInput>

export const MultipleFiles: Story = {
  args: {
    fileText: 'Imagem de capa',
    fileSize: 'Tamanho: 250x250 px',
    fileName: 'Nenhum arquivo selecionado'
  }
}

export const Default: Story = {
  args: {
    fileName: 'Nenhum arquivo selecionado',
    handleButtonClick: () => console.log('Button clicked'),
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.files)
  },
  render: ({ ...args }) => (
    <div className="flex flex-col gap-2 max-w-[500px]">
      <FileInput {...args} />
    </div>
  )
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
    skeletonClassName: 'w-[500px]'
  },
  render: ({ ...args }) => <FileInput {...args} />
}
