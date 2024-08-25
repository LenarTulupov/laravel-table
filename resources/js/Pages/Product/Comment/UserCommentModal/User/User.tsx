import InputLabel from '@/Components/InputLabel/InputLabel';
import styles from './User.module.scss'
import TextInput from '@/Components/TextInput/TextInput';
<<<<<<< HEAD
import { FC, useEffect, useRef } from 'react';
=======
import { ChangeEvent, FC } from 'react';
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

interface IUser {
    name: string
    setName: (value: string) => void
    email: string
    setEmail: (value: string) => void
}

const User: FC<IUser> = ({ name, setName, email, setEmail }) => {
<<<<<<< HEAD
    const inputRef = useRef(null);

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
    return (
        <div className={`${styles.user}`}>
            <div className={styles['user__name']}>
                <InputLabel
<<<<<<< HEAD
=======
                    text='Name'
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
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
<<<<<<< HEAD
                    ref={inputRef}
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                />
            </div>
            <div className={styles['user__email']}>
                <InputLabel
<<<<<<< HEAD
=======
                    text='email'
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
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