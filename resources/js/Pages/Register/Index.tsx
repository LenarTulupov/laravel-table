import InputLabel from '@/Components/InputLabel/InputLabel'
<<<<<<< HEAD
import TextInput from '@/Components/TextInput/TextInput'
import Logo from '@/Components/Logo/Logo'
import { Link, useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import styles from './Index.module.scss'
=======
import styles from './Index.module.scss'
import TextInput from '@/Components/TextInput/TextInput'
import Logo from '@/Components/Logo/Logo'
import { Link, useForm } from '@inertiajs/react'
import { FormEvent, useState } from 'react'
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

const Index = () => {

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
              <InputLabel htmlFor='name'>Name</InputLabel>
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
              <InputLabel htmlFor='email'>Email</InputLabel>
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
              <InputLabel htmlFor='password'>Password</InputLabel>
              <TextInput
                id='password'
                required
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                placeholder='Enter your password'
              />
<<<<<<< HEAD
              {errors.password &&
                <div className={styles.form__error}>
                  {errors.password}
                </div>
              }
=======
              {errors.password && <div className={styles.form__error}>{errors.password}</div>}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
            </div>
            <div className={styles['form__password-confirmation']}>
              <InputLabel htmlFor='password_confirmation'>Confirm Password</InputLabel>
              <TextInput
                id='password_confirmation'
                required
                value={data.password_confirmation}
                onChange={(e) => setData('password_confirmation', e.target.value)}
                placeholder='Confirm your password'
              />
<<<<<<< HEAD
              {errors.password_confirmation && 
                <div className={styles.form__error}>
                  {errors.password_confirmation}
                </div>
              }
=======
              {errors.password_confirmation && <div className={styles.form__error}>{errors.password_confirmation}</div>}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
            </div>
            <button type='submit' className={styles.form__btn}>Sign Up</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Index