import WhiteBgButton from '@/Components/Buttons/WhiteBgButton/WhiteBgButton';
import styles from './FeedbackRatings.module.scss'
import { FaRegStar, FaStar } from "react-icons/fa";

const FeedbackRatings = () => {
    const reviewsData = [
        { stars: 5, quantity: 5 },
        { stars: 4, quantity: 5 },
        { stars: 3, quantity: 5 },
        { stars: 2, quantity: 5 },
        { stars: 1, quantity: 5 },
      ];

      const generateStars = (count) => {
        const stars = [];

        for(let i = 0; i < 5; i++) {
            stars.push(i < count ? <FaStar key={i}/> : <FaRegStar key={i}/>)
        }
        return stars;
      }

  return (
    <div className={`${styles.rating__reviews} ${styles.reviews}`}>
      {reviewsData.map((review, index) => (
        <div key={index} className={styles[`reviews-${review.stars}`]}>
          <div className={`${styles[`reviews-${review.stars}__flex`]} ${styles.flex}`}>
            <div className={styles.flex__stars}>
              {generateStars(review.stars)}
            </div>
            <div className={styles.flex__lines}>
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className={styles['flex__lines-line']}></div>
              ))}
            </div>
            <div className={styles.flex__quantity}>
              <div className={styles['flex__quantity-number']}>{review.quantity}</div>
            </div>
          </div>
        </div>
      ))}
      <WhiteBgButton text='Write a review' />
      <div className={`${styles.reviews__content} ${styles.content}`}>
        <div className={styles.content__title}>Reviews 3</div>
      </div>
    </div>
  )
}

export default FeedbackRatings