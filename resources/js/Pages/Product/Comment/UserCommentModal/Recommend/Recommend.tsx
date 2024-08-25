import Radio from '@/Components/Radio/Radio';
import styles from './Recommend.module.scss'
import { ChangeEvent, FC } from 'react';

interface IRecommend {
    recommend: string
    setRecommend: (value: string) => void
<<<<<<< HEAD
    className?: string
}

const Recommend: FC<IRecommend> = ({ recommend, setRecommend, className }) => {
=======
}

const Recommend: FC<IRecommend> = ({ recommend, setRecommend }) => {
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRecommend(e.target.value)
    }

    return (
<<<<<<< HEAD
        <div className={`${styles['recommend']} ${className || ''}`}>
            <div className={styles.recommend__title}>
                Do you recommend this product?
            </div>
=======
        <div className={styles['recommend']}>
            <div className={styles.recommend__title}>Do you recommend this product?</div>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
            <div className={styles.recommend__flex}>
                <div className={`${styles['recommend__yes']}`}>
                    <Radio
                        id='yes'
                        className={styles['recommend__yes-input']}
                        name='recommend'
                        value='yes'
                        checked={recommend === 'yes'}
                        onChange={handleChange}
                    />
<<<<<<< HEAD
                    <label 
                        htmlFor="yes" 
                        className={styles['recommend__yes-label']}
                    >
                        Yes
                    </label>
=======
                    <label htmlFor="yes" className={styles['recommend__yes-label']}>Yes</label>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                </div>
                <div className={`${styles['recommend__no']}`}>
                    <Radio
                        id="no"
                        className={styles['recommend__no-input']}
                        name="recommend"
                        value="no"
                        checked={recommend === 'no'}
                        onChange={handleChange}
                    />
<<<<<<< HEAD
                    <label 
                        htmlFor="no" 
                        className={styles['recommend__no-label']}
                    >
                        No
                    </label>
=======
                    <label htmlFor="no" className={styles['recommend__no-label']}>No</label>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                </div>
            </div>
        </div>
    )
}

export default Recommend