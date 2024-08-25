import { FaStar } from 'react-icons/fa';
import styles from './Comment.module.scss'
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

const Comment = () => {
    return (
        <div className={styles.comment}>
            <div className={`${styles.comment__name} ${styles.name}`}>
                <div className={styles.name__logo}>
                    <div className={styles.name__text}>sj</div>
                </div>
                <div className={styles.name__full}>Stacey J.</div>
            </div>
            <div className={styles.comment__flex}>
                <div className={styles.comment__photo}>
                    <img src="https://i.redd.it/iuajaus83u6b1.jpg" alt="" />
                </div>
                <div className={styles.comment__wrapper}>
                    <div className={styles.comment__recommendation}>
                        <BiSolidLike className={styles['comment__recommendation-logo']} />
                        <div className={styles['comment__recommendation-text']}>
                            I recommend this product
                        </div>
                    </div>
                    <div className={styles.comment__stars}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className={`${styles.comment__text} ${styles.text}`}>
                        <h2 className={styles.text__title}>
                            Perfect for my daughter's graduation!
                        </h2>
                        <div className={styles.text__comment}>
                            My daughter needed a black dress to wear under her graduation gown, and this dress is exactly what she was wanting. She is 5'7" and 120 lbs, and the small fits her perfectly. The dress is below the knee, but not quite long enough to be a midi dress on her. The material is light and breathable which is needed for the end of May in the south!
                        </div>
                        <div className={`${styles['text__comment-product']} ${styles['comment-product']}`}>
                            <div className={styles['comment-product__name']}>
                                Ariella Round Neck Mesh Embroidered Puff Sleeve Dress
                            </div>
                            <div className={styles['comment-product__color-size']}>
                                - Black / S
                            </div>
                        </div>
                        <div className={`${styles['text__comment-helpful']} ${styles['comment-helpful']}`}>
                            <div className={styles['comment-helpful__text']}>
                                Was this helpful?
                            </div>
                            <div className={styles['comment-helpful__flex']}>
                                <div className={`${styles['comment-helpful__likes']} ${styles.likes}`}>
                                    <button className={styles.likes__btn}>
                                        <BiSolidLike />
                                    </button>
                                    <div className={styles.likes__quantity}>2</div>
                                </div>
                                <div className={`${styles['comment-helpful__dislikes']} ${styles.dislikes}`}>
                                    <button className={styles.dislikes__btn}>
                                        <BiSolidDislike />
                                    </button>
                                    <div className={styles.dislikes__quantity}>0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment