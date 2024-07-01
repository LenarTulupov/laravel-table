import { FC } from "react"
import styles from './Checkbox.module.scss'

interface ICheckbox {
    id: string
    className?: string
    checked?: boolean
}

const Checkbox: FC<ICheckbox> = ({ id, className, checked }) => {
  return (
    <input 
        type="checkbox" 
        id={id}
        className={`${styles.checkbox} ${className}`}
        checked={checked}
        />
  )
}

export default Checkbox