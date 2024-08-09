import { FC, ReactNode } from "react"
import styles from './Container.module.scss'

interface IContainer {
    children: ReactNode
}

const Container: FC<IContainer> = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default Container