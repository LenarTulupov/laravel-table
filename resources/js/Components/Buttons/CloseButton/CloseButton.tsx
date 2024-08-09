import { TfiClose } from "react-icons/tfi";
import styles from './CloseButton.module.scss'
import { FC } from "react";

interface ICloseButton {
  onClick: () => void
  className?: string
}

const CloseButton: FC<ICloseButton> = ({ onClick, className }) => {
  return (
    <button className={`${styles['close-button']} ${className}`}>
        <TfiClose onClick={onClick} className={styles['close-button__icon']}/>
    </button>
  )
}

export default CloseButton