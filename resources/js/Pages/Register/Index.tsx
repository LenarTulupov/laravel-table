import Logo from '@/Components/ui/Logo/Logo'
import { Link, useForm } from '@inertiajs/react'
import { FormEvent, useEffect, useRef } from 'react'
import InputField from '@/Components/InputField/InputField'
import Button from '@/Components/ui/Buttons/Button/Button'
import styles from './Index.module.scss'

const Index = () => {
  const { data, setData, post, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/register', {
      onError: (err) => {
        console.log(err);
      }
    })
  }

  useEffect(() => inputRef.current?.focus(), []);

  return (
    <form onSubmit={handleSubmit} className={styles.register}>
      <div className="container">
        <div className={`${styles.register__form} ${styles.form}`}>
          <div className={styles.form__inner}>
            <Link href='/' className={styles.form__logo}>
              <Logo className={styles.logo} />
            </Link>
            <div className={styles.form__name}>
              <InputField
                htmlFor='name'
                id='name'
                value={data.name}
                onChange={e => setData('name', e.target.value)}
                placeholder='Enter your name'
                required={true}
                ref={inputRef} />
              {errors.name && <div className={styles.form__error}>{errors.name}</div>}
            </div>
            <div className={styles.form__email}>
              <InputField
                htmlFor='email'
                id='email'
                value={data.email}
                onChange={e => setData('email', e.target.value)}
                placeholder='Enter your email'
                required={true} />
              {errors.email && <div className={styles.form__error}>{errors.email}</div>}
            </div>
            <div className={styles.form__password}>
              <InputField
                htmlFor='password'
                id='password'
                value={data.password}
                onChange={e => setData('password', e.target.value)}
                placeholder='Enter your password'
                required={true} />
              {errors.password &&
                <div className={styles.form__error}>
                  {errors.password}
                </div>
              }
            </div>
            <div className={styles['form__password-confirmation']}>
              <InputField
                htmlFor='password_confirmation'
                id='password_confirmation'
                value={data.password_confirmation}
                onChange={e => setData('password_confirmation', e.target.value)}
                placeholder='Confirm your password'
                required={true} />
              {errors.password_confirmation &&
                <div className={styles.form__error}>
                  {errors.password_confirmation}
                </div>
              }
            </div>
            <Button
              variant='black'
              type='submit'
              className={styles.form__btn}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Index