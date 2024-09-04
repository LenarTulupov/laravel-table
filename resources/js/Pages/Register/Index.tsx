import Logo from '@/Components/ui/Logo/Logo'
import { Link, useForm } from '@inertiajs/react'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { TypeErrorCode } from '@/utils/getErrorMessage'
import InputField from '@/Components/InputField/InputField'
import Button from '@/Components/ui/Buttons/Button/Button'
import Container from '@/Components/ui/Container/Container'
import styles from './Index.module.scss'

type TypeFormFields = 'name' | 'email' | 'password' | 'password_confirmation';

const Index = () => {
  const { data, setData, post } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [errors, setErrors] = useState<Record<TypeFormFields, TypeErrorCode | ''>>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [touched, setTouched] = useState<Record<TypeFormFields, boolean>>({
    name: false,
    email: false,
    password: false,
    password_confirmation: false
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const validate = (field: TypeFormFields) => {
    const newErrors = { ...errors };

    if (field === 'name' && data.name.length < 3) {
      newErrors.name = 'NAME_ERROR';
    } else if (field === 'name') {
      newErrors.name = '';
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (field === 'email' && !emailRegex.test(data.email)) {
      newErrors.email = 'EMAIL_INVALID';
    } else if (field === 'email') {
      newErrors.email = '';
    }
  
    if (field === 'password' && data.password.length < 8) {
      newErrors.password = 'PASSWORD_ERROR';
    } else if (field === 'password') {
      newErrors.password = '';
    }
  
    if (field === 'password_confirmation') {
      if (data.password_confirmation === '') {
        newErrors.password_confirmation = 'PASSWORD_CONFIRMATION_REQUIRED';
      } else if (data.password !== data.password_confirmation) {
        newErrors.password_confirmation = 'PASSWORD_MISMATCH';
      } else {
        newErrors.password_confirmation = '';
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (field: TypeFormFields, value: string) => {
    setData(field, value);

    if (!touched[field]) {
      setTouched({
        ...touched,
        [field]: true
      });
    }

    validate(field);
  };

  const handleBlur = (field: TypeFormFields) => {
    setTouched({
      ...touched,
      [field]: true
    });
    validate(field);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(errors).every(error => error === '')) {
      post('/register', {
        onError: (err) => {
          console.log(err);
        }
      });
    }
  };

  useEffect(() => inputRef.current?.focus(), []);

  return (
    <main className={styles.register}>
      <Container>
        <form
          className={`${styles.register__form} ${styles.form}`}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.form__inner}>
            <Link href='/' className={styles.form__logo}>
              <Logo className={styles.logo} />
            </Link>
            <div className={styles.form__name}>
              <InputField
                type='text'
                htmlFor='name'
                id='name'
                value={data.name}
                onChange={e => handleChange('name', e.target.value)}
                placeholder='Enter your name'
                required={true}
                ref={inputRef}
                error={touched.name ? errors.name : ''}
                onBlur={() => handleBlur('name')}
              />
            </div>
            <div className={styles.form__email}>
              <InputField
                type='email'
                htmlFor='email'
                id='email'
                value={data.email}
                onChange={e => handleChange('email', e.target.value)}
                placeholder='Enter your email'
                required={true}
                error={touched.email ? errors.email : ''}
                onBlur={() => handleBlur('email')}
              />
            </div>
            <div className={styles.form__password}>
              <InputField
                type='password'
                htmlFor='password'
                id='password'
                value={data.password}
                onChange={e => handleChange('password', e.target.value)}
                placeholder='Enter your password'
                required={true}
                error={touched.password ? errors.password : ''}
                onBlur={() => handleBlur('password')}
              />
            </div>
            <div className={styles['form__password-confirmation']}>
              <InputField
                type='password'
                htmlFor='password_confirmation'
                id='password_confirmation'
                value={data.password_confirmation}
                onChange={e => handleChange('password_confirmation', e.target.value)}
                placeholder='Confirm your password'
                required={true}
                error={touched.password_confirmation ? errors.password_confirmation : ''}
                onBlur={() => handleBlur('password_confirmation')}
              />
            </div>
            <Button
              variant='black'
              type='submit'
              className={styles.form__btn}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Container>
    </main>
  )
}

export default Index;
