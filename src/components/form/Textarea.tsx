import { ReactNode } from 'react'

export interface ITextarea {
  name?: string
  label?: string
  fullWidth?: boolean
  required?: boolean
  value?: string
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  error?: string
  type?: string
  disabled?: boolean
  rows?: HTMLTextAreaElement['rows']
  maxLength?: number
  className?: string
  skeletonClassName?: string
  skeleton?: boolean
  children?: ReactNode
}

export function Textarea({
  name,
  required,
  label,
  fullWidth,
  value,
  error,
  rows,
  maxLength,
  className,
  skeletonClassName,
  skeleton,
  children,
  onChange,
  ...props
}: ITextarea) {
  if (skeleton)
    return <div className={`skeleton ${fullWidth && 'w-full'} h-24 rounded-md ${skeletonClassName}`}></div>

  return (
    <div className="relative flex flex-col">
      <textarea
        className={`${fullWidth && 'w-full'} resize-none border-2 peer border-input-background rounded-md bg-input-background pt-5 p-2 pl-5 text-base text-base-content outline-none ${error ? `border-error focus:ring-1 focus:ring-error` : 'focus:border-primary focus:ring-1 focus:ring-primary'} ${className}`}
        placeholder=""
        name={name}
        value={value}
        rows={rows}
        onChange={(e) => {
          if (onChange) {
            if (!maxLength) return onChange(e)
            if (e.target.value.length <= Number(maxLength)) onChange(e)
          }
        }}
        {...props}></textarea>
      {children && (
        <div
          className={`absolute bottom-5 right-3 transition-all transform opacity-0 peer-focus:opacity-100 ${value ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} peer-focus:scale-100 peer-focus:opacity-100`}>
          {children}
        </div>
      )}
      <label
        className="absolute top-1 left-5 text-xs transition-all pointer-events-none peer-placeholder-shown:text-base 
        peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs text-common-grey20">
        {required ? `${label} *` : label}
      </label>
      {error && <p className="text-error text-xs mt-1">{error}</p>}
    </div>
  )
}
