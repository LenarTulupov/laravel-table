import { router, usePage } from "@inertiajs/react";
import styles from './Index.module.scss'

const Index = () => {
    const { auth } = usePage().props;
    const user = auth.user;

    const handleLogout = () => {
        router.post('/logout', {}, {
            onFinish: () => {

            }
        })
    }
    return (
        <main className={styles.profile}>
            <div className="container">
<<<<<<< HEAD
                <div className={styles.flex}>
                    <div>Добро Пожаловать! {user.name}</div>
                    <button onClick={handleLogout} className={styles.btn}>
                        Выйти из профиля
                    </button>
=======

                <div className={styles.flex}>

                    <div>Добро Пожаловать! {user.name}</div>
                    <button onClick={handleLogout} className={styles.btn}>Выйти из профиля</button>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                </div>
            </div>
        </main>
    )
}

export default Index