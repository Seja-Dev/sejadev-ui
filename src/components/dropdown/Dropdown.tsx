import { IoIosArrowDown } from 'react-icons/io'

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
  if (skeleton)
    return (
      <div
        className={`skeleton ${fullWidth && 'w-full'} h-12 rounded-md ${skeletonClassName}`}></div>
    )

  return (
    <div className={`${fullWidth && 'w-full'} relative ${className}`}>
      <select
        onChange={onChange}
        value={value}
        className="w-full appearance-none p-3 text-base outline-none mb-3 cursor-pointer rounded-md bg-input-background flex items-center justify-center">
        {label && <option>{label}</option>}
        {options.map(({ text, value }, key) => (
          <option key={`dropdown-option-${key}`} value={value}>
            {text}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-inherit">
        <IoIosArrowDown size={20} />
      </div>
    </div>
  )
}
