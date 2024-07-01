import TextInput from '@/Components/TextInput';
import styles from './User.module.scss'
import InputLabel from '@/Components/InputLabel';

const User = ({ name, setName, email, setEmail }) => {
    console.log(name);
    return (
        <div className={`${styles.user}`}>
            <div className={styles['user__name']} >
                <InputLabel
                    htmlFor='name'
                    className={styles['user__name-label']}
                >
                    Name
                </InputLabel>
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
                    htmlFor='email'
                    className={styles['user__email-label']}
                >
                    Email
                </InputLabel>
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