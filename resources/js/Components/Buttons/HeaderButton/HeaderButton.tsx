import { FC, ReactNode } from "react"
import styles from './HeaderButton.module.scss'

interface IHeaderButton {
  children: ReactNode
  className?: string
  onClick: () => void
}

const HeaderButton: FC<IHeaderButton> = ({ children, className, onClick }) => {
  return (
    <button 
      className={`${styles['header-button']} ${className}`}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default HeaderButton