import { Avatar } from '../avatar/Avatar'
import { Badge } from '../badge/Badge'

export interface IAnswer {
  userProfile?: string
  name?: string
  createdAt?: string
  children?: React.ReactNode
  isTeam?: boolean
  skeleton?: boolean
  loading?: boolean
  skeletonClassName?: string
}

export function Answer({
  userProfile,
  name,
  createdAt,
  children,
  isTeam,
  skeleton,
  skeletonClassName
}: IAnswer) {
  if (skeleton) {
    return (
      <div className={`flex flex-col gap-2 w-96 mt-5 ${skeletonClassName}`}>
        <div className="flex items-center gap-4">
          <div className="skeleton w-11 h-11 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-28 rounded-md"></div>
            <div className="skeleton h-4 w-32 rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <div className="skeleton h-4 w-full rounded-md"></div>
          <div className="skeleton h-4 w-full rounded-md"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 mb-8 py-4">
      <>
        <div className="flex gap-4 items-center">
          <div>
            <Avatar
              className={`${isTeam ? 'border-2 border-yellow-400' : ''} w-11 h-11`}
              text={name}
              src={`${isTeam ? '' : userProfile}`}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-common-white">{name}</h4>
            <p className="text-common-grey20 italic">{createdAt}</p>
            {isTeam && (
              <Badge className={`text-common-black bg-yellow-400 border border-yellow-400`}>
                Equipe Sejadev
              </Badge>
            )}
          </div>
        </div>
        {children}
      </>
    </div>
  )
}
