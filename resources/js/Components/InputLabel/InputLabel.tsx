import { FC, ReactNode } from "react"

interface IInputLabel {
  htmlFor: string
  className?: string
  children: ReactNode
}

const InputLabel:FC<IInputLabel> = ({ htmlFor, className, children }) => {
  return (
    <label 
      htmlFor={htmlFor}
      className={className}
    >
      { children }
    </label>
  )
}

export default InputLabel