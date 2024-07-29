export interface EditRowProps {
  label?: string
  icon?: React.ReactNode
  className?: string
  skeleton?: boolean
  skeletonClassName?: string
  children?: React.ReactNode
  onEditClick?: () => void
}

export function EditRow({
  label = '',
  icon,
  className,
  skeleton,
  skeletonClassName,
  children,
  onEditClick
}: EditRowProps) {
  if (skeleton) {
    return <div className={`skeleton rounded-sm w-full p-6 ${skeletonClassName}`} />
  }
  return (
    <div
      className={`flex items-center justify-between p-3 bg-common-dark30 rounded-sm ${className}`}>
      <div className="flex items-center w-full">
        {children}
        <span className="text-white flex-1">{label}</span>
      </div>
      {icon && (
        <button
          onClick={onEditClick}
          className="text-white bg-blue-500 p-2 rounded hover:bg-blue-600">
          {icon}
        </button>
      )}
    </div>
  )
}

export default EditRow
