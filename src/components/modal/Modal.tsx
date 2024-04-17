import { ReactNode } from 'react'

import ReactModal from 'react-modal'

export interface IModal {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  skeleton?: boolean
}

export function Modal({ isOpen, onClose, children, skeleton }: IModal) {
  if (skeleton)
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] mx-auto p-0 flex flex-col gap-4">
        <div className="w-full flex justify-between">
          <div className="skeleton h-6 w-52 rounded-md"></div>
          <div className="skeleton h-4 w-4 rounded-none"></div>
        </div>
        <div className="skeleton h-12 w-full rounded-md"></div>
        <div className="skeleton h-12 w-full rounded-md"></div>
        <div className="skeleton h-12 w-full rounded-lg"></div>
      </div>
    )

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] mx-auto p-0"
        ariaHideApp={false}>
        <div className="bg-base-100 p-5 min-h-24">
          <div
            onClick={onClose}
            className="absolute top-3.5 right-5 text-2xl font-bold cursor-pointer">
            &times;
          </div>
          {children}
        </div>
      </ReactModal>
    </>
  )
}
