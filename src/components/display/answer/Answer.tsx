import { Avatar } from '../avatar/Avatar'
import { Badge } from '../badge/Badge'

export interface IAnswer {
  userProfile?: string
  name?: string
  createdAt?: string
  text: string
  isTeam?: boolean
}

export function Answer({
  userProfile,
  name,
  createdAt,
  text,
  isTeam,
}: IAnswer) {

  return (
    <div className={`relavite `}>
      <>
        <div className="flex flex-col gap-4 mb-8 py-4">
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
          <p className="text-sm">{text}</p>
        </div>
      </>
    </div>
  )
}