import { FaStar } from 'react-icons/fa'
import styles from './Stars.module.scss'

const Stars = () => {
  return (
    <div className={styles.stars}>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
    </div>
  )
}

export default Stars