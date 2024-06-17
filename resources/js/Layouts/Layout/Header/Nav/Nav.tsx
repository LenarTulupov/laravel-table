import NavLink from "@/Components/NavLink"
import styles from "./Nav.module.scss"

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.nav__list}>
            <li className={styles['nav__list-item']}>
                <NavLink href="/" className={styles['nav__list-link']} active={false}>
                    All Clothing
                </NavLink>
            </li>
            <li className={styles['nav__list-item']}>
                <NavLink href="/" className={styles['nav__list-link']} active={false}>
                    Collection
                </NavLink>
            </li>
            <li className={styles['nav__list-item']}>
                <NavLink href="/modiweek" className={styles['nav__list-link']} active={false}>
                    Modiweek
                </NavLink>
            </li>
            <li className={styles['nav__list-item']}>
                <NavLink href="/plussize" className={styles['nav__list-link']} active={false}>
                    Plus Size
                </NavLink>
            </li>
            <li className={styles['nav__list-item']}>
                <NavLink href="/sustainability" className={styles['nav__list-link']} active={false}>
                    Sustainability
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav