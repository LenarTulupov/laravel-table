import { FC, ReactNode } from "react"
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'

interface IModal {
  children: ReactNode
  onClick: () => void
}

const Modal: FC<IModal> = ({ children, onClick }) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={onClick}/>
      <div className={styles.modal}>
        {children}
      </div>
    </>,
    document.body
  )
}

export default Modal
