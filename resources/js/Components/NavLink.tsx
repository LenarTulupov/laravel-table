import { Link, InertiaLinkProps } from '@inertiajs/react';
import styles from './NavLink.module.scss'


export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={`${active ?  styles.active : styles.unactive} ${className}`}
        >
            {children}
        </Link>
    );
}

// ---Не понимаю, в чем ошибка тут---
// import { Link, usePage } from '@inertiajs/react';
// import styles from './NavLink.module.scss';

// interface NavLinkProps {
//     href: string;
//     className?: string;
//     children: React.ReactNode;
//     active?: boolean;
// }

// export default function NavLink({ href, className = '', children, ...props }: NavLinkProps) {
//     const { url } = usePage().props;
//     const isActive = url === href;

//     return (
//         <Link
//             {...props}
//             href={href}
//             className={`${isActive ? styles.active : styles.unactive} ${className}`}
//         >
//             {children}
//         </Link>
//     );
// }

