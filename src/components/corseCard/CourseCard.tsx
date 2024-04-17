import Router from 'next/router'
import { Badge } from '../badge/Badge'

interface ICourseCard {
  title: string
  description?: string
  url: string
  level: number
  tags?: string[]
  skeleton?: boolean
  className?: string
}

interface levelType {
  [key: number]: string;
}

const LEVEL_DICT: levelType = {
  0: 'Iniciante',
  1: 'Intermediário',
  2: 'Intermediário-avançado',
  3: 'Avançado',
  4: 'Expert'
}

export function CourseCard ({
  title,
  description,
  url,
  level,
  tags,
  skeleton,
  className
}: ICourseCard){
  if(skeleton) return <div className={`${className} skeleton`}></div>

  return (
    <div className="card w-fit md:w-96 shadow-xl cursor-pointer hover:shadow-primary-all" onClick={() => {
      Router.push(url)
    }}>
      <div className={`card-body bg-neutral-900 rounded-2xl p-6`}>
        <h2 className="card-title">{title}</h2>
        <h4><span className='font-bold'>Nível:</span><Badge className='badge badge-primary ml-1'>{LEVEL_DICT[level] || 'Indefinido'}</Badge></h4>
        <p className='my-2'>{description}</p>
        <div className='flex flex-wrap gap-1 items-start'>
          {tags?.map((str, i) => <span className='badge badge-neutral' key={`${i}-${str}`}>{str}</span>)}
        </div>
      </div>
    </div>
  )
}
