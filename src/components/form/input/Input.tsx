import React, { forwardRef } from 'react'

import InputMask from 'react-input-mask'

interface IInput {
  name?: string
  skeleton?: boolean
  label?: string
  fullWidth?: boolean
  required?: boolean
  mask?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  type?: string
  className?: string
  skeletonClassName?: string
  disabled?: boolean
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      name,
      skeleton,
      fullWidth,
      required,
      mask = '',
      label,
      value,
      error,
      type,
      disabled,
      className,
      skeletonClassName,
      ...props
    },
    ref
  ) => {
    if (skeleton)
      return (
        <div className={`skeleton ${fullWidth && 'w-full'} h-14 rounded-md ${skeletonClassName}`} />
      )

    return (
      <div className="relative flex flex-col">
        <InputMask
          inputRef={ref}
          mask={mask}
          disabled={disabled}
          type={type}
          className={`peer border-2 rounded-md placeholder-transparent disabled:opacity-40 outline-none ${className}
        ${
          error
            ? 'border-error'
            : 'border-input-background focus:border-primary focus:ring-1 focus:ring-primary'
        } bg-input-background px-5 pt-5 pb-2 
        ${fullWidth && 'w-full'} `}
          name={name}
          value={value}
          placeholder=""
          {...props}
        />
        <label
          className={`absolute text-common-grey20 top-1 left-5 text-xs transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs`}>
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
)
