import { FC } from 'react'
import styles from './WhiteBgButton.module.scss'

interface IWhiteBgButton {
    text: string
    formToggle: () => void
}

const WhiteBgButton: FC<IWhiteBgButton> = ({text, formToggle}) => {
  return (
    <div className={styles['white-bg-button']} onClick={formToggle}>
        {text}
    </div>
  )
}

export default WhiteBgButton