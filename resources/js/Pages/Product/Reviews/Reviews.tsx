import { FC } from 'react'
import Comment from '../Comment/Comment'
import styles from './Reviews.module.scss'

interface IReviews {
    reviewers: number
}

const Reviews: FC<IReviews> = ({ reviewers }) => {
    return (
        <section className={styles.reviews}>
            <header className={`${styles.reviews__header} ${styles.header}`}>
                <div className={styles.header__title}>Reviews <span>{reviewers.length}</span></div>
            </header>
            <div className={styles.reviews__comments}>
                <Comment />
                <Comment />
            </div>
        </section>
    )
}

export default Reviews