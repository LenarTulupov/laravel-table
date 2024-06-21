import styles from './Recommend.module.scss'

const Recommend = () => {
    return (
        <div className={styles['recommend']}>
            <div className={styles.recommend__title}>Do you recommend this product?</div>
            <div className={styles.recommend__flex}>
                <div className={`${styles['recommend__yes']}`}>
                    <input type="radio" id='yes' className={styles['recommend__yes-input']} />
                    <label htmlFor="yes" className={styles['recommend__yes-label']}>Yes</label>
                </div>
                <div className={`${styles['recommend__no']}`}>
                    <input type="radio" id='no' className={styles['recommend__no-input']} />
                    <label htmlFor="no" className={styles['recommend__no-label']}>No</label>
                </div>
            </div>
        </div>
    )
}

export default Recommend