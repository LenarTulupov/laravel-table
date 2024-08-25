import Radio from '@/Components/Radio/Radio';
import styles from './Recommend.module.scss'
import { ChangeEvent, FC } from 'react';

interface IRecommend {
    recommend: string
    setRecommend: (value: string) => void
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
    className?: string
}

const Recommend: FC<IRecommend> = ({ recommend, setRecommend, className }) => {
<<<<<<< HEAD
=======
=======
}

const Recommend: FC<IRecommend> = ({ recommend, setRecommend }) => {
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRecommend(e.target.value)
    }

    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
        <div className={`${styles['recommend']} ${className || ''}`}>
            <div className={styles.recommend__title}>
                Do you recommend this product?
            </div>
<<<<<<< HEAD
=======
=======
        <div className={styles['recommend']}>
            <div className={styles.recommend__title}>Do you recommend this product?</div>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
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
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
                    <label 
                        htmlFor="yes" 
                        className={styles['recommend__yes-label']}
                    >
                        Yes
                    </label>
<<<<<<< HEAD
=======
=======
                    <label htmlFor="yes" className={styles['recommend__yes-label']}>Yes</label>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
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
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
                    <label 
                        htmlFor="no" 
                        className={styles['recommend__no-label']}
                    >
                        No
                    </label>
<<<<<<< HEAD
=======
=======
                    <label htmlFor="no" className={styles['recommend__no-label']}>No</label>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
                </div>
            </div>
        </div>
    )
}

export default Recommend