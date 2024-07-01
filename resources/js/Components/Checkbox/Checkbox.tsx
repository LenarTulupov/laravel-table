import { FC } from "react"

interface ICheckbox {
    id: string
    className?: string
}

const Checkbox: FC<ICheckbox> = ({ id, className }) => {
  return (
    <input 
        type="checkbox" 
        id={id}
        className={className}
        />
  )
}

export default Checkbox