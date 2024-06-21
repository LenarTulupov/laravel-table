import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import styles from './Rating.module.scss'

const Rating = () => {
    return (
        <div className={styles['rating']}>
            <div className={styles['rating__title']}>Rating</div>
            <div className={styles['rating__score']}>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
            </div>
        </div>
    )
}

export default Rating