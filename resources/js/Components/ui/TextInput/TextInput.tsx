import { forwardRef, memo, Ref } from "react"
import styles from './TextInput.module.scss'
import { ITextInput } from "@/types/text-input.interface";

const TextInput = forwardRef<HTMLInputElement, ITextInput>(({
  type,
  value,
  onChange,
  placeholder,
  id,
  required = false,
  onBlur,
  className,
  inputStyles,
  error
}, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      required={required}
      className={`${styles['text-input']} ${error ? styles['text-input_error'] : ''} ${inputStyles} ${className || ''}`}
      ref={ref}
      onBlur={onBlur}
    />
  )
});

export default TextInput