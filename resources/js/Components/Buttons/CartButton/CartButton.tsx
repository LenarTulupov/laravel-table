import { FC, ReactNode } from "react"
import styles from './CartButton.module.scss'

interface ICartButton {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const CartButton: FC<ICartButton> = ({ children, onClick, className }) => {
  return (
    <button 
      className={`${styles['cart-button']} ${className || ''}`} 
      onClick={onClick}
    >
        { children }
    </button>
  )
}

export default CartButton