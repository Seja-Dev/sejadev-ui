import { ReactNode } from 'react'
import { Avatar } from '../avatar/Avatar'

import { Accordion } from '../accordion/Accordion'
import { Badge } from '../badge/Badge'

export interface IAnswer {
  title?: string
  name?: string
  onClick?: () => void
  answers: Answer[];
  children?: ReactNode
  skeleton?: boolean
  className?: string
  skeletonClassName?: string
  fullWidth?: boolean
}

type Answer = {
  text: string
  isTeam?: boolean
  createdAt?: string
  name?: string
}

export function Answer({
  title,
  answers,
  name,
  onClick,
  children,
  skeleton,
  className,
  skeletonClassName,
  fullWidth
}: IAnswer) {

  if (skeleton)
    return (
      <div className={`skeleton ${fullWidth && 'w-full'} h-16 rounded-md  ${skeletonClassName}`}></div>
    )

  return (
    <div className={`relavite ${className}`}>
      <Avatar className="absolute left-1 top-1" text={name} />
      <Accordion
        className="px-8"
        title={title}
        titleClassName="truncate text-ellipsis text-common-white">
        {answers &&
          answers.map((answer, index) => (
            <>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex gap-4 items-center" key={index}>
                  <div>
                    <Avatar
                      className={`${answer.isTeam ? 'border-2 border-yellow-400' : ''}`}
                      text={answer.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-common-white">{answer.name}</h4>
                    <p className="text-common-grey20 italic">{answer.createdAt}</p>
                    {answer.isTeam && (
                      <Badge className={`text-common-black bg-yellow-400 border border-yellow-400`}>
                        Equipe Sejadev
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm">{answer.text}</p>
              </div>
            </>
          ))}
        <a href="#" className="text-primary" onClick={onClick}>
          CARREGAR MAIS RESPOSTAS
        </a>
        {children}
      </Accordion>
    </div>
  )
}