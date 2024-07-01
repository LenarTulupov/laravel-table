import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import styles from './Rating.module.scss'
import { FC } from 'react';

interface IRating {
    rating: number
    reviews: number
}

const Rating: FC<IRating> = ({rating, reviews}) => {
    const countRating = rating ?? 0;

    return (
        <section className={styles.rating}>
            <h2 className={styles.rating__title}>Rating</h2>
            <div className={styles.rating__average}>
                <div className={styles['rating__average-number']}>
                   { countRating } 
                </div>
                <div className={`${styles['rating__average-stars']} 
                  ${styles['stars-average']}`}
                >
                    <FaStar className={styles['stars-average__yellow']} />
                    <FaStar className={styles['stars-average__yellow']} />
                    <FaStar className={styles['stars-average__yellow']} />
                    <FaStar className={styles['stars-average__yellow']} />
                    <FaStarHalfAlt className={styles['stars-average__half']} />
                </div>
            </div>
            <div className={styles.rating__reviewers}>Based on { reviews.length } Reviews</div>
            <div className={`${styles.rating__reviews} ${styles.reviews}`}>
                <div className={styles['reviews-5']}>
                    <div className={`${styles['reviews-5__flex']} ${styles.flex}`}>
                        <div className={styles.flex__stars}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className={styles.flex__lines}>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                        </div>
                        <div className={styles.flex__quantity}>
                            <div className={styles['flex__quantity-number']}>5</div>
                        </div>
                    </div>
                </div>
                <div className={styles['reviews-4']}>
                    <div className={`${styles['reviews-4__flex']} ${styles.flex}`}>
                        <div className={styles.flex__stars}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                        </div>
                        <div className={styles.flex__lines}>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                        </div>
                        <div className={styles.flex__quantity}>
                            <div className={styles['flex__quantity-number']}>5</div>
                        </div>
                    </div>
                </div>
                <div className={styles['reviews-3']}>
                    <div className={`${styles['reviews-3__flex']} ${styles.flex}`}>
                        <div className={styles.flex__stars}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div className={styles.flex__lines}>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                        </div>
                        <div className={styles.flex__quantity}>
                            <div className={styles['flex__quantity-number']}>5</div>
                        </div>
                    </div>
                </div>
                <div className={styles['reviews-2']}>
                    <div className={`${styles['reviews-2__flex']} ${styles.flex}`}>
                        <div className={styles.flex__stars}>
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div className={styles.flex__lines}>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                        </div>
                        <div className={styles.flex__quantity}>
                            <div className={styles['flex__quantity-number']}>5</div>
                        </div>
                    </div>
                </div>
                <div className={styles['reviews-1']}>
                    <div className={`${styles['reviews-1__flex']} ${styles.flex}`}>
                        <div className={styles.flex__stars}>
                            <FaStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div className={styles.flex__lines}>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                            <div className={styles['flex__lines-line']}></div>
                        </div>
                        <div className={styles.flex__quantity}>
                            <div className={styles['flex__quantity-number']}>5</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rating