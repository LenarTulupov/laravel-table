import { Link } from '@inertiajs/react';
import styles from './SignUpSection.module.scss'

const SignUpSection = () => {
    return (
        <section className={styles['blue-side']}>
            <div className={styles['blue-side__content']}>
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
            </div>
        </section>
    );
};

export default SignUpSection