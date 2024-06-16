import Comment from '../Comment/Comment'
import styles from './Reviews.module.scss'

const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <header className={`${styles.reviews__header} ${styles.header}`}>
                <div className={styles.header__title}>Reviews <span>3</span></div>
            </header>
            <div className={styles.reviews__comments}>
                <Comment />
                <Comment />
            </div>
        </section>
    )
}

export default Reviews