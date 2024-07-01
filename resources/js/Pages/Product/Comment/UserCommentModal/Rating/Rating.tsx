import { FC } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import styles from './Rating.module.scss';

interface IRating {
    rating: number;
    onRatingChange: (value: number) => void;
}

const Rating: FC<IRating> = ({ rating, onRatingChange }) => {
    console.log(rating);
    const getStarIcons = (rating: number) => {
        const icons = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                icons.push(<FaStar key={i} onClick={() => onRatingChange(i)} />);
            } else if (rating >= i - 0.5) {
                icons.push(<FaStarHalfAlt key={i} onClick={() => onRatingChange(i - 0.5)} />);
            } else {
                icons.push(<FaRegStar key={i} onClick={() => onRatingChange(i)} />);
            }
        }
        return icons;
    };

    return (
        <div className={styles['rating']}>
            <div className={styles['rating__title']}>Rating</div>
            <div className={styles['rating__score']}>
                {getStarIcons(rating)}
            </div>
        </div>
    );
};

export default Rating;
