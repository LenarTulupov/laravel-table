import { FC, ReactNode } from "react"
import styles from './Container.module.scss'

interface IContainer {
    children: ReactNode
<<<<<<< HEAD
    className?: string
}

const Container: FC<IContainer> = ({children, className}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
=======
}

const Container: FC<IContainer> = ({children}) => {
  return (
    <div className={styles.container}>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
        {children}
    </div>
  )
}

export default Container