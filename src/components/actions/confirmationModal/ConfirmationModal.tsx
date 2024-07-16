import { ReactNode } from 'react'

import { Modal } from '../modal/Modal'
import { Button, ButtonVariant } from '../button/Button'

export interface IConfirmationModal {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  onConfirm?: () => void
  onCancel?: () => void
  confirmationButton?: string
  cancelButton?: string
  confirmButtonVariant?: ButtonVariant
  cancelButtonVariant?: ButtonVariant
  children?: ReactNode
  className?: string
}

export function ConfirmationModal({
  isOpen,
  setIsOpen,
  onConfirm,
  onCancel,
  confirmationButton = 'Confirmar',
  cancelButton = 'Cancelar',
  confirmButtonVariant = 'primary',
  cancelButtonVariant = 'ghost',
  children,
  className
}: IConfirmationModal) {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className={className}>
      {children}
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 mt-2">
        <Button onClick={onCancel} variant={cancelButtonVariant}>
          {cancelButton}
        </Button>
        <Button onClick={onConfirm} variant={confirmButtonVariant}>
          {confirmationButton}
        </Button>
      </div>
    </Modal>
  )
}
