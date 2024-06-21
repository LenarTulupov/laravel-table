import { FC } from 'react'
import Comment from '../Comment/Comment'
import UserComment from '../Comment/UserComment/UserComment'
import styles from './Reviews.module.scss'

interface IReviews {
    isFormOpen: boolean
}

const Reviews: FC<IReviews> = ({isFormOpen}) => {
    return (
        <section className={styles.reviews}>
            <header className={`${styles.reviews__header} ${styles.header}`}>
                <div className={styles.header__title}>Reviews <span>3</span></div>
            </header>
            <div className={styles.reviews__comments}>
                { isFormOpen && <UserComment/> }
                <Comment />
                <Comment />
            </div>
        </section>
    )
}

export default Reviews