import InputLabel from '@/Components/ui/InputLabel/InputLabel'
import TextInput from '@/Components/ui/TextInput/TextInput'
import { ChangeEvent, forwardRef } from 'react';
import ErrorMessage from '@/Components/ui/ErrorMessage/ErrorMessage';
import { TypeErrorCode } from '@/utils/getErrorMessage';
import styles from './InputField.module.scss'

interface IInputField {
  id: string;
  type: 'text' | 'email' | 'password' | 'tel';
  htmlFor: string;
  label?: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: TypeErrorCode | '';
  className?: string;
  required?: boolean;
}

const InputField = forwardRef<HTMLInputElement, IInputField>(({
  id,
  type,
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
        type={type}
        ref={ref}
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
      {error && <ErrorMessage code={error} />}
    </div>
  )
});

export default InputField