import { FC, ReactNode } from "react";

interface IInputLabel {
  htmlFor: string;
  className?: string;
<<<<<<< HEAD
  children?: ReactNode;
=======
<<<<<<< HEAD
  children?: ReactNode;
=======
  children: ReactNode;
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
}

const InputLabel: FC<IInputLabel> = ({ htmlFor, className, children }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default InputLabel;
