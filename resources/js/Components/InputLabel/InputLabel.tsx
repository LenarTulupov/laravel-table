import { FC } from "react"

interface IInputLabel {
  htmlFor: string
  text?: string
  className?: string
}

const InputLabel:FC<IInputLabel> = ({ htmlFor, text, className }) => {
  return (
    <label 
      htmlFor={htmlFor}
      className={className}
    >
      { text }
    </label>
  )
}

export default InputLabel