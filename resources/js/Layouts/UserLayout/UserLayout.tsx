import { usePage } from "@inertiajs/react";

const UserLayout = () => {
    const { auth } = usePage().props;

    console.log('auth', auth);
   return (
    <div>
        { auth.user ? (
            <p>Добро пожаловать {auth.user.name}</p>
        ) : (
            <p>Вы не вошли в систему</p>
        )}
    </div>
  )
}

export default UserLayout