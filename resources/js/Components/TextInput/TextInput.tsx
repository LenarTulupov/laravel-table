import { FC } from "react"
import styles from './TextInput.module.scss'
import { ITextInput } from "@/types/textInput.interface"

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