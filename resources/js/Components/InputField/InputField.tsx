import InputLabel from '@/Components/ui/InputLabel/InputLabel'
import TextInput from '@/Components/ui/TextInput/TextInput'
import { forwardRef } from 'react';
import ErrorMessage from '@/Components/ui/ErrorMessage/ErrorMessage';
import { IInputLabel } from '@/types/input-label.interface';
import { ITextInput } from '@/types/text-input.interface';
import styles from './InputField.module.scss'
import { TypeErrorCode } from '@/utils/getErrorMessage';

const InputField = forwardRef<HTMLInputElement, ITextInput & IInputLabel>(({
  id,
  type,
  htmlFor,
  label,
  placeholder,
  value,
  onChange,
  error = '',
  onBlur,
  className,
  inputStyles,
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
        onBlur={onBlur}
        inputStyles={inputStyles}
      />
      {error && <ErrorMessage code={error as TypeErrorCode} />}
    </div>
  )
});

export default InputField