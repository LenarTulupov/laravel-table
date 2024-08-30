import { FC, ReactNode } from "react"
import styles from './Title.module.scss'

interface ITitle {
    children: ReactNode
    className?: string
}

const Title:FC<ITitle> = ({ children, className }) => {
  return (
    <h1 className={`${styles.title} ${className}`}>
        {children}
    </h1>
  )
}

export default Title