import { useState, ReactNode } from 'react'
import { Modal } from '../modal/Modal'
import { Button } from '../button/Button'

interface IModalWithButton {
  buttonText?: string | ReactNode
  children: ReactNode
  skeleton?: boolean
  skeletonClassName?: string
  className?: string
  confirmButtonText?: string
  onConfirm?: () => void
}

export function ModalWithButton({
  buttonText,
  children,
  skeleton,
  skeletonClassName,
  className,
  confirmButtonText,
  onConfirm
}: IModalWithButton) {
  const [isOpen, setIsOpen] = useState(false)
  if (skeleton) return <div className={`skeleton w-32 h-12 rounded-lg ${skeletonClassName}`}></div>

  const handleConfirm = () => {
    onConfirm && onConfirm()
    setIsOpen(false)
  }

  return (
    <div className={`${className}`}>
      <Button fullWidth onClick={() => setIsOpen(true)}>
        {buttonText}
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
        {confirmButtonText && (
          <Button onClick={handleConfirm} fullWidth>
            {confirmButtonText}
          </Button>
        )}
      </Modal>
    </div>
  )
}
