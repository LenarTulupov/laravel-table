import { FC } from 'react'
import styles from './WhiteBgButton.module.scss'

interface IWhiteBgButton {
    text: string
}

const WhiteBgButton: FC<IWhiteBgButton> = ({text}) => {
  return (
    <div className={styles['white-bg-button']}>
        {text}
    </div>
  )
}

export default WhiteBgButton