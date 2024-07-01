import Radio from '@/Components/Radio/Radio';
import styles from './Recommend.module.scss'

const Recommend = ({ recommend, setRecommend }) => {

    const handleChange = (e) => {
        setRecommend(e.target.value)
    }

    console.log(recommend);
    return (
        <div className={styles['recommend']}>
            <div className={styles.recommend__title}>Do you recommend this product?</div>
            <div className={styles.recommend__flex}>
                <div className={`${styles['recommend__yes']}`}>
                    <Radio
                    
                    />
                    <input 
                        type="radio" 
                        id='yes' 
                        className={styles['recommend__yes-input']} 
                        value={recommend}
                        checked={recommend === 'yes'}
                        onChange={handleChange}
                    />
                    <label htmlFor="yes" className={styles['recommend__yes-label']}>Yes</label>
                </div>
                <div className={`${styles['recommend__no']}`}>
                    <Radio
                    
                    />
                    <input 
                        type="radio" 
                        id='no' 
                        className={styles['recommend__no-input']} 
                        value={recommend}
                        checked={recommend === 'no'}
                        onChange={handleChange}
                    />
                    <label htmlFor="no" className={styles['recommend__no-label']}>No</label>
                </div>
            </div>
        </div>
    )
}

export default Recommend