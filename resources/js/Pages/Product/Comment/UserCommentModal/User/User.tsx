import InputLabel from '@/Components/InputLabel/InputLabel';
import styles from './User.module.scss'
import TextInput from '@/Components/TextInput/TextInput';
<<<<<<< HEAD
import { FC, useEffect, useRef } from 'react';
=======
<<<<<<< HEAD
import { FC, useEffect, useRef } from 'react';
=======
import { ChangeEvent, FC } from 'react';
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a

interface IUser {
    name: string
    setName: (value: string) => void
    email: string
    setEmail: (value: string) => void
}

const User: FC<IUser> = ({ name, setName, email, setEmail }) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
    const inputRef = useRef(null);

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

<<<<<<< HEAD
=======
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
    return (
        <div className={`${styles.user}`}>
            <div className={styles['user__name']}>
                <InputLabel
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                    text='Name'
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
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
<<<<<<< HEAD
                    ref={inputRef}
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
                />
            </div>
            <div className={styles['user__email']}>
                <InputLabel
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                    text='email'
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
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