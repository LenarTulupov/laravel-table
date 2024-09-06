import { FormEvent, useEffect, useRef, useState } from "react"
import { Link, useForm } from "@inertiajs/react";
import InputField from "@/Components/InputField/InputField";
import UserLayout from "@/Layouts/UserLayout/UserLayout";
import Container from "@/Components/ui/Container/Container";
import Button from "@/Components/ui/Buttons/Button/Button";
import CheckboxLabel from "@/Components/CheckboxLabel/CheckboxLabel";
import SignUpSection from "./SignUpSection/SignUpSection";
import Logo from "@/Components/ui/Logo/Logo";
import styles from './Index.module.scss'

interface ISignInFormData {
    email: string;
    password: string;
    remember: boolean;
}

const Index = () => {
    const { data, setData, post, errors } = useForm<ISignInFormData>({
        email: '',
        password: '',
        remember: false
    });

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

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
                            <form
                                onSubmit={handleSubmit}
                                className={styles['sign-in__form']}
                            >
                                <Link href="/" className={styles['sign-in__logo']}>
                                    <Logo className={styles.logo} />
                                </Link>
                                <InputField
                                    className={styles['sign-in__email']}
                                    type="email"
                                    ref={inputRef}
                                    id="email"
                                    htmlFor="email"
                                    label="Email"
                                    value={data.email}
                                    placeholder="Enter your email"
                                    onChange={e => setData('email', e.target.value)}
                                    required={true}
                                />
                                <InputField
                                    className={styles['sign-in__password']}
                                    type="password"
                                    id="password"
                                    htmlFor="password"
                                    label="Password"
                                    value={data.password}
                                    placeholder="Enter your password"
                                    onChange={e => setData('password', e.target.value)}
                                    required={true}
                                />
                                <div className={styles['sign-in__flex']}>
                                    <CheckboxLabel
                                        id="checkbox"
                                        checked={data.remember}
                                        onChange={(e => setData('remember', e.target.checked))}
                                        htmlFor="checkbox"
                                        label="Remember me"
                                    />
                                    <Link href="#!" className={styles['sign-in__flex-forgot']}>
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Button
                                    type="submit"
                                    variant="black"
                                    className={styles['sign-in__btn']}
                                >
                                    Log in
                                </Button>
                            </form>
                        </div>
                        <SignUpSection/>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Index
