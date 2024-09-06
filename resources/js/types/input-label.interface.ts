import { ReactNode } from "react";

export interface IInputLabel {
  htmlFor: string;
  className?: string;
  children?: ReactNode;
  label?: string;
}