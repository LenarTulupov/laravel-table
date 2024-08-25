<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
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
<<<<<<< HEAD
=======
=======
import { FC } from "react"
import styles from './TextInput.module.scss'
import { ITextInput } from "@/types/textInput.interface"

const TextInput: FC<ITextInput> = ({
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
  value,
  onChange,
  placeholder,
  id,
  required,
  className
<<<<<<< HEAD
}, ref: Ref<HTMLInputElement>) => {
=======
<<<<<<< HEAD
}, ref: Ref<HTMLInputElement>) => {
=======
}) => {
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      required={required}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
      className={`${styles['text-input']} ${className || ''}`}
      ref={ref}
    />
  )
}
)
<<<<<<< HEAD
=======
=======
      className={`${styles['text-input']} ${className}`}
    />
  )
}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a

export default TextInput