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
      className={`${styles['nav-link']} ${isActive ? styles['nav-link_active']: ''} ${className}`}
    >
      {children}
    </Link>
  )
}

export default NavLink