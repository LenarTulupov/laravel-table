import InputLabel from '@/Components/InputLabel/InputLabel';
import styles from './User.module.scss'
import TextInput from '@/Components/TextInput/TextInput';
import { FC, useEffect, useRef } from 'react';

interface IUser {
    name: string
    setName: (value: string) => void
    email: string
    setEmail: (value: string) => void
}

const User: FC<IUser> = ({ name, setName, email, setEmail }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    return (
        <div className={`${styles.user}`}>
            <div className={styles['user__name']}>
                <InputLabel
                    htmlFor='name'
                    className={styles['user__name-label']}
                />
                <TextInput
                    placeholder='Enter your name'
                    id='name'
                    required
                    className={styles['user__name-input']}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ref={inputRef}
                />
            </div>
            <div className={styles['user__email']}>
                <InputLabel
                    htmlFor='email'
                    className={styles['user__email-label']}
                />
                <TextInput
                    placeholder='Enter your e-mail'
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