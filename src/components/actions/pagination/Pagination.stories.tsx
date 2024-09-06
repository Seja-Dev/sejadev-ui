import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'
import { useState } from 'react'

const meta: Meta<typeof Pagination> = {
  component: Pagination
}

export default meta

type Story = StoryObj<typeof Pagination>

export const StartPage: Story = {
  render: ({ ...args }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <div className="flex flex-col gap-2">
        <Pagination
          {...args}
          currentPage={currentPage}
          totalPages={10}
          onChange={handlePageChange}
        />
      </div>
    )
  }
}

export const MidPage: Story = {
  render: ({ ...args }) => {
    const [currentPage, setCurrentPage] = useState(5)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <div className="flex flex-col gap-2">
        <Pagination
          {...args}
          currentPage={currentPage}
          totalPages={10}
          onChange={handlePageChange}
        />
      </div>
    )
  }
}

export const LastPage: Story = {
  render: ({ ...args }) => {
    const [currentPage, setCurrentPage] = useState(10)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <div className="flex flex-col gap-2">
        <Pagination
          {...args}
          currentPage={currentPage}
          totalPages={10}
          onChange={handlePageChange}
        />
      </div>
    )
  }
}

export const OnlyOnePage: Story = {
  render: ({ ...args }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <div className="flex flex-col gap-2">
        <Pagination
          {...args}
          currentPage={currentPage}
          totalPages={1}
          onChange={handlePageChange}
        />
      </div>
    )
  }
}

export const TwoPages: Story = {
  render: ({ ...args }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <div className="flex flex-col gap-2">
        <Pagination
          {...args}
          currentPage={currentPage}
          totalPages={2}
          onChange={handlePageChange}
        />
      </div>
    )
  }
}

export const ThreePages: Story = {
  render: ({ ...args }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <div className="flex flex-col gap-2">
        <Pagination
          {...args}
          currentPage={currentPage}
          totalPages={3}
          onChange={handlePageChange}
        />
      </div>
    )
  }
}

export const FourPages: Story = {
  render: ({ ...args }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <div className="flex flex-col gap-2">
        <Pagination
          {...args}
          currentPage={currentPage}
          totalPages={4}
          onChange={handlePageChange}
        />
      </div>
    )
  }
}

export const FivePages: Story = {
  render: ({ ...args }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    return (
      <div className="flex flex-col gap-2">
        <Pagination
          {...args}
          currentPage={currentPage}
          totalPages={5}
          onChange={handlePageChange}
        />
      </div>
    )
  }
}
