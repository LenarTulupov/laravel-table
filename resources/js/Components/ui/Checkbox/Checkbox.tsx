import { ChangeEvent, FC } from "react";
import styles from "./Checkbox.module.scss";

interface ICheckbox {
  id: string;
  className?: string;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckbox> = ({ id, className, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      id={id}
      className={`${styles.checkbox} ${className || ''}`}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
