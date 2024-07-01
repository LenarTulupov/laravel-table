import { FC } from "react"

interface IRadio {
    id?: string
    className?: string
    value: string
}

const Radio:FC<IRadio> = ({ id, className, value }) => {
  return (
    <input 
        type="radio" 
        id={id}
        className={className}
        value={value}
    />
  )
}

export default Radio