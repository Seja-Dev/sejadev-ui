import { useState, ReactNode } from 'react'
import { Modal } from '../modal/Modal'
import { Button } from '../button/Button'

interface IModalWithButton {
  buttonText?: string | ReactNode
  children: ReactNode
  skeleton?: boolean
  skeletonClassName?: string
  btnContainerClassName?: string
  className?: string
  confirmButtonText?: string
  onConfirm?: () => void
}

export function ModalWithButton({
  buttonText,
  children,
  skeleton,
  skeletonClassName,
  btnContainerClassName,
  className,
  confirmButtonText,
  onConfirm
}: IModalWithButton) {
  const [isOpen, setIsOpen] = useState(false)
  if (skeleton) return <div className={`skeleton w-32 h-12 rounded-lg ${skeletonClassName}`}></div>

  const handleCloseModal = () => {
    setIsOpen(false)
    onConfirm && onConfirm()
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{buttonText}</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className={className}>
        {children}
        {confirmButtonText && (
          <div className={`${btnContainerClassName}`}>
            <Button onClick={handleCloseModal} fullWidth>
              {confirmButtonText}
            </Button>
          </div>
        )}
      </Modal>
    </>
  )
}
