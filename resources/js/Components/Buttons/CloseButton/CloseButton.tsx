import { TfiClose } from "react-icons/tfi";
import styles from './CloseButton.module.scss'
import { FC } from "react";

interface ICloseButton {
  onClick: () => void
  className?: string
}

const CloseButton: FC<ICloseButton> = ({ onClick, className }) => {
  return (
<<<<<<< HEAD
    <button className={`${styles['close-button']} ${className || ''}`}>
=======
    <button className={`${styles['close-button']} ${className}`}>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
        <TfiClose onClick={onClick} className={styles['close-button__icon']}/>
    </button>
  )
}

export default CloseButton