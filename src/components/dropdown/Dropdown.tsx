export interface DropdownOption {
  value: string
  text: string
}

export interface IDropdown {
  fullWidth?: boolean
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options?: DropdownOption[]
  skeleton?: boolean
  label?: string
  value?: string
  className?: string
}

export function Dropdown({
  fullWidth,
  onChange,
  options = [],
  skeleton,
  label,
  value,
  className
}: IDropdown) {
  if(skeleton) return <div className={`skeleton ${className}`}></div>
  
  return (
    <select
      onChange={onChange}
      value={value}
      className={`${fullWidth && 'w-full'} ${className} p-3 text-base outline-none mb-3 cursor-pointer rounded-md bg-base-100`}>
      {label && <option>{label}</option>}
      {options.map(({ text, value }, key) => (
        <option key={`dropdown-option-${key}`} value={value}>
          {text}
        </option>
      ))}
    </select>
  )
}
