interface IIconCard {
  children: React.ReactNode
  title: string
  link: string
  skeleton?: boolean
  skeletonClassName?: string
  className?: string
  onClick?: () => void
}

export function IconCard({ children, title, skeleton, className, skeletonClassName, onClick }: IIconCard) {
  if (skeleton) return <div className={`skeleton md:max-w-[299px] h-32 rounded-xl ${skeletonClassName}`}></div>

  return (
    <div
      className={`md:max-w-[299px] bg-neutral-900 flex flex-col items-center rounded-xl p-5 gap-2 cursor-pointer hover:shadow-primary-all ${className}`}
      onClick={onClick}>
      {children}
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}
