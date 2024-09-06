import { ChangeEvent, FocusEvent } from "react";

export interface ITextInput {
  type: 'text' | 'email' | 'password' | 'tel';
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string
  id?: string
  required?: boolean
  className?: string
  error?: string;
  inputStyles?: string;
}