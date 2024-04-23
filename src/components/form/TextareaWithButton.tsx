import { ITextarea, Textarea } from './Textarea'
import { Button } from '../actions/button/Button'

interface ITextAreaWithButtons extends ITextarea {
  onConfirm: (e: React.SyntheticEvent) => void
  confirmLabel?: string
  disabledButton?: boolean
}

export function TextareaWithButton({
  onConfirm,
  value,
  confirmLabel = 'Enviar',
  disabledButton,
  ...props
}: ITextAreaWithButtons) {
  return (
    <Textarea value={value} {...props}>
      <Button disabled={disabledButton || !Boolean(value)} type="submit">
        {confirmLabel}
      </Button>
    </Textarea>
  )
}
