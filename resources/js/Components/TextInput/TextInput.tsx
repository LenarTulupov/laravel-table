<<<<<<< HEAD
import { ChangeEvent, forwardRef, Ref } from "react"
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
=======
import { FC } from "react"
import styles from './TextInput.module.scss'
import { ITextInput } from "@/types/textInput.interface"

const TextInput: FC<ITextInput> = ({
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  value,
  onChange,
  placeholder,
  id,
  required,
  className
<<<<<<< HEAD
}, ref: Ref<HTMLInputElement>) => {
=======
}) => {
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      required={required}
<<<<<<< HEAD
      className={`${styles['text-input']} ${className || ''}`}
      ref={ref}
    />
  )
}
)
=======
      className={`${styles['text-input']} ${className}`}
    />
  )
}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

export default TextInput