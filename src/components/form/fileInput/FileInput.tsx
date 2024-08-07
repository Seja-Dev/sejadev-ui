import React from 'react'

interface IFileInput {
  fileText?: string
  fileInputRef?: React.RefObject<HTMLInputElement>
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleButtonClick: () => void
  fileName?: string
  fileSize?: string
  skeleton?: boolean
  skeletonClassName?: string
}

export const FileInput = ({
  fileText,
  fileInputRef,
  handleFileChange,
  handleButtonClick,
  fileName,
  fileSize,
  skeleton,
  skeletonClassName
}: IFileInput) => {
  if (skeleton) {
    return <div className={`skeleton rounded-sm w-96 h-14 ${skeletonClassName}`} />
  }
  return (
    <div className="flex flex-col gap-2">
      <p>{fileText}</p>
      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
      <div className="bg-input-background flex items-center justify-between w-full p-1">
        <button
          type="button"
          onClick={handleButtonClick}
          className="px-4 uppercase font-bold rounded-sm">
          Escolher arquivo
        </button>
        <div className="h-12 w-56 bg-common-black p-4 text-sm flex items-center justify-center overflow-hidden">
          <p className="truncate">{fileName}</p>
        </div>
      </div>
      <p>{fileSize}</p>
    </div>
  )
}
