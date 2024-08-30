import { ChangeEvent, FC } from "react";
import styles from './Textarea.module.scss'

interface ITextarea {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;

}

const Textarea: FC<ITextarea> = ({ id, placeholder, value, onChange, className }) => {
  return (
    <textarea 
      className={`${styles.textarea} ${className || ''}`}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea