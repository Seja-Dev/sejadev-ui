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
  skeletonClassName?: string
}

export function Dropdown({
  fullWidth,
  onChange,
  options = [],
  skeleton,
  label,
  value,
  className,
  skeletonClassName
}: IDropdown) {
  if(skeleton) return <div className={`skeleton w-full h-12 rounded-md ${skeletonClassName}`}></div>
  
  return (
    <select
      onChange={onChange}
      value={value}
      className={`${fullWidth && 'w-full'} ${className} p-3 text-base outline-none mb-3 cursor-pointer rounded-md bg-[#242424]`}>
      {label && <option>{label}</option>}
      {options.map(({ text, value }, key) => (
        <option key={`dropdown-option-${key}`} value={value}>
          {text}
        </option>
      ))}
    </select>
  )
}
