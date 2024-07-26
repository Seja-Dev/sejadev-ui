interface EditRowProps {
  mode?: 'checkbox' | 'list' | 'none'
  orderedNumer?: number
  label?: string
  checked?: boolean
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
  icon?: React.ReactNode
  onCheckChange?: (checked: boolean) => void
  onEditClick?: () => void
}

export function EditRow({
  mode,
  orderedNumer,
  label = '',
  icon,
  checked = false,
  className,
  skeleton,
  skeletonClassName,
  onCheckChange,
  onEditClick
}: EditRowProps) {
  if (skeleton) {
    return <div className={`skeleton rounded-sm w-full p-6 ${skeletonClassName}`} />
  }
  return (
    <div
      className={`flex items-center justify-between p-3 bg-common-dark30 rounded-sm ${className}`}>
      <div className="flex items-center">
        {mode === 'checkbox' && (
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckChange && onCheckChange(e.target.checked)}
            className="mr-2"
          />
        )}
        {mode === 'list' && <span className="mr-2">{orderedNumer}.</span>}
        <span className="text-white">{label}</span>
      </div>
      <button
        onClick={onEditClick}
        className="text-white bg-blue-500 p-2 rounded hover:bg-blue-600">
        {icon}
      </button>
    </div>
  )
}

export default EditRow
