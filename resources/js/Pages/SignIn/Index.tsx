<<<<<<< HEAD
import { FormEvent } from "react"
import { Link, useForm } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox/Checkbox";
import InputLabel from "@/Components/InputLabel/InputLabel";
import TextInput from "@/Components/TextInput/TextInput";
import Logo from "@/Components/Logo/Logo";
import UserLayout from "@/Layouts/UserLayout/UserLayout";
import Container from "@/Components/Container/Container";
import styles from './Index.module.scss'
=======
import Checkbox from "@/Components/Checkbox/Checkbox";
import InputLabel from "@/Components/InputLabel/InputLabel";
import TextInput from "@/Components/TextInput/TextInput";
import { FormEvent, useState } from "react"
import styles from './Index.module.scss'
import { Link, useForm } from "@inertiajs/react";
import Logo from "@/Components/Logo/Logo";
import UserLayout from "@/Layouts/UserLayout/UserLayout";
import Container from "@/Components/Container/Container";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

const Index = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/signin')
    };


    return (
        <main className={styles['sign-in']}>
            <Container>
                <UserLayout />
                <div className={styles.content}>

                    <div className={styles.flex}>
                        <div className={styles['sign-in__content']}>
<<<<<<< HEAD
                            <form
                                onSubmit={handleSubmit}
                                className={styles['sign-in__inner']}
                            >
                                <Link href="/" className={styles['sign-in__logo']}>
                                    <Logo className={styles.logo} />
                                </Link>
=======
                            <form onSubmit={handleSubmit} className={styles['sign-in__inner']}>

                                <Link href="/" className={styles['sign-in__logo']}>
                                    <Logo className={styles.logo} />
                                </Link>

>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                                <div className={styles['sign-in__email']}>
                                    <InputLabel htmlFor="email">Email</InputLabel>
                                    <TextInput
                                        id="email"
                                        required
                                        placeholder="Enter your email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
<<<<<<< HEAD
                                    {errors.email &&
                                        <div className={styles.form__error}>
                                            {errors.email}
                                        </div>
                                    }
=======
                                    {errors.email && <div className={styles.form__error}>{errors.email}</div>}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                                </div>
                                <div className={styles['sign-in__password']}>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <TextInput
                                        id="password"
                                        required
                                        placeholder="Enter your password"
                                        value={data.password}
<<<<<<< HEAD
                                        onChange={
                                            (e) => setData('password', e.target.value)
                                        }
                                    />
                                    {errors.password &&
                                        <div className={styles.form__error}>
                                            {errors.password}
                                        </div>}
                                </div>
                                <div className={styles['sign-in__flex']}>
                                    <div className={styles['sign-in__checkbox']}>
                                        <Checkbox
                                            id="checkbox"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData('remember', e.target.checked)}
                                        />
                                        <InputLabel htmlFor="checkbox">
                                            Remember me
                                        </InputLabel>
=======
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    {errors.password && <div className={styles.form__error}>{errors.password}</div>}
                                </div>
                                <div className={styles['sign-in__flex']}>
                                    <div className={styles['sign-in__checkbox']}>
                                        <Checkbox id="checkbox" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} />
                                        <InputLabel htmlFor="checkbox">Remember me</InputLabel>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                                    </div>
                                    <Link href="#!">
                                        Forgot your password?
                                    </Link>
                                </div>
                                <button type="submit" className={styles['sign-in__btn']}>
                                    Log in
                                </button>
                            </form>
                        </div>
                        <div className={styles['blue-side']}>
                            <div className={styles['blue-side__content']}>

<<<<<<< HEAD
                                <h1 className={styles['blue-side__header']}>
                                    Hello, Friend!
                                </h1>
                                <p className={styles['blue-side__content-text']}>
                                    Enter your personal details and start journey with us
                                </p>
                                <Link
                                    href="/register"
                                    className={styles['blue-side__btn']}
                                >
                                    Sign up
                                </Link>
=======
                                <h1 className={styles['blue-side__header']}>Hello, Friend!</h1>
                                <p className={styles['blue-side__content-text']}>Enter your personal details and start journey with us</p>
                                <Link href="/register" className={styles['blue-side__btn']}>Sign up</Link>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Index