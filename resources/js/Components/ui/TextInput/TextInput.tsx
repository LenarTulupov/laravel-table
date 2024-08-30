import { ChangeEvent, forwardRef, memo, Ref } from "react"
import styles from './TextInput.module.scss'

export interface ITextInput {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  id?: string
  required?: boolean
  className?: string
}

const TextInput = forwardRef<HTMLInputElement, ITextInput>(({
  value,
  onChange,
  placeholder,
  id,
  required = false,
  className,
}, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      required={required}
      className={`${styles['text-input']} ${className || ''}`}
      ref={ref}
    />
  )
});

export default TextInput