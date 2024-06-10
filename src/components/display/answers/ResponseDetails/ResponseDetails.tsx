
import { Avatar } from '../../avatar/Avatar'
import { Badge } from '../../badge/Badge'


interface IAnswer {
  skeleton?: boolean
  name?: string
  admin?: boolean
  answer?: string
  date?: string
  className?: string
  skeletonClassName?: string
  fullWidth?: boolean
}

export function ResponseDetails({
  skeleton,
  answer,
  date,
  name,
  admin,
  skeletonClassName,
  fullWidth
}: IAnswer) {


  if (skeleton)
    return (
      <div
        className={`skeleton ${fullWidth && 'w-full'} h-24 rounded-md ${skeletonClassName}`}></div>
    )

  return (
    <div className="flex flex-col gap-4 mb-8">
      {admin ? (
        <>
          <div className='flex gap-4 items-center'>
            <div>
              <Avatar className='' text={name} />
            </div>
            <div className='flex flex-col'>
              <h4 className="font-bold text-common-white">{name}</h4>
              <p className='text-gray-500 italic'>{date}</p>
              <Badge className={`text-black bg-yellow-400 border border-yellow-400`}>Equipe Sejadev</Badge>
            </div>
          </div>
          <p className="text-sm">{answer}</p>
        </>
      ) : (
        <>
        <div className='flex gap-4 items-center'>
          <div>
            <Avatar className='' text={name} />
          </div>
          <div className='flex flex-col'>
            <h4 className="font-bold text-common-white">{name}</h4>
            <p className='text-gray-500 italic'>{date}</p>
          </div>
        </div>
        <p className="text-sm">{answer}</p>
      </>
      )}
    </div>
  )
}