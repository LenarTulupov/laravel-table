import { ChangeEvent, FocusEvent, forwardRef, memo, Ref } from "react"
import styles from './TextInput.module.scss'

export interface ITextInput {
  type: 'text' | 'email' | 'password' | 'tel';
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string
  id?: string
  required?: boolean
  className?: string
  error: string;
}

const TextInput = forwardRef<HTMLInputElement, ITextInput>(({
  type,
  value,
  onChange,
  placeholder,
  id,
  required = false,
  onBlur,
  className,
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
      className={`${styles['text-input']} ${error ? styles['text-input_error'] : ''} ${className || ''}`}
      ref={ref}
      onBlur={onBlur}
    />
  )
});

export default TextInput