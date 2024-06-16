import { FC } from 'react'
import styles from './BlackButton.module.scss'

interface IBlackButton {
    text: string
}
const BlackButton: FC<IBlackButton> = ({text}) => {
  return (
    <button className={styles['black-button']}>
        {text}
    </button>
  )
}

export default BlackButton