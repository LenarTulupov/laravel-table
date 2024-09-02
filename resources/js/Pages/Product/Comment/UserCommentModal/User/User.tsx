import { FC, forwardRef, useEffect, useRef } from 'react';
import InputField from '@/Components/InputField/InputField';
import styles from './User.module.scss'

interface IUser {
    name: string;
    setName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
}

const User = forwardRef<HTMLInputElement, IUser>(({
    name,
    setName,
    email,
    setEmail
}, ref) => {

    return (
        <div className={`${styles.user}`}>
            <InputField
                className={styles.user__name}
                type='text'
                htmlFor='name'
                placeholder='Enter your name'
                id='name'
                value={name}
                onChange={e => setName(e.target.value)} 
                ref={ref}
                required={true}/>
                
            <InputField
                className={styles.user__email}
                type='email'
                htmlFor='email'
                placeholder='Enter your email'
                id='email'
                value={email}
                onChange={e => setEmail(e.target.value)} 
                required={true}/>
        </div>
    )
});

export default User