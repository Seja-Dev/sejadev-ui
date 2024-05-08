import { ITextarea, Textarea } from './Textarea'
import { Button } from '../actions/button/Button'

interface ITextAreaWithButtons extends ITextarea {
  onConfirm: (e: React.SyntheticEvent) => void
  confirmLabel?: string
  disabledButton?: boolean
  skeleton?: boolean
  skeletonClassName?: string
  fullWidth?: boolean
  className?: string
}

export function TextareaWithButton({
  onConfirm,
  value,
  confirmLabel = 'Enviar',
  disabledButton,
  skeleton,
  skeletonClassName,
  fullWidth,
  className,
  ...props
}: ITextAreaWithButtons) {
  if (skeleton) return <div className={`skeleton ${fullWidth && 'w-full'} h-36 rounded-md ${skeletonClassName}`}></div>

  return (
    <Textarea value={value} {...props} className={className}>
      <Button disabled={disabledButton || !Boolean(value)} type="submit">
        {confirmLabel}
      </Button>
    </Textarea>
  )
}
