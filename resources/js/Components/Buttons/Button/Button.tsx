import { FC, forwardRef, ReactNode } from "react"
import styles from './Button.module.scss'

interface IButton {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant: 'black' | 'blue' | 'gray' | 'white'
  type?: 'button' | 'submit'
  disabled?: boolean
}

const Button = forwardRef<HTMLButtonElement, IButton> (({ 
  children,
  className,
  onClick,
  variant,
  type = 'button',
  disabled = false 
}, ref) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className || ''}`}
      onClick={onClick}
      type={type}
      ref={ref}
      disabled={disabled}
    >
      {children}
    </button>
  )
});

export default Button