import { ReactNode } from "react"
import styles from './IconButton.module.scss'

interface IIconButton {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function IconButton({ 
  children, 
  className, 
  onClick, 
  disabled = false }: IIconButton) {
  return (
    <button
      className={`${styles['icon-button']} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
};
