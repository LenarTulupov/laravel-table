import { FC, ReactNode } from "react"
import styles from './Button.module.scss'

interface IButton {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant: 'black' | 'blue' | 'gray' | 'white'
<<<<<<< HEAD
  type?: 'button' | 'submit'
=======
<<<<<<< HEAD
  type?: 'button' | 'submit'
=======
  type?: 'button' | 'submit' | 'file'
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
  disabled?: boolean
}

const Button: FC<IButton> = ({ children, className, onClick, variant, type = 'button' }) => {
  return (
    <button
<<<<<<< HEAD
      className={`${styles.button} ${styles[variant]} ${className || ''}`}
=======
<<<<<<< HEAD
      className={`${styles.button} ${styles[variant]} ${className || ''}`}
=======
      className={`${styles.button} ${styles[variant]} ${className}`}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button