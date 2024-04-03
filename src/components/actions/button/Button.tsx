/**
 * Primary UI component for user interaction
 */

interface IButton {
  label: string
}

export function Button({ label }: IButton) {
  return (
    <button className="btn btn-primary uppercase text-white" type="button">
      {label}
    </button>
  )
}
