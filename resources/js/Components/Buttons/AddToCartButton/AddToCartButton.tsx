import { IoCartOutline } from "react-icons/io5";
import styles from './AddToCartButton.module.scss'
import { FC } from "react";

interface IAddToCartButton {
  onClick: () => void
  disabled: boolean
}

const AddToCartButton: FC<IAddToCartButton> = ({ onClick, disabled}) => {

  return (
    <button 
      onClick={!disabled ? onClick : undefined} 
      className={`${styles.button} ${disabled ? styles.button_disabled : ''}`}
    >
      <IoCartOutline className={styles.button__icon}/>
    </button>
  )
}

export default AddToCartButton