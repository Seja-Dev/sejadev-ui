import { Badge, BadgeVariant } from '../../display/badge/Badge'

interface ICourseCard {
  title: string
  description?: string
  level: number
  tags?: string[]
  skeleton?: boolean
  badgeVariant?: BadgeVariant
  skeletonClassName?: string
  className?: string
  onClick?: () => void
}

interface levelType {
  [key: number]: string
}

const LEVEL_DICT: levelType = {
  0: 'Iniciante',
  1: 'Intermediário',
  2: 'Intermediário-avançado',
  3: 'Avançado',
  4: 'Expert'
}

export function CourseCard({
  title,
  description,
  level,
  tags,
  skeleton,
  badgeVariant = 'neutral',
  skeletonClassName,
  className,
  onClick
}: ICourseCard) {
  if (skeleton) return <div className={`skeleton md:w-96 h-32 ${skeletonClassName}`}></div>

  return (
    <div
      className={`card w-fit md:w-96 shadow-xl cursor-pointer hover:shadow-primary-all ${className}`}
      onClick={onClick}>
      <div className={`card-body bg-neutral-900 rounded-2xl p-6`}>
        <h2 className="card-title">{title}</h2>
        <h4>
          <span className="font-bold">Nível:</span>
          <Badge variant={badgeVariant} className="ml-1 text-common-white">
            {LEVEL_DICT[level] || 'Indefinido'}
          </Badge>
        </h4>
        <p className="my-2">{description}</p>
        <div className="flex flex-wrap gap-1 items-start">
          {tags?.map((str, i) => (
            <Badge variant="neutral" key={`${i}-${str}`}>
              {str}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
