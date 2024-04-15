import Router from 'next/router'

interface IIconCard {
  children: React.ReactNode
  title: string
  link: string
  skeleton?: boolean
  className?: string
}

export function IconCard({ children, title, link, skeleton, className }: IIconCard) {
  if (skeleton) return <div className={`${className} skeleton`}></div>

  return (
    <div
      className="md:max-w-[299px] bg-neutral-900 flex flex-col items-center rounded-xl p-5 gap-2 cursor-pointer hover:shadow-primary-all"
      onClick={() => {
        Router.push(link)
      }}>
      {children}
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}
