import NavLink from "@/Components/NavLink"
import styles from "./Nav.module.scss"

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.nav__list}>
            <li className="nav__list-item">
                <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                    All Clothing
                </NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                    Collection
                </NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink to="/modiweek" className={({isActive}) => isActive ? activeLink : normalLink}>
                    Modiweek
                </NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink to="/plussize" className={({isActive}) => isActive ? activeLink : normalLink}>
                    Plus Size
                </NavLink>
            </li>
            <li className="nav__list-item">
                <NavLink to="/sustainability" className={({isActive}) => isActive ? activeLink : normalLink}>
                    Sustainability
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav