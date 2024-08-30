import { FC, ReactNode } from "react";

interface IInputLabel {
  htmlFor: string;
  className?: string;
  children?: ReactNode;
  label?: string;
}

const InputLabel: FC<IInputLabel> = ({ htmlFor, className, children, label }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children || label}
    </label>
  );
};

export default InputLabel;
