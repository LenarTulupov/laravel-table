import { FC, ReactNode } from "react"
import styles from './Button.module.scss'

interface IButton {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant: 'black' | 'blue' | 'gray' | 'white'
  type?: 'button' | 'submit'
  disabled?: boolean
}

const Button: FC<IButton> = ({ children, className, onClick, variant, type = 'button' }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className || ''}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button