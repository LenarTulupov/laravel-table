import { Link, useForm } from '@inertiajs/react'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { TypeErrorCode } from '@/utils/getErrorMessage'
import InputField from '@/Components/InputField/InputField'
import Button from '@/Components/ui/Buttons/Button/Button'
import Container from '@/Components/ui/Container/Container'
import IconButton from '@/Components/ui/Buttons/IconButton/IconButton'
import Logo from '@/Components/ui/Logo/Logo'
import { BiSolidHide } from 'react-icons/bi'
import { BiSolidShow } from "react-icons/bi";
import styles from './Index.module.scss'
import InputLabel from '@/Components/ui/InputLabel/InputLabel'
import TextInput from '@/Components/ui/TextInput/TextInput'
import ErrorMessage from '@/Components/ui/ErrorMessage/ErrorMessage'
import { validateEmail, validateName, validatePassword, validatePasswordConfirmation } from '@/utils/validation'

type TypeFormFields = 'name' | 'email' | 'password' | 'password_confirmation';

const Index = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
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

  const handleShowPassword = () => {
    setShowPassword(p => !p);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const newErrors = { ...errors };

    newErrors.name = validateName(data.name);
    newErrors.email = validateEmail(data.email);
    newErrors.password = validatePassword(data.password);
    newErrors.password_confirmation = validatePasswordConfirmation(data.password, data.password_confirmation);

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
  };

  const handleBlur = (field: TypeFormFields) => {
    setTouched({
      ...touched,
      [field]: true
    });
  };

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

  useEffect(() => {
    validate();
  }, [data]);

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
              <div className={`
                  ${styles['form__password-wrapper']} 
                  ${touched.password &&
                  errors.password ?
                  styles['form__password-wrapper_error'] : ''}
              `}>
                <InputLabel htmlFor='password' />
                <div className={styles['form__password-wrapper-flex']}>
                  <TextInput
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    value={data.password}
                    onChange={e => handleChange('password', e.target.value)}
                    placeholder='Enter your password'
                    required={true}
                    error={touched.password ? errors.password : ''}
                    onBlur={() => handleBlur('password')}
                    inputStyles={styles['input-styles']} />
                  <IconButton
                    disabled={data.password.length === 0}
                    onClick={handleShowPassword}
                    className={styles['form__password-show']}
                  >
                    {data.password.length > 0 && (
                      showPassword ? (
                        <BiSolidShow />
                      ) : (
                        <BiSolidHide />
                      )
                    )}
                  </IconButton>
                </div>
              </div>
              {touched.password && errors.password && (
                <ErrorMessage code={errors.password} />
              )}
            </div>
            <div className={styles['form__password-confirmation']}>
              <InputField
                type={showPassword ? 'text' : 'password'}
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
