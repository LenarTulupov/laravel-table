import InputLabel from '@/Components/InputLabel/InputLabel'
import styles from './Register.module.scss'
import TextInput from '@/Components/TextInput/TextInput'
import Logo from '@/Components/Logo/Logo'
import { Link, useForm } from '@inertiajs/react'
import { FormEvent, useState } from 'react'

const Register = () => {

  const { data, setData, post, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/register', {
      onError: (err) => {
        console.log(err);
      }
    })
  }




  return (
    <form onSubmit={handleSubmit} className={styles.register}>
      <div className="container">
        <div className={`${styles.register__form} ${styles.form}`}>
          <div className={styles.form__inner}>
            <Link href='/' className={styles.form__logo}>
              <Logo className={styles.logo} />
            </Link>
            <div className={styles.form__name}>
              <InputLabel htmlFor='name' text='Name' />
              <TextInput
                id='name'
                required
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                placeholder='Enter your name'
              />
              {errors.name && <div className={styles.form__error}>{errors.name}</div>}
            </div>
            <div className={styles.form__email}>
              <InputLabel htmlFor='email' text='Email' />
              <TextInput
                id='email'
                required
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                placeholder='Enter your email'
              />
              {errors.email && <div className={styles.form__error}>{errors.email}</div>}
            </div>
            <div className={styles.form__password}>
              <InputLabel htmlFor='password' text='Password' />
              <TextInput
                id='password'
                required
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                placeholder='Enter your password'
              />
              {errors.password && <div className={styles.form__error}>{errors.password}</div>}
            </div>
            <div className={styles['form__password-confirmation']}>
              <InputLabel htmlFor='password_confirmation' text='Confirm Password' />
              <TextInput
                id='password_confirmation'
                required
                value={data.password_confirmation}
                onChange={(e) => setData('password_confirmation', e.target.value)}
                placeholder='Confirm your password'
              />
              {errors.password_confirmation && <div className={styles.form__error}>{errors.password_confirmation}</div>}
            </div>
            <button type='submit' className={styles.form__btn}>Sign Up</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Register