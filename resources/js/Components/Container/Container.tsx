import { FC, ReactNode } from "react"
import styles from './Container.module.scss'

interface IContainer {
    children: ReactNode
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
    className?: string
}

const Container: FC<IContainer> = ({children, className}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
<<<<<<< HEAD
=======
=======
}

const Container: FC<IContainer> = ({children}) => {
  return (
    <div className={styles.container}>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
        {children}
    </div>
  )
}

export default Container