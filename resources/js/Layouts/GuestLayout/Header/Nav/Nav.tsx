import NavLink from "@/Components/NavLink/NavLink"
import styles from "./Nav.module.scss"

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles['nav__list-item']}>
                    <NavLink href="/all" >
                        All Clothing
                    </NavLink>
                </li>
                <li className={styles['nav__list-item']}>
                    <NavLink href="/new" >
                        New In
                    </NavLink>
                </li>
                <li className={styles['nav__list-item']}>
                    <NavLink href="/trends" >
                        Trends
                    </NavLink>
                </li>
                <li className={styles['nav__list-item']}>
                    <NavLink href="/dresses" >
                        Dresses
                    </NavLink>
                </li>
                <li className={styles['nav__list-item']}>
                    <NavLink href="/summer" >
                        Summer
                    </NavLink>
                </li>
                {/* <li className={styles['nav__list-item']}>
                    <NavLink href="/sustainability" className={styles['nav__list-link']} active={false}>
                        Coats & Jackets
                    </NavLink>
                </li>
                <li className={styles['nav__list-item']}>
                    <NavLink href="/sustainability" className={styles['nav__list-link']} active={false}>
                        Swimwear
                    </NavLink>
                </li>
                <li className={styles['nav__list-item']}>
                    <NavLink href="/sustainability" className={styles['nav__list-link']} active={false}>
                        Trousers
                    </NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

export default Nav