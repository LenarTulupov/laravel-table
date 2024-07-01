import InputLabel from '@/Components/InputLabel/InputLabel';
import styles from './User.module.scss'
import TextInput from '@/Components/TextInput/TextInput';

const User = ({ name, setName, email, setEmail }) => {
    return (
        <div className={`${styles.user}`}>
            <div className={styles['user__name']}>
                <InputLabel
                    text='Name'
                    htmlFor='name'
                    className={styles['user__name-label']}
                />
                <TextInput
                    id='name'
                    required
                    className={styles['user__name-input']}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className={styles['user__email']}>
                <InputLabel
                    text='email'
                    htmlFor='email'
                    className={styles['user__email-label']}
                />
                <TextInput
                    id='email'
                    required
                    className={styles['user__email-input']}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>
    )
}

export default User