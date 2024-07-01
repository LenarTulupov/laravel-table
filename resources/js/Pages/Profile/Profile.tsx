import { router, usePage } from "@inertiajs/react";
import styles from './Profile.module.scss'

const Profile = () => {
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

                <div className={styles.flex}>

                    <div>Добро Пожаловать! {user.name}</div>
                    <button onClick={handleLogout} className={styles.btn}>Выйти из профиля</button>
                </div>
            </div>
        </main>
    )
}

export default Profile