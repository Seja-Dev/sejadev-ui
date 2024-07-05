import { ReactNode } from 'react'

import ReactModal from 'react-modal'
import { Button } from '../button/Button'

export interface IConfirmationModal {
  open: boolean
  setOpen: () => void
  onConfirm?: () => void
  onCancel?: () => void
  confirmationButton?: string
  cancelButton?: string
  confirmButtonVariant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'neutral'
    | 'ghost'
    | 'link'
    | 'success'
    | 'error'
  cancelButtonVariant?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'neutral'
    | 'ghost'
    | 'link'
    | 'success'
    | 'error'
  children?: ReactNode
  className?: string
}

export function ConfirmationModal({
  open,
  setOpen,
  onConfirm,
  onCancel,
  confirmationButton = 'Confirmar',
  cancelButton = 'Cancelar',
  confirmButtonVariant = 'primary',
  cancelButtonVariant = 'primary',
  children,
  className
}: IConfirmationModal) {
  return (
    <ReactModal
      isOpen={open}
      shouldCloseOnOverlayClick
      onRequestClose={setOpen}
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] mx-auto p-0`}
      ariaHideApp={false}>
      <div className={`bg-common-dark20 flex flex-col gap-4 p-5 min-h-24 ${className}`}>
        <div className="flex justify-between">
          <div className="flex-grow pr-2">{children}</div>
          <div onClick={setOpen} className="text-2xl font-bold cursor-pointer">
            &times;
          </div>
        </div>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
          <Button onClick={onConfirm} variant={confirmButtonVariant}>
            {confirmationButton}
          </Button>
          <Button onClick={onCancel} variant={cancelButtonVariant}>
            {cancelButton}
          </Button>
        </div>
      </div>
    </ReactModal>
  )
}
