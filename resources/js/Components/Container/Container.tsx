import { FC, ReactNode } from "react"
import styles from './Container.module.scss'

interface IContainer {
    children: ReactNode
    className?: string
}

const Container: FC<IContainer> = ({children, className}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
        {children}
    </div>
  )
}

export default Container