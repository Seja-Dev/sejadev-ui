import React, { InputHTMLAttributes } from 'react'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string
  skeleton?: boolean
  label?: string
  fullWidth?: boolean
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  type?: string
  className?: string
  disabled?: boolean
}

interface IStyledInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const StyledInput: React.FC<IStyledInput> = ({ error, ...props }) => {
  return <input {...props} />
}

export const Input: React.FC<IInput> = ({
  name,
  skeleton,
  fullWidth,
  required,
  label,
  value,
  onChange,
  error,
  type,
  disabled,
  className,
  ...props
}) => {
  if (skeleton) return <div className={`skeleton ${fullWidth && 'w-full'} ${className}`} />
  return (
    <div className="relative flex flex-col">
      <StyledInput
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
        error={error}
        placeholder=""
        {...props}
      />
      <label
        className={`absolute text-[#898989] top-1 left-5 text-xs transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs`}>
        {required ? `${label} *` : label}
      </label>
      {error && (
        <div className="label-text-alt my-2 text-error">
          {`O campo ${name} é obrigatório!` || ''}
        </div>
      )}
    </div>
  )
}
