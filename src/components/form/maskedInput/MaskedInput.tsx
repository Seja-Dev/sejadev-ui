import React from 'react'
import { IMaskInput } from 'react-imask'

interface MaskedInputProps {
  placeholder?: string
  skeleton?: boolean
  name?: string
  pattern?: string
  blocks?: any
  fullWidth?: boolean
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  type?: string
  className?: string
  mask?: any
  disabled?: boolean
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  placeholder,
  skeleton,
  name,
  fullWidth,
  required,
  value,
  onChange,
  error,
  type,
  disabled,
  className,
  mask = '',
  ...props
}) => {
  if (skeleton) return <div className={`skeleton ${fullWidth && 'w-full'} ${className}`} />

  return (
    <div className="relative flex flex-col">
      <IMaskInput
        mask={mask}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        className={`peer border-2 rounded-md placeholder-transparent disabled:opacity-40 ${className}
        ${
          error
            ? 'border-error outline-none'
            : 'border-neutral focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
        } bg-base-100 px-5 pt-5 pb-2 
        ${fullWidth && 'w-full'} `}
        name={name}
        value={value}
        {...props}
      />
      <label
        className={`absolute text-[#898989] top-1 left-5 text-xs transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs`}>
        {required ? `${placeholder} *` : placeholder}
      </label>
      {error && (
        <div className="label-text-alt my-2 text-error">
          {`O campo ${name} é obrigatório!` || ''}
        </div>
      )}
    </div>
  )
}

export default MaskedInput
