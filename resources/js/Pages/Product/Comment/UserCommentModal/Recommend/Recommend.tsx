import Radio from '@/Components/ui/Radio/Radio';
import styles from './Recommend.module.scss'
import { ChangeEvent, FC } from 'react';

interface IRecommend {
    recommend: string
    setRecommend: (value: string) => void
    className?: string
}

const Recommend: FC<IRecommend> = ({ recommend, setRecommend, className }) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRecommend(e.target.value)
    }

    return (
        <div className={`${styles['recommend']} ${className || ''}`}>
            <div className={styles.recommend__title}>
                Do you recommend this product?
            </div>
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
                    <label
                        htmlFor="yes"
                        className={styles['recommend__yes-label']}
                    >
                        Yes
                    </label>
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
                    <label
                        htmlFor="no"
                        className={styles['recommend__no-label']}
                    >
                        No
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Recommend