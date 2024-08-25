import { ChangeEvent, FC } from "react";

interface IRadio {
  id?: string;
  className?: string;
  value?: string;
  name?: string;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<IRadio> = ({
  id,
  className,
  value,
  name,
  checked,
  onChange,
}) => {
  return (
    <input
      type="radio"
      id={id}
      className={className}
      name={name}
      checked={checked}
      onChange={onChange}
      value={value}
    />
  );
};

export default Radio;
