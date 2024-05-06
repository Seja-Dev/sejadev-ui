import { useState, ReactNode } from 'react'
import { Modal } from '../modal/Modal'
import { Button } from '../actions/button/Button'

interface IModalWithButton {
  buttonText?: string | ReactNode
  children: ReactNode
  clickComponent?: ReactNode
  skeleton?: boolean
  skeletonClassName?: string
  className?: string
}

export function ModalWithButton({
  buttonText,
  children,
  clickComponent,
  skeleton,
  skeletonClassName,
  className
}: IModalWithButton) {
  const [isOpen, setIsOpen] = useState(false)
  if (skeleton) return <div className={`skeleton w-32 h-12 rounded-lg ${skeletonClassName}`}></div>
  
  return (
    <>
      {clickComponent && <div onClick={() => setIsOpen(true)}>{clickComponent}</div>}
      {!clickComponent && <Button onClick={() => setIsOpen(true)}>{buttonText}</Button>}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className={className}>
        {children}
      </Modal>
    </>
  )
}
