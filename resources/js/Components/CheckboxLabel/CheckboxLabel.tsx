import { ChangeEvent, FC } from 'react';
import Checkbox from '../ui/Checkbox/Checkbox';
import InputLabel from '../ui/InputLabel/InputLabel';
import styles from './CheckboxLabel.module.scss'

interface ICheckboxLabel {
  id: string;
  className?: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  htmlFor: string;
  label?: string;
}

const CheckboxLabel: FC<ICheckboxLabel> = ({ id, className, checked, onChange, htmlFor, label }) => {
  return (
    <div className={`${styles['checkbox-label']} ${className || ''}`}>
        <Checkbox id={id} checked={checked} onChange={onChange}/>
        <InputLabel htmlFor={htmlFor} label={label}/>
    </div>
  );
};

export default CheckboxLabel