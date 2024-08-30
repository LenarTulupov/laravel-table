import InputLabel from '@/Components/ui/InputLabel/InputLabel'
import TextInput from '@/Components/ui/TextInput/TextInput'
import { ChangeEvent, forwardRef } from 'react';
import ErrorMessage from '@/Components/ui/ErrorMessage/ErrorMessage';
import styles from './InputField.module.scss'

interface IInputField {
  id: string;
  htmlFor: string;
  label?: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  required?: boolean;
}

const InputField = forwardRef<HTMLInputElement, IInputField>(({
  id,
  htmlFor,
  label,
  placeholder,
  value,
  onChange,
  error,
  className,
  required }, ref) => {
  return (
    <div className={`${styles['input-field']} ${className || ''}`}>
      <InputLabel htmlFor={htmlFor} label={label}/>
      <TextInput
        ref={ref}
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  )
});

export default InputField