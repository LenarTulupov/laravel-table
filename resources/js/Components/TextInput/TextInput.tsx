import { ChangeEvent, FC } from "react"
import styles from './TextInput.module.scss'

interface ITextInput {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  id?: string
  required?: boolean
  className?: string
}

const TextInput: FC<ITextInput> = ({
  value,
  onChange,
  placeholder,
  id,
  required,
  className
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      required={required}
      className={`${styles['text-input']} ${className}`}
    />
  )
}

export default TextInput