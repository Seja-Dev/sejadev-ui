interface ITab {
  skeleton?: boolean
  fullWidth?: boolean
  tabs?: Tabs[]
  className?: string
  skeletonClassName?: string
}

interface Tabs {
  isActive?: boolean
  onClick?: () => void
  title?: string
}

export function Tab({ skeleton, fullWidth, tabs, className, skeletonClassName }: ITab) {
  if (skeleton) {
    return (
      <div className={`${fullWidth && 'w-full'} flex flex-col gap-2 ${skeletonClassName}`}>
        {tabs?.map((__, index) => <div key={index} className={`skeleton h-12 rounded-md`} />)}
      </div>
    )
  }

  return (
    <div className={`${fullWidth && 'w-full'} flex flex-col gap-2`}>
      {tabs?.map((info, index) => (
        <div
          key={index}
          className={`${info.isActive ? 'bg-primary font-bold' : 'bg-common-dark25'} p-3 text-lg text-common-white cursor-pointer rounded-md hover:shadow-primary-all ${className}`}
          onClick={info.onClick}>
          {info.title}
        </div>
      ))}
    </div>
  )
}
