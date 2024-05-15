import { ReactNode } from 'react'

import ReactModal from 'react-modal'

export interface IModal {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, children, className }: IModal) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] mx-auto p-0`}
      ariaHideApp={false}>
      <div className={`bg-common-dark20 p-5 min-h-24 ${className}`}>
        <div
          onClick={onClose}
          className="absolute top-3.5 right-5 text-2xl font-bold cursor-pointer">
          &times;
        </div>
        {children}
      </div>
    </ReactModal>
  )
}
