import { Link, usePage } from "@inertiajs/react";
import { FC, ReactNode } from "react";
import styles from './NavLink.module.scss'

interface INavLink {
  href: string
  children: ReactNode
}


const NavLink: FC<INavLink> = ({ href, children }) => {
    const { url } = usePage();
    const isActive = url === href;

  return (
    <Link 
      href={href}
      className={`${styles['nav-link']} ${isActive ? styles['nav-link_active']: ''}`}
    >
      {children}
    </Link>
  )
}

export default NavLink