import { Link, usePage } from "@inertiajs/react";
import { FC, ReactNode } from "react";
import styles from './NavLink.module.scss'

interface INavLink {
  href: string
  children: ReactNode
  className?: string
}


const NavLink: FC<INavLink> = ({ href, children, className }) => {
    const { url } = usePage();
    const isActive = url === href;

  return (
    <Link 
      href={href}
<<<<<<< HEAD
      className={
        `${styles['nav-link']} 
         ${isActive ? styles['nav-link_active']: ''} 
         ${className || ''}`
      }
=======
      className={`${styles['nav-link']} ${isActive ? styles['nav-link_active']: ''} ${className}`}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
    >
      {children}
    </Link>
  )
}

export default NavLink