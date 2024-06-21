import styles from './User.module.scss'

const User = () => {
    return (
        <div className={`${styles.user}`}>
            <div className={styles['user__name']} >
                <label htmlFor="name" className={styles['user__name-label']}>Name</label>
                <input type="text" id='name' required className={styles['user__name-input']} />
            </div>
            <div className={styles['user__email']}>
                <label htmlFor="email" className={styles['user__email-label']}>Email</label>
                <input type="text" id='email' required className={styles['user__email-input']} />
            </div>
        </div>
    )
}

export default User