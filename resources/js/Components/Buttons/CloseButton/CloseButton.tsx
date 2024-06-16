// import { IoClose } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import styles from './CloseButton.module.scss'
import { FC } from "react";

interface ICloseButton {
  onClick: () => void
}

const CloseButton: FC<ICloseButton> = ({ onClick }) => {
  return (
    <button className={styles['close-button']}>
        {/* <IoClose/> */}
        <TfiClose onClick={onClick}/>
    </button>
  )
}

export default CloseButton