import{ useState }from 'react'
import { ITextarea, Textarea } from '../textarea/Textarea'
import { Button } from '../../actions/button/Button'

interface ITextAreaWithButtons extends ITextarea {
  onConfirm: (e: React.SyntheticEvent) => void
  loading?: boolean
  confirmLabel?: string
  disabledButton?: boolean
  skeleton?: boolean
  skeletonClassName?: string
  fullWidth?: boolean
  className?: string
}

export function TextareaWithButton({
  onConfirm,
  loading,
  onChange,
  confirmLabel = 'Enviar',
  disabledButton,
  skeleton,
  skeletonClassName,
  fullWidth,
  className,
  ...props
}: ITextAreaWithButtons & { onChange?: (value: string) => void }) {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setText(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  if (skeleton)
    return (
      <div
        className={`skeleton ${fullWidth && 'w-full'} h-36 rounded-md ${skeletonClassName}`}></div>
    )

  return (
    <form onSubmit={onConfirm}>
      <Textarea value={text} onChange={handleChange} {...props} className={className}>
        <Button disabled={disabledButton || !Boolean(text)} loading={loading} type="submit">
          {confirmLabel}
        </Button>
      </Textarea>
    </form>
  )
}
