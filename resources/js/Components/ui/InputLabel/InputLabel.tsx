import { IInputLabel } from "@/types/input-label.interface";
import { FC } from "react";

const InputLabel: FC<IInputLabel> = ({ htmlFor, className, children, label }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children || label}
    </label>
  );
};

export default InputLabel;
